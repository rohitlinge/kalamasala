import { NextResponse } from "next/server";
import { validateOrder, type OrderInput } from "@/lib/nagpur";
import { getPack, orderRef, rupeesToPaise } from "@/lib/product";
import { getRazorpay } from "@/lib/razorpay";

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const error = validateOrder(body as OrderInput);
  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  const pack = getPack(body.packId);
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

  let order;
  try {
    order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: ref,
      notes: {
        name: body.name,
        phone: body.phone,
        pincode: body.pincode,
        pack: pack.weight,
        city: "Nagpur",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Payment gateway could not start. Please use Cash on Delivery." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    mode: "live",
    orderId: order.id,
    amount: order.amount,
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    ref,
  });
}
