type EnvBag = Record<string, unknown>;

function fromProcess(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

function fromWorker(name: string): string | undefined {
  try {
    // Lazy import so `next dev` still runs without a Worker.
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
