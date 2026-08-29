import { NextResponse } from "next/server";
import { validateOrder, withLockedRegion, type OrderInput } from "@/lib/nagpur";
import { getPack, orderRef, rupeesToPaise } from "@/lib/product";
import { getRazorpay } from "@/lib/razorpay";

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

  const pack = getPack(checkout.packId);
  const amount = rupeesToPaise(pack.price);
  const ref = orderRef();
  const razorpay = getRazorpay();

  if (!razorpay) {
    return NextResponse.json({
      mode: "test",
      ref,
      amount,
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
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Payment could not start. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    mode: "live",
    orderId: razorpayOrder.id,
    amount: razorpayOrder.amount,
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    ref,
  });
}
