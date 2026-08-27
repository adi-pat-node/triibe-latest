"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Globe2, MousePointerClick, ShieldCheck } from "lucide-react";
import GlobeImport from "react-globe.gl";

const Globe = GlobeImport as any;

type RegionKey =
  | "africa"
  | "north-america"
  | "latin-america-caribbean"
  | "europe"
  | "middle-east"
  | "asia"
  | "oceania";

type Region = {
  key: RegionKey;
  label: string;
  shortLabel: string;
  lat: number;
  lng: number;
};

const REGIONS: Region[] = [
  { key: "africa", label: "Africa", shortLabel: "Africa", lat: 4, lng: 21 },
  { key: "north-america", label: "North America", shortLabel: "North America", lat: 45, lng: -103 },
  { key: "latin-america-caribbean", label: "Latin America and the Caribbean", shortLabel: "Latin America + Caribbean", lat: -13, lng: -67 },
  { key: "europe", label: "Europe", shortLabel: "Europe", lat: 51, lng: 15 },
  { key: "middle-east", label: "Middle East", shortLabel: "Middle East", lat: 27, lng: 44 },
  { key: "asia", label: "Asia", shortLabel: "Asia", lat: 35, lng: 91 },
  { key: "oceania", label: "Oceania", shortLabel: "Oceania", lat: -25, lng: 135 },
];

function referralHref(baseUrl: string, region: RegionKey) {
  try {
    const url = new URL(baseUrl);
    url.searchParams.set("region", region);
    return url.toString();
  } catch {
    return baseUrl;
  }
}

