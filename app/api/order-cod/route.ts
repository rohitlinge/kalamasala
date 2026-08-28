import { NextResponse } from "next/server";
import { validateOrder, type OrderInput } from "@/lib/nagpur";
import { getPack, orderRef } from "@/lib/product";

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
  return NextResponse.json({
    ref: orderRef(),
    pack: pack.weight,
    amount: pack.price,
    method: "cod",
  });
}
