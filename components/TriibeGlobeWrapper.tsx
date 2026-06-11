"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const TriibeGlobe = dynamic(() => import("@/components/TriibeGlobe"), {
  ssr: false,
});

export default function TriibeGlobeWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: "800px", width: "100%" }}>
      {hasScrolledIntoView ? <TriibeGlobe /> : null}
    </div>
  );
}
