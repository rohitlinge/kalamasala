import { NextResponse } from "next/server";
import { validateOrder, withLockedRegion, type OrderInput } from "@/lib/nagpur";
import { getPack, orderRef } from "@/lib/product";
import { verifySignature } from "@/lib/razorpay";

export async function POST(request: Request) {
  let body: OrderInput & {
    razorpay_order_id?: string;
    razorpay_payment_id?: string;
    razorpay_signature?: string;
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
  return NextResponse.json({
    ref: orderRef(),
    paymentId: body.razorpay_payment_id,
    pack: pack.weight,
  });
}