export default function RegionalGrantsGlobe({ referralUrl }: { referralUrl: string }) {
  const globeRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const idleTimerRef = useRef<number | null>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [mountedGlobe, setMountedGlobe] = useState(false);
  const [selectedKey, setSelectedKey] = useState<RegionKey | null>(null);
  const [dimensions, setDimensions] = useState({ width: 650, height: 650 });
  const [reduceMotion, setReduceMotion] = useState(false);
  const [coarsePointer, setCoarsePointer] = useState(false);

  const selectedRegion = useMemo(
    () => REGIONS.find((region) => region.key === selectedKey) || null,
    [selectedKey],
  );

  useEffect(() => {
    const node = viewportRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setMountedGlobe(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setMountedGlobe(true);
        observer.disconnect();
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mountedGlobe) return;
    let cancelled = false;
    fetch("/countries.geojson", { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error("Map unavailable");
        return response.json();
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data?.features)) setCountries(data.features);
      })
      .catch(() => {
        // The base globe and regional controls remain usable without borders.
      });
    return () => {
      cancelled = true;
    };
  }, [mountedGlobe]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(pointer: coarse)");
    const syncPreferences = () => {
      setReduceMotion(motion.matches);
      setCoarsePointer(pointer.matches);
    };
    syncPreferences();
    motion.addEventListener?.("change", syncPreferences);
    pointer.addEventListener?.("change", syncPreferences);
    return () => {
      motion.removeEventListener?.("change", syncPreferences);
      pointer.removeEventListener?.("change", syncPreferences);
    };
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;
    const update = () => {
      const width = Math.max(280, Math.min(node.clientWidth, 680));
      setDimensions({ width, height: Math.max(360, Math.min(width, 650)) });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mountedGlobe || !globeRef.current) return;
    let frame = 0;
    const configure = () => {
      const controls = globeRef.current?.controls?.();
      if (!controls) {
        frame = window.requestAnimationFrame(configure);
        return;
      }
      controls.autoRotate = !reduceMotion;
      controls.autoRotateSpeed = 0.45;
      controls.enableZoom = false;
      controls.enabled = !coarsePointer;
      globeRef.current?.pointOfView?.({ lat: 15, lng: 10, altitude: 2.15 }, 0);
    };
    configure();
    return () => window.cancelAnimationFrame(frame);
  }, [coarsePointer, mountedGlobe, reduceMotion]);

  useEffect(() => () => {
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
  }, []);

  const selectRegion = useCallback((region: Region) => {
    setSelectedKey(region.key);
    const controls = globeRef.current?.controls?.();
    if (controls) controls.autoRotate = false;
    globeRef.current?.pointOfView?.(
      { lat: region.lat, lng: region.lng, altitude: 1.72 },
      reduceMotion ? 0 : 750,
    );
    if (idleTimerRef.current) window.clearTimeout(idleTimerRef.current);
    if (!reduceMotion) {
      idleTimerRef.current = window.setTimeout(() => {
        const currentControls = globeRef.current?.controls?.();
        if (currentControls && !coarsePointer) currentControls.autoRotate = true;
      }, 5500);
    }
  }, [coarsePointer, reduceMotion]);

  const makeMarker = useCallback((region: Region) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Explore grants in ${region.label}`);
    button.title = `Explore ${region.label}`;
    button.style.cssText = `
      width: 38px;
      height: 38px;
      border: 1px solid rgba(255,255,255,.9);
      border-radius: 999px;
      background: #d6a73e;
      box-shadow: 0 0 0 6px rgba(214,167,62,.16), 0 0 24px rgba(214,167,62,.55);
      cursor: pointer;
      pointer-events: auto;
      position: relative;
      transition: transform 180ms ease, box-shadow 180ms ease;
    `;
    const dot = document.createElement("span");
    dot.setAttribute("aria-hidden", "true");
    dot.style.cssText = `
      position: absolute;
      inset: 11px;
      border-radius: 999px;
      background: #002c19;
    `;
    button.appendChild(dot);
    const emphasize = () => {
      button.style.transform = "scale(1.14)";
      button.style.boxShadow = "0 0 0 8px rgba(214,167,62,.2), 0 0 30px rgba(214,167,62,.72)";
    };
    const relax = () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "0 0 0 6px rgba(214,167,62,.16), 0 0 24px rgba(214,167,62,.55)";
    };
    button.addEventListener("mouseenter", emphasize);
    button.addEventListener("mouseleave", relax);
    button.addEventListener("focus", emphasize);
    button.addEventListener("blur", relax);
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      selectRegion(region);
    });
    return button;
  }, [selectRegion]);

  return (
    <section className="overflow-hidden bg-[#002c19] px-4 py-20 text-white md:py-28" aria-labelledby="regional-grants-heading">
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-white/75">
            <Globe2 className="h-4 w-4" aria-hidden="true" /> Global opportunity
          </div>
          <h2 id="regional-grants-heading" className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Find funding beyond borders.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            Choose a region and carry that intent into a free, live search. Your results appear only after you create or sign in to your secure TRIIBE Grants account.
          </p>

          <div className="mt-8 flex flex-wrap gap-2" aria-label="Funding regions">
            {REGIONS.map((region) => {
              const active = region.key === selectedKey;
              return (
                <button
                  key={region.key}
                  type="button"
                  onClick={() => selectRegion(region)}
                  aria-pressed={active}
                  className={`min-h-11 rounded-full border px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? "border-[#d6a73e] bg-[#d6a73e] text-[#002c19]" : "border-white/25 bg-white/[0.04] text-white hover:border-white/55 hover:bg-white/[0.09]"}`}
                >
                  {region.shortLabel}
                </button>
              );
            })}
          </div>

          <div className="mt-8 min-h-[176px]" aria-live="polite">
            {selectedRegion ? (
              <div className="rounded-2xl border border-[#d6a73e]/55 bg-white/[0.08] p-5 shadow-xl shadow-black/10">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#e7ca84]">Explore {selectedRegion.label}</p>
                <h3 className="mt-2 text-2xl font-bold">See current opportunities that may fit.</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">We will open Find with your regional search ready. Free to search; no card required.</p>
                <a
                  href={referralHref(referralUrl, selectedRegion.key)}
                  className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-[#002c19] transition hover:bg-[#edf4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Find grants in {selectedRegion.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ) : (
              <div className="flex min-h-[176px] items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] p-5 text-white/70">
                <MousePointerClick className="h-7 w-7 shrink-0 text-[#d6a73e]" aria-hidden="true" />
                <p className="text-sm leading-6">Select a marker on the globe or choose a region above to begin.</p>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-start gap-3 text-xs leading-5 text-white/55">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <p>Regional markers are search pathways, not grant counts. No grant records, funder identities, or regional totals are published through this map.</p>
          </div>
        </div>

        <div ref={viewportRef} className="relative mx-auto w-full max-w-[680px]" style={{ minHeight: 420 }}>
          <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[#7fbf9b]/10 blur-3xl" />
          {mountedGlobe ? (
            <div className="relative mx-auto overflow-hidden" style={{ width: dimensions.width, maxWidth: "100%", height: dimensions.height, touchAction: "pan-y" }}>
              <Globe
                ref={globeRef}
                width={dimensions.width}
                height={dimensions.height}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                atmosphereColor="#7fbf9b"
                atmosphereAltitude={0.18}
                globeImageUrl={null as any}
                showGraticules
                polygonsData={countries}
                polygonCapColor={() => "#0d4729"}
                polygonSideColor={() => "#062d1a"}
                polygonStrokeColor={() => "rgba(214,167,62,.22)"}
                polygonAltitude={0.006}
                polygonLabel={() => ""}
                htmlElementsData={REGIONS}
                htmlLat="lat"
                htmlLng="lng"
                htmlAltitude={0.018}
                htmlElement={makeMarker as any}
                ringsData={reduceMotion ? [] : REGIONS}
                ringLat="lat"
                ringLng="lng"
                ringColor={() => "rgba(214,167,62,.5)"}
                ringMaxRadius={2.6}
                ringPropagationSpeed={1.25}
                ringRepeatPeriod={2100}
              />
            </div>
          ) : (
            <div className="mx-auto aspect-square w-full max-w-[650px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(127,191,155,0.24),rgba(255,255,255,0.05)_44%,rgba(0,0,0,0)_70%)]" />
          )}
          <p className="relative mt-1 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            {coarsePointer ? "Choose a region from the buttons" : "Drag to explore · Select a gold marker"}
          </p>
        </div>
      </div>
    </section>
  );
}
