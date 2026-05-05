"use client";

import { useEffect, useRef, useState } from "react";
import GlobeImport from "react-globe.gl";
const Globe = GlobeImport as any;

// ── Colors ────────────────────────────────────────────────────────────────────
const BG = "#000d07";
const CARD_DARK = "#0a1f12";
const GREEN_GLOW = "#00ff88";
const WHITE = "#ffffff";
const TEXT_GRAY = "#9ab0a0";
const TEXT_DIM = "#6a8a78";

// ── Branch Data ───────────────────────────────────────────────────────────────
type Branch = {
  id: string;
  label: string;
  flag: string;
  lat: number;
  lng: number;
  city: string;
  description: string;
  link: string;
  hasLink: boolean;
};

const BRANCHES: Branch[] = [
  {
    id: "newyork",
    label: "New York, USA",
    flag: "🇺🇸",
    lat: 40.7128,
    lng: -74.006,
    city: "New York, USA",
    description:
      "Helping next-gen nonprofit founders continue their work in New York.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "dc",
    label: "Washington DC, USA",
    flag: "🇺🇸",
    lat: 38.9072,
    lng: -77.0369,
    city: "Washington DC, USA",
    description:
      "Helping next-gen nonprofit founders continue their work in DC.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "toronto",
    label: "Toronto, Canada",
    flag: "🇨🇦",
    lat: 43.6532,
    lng: -79.3832,
    city: "Toronto, Canada",
    description:
      "Helping next-gen nonprofit founders continue their work in Canada.",
    link: "/canada",
    hasLink: true,
  },
  {
    id: "jamaica",
    label: "Jamaica",
    flag: "🇯🇲",
    lat: 18.1096,
    lng: -77.2975,
    city: "Jamaica",
    description:
      "Helping next-gen nonprofit founders continue their work in Jamaica.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "london",
    label: "London, UK",
    flag: "🇬🇧",
    lat: 51.5074,
    lng: -0.1278,
    city: "London, UK",
    description:
      "Helping next-gen nonprofit founders continue their work in the UK.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "sierraleone",
    label: "Sierra Leone",
    flag: "🇸🇱",
    lat: 8.4606,
    lng: -11.7799,
    city: "Sierra Leone",
    description:
      "Helping next-gen nonprofit founders continue their work in Sierra Leone.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "ranchi",
    label: "Ranchi, India",
    flag: "🇮🇳",
    lat: 23.3441,
    lng: 85.3096,
    city: "Ranchi, India",
    description:
      "Helping next-gen nonprofit founders continue their work in Ranchi.",
    link: "/about",
    hasLink: false,
  },
  {
    id: "singapore",
    label: "Singapore",
    flag: "🇸🇬",
    lat: 1.35,
    lng: 103.82,
    city: "Singapore",
    description:
      "Helping next-gen nonprofit founders continue their work in Singapore.",
    link: "/about",
    hasLink: false,
  },
];

const RING_DATA = BRANCHES.map(({ lat, lng }) => ({ lat, lng }));

const ARCS = [

  { startLat: 43.6532, startLng: -79.3832, endLat: 41.5,    endLng: -73.5 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 37.5,    endLng: -78.5 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 18.1096, endLng: -77.2975 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 51.5074, endLng: -0.1278 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 8.4606,  endLng: -11.7799 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 23.3441, endLng: 85.3096 },
  { startLat: 43.6532, startLng: -79.3832, endLat: 1.35,    endLng: 103.82 },
  { startLat: 51.5074, startLng: -0.1278, endLat: 8.4606,  endLng: -11.7799 },
  { startLat: 23.3441, startLng: 85.3096, endLat: 1.35,    endLng: 103.82 },
];

