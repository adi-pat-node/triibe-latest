"use client";

import { ArrowRight } from "lucide-react";

export default function SponsorsAndPartners() {
  return (
    <section className="flex flex-col items-start gap-12 pt-24 pb-24 px-4 md:px-50 w-full bg-white">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className=" font-bold text-black text-4xl tracking-[-0.90px] leading-10">
          Partnership Opportunities
        </h2>

        <p className="max-w-[891px]  font-normal text-[#495565] text-lg leading-[29.2px]">
          Partners provide funding, mentorship, and resources that enable
          undergraduate nonprofit founders to build sustainable organizations.
        </p>
      </div>

      <div className="w-full bg-gray-50 border border-[#d0d5db] rounded-lg">
        <div className="flex flex-col items-center gap-8 py-12 px-4">
          <div className="flex flex-col items-center gap-3 max-w-2xl">
            <h3 className=" font-semibold text-black text-2xl text-center leading-8">
              Support the Next Generation
            </h3>

            <p className=" font-normal text-[#495565] text-base text-center leading-[26px]">
              Your partnership—whether through financial support, mentorship, or
              organizational resources—directly enables students to create
              lasting social impact.
            </p>
          </div>

          <a
            href="/partnership"
            className="bg-[#101828] hover:bg-[#101828]/90 text-white  font-semibold text-sm rounded h-10 px-4 inline-flex items-center justify-center gap-2 transition-colors"
          >
            Explore Partnership
          </a>
        </div>
      </div>
    </section>
  );
}
