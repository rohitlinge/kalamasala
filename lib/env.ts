type EnvBag = Record<string, unknown>;

function fromProcess(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function fromWorker(name: string): string | undefined {
  try {
    const { getCloudflareContext } = require("@opennextjs/cloudflare") as {
      getCloudflareContext: () => { env?: EnvBag };
    };
    const value = getCloudflareContext().env?.[name];
    return typeof value === "string" && value.trim() ? value.trim() : undefined;
  } catch {
    return undefined;
  }
}

export function workerEnv(name: string): string | undefined {
  return fromProcess(name) ?? fromWorker(name);
}

export function razorpayKeyId(): string | undefined {
  return (
    workerEnv("NEXT_PUBLIC_RAZORPAY_KEY_ID") ??
    workerEnv("NEXT_PUBLIC_RAZORPAY_KEY") ??
    workerEnv("RAZORPAY_KEY_ID")
  );
}
