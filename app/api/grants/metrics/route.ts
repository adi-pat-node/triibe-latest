import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PUBLIC_METRICS_ENDPOINT = "https://www.grantauthority.org/api/public-metrics";
// The source publishes every five minutes. Allow scheduling and cache jitter,
// but fail closed if two consecutive publication windows are missed.
const MAX_SNAPSHOT_AGE_MS = 15 * 60 * 1000;

function positiveNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

export async function GET() {
  try {
    const response = await fetch(PUBLIC_METRICS_ENDPOINT, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5_000),
    });
    if (!response.ok) throw new Error("Public metrics source unavailable");

    const body = await response.json();
    const metrics = body?.metrics;
    const activeOpportunities = positiveNumber(metrics?.activeOpportunities);
    const activeFundingSources = positiveNumber(metrics?.activeFundingSources);
    const currentlyListedFunding = positiveNumber(metrics?.availableFunding);
    const updatedAt = String(metrics?.updated_at || "");
    const updatedAtMs = new Date(updatedAt).getTime();
    const snapshotId = String(metrics?.snapshotId || "");
    const methodologyVersion = String(metrics?.methodologyVersion || "");

    if (
      body?.success !== true ||
      body?.stale !== false ||
      body?.source !== "public_partner_metrics_snapshot" ||
      metrics?.partnerMetricsComplete !== true ||
      metrics?.activeGrantsMeaning !== "strict_open_opportunities" ||
      metrics?.availableFundingMeaning !== "currently_listed_funding" ||
      !activeOpportunities ||
      !activeFundingSources ||
      !currentlyListedFunding ||
      !snapshotId ||
      methodologyVersion !== "strict-open-partner-metrics/v1" ||
      !Number.isFinite(updatedAtMs) ||
      Date.now() - updatedAtMs > MAX_SNAPSHOT_AGE_MS ||
      updatedAtMs > Date.now() + 60_000
    ) {
      throw new Error("Complete current partner metrics are unavailable");
    }

    return NextResponse.json(
      {
        success: true,
        metrics: {
          activeOpportunities,
          activeFundingSources,
          currentlyListedFunding,
          updatedAt,
          snapshotId,
          methodologyVersion,
          methodologyUrl: "/grants/methodology",
        },
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=120, stale-while-revalidate=60",
        },
      },
    );
  } catch (error) {
    console.warn(
      "[triibe-grants-metrics] Aggregate metrics unavailable:",
      error instanceof Error ? error.message : error,
    );
    return NextResponse.json(
      { success: false, metrics: null, error: "Live data temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
