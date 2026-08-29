type EnvBag = Record<string, unknown>;

function fromProcess(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function fromWorker(name: string): { value?: string; error?: string } {
  try {
    const { getCloudflareContext } = require("@opennextjs/cloudflare") as {
      getCloudflareContext: () => { env?: EnvBag };
    };
    const value = getCloudflareContext().env?.[name];
    if (typeof value === "string" && value.trim()) {
      return { value: value.trim() };
    }
    return {};
  } catch (err) {
    return { error: err instanceof Error ? err.name : "throw" };
  }
}

export function workerEnv(name: string): string | undefined {
  return fromProcess(name) ?? fromWorker(name).value;
}

export function razorpayKeyId(): string | undefined {
  return (
    workerEnv("NEXT_PUBLIC_RAZORPAY_KEY_ID") ??
    workerEnv("NEXT_PUBLIC_RAZORPAY_KEY") ??
    workerEnv("RAZORPAY_KEY_ID")
  );
}

export function agentLog(
  location: string,
  message: string,
  data: Record<string, unknown>,
  hypothesisId: string,
  runId = "pre-fix",
) {
  const payload = {
    sessionId: "234191",
    runId,
    hypothesisId,
    location,
    message,
    data,
    timestamp: Date.now(),
  };
  // #region agent log
  fetch("http://127.0.0.1:7802/ingest/9ace377d-79c9-4e43-89e0-a63cfdda695d", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "234191" },
    body: JSON.stringify(payload),
  }).catch(() => {});
  try {
    const fs = require("fs") as typeof import("fs");
    const path = require("path") as typeof import("path");
    fs.appendFileSync(path.join(process.cwd(), "debug-234191.log"), `${JSON.stringify(payload)}\n`);
  } catch {
    /* ignore */
  }
  // #endregion
}

/** Presence-only probe — never returns secret values. */
export function inspectRazorpayEnv() {
  const names = ["NEXT_PUBLIC_RAZORPAY_KEY_ID", "NEXT_PUBLIC_RAZORPAY_KEY", "RAZORPAY_KEY_ID", "RAZORPAY_KEY_SECRET"] as const;
  return names.map((name) => {
    const processVal = fromProcess(name);
    const worker = fromWorker(name);
    return {
      name,
      process: Boolean(processVal),
      worker: Boolean(worker.value),
      processLen: processVal?.length ?? 0,
      workerLen: worker.value?.length ?? 0,
      workerError: worker.error ?? null,
    };
  });
}
