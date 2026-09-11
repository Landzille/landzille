export function trackResourceEvent(name: string, params: Record<string, unknown>) {
  window.gtag?.("event", name, {
    ...params,
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
  });
}
