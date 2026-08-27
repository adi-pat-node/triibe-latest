"use client";

import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";

type Metrics = {
  activeOpportunities: number;
  activeFundingSources: number;
  currentlyListedFunding: number;
  updatedAt: string;
  snapshotId: string;
  methodologyVersion: string;
  methodologyUrl: string;
};

type MetricsState =
  | { status: "loading"; metrics: null }
  | { status: "ready"; metrics: Metrics }
  | { status: "unavailable"; metrics: null };

const REFRESH_INTERVAL_MS = 120_000;
const MAX_CONSECUTIVE_FAILURES = 3;

function formatFunding(amount: number) {
  if (amount >= 1_000_000_000) return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

function isMetrics(value: unknown): value is Metrics {
  const candidate = value as Partial<Metrics> | null;
  return Boolean(
    candidate &&
      Number.isSafeInteger(candidate.activeOpportunities) &&
      Number(candidate.activeOpportunities) > 0 &&
      Number.isSafeInteger(candidate.activeFundingSources) &&
      Number(candidate.activeFundingSources) > 0 &&
      Number.isFinite(candidate.currentlyListedFunding) &&
      Number(candidate.currentlyListedFunding) > 0 &&
      candidate.updatedAt &&
      candidate.snapshotId &&
      candidate.methodologyVersion === "strict-open-partner-metrics/v1" &&
      candidate.methodologyUrl === "/grants/methodology",
  );
}

export default function LiveGrantMetrics() {
  const [state, setState] = useState<MetricsState>({ status: "loading", metrics: null });

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let failures = 0;

    async function refresh() {
      try {
        const response = await fetch("/api/grants/metrics", { cache: "no-store" });
        const body = await response.json();
        if (!response.ok || body?.success !== true || !isMetrics(body.metrics)) {
          throw new Error("Live metrics unavailable");
        }
        if (cancelled) return;
        failures = 0;
        setState({ status: "ready", metrics: body.metrics });
        timer = setTimeout(refresh, REFRESH_INTERVAL_MS);
      } catch {
        if (cancelled) return;
        failures += 1;
        setState({ status: "unavailable", metrics: null });
        if (failures < MAX_CONSECUTIVE_FAILURES) {
          timer = setTimeout(refresh, Math.min(30_000 * 2 ** (failures - 1), REFRESH_INTERVAL_MS));
        }
      }
    }

    void refresh();
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const cards = [
    {
      label: "Active grant opportunities",
      value: state.metrics?.activeOpportunities.toLocaleString("en-US") ?? "—",
      live: true,
    },
    {
      label: "Currently listed funds",
      value: state.metrics ? formatFunding(state.metrics.currentlyListedFunding) : "—",
      live: true,
    },
    {
      label: "Countries covered",
      value: "208",
      live: false,
    },
    {
      label: "To complete an application draft",
      value: "10 min",
      live: false,
    },
  ];

  return (
    <section className="border-b border-[#002c19]/10 bg-[#f4f6f5] px-4 py-9" aria-label="TRIIBE Grants network metrics">
      <div className="mx-auto max-w-[1200px]" aria-live="polite">
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ label, value, live }, index) => (
            <div
              className={`${index > 0 ? "sm:border-l sm:border-[#002c19]/10 sm:pl-8" : ""} ${index === 2 ? "sm:border-l-0 sm:pl-0 lg:border-l lg:pl-8" : ""}`}
              key={label}
            >
              <p className="text-3xl font-bold tracking-[-0.03em] text-[#002c19] sm:text-4xl">
                {live && state.status === "loading" ? <span className="inline-block h-10 w-28 animate-pulse rounded bg-[#dfe9e3]" aria-label="Loading" /> : value}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#496157]">
                {live && state.status === "ready" && <span className="h-2 w-2 rounded-full bg-[#2f7d52]" aria-label="Live" />}
                {label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-col items-start justify-between gap-2 border-t border-[#002c19]/10 pt-4 text-xs leading-5 text-[#667a70] sm:flex-row sm:items-center">
          {state.status === "ready" ? (
            <p className="inline-flex items-center gap-2">
              <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
              TRIIBE Grants network · updated {new Date(state.metrics.updatedAt).toLocaleString(undefined, {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          ) : state.status === "unavailable" ? (
            <p>Live data temporarily unavailable. No estimates are shown.</p>
          ) : (
            <p>Loading the latest source-backed snapshot…</p>
          )}
          <a
            href="/grants/methodology"
            className="font-semibold text-[#234638] underline decoration-[#234638]/30 underline-offset-4 hover:decoration-[#234638]"
          >
            Read the methodology
          </a>
        </div>
      </div>
    </section>
  );
}
