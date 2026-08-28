"use client";

import dynamic from "next/dynamic";

const GrantsHeroGlobe = dynamic(
  () => import("@/components/grants/grants-hero-globe"),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto aspect-square w-full max-w-[560px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(110,166,135,0.32),rgba(255,255,255,0.05)_46%,rgba(0,0,0,0)_72%)]" />
    ),
  },
);

export default function GrantsHeroGlobeWrapper() {
  return <GrantsHeroGlobe />;
}
