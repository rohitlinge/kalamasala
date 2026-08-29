import { NextResponse } from "next/server";
import { quoteDelivery } from "@/lib/delivery";
import { recordPaidOrder, paidAtIst } from "@/lib/order-sheet";
import { validateOrder, withLockedRegion, type OrderInput } from "@/lib/nagpur";
import { getPack, isSamplePack, orderRef } from "@/lib/product";
import { verifySignature } from "@/lib/razorpay";

export async function POST(request: Request) {
  let body: OrderInput & {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
    ref?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const ok = verifySignature(
    body.razorpay_order_id ?? "",
    body.razorpay_payment_id ?? "",
    body.razorpay_signature ?? "",
  );
  if (!ok) {
    return NextResponse.json({ error: "Payment signature mismatch." }, { status: 400 });
  }

  const order = withLockedRegion(body);
  const error = validateOrder(order);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const pack = getPack(order.packId);
  const quote = await quoteDelivery({
    pincode: order.pincode,
    address: order.address,
  });
  const delivery = isSamplePack(order.packId) ? 0 : quote.ok && quote.fee != null ? quote.fee : 0;
  const total = pack.price + delivery;
  const ref = /^LS-\d{4}$/.test(body.ref ?? "") ? body.ref! : orderRef();

  await recordPaidOrder({
    paidAt: paidAtIst(),
    ref,
    paymentId: body.razorpay_payment_id ?? "",
    razorpayOrderId: body.razorpay_order_id ?? "",
    name: order.name.trim(),
    phone: order.phone.replace(/\s/g, ""),
    email: order.email?.trim() ?? "",
    address: order.address.trim(),
    pincode: order.pincode.trim(),
    city: order.city,
    state: order.state,
    pack: pack.weight,
    masala: pack.price,
    delivery,
    total,
    zone: quote.zoneLabel ?? "",
    distanceKm: quote.distanceKm ?? "",
    duration: quote.durationText ?? "",
  });

  return NextResponse.json({
    ref,
    paymentId: body.razorpay_payment_id,
    pack: pack.weight,
    total,
  });
}
