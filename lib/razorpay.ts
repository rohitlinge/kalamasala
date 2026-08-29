import Razorpay from "razorpay";
import crypto from "crypto";
import { razorpayKeyId, workerEnv } from "./env";

export function hasRazorpayKeys() {
  return Boolean(workerEnv("RAZORPAY_KEY_SECRET") && razorpayKeyId());
}

export function getRazorpay() {
  const keyId = razorpayKeyId();
  const secret = workerEnv("RAZORPAY_KEY_SECRET");
  if (!keyId || !secret) {
    return null;
  }
  return new Razorpay({
    key_id: keyId,
    key_secret: secret,
  });
}

export function verifySignature(orderId: string, paymentId: string, signature: string) {
  const secret = workerEnv("RAZORPAY_KEY_SECRET");
  if (!secret) return false;
  const body = `${orderId}|${paymentId}`;
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  return expected === signature;
}