export default function TriibeGlobe() {
  const globeEl = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);

  useEffect(() => {
    fetch("/countries.geojson")
      .then((r) => {
        if (!r.ok) throw new Error("Network error");
        return r.json();
      })
      .then((data) => {
        setCountries(data.features);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load globe data:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!globeEl.current) return;

    try {
      globeEl.current.scene().traverse((obj: any) => {
        if (obj.isMesh && obj.geometry?.type === "SphereGeometry") {
          obj.material.color.setHex(0x051a0d);
          obj.material.needsUpdate = true;
        }
      });
    } catch (_) {}

    const controls = globeEl.current.controls();
    if (!controls) return;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = true;

    let isZooming = false;

    const onWheel = () => {
      isZooming = true;
    };
    const onStart = () => {
      if (!isZooming) controls.autoRotate = false;
    };
    const onEnd = () => {
      isZooming = false;
    };

    globeEl.current.renderer().domElement.addEventListener("wheel", onWheel);
    controls.addEventListener("start", onStart);
    controls.addEventListener("end", onEnd);
    return () => {
      globeEl.current
        ?.renderer()
        .domElement.removeEventListener("wheel", onWheel);
      controls.removeEventListener("start", onStart);
      controls.removeEventListener("end", onEnd);
    };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const onBranchClick = (e: any) => setActiveBranch(e.detail);
    wrapper.addEventListener("branch-click", onBranchClick);
    return () => wrapper.removeEventListener("branch-click", onBranchClick);
  }, []);

  const handleCountryClick = (branch: Branch) => {
    setActiveBranch(branch);
    const controls = globeEl.current?.controls();
    if (controls) controls.autoRotate = false;

    globeEl.current?.pointOfView(
      { lat: branch.lat, lng: branch.lng, altitude: 2 },
      1000,
    );

    setTimeout(() => {
      if (globeEl.current?.controls()) {
        globeEl.current.controls().autoRotate = true;
      }
    }, 3000);
  };

  const makeMarker = (d: Branch) => {
    const el = document.createElement("div");
    el.style.cssText = `
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #002C19;
      border: 2px solid #00ff88;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 0 14px #00ff8855;
      overflow: hidden;
      padding: 6px;
      pointer-events: auto;
    `;
    const img = document.createElement("img");
    img.src = "/triibe-marker.png";
    img.style.cssText = `
      width: 28px;
      height: 28px;
      object-fit: contain;
      filter: brightness(0) invert(1);
    `;
    el.appendChild(img);
    el.addEventListener("click", (ev) => {
      ev.stopPropagation();
      el.dispatchEvent(
        new CustomEvent("branch-click", { bubbles: true, detail: d }),
      );
    });
    return el;
  };

  return (
    <section
      style={{
        background: "#ffffff",
        fontFamily: "'Avenir Next', 'Avenir', -apple-system, sans-serif",
        width: "100%",
        padding: "64px 0 48px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 28 }}>
        <h2
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#111111",
            margin: 0,
            letterSpacing: "-0.3px",
          }}
        >
          Global Network
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#555555",
            marginTop: 10,
            marginBottom: 0,
          }}
        >
          Click on the map to learn more
        </p>
      </div>

      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          background: "#f7f8f6",
          borderRadius: 16,
          border: "1px solid #e0e8e4",
          boxShadow: "0 2px 20px rgba(0,44,25,0.07)",
          padding: "28px 20px 24px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            ref={wrapperRef}
            style={{ position: "relative", width: 900, height: 680 }}
          >
            {loading && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                  background: "#f7f8f6",
                  borderRadius: 10,
                }}
              >
                <style>{`@keyframes triibe-spin { to { transform: rotate(360deg); } }`}</style>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: "3px solid #1a3d24",
                    borderTop: `3px solid ${GREEN_GLOW}`,
                    borderRadius: "50%",
                    animation: "triibe-spin 0.8s linear infinite",
                  }}
                />
              </div>
            )}

            <Globe
              ref={globeEl}
              width={900}
              height={680}
              backgroundColor="rgba(0,0,0,0)"
              showAtmosphere={true}
              atmosphereColor={GREEN_GLOW}
              atmosphereAltitude={0.15}
              globeImageUrl={null as any}
              showGraticules={true}
              polygonsData={countries}
              polygonCapColor={() => "#0a3d20"}
              polygonSideColor={() => "#051a0d"}
              polygonStrokeColor={() => "#00ff8822"}
              polygonAltitude={0.005}
              polygonLabel={() => ""}
              htmlElementsData={BRANCHES}
              htmlLat="lat"
              htmlLng="lng"
              htmlAltitude={0.01}
              htmlElement={makeMarker as any}
              arcsData={ARCS}
              arcStartLat="startLat"
              arcStartLng="startLng"
              arcEndLat="endLat"
              arcEndLng="endLng"
              arcColor={() => "#ffffff66"}
              arcStroke={0.4}
              arcDashLength={0.08}
              arcDashGap={0.92}
              arcDashAnimateTime={4000}
              arcAltitude={0.25}
              arcOpacity={0.8}
              ringsData={RING_DATA}
              ringLat="lat"
              ringLng="lng"
              ringLabel={() => ""}
              ringColor={() => "#00ff8866"}
              ringMaxRadius={3}
              ringPropagationSpeed={2}
              ringRepeatPeriod={1000}
              pointLabel={() => ""}
            />
          </div>

          {activeBranch && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                width: 220,
                background: "#ffffff",
                border: "2px solid #002C19",
                borderRadius: 12,
                padding: "20px 24px",
                boxShadow: "0 4px 20px rgba(0,44,25,0.12)",
                display: "flex",
                flexDirection: "column",
                gap: 10,
                zIndex: 20,
              }}
            >
              <button
                onClick={() => setActiveBranch(null)}
                style={{
                  alignSelf: "flex-end",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 13,
                  color: "#888888",
                  padding: 0,
                  lineHeight: 1,
                  fontFamily: "inherit",
                }}
              >
                ✕
              </button>
              <div>
                <p
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#002C19",
                    margin: "0 0 4px",
                  }}
                >
                  TRIIBE Branch
                </p>
                <p
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#111111",
                    margin: 0,
                  }}
                >
                  {activeBranch.label}
                </p>
                <p
                  style={{ fontSize: 11, color: "#888888", margin: "2px 0 0" }}
                >
                  {activeBranch.city}
                </p>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#444444",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {activeBranch.description}
              </p>
              {activeBranch.hasLink ? (
                <a
                  href={activeBranch.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#002C19",
                    color: "#ffffff",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "9px 0",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: "inherit",
                  }}
                >
                  Learn more →
                </a>
              ) : (
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 11,
                    color: "#888888",
                    padding: "9px 0",
                    borderRadius: 8,
                    border: "1px solid #e0e0e0",
                    background: "#ffffff",
                  }}
                >
                  Coming soon
                </span>
              )}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 10,
            marginTop: 22,
          }}
        >
          {BRANCHES.map((branch) => {
            const active = activeBranch?.id === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => handleCountryClick(branch)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  background: active ? "#e8f5ee" : "#ffffff",
                  color: "#111111",
                  border: `1.5px solid ${active ? "#002C19" : "#e0e0e0"}`,
                  boxShadow: active ? "0 2px 12px rgba(0,44,25,0.18)" : "none",
                  transform: active ? "scale(1.04)" : "scale(1)",
                }}
              >
                {branch.label}
              </button>
            );
          })}
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            color: TEXT_DIM,
            marginTop: 14,
            marginBottom: 0,
          }}
        >
          Drag to rotate · Click a marker or country to explore
        </p>
      </div>
    </section>
  );
}
