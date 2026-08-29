export type PaidOrderRow = {
  paidAt: string;
  ref: string;
  paymentId: string;
  razorpayOrderId: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
  pack: string;
  masala: number;
  delivery: number;
  total: number;
  zone: string;
  distanceKm: number | "";
  duration: string;
};

function sheetsUrl(): string | undefined {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL?.trim();
  return url || undefined;
}

/** Writes a paid order to Google Sheets via Apps Script. Never throws — payment must still succeed. */
export async function recordPaidOrder(row: PaidOrderRow): Promise<void> {
  const url = sheetsUrl();
  if (!url) return;

  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET?.trim() ?? "";
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...row, secret }),
      redirect: "follow",
      signal: controller.signal,
    });
  } catch {
    /* sheet outage must not block the customer */
  } finally {
    clearTimeout(timer);
  }
}

export function paidAtIst(date = new Date()): string {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}
