import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PRODUCTION_METRICS_ENDPOINT = "https://www.grantauthority.org/api/public-metrics";
// The source publishes every five minutes. Allow scheduling and cache jitter,
// but fail closed if two consecutive publication windows are missed.
const MAX_SNAPSHOT_AGE_MS = 15 * 60 * 1000;

// GrantAuthority tags what its `activeGrants` figure actually counts. On
// 2026-09-07 that tag changed from `network_grant_records` (every user-visible
// catalog record, 70,033) to `searchable_open_opportunities` (the rows a
// visitor can actually find in the search index, 59,808) — the same claim,
// measured more honestly, and the correct number for "Active grants in the
// network".
//
// Pinning to a single tag turned that upstream correction into an outage here:
// every other check still passed, this route failed closed, and the landing
// page showed dashes with "Live data temporarily unavailable" for roughly a
// day. Accept both spellings so a future refinement degrades to a stale number
// rather than to no number at all.
const ACCEPTED_ACTIVE_GRANTS_MEANINGS = new Set([
  "network_grant_records",
  "searchable_open_opportunities",
]);

// How long a previously-good snapshot may stand in when the source cannot be
// reached or refuses validation. The strip renders the snapshot's own
// `updatedAt`, so a stale figure is labelled as of when it was measured rather
// than presented as current -- which is strictly better for a reader than four
// dashes and "Live data temporarily unavailable".
//
// Nothing here is a hardcoded number: if nothing good has ever been fetched in
// this instance, the route still fails closed.
const MAX_FALLBACK_AGE_MS = 24 * 60 * 60 * 1000;

type NetworkSnapshot = {
  activeGrants: number;
  foundationGrantmakerProfiles: number;
  listedFunding: number;
  updatedAt: string;
  snapshotId: string;
  methodologyVersion: string;
};

let lastGoodSnapshot: { snapshot: NetworkSnapshot; storedAt: number } | null = null;

function resolveMetricsEndpoint() {
  const configuredUrl = process.env.GRANTAUTHORITY_PUBLIC_METRICS_URL?.trim();
  if (!configuredUrl) return PRODUCTION_METRICS_ENDPOINT;

  try {
    const url = new URL(configuredUrl);
    const isProductionHost =
      url.hostname === "grantauthority.org" ||
      url.hostname === "www.grantauthority.org";
    const isBrightsteadPreview =
      url.hostname.startsWith("grantai-") &&
      url.hostname.endsWith("-brightstead-technologies.vercel.app");
    const isLocalDevelopment =
      process.env.NODE_ENV !== "production" &&
      url.protocol === "http:" &&
      (url.hostname === "127.0.0.1" || url.hostname === "localhost");

    if (
      url.pathname === "/api/public-metrics" &&
      !url.search &&
      !url.hash &&
      ((url.protocol === "https:" && (isProductionHost || isBrightsteadPreview)) || isLocalDevelopment)
    ) {
      return url.toString();
    }
  } catch {
    // Invalid or unapproved sources fail closed to the production endpoint.
  }

  return PRODUCTION_METRICS_ENDPOINT;
}

const PUBLIC_METRICS_ENDPOINT = resolveMetricsEndpoint();

function positiveNumber(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function positiveSafeInteger(value: unknown) {
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null;
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
    const activeGrants = positiveSafeInteger(metrics?.activeGrants);
    const foundationGrantmakerProfiles = positiveSafeInteger(metrics?.foundationGrantmakerProfiles);
    const listedFunding = positiveNumber(metrics?.listedFunding);
    const updatedAt = String(metrics?.updated_at || "");
    const updatedAtMs = new Date(updatedAt).getTime();
    const snapshotId = String(metrics?.snapshotId || "");
    const methodologyVersion = String(metrics?.methodologyVersion || "");

    if (
      body?.success !== true ||
      body?.stale !== false ||
      body?.source !== "public_partner_network_aggregate" ||
      metrics?.partnerMetricsComplete !== true ||
      !ACCEPTED_ACTIVE_GRANTS_MEANINGS.has(String(metrics?.activeGrantsMeaning)) ||
      metrics?.foundationProfilesMeaning !== "foundation_and_grantmaker_profiles" ||
      metrics?.listedFundingMeaning !== "listed_awards_across_network_records" ||
      !activeGrants ||
      !foundationGrantmakerProfiles ||
      !listedFunding ||
      !snapshotId ||
      methodologyVersion !== "network-partner-metrics/v2" ||
      !Number.isFinite(updatedAtMs) ||
      Date.now() - updatedAtMs > MAX_SNAPSHOT_AGE_MS ||
      updatedAtMs > Date.now() + 60_000
    ) {
      throw new Error("Complete current partner metrics are unavailable");
    }

    const snapshot: NetworkSnapshot = {
      activeGrants,
      foundationGrantmakerProfiles,
      listedFunding,
      updatedAt,
      snapshotId,
      methodologyVersion,
    };
    lastGoodSnapshot = { snapshot, storedAt: Date.now() };

    return NextResponse.json(
      { success: true, stale: false, metrics: snapshot },
      {
        headers: {
          // stale-if-error keeps the edge serving the last good response when a
          // later revalidation fails, which covers the cold starts that in-process
          // memory cannot.
          "Cache-Control":
            "public, s-maxage=120, stale-while-revalidate=60, stale-if-error=86400",
        },
      },
    );
  } catch (error) {
    console.warn(
      "[triibe-grants-metrics] Aggregate metrics unavailable:",
      error instanceof Error ? error.message : error,
    );

    if (lastGoodSnapshot && Date.now() - lastGoodSnapshot.storedAt <= MAX_FALLBACK_AGE_MS) {
      console.warn(
        "[triibe-grants-metrics] Serving last good snapshot from",
        lastGoodSnapshot.snapshot.updatedAt,
      );
      return NextResponse.json(
        { success: true, stale: true, metrics: lastGoodSnapshot.snapshot },
        {
          headers: {
            // Short, so the next request retries the source rather than pinning
            // a stale figure at the edge.
            "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
          },
        },
      );
    }

    return NextResponse.json(
      { success: false, metrics: null, error: "Live data temporarily unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
