"use client";

import { useEffect, useRef, useState } from "react";
import GlobeImport from "react-globe.gl";

const Globe = GlobeImport as any;

export default function GrantsHeroGlobe() {
  const globeRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [dimensions, setDimensions] = useState({ width: 280, height: 280 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/countries.geojson", { cache: "force-cache" })
      .then((response) => {
        if (!response.ok) throw new Error("Map unavailable");
        return response.json();
      })
      .then((data) => {
        if (!cancelled && Array.isArray(data?.features))
          setCountries(data.features);
      })
      .catch(() => {
        // The base globe remains visible if the border file cannot be loaded.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener?.("change", sync);
    return () => media.removeEventListener?.("change", sync);
  }, []);

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return;

    const update = () => {
      const viewportWidth = Math.max(280, window.innerWidth - 32);
      const width = Math.max(
        280,
        Math.min(node.clientWidth, viewportWidth, 560),
      );
      setDimensions({ width, height: width });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    let frame = 0;

    const configure = () => {
      const controls = globeRef.current?.controls?.();
      if (!controls) {
        frame = window.requestAnimationFrame(configure);
        return;
      }

      controls.autoRotate = !reduceMotion;
      controls.autoRotateSpeed = 0.42;
      controls.enableZoom = false;
      controls.enablePan = false;
      globeRef.current?.pointOfView?.({ lat: 12, lng: 8, altitude: 2.08 }, 0);
    };

    configure();
    return () => window.cancelAnimationFrame(frame);
  }, [reduceMotion]);

  return (
    <div
      ref={viewportRef}
      className="relative mx-auto aspect-square w-full min-w-0 max-w-[560px]"
      aria-label="Rotating globe illustrating worldwide funding opportunities"
    >
      
      <div
        className="pointer-events-none absolute inset-[5%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(95,155,119,0.30) 0%, rgba(95,155,119,0.16) 38%, rgba(95,155,119,0.05) 62%, transparent 78%)",
          filter: "blur(32px)",
        }}
      />

      
      <div
        className="pointer-events-none relative"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 55%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 74%, transparent 88%)",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 55%, rgba(0,0,0,0.85) 65%, rgba(0,0,0,0.4) 74%, transparent 88%)",
        }}
      >
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          rendererConfig={{
            alpha: true,
            antialias: true,
          }}
          showAtmosphere
          atmosphereColor="#6ea687"
          atmosphereAltitude={0.18}
          globeImageUrl={null as any}
          showGraticules
          polygonsData={countries}
          polygonCapColor={() => "#0b4b2c"}
          polygonSideColor={() => "#052c1a"}
          polygonStrokeColor={() => "rgba(188,214,199,.2)"}
          polygonAltitude={0.006}
          polygonLabel={() => ""}
        />
      </div>
    </div>
  );
}
