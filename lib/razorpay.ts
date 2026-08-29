import Razorpay from "razorpay";
import crypto from "crypto";
import { agentLog, inspectRazorpayEnv, razorpayKeyId, workerEnv } from "./env";

export function hasRazorpayKeys() {
  return Boolean(workerEnv("RAZORPAY_KEY_SECRET") && razorpayKeyId());
}

export function getRazorpay() {
  const keyId = razorpayKeyId();
  const secret = workerEnv("RAZORPAY_KEY_SECRET");
  const probe = inspectRazorpayEnv();
  agentLog(
    "lib/razorpay.ts:getRazorpay",
    "razorpay key presence",
    {
      hasKeyId: Boolean(keyId),
      hasSecret: Boolean(secret),
      keyIdLen: keyId?.length ?? 0,
      secretLen: secret?.length ?? 0,
      probe,
    },
    "A-B-C",
  );
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
