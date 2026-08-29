import { NextResponse } from "next/server";
import { quoteDelivery } from "@/lib/delivery";
import { validateOrder, withLockedRegion, type OrderInput } from "@/lib/nagpur";
import { getPack, orderRef, rupeesToPaise } from "@/lib/product";
import { getRazorpay } from "@/lib/razorpay";
import { agentLog, razorpayKeyId } from "@/lib/env";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const checkout = withLockedRegion(body as OrderInput);
  const error = validateOrder(checkout);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const quote = await quoteDelivery({
    pincode: checkout.pincode,
    address: checkout.address,
  });
  if (!quote.ok || quote.fee == null) {
    return NextResponse.json({ error: quote.text }, { status: 400 });
  }

  const pack = getPack(checkout.packId);
  const totalRupees = pack.price + quote.fee;
  const amount = rupeesToPaise(totalRupees);
  const ref = orderRef();
  const razorpay = getRazorpay();

  if (!razorpay) {
    agentLog(
      "app/api/checkout/route.ts:preview",
      "checkout using preview mode",
      { mode: "test", hasReturnedKey: Boolean(razorpayKeyId()) },
      "A",
    );
    return NextResponse.json({
      mode: "test",
      ref,
      amount,
      total: totalRupees,
      masala: pack.price,
      delivery: quote.fee,
      pack: pack.weight,
    });
  }

  let razorpayOrder;
  try {
    razorpayOrder = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: ref,
      notes: {
        name: checkout.name,
        phone: checkout.phone,
        pincode: checkout.pincode,
        pack: pack.weight,
        city: "Nagpur",
        delivery: String(quote.fee),
        zone: quote.zoneId ?? "",
        distanceKm: quote.distanceKm != null ? String(quote.distanceKm) : "",
      },
    });
  } catch {
    agentLog("app/api/checkout/route.ts:orders.create", "razorpay orders.create threw", { failed: true }, "D");
    return NextResponse.json(
      { error: "Payment could not start. Please try again." },
      { status: 502 },
    );
  }

  agentLog(
    "app/api/checkout/route.ts:live",
    "checkout live razorpay order created",
    { mode: "live", hasOrderId: Boolean(razorpayOrder.id) },
    "E",
  );

  return NextResponse.json({
    mode: "live",
    orderId: razorpayOrder.id,
    amount: razorpayOrder.amount,
    total: totalRupees,
    masala: pack.price,
    delivery: quote.fee,
    key: razorpayKeyId(),
    ref,
  });
}
