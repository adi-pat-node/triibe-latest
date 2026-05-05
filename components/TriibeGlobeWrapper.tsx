"use client";

import dynamic from "next/dynamic";

const TriibeGlobe = dynamic(() => import("@/components/TriibeGlobe"), {
  ssr: false,
});

export default function TriibeGlobeWrapper() {
  return <TriibeGlobe />;
}
