import { NextResponse } from "next/server";
import { quoteDelivery } from "@/lib/delivery";

export async function POST(request: Request) {
  let body: { pincode?: string; address?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const quote = await quoteDelivery({
    pincode: body.pincode ?? "",
    address: body.address,
  });
  return NextResponse.json(quote);
}
