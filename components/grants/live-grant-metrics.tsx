"use client";

import { useEffect, useState } from "react";
import { BadgeDollarSign, Building2, Database, RefreshCw } from "lucide-react";

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
      candidate.methodologyUrl === "https://www.grantauthority.org/data-methodology",
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
      icon: Database,
      value: state.metrics?.activeOpportunities.toLocaleString("en-US") ?? "—",
    },
    {
      label: "Active funding sources",
      icon: Building2,
      value: state.metrics ? state.metrics.activeFundingSources.toLocaleString("en-US") : "—",
    },
    {
      label: "Currently listed funding",
      icon: BadgeDollarSign,
      value: state.metrics ? formatFunding(state.metrics.currentlyListedFunding) : "—",
    },
  ];

  return (
    <div aria-live="polite">
      <div className="grid overflow-hidden rounded-2xl border border-[#002c19]/15 bg-white shadow-sm md:grid-cols-3">
        {cards.map(({ icon: Icon, label, value }, index) => (
          <div
            className={`p-6 sm:p-8 ${index > 0 ? "border-t border-[#002c19]/10 md:border-l md:border-t-0" : ""}`}
            key={label}
          >
            <Icon className="h-5 w-5 text-[#426354]" aria-hidden="true" />
            <p className="mt-5 text-3xl font-bold tracking-[-0.03em] text-[#002c19] sm:text-4xl">
              {state.status === "loading" ? <span className="inline-block h-10 w-28 animate-pulse rounded bg-[#dfe9e3]" aria-label="Loading" /> : value}
            </p>
            <p className="mt-2 text-sm font-semibold text-[#496157]">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-col items-start justify-between gap-2 text-xs leading-5 text-[#667a70] sm:flex-row sm:items-center">
        {state.status === "ready" ? (
          <p className="inline-flex items-center gap-2">
            <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
            Live from GrantAuthority · updated {new Date(state.metrics.updatedAt).toLocaleString(undefined, {
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
          href="https://www.grantauthority.org/data-methodology"
          className="font-semibold text-[#234638] underline decoration-[#234638]/30 underline-offset-4 hover:decoration-[#234638]"
        >
          Read the methodology
        </a>
      </div>
    </div>
  );
}
