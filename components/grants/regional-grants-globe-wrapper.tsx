"use client";

import dynamic from "next/dynamic";

const RegionalGrantsGlobe = dynamic(
  () => import("@/components/grants/regional-grants-globe"),
  {
    ssr: false,
    loading: () => (
      <section className="overflow-hidden bg-[#002c19] px-4 py-20 text-white md:py-28" aria-label="Global funding explorer loading">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <div className="h-3 w-36 rounded-full bg-white/20" />
            <div className="mt-5 h-12 max-w-md rounded-xl bg-white/10" />
            <div className="mt-4 h-20 max-w-lg rounded-xl bg-white/[0.07]" />
          </div>
          <div className="mx-auto aspect-square w-full max-w-[620px] rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(127,191,155,0.24),rgba(255,255,255,0.05)_44%,rgba(0,0,0,0)_70%)]" />
        </div>
      </section>
    ),
  },
);

export default function RegionalGrantsGlobeWrapper({ referralUrl }: { referralUrl: string }) {
  return <RegionalGrantsGlobe referralUrl={referralUrl} />;
}
