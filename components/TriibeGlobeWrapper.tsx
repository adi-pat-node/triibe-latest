"use client";

import dynamic from "next/dynamic";

const TriibeGlobe = dynamic(() => import("@/components/TriibeGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full min-h-[800px] flex items-center justify-center">
      <p className="text-black ">Loading interactive 3D globe...</p>
    </div>
  ),
});

export default function TriibeGlobeWrapper() {
  return <TriibeGlobe />;
}
