"use client";

import { ChevronRight } from "lucide-react";

export default function MissionStatement() {
  return (
    <section className="flex flex-col items-start w-full py-20 px-4 md:px-50 bg-gray-50 border-t border-b">
      <div className="flex flex-col items-start gap-[27px] w-full max-w-260">
        <h2 className=" font-normal text-[#101727] text-3xl tracking-[0] leading-[48.8px]">
          Support drops off after high school. TRIIBE bridges the gap for
          founders in college.
        </h2>

        <a
          href="/mission"
          className="inline-flex items-center gap-[7px] h-auto p-0 border-b border-[#99a1ae] hover:border-[#354152] transition-colors"
        >
          <span className=" font-normal text-[#354152] text-sm tracking-[0] leading-5">
            See our mission and the ecosystem gap
          </span>
          <ChevronRight className="w-3 h-3 text-[#354152]" />
        </a>
      </div>
    </section>
  );
}
