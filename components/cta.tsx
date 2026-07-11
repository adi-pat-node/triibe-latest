"use client";

import { useEffect } from "react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-20 bg-[#002c19]">
  <div className="max-w-5xl mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-18">

      {/* Join a Cohort */}
      <div className="bg-[#002c19] border border-white rounded-lg p-7 flex flex-col justify-between gap-6 w-full md:w-[320px] shrink-0">
        <h3 className="font-semibold text-white text-2xl text-center">
          Join a cohort
        </h3>

        <p className="font-normal text-[#D1D5DC] text-base leading-relaxed text-center">
          Are you a nonprofit founder? Apply to become a TRIIBE Fellow.
        </p>

        <a
          href="/apply"
          className="inline-flex items-center justify-center w-[90%] mx-auto px-6 py-3 h-[44px] bg-white text-[#002c19] rounded-sm hover:bg-gray-100 transition-colors font-semibold text-base"
        >
          Apply
        </a>
      </div>

      {/* Fund our Work */}
      <div className="bg-[#002c19] border border-white rounded-lg p-7 flex flex-col justify-between gap-6 w-full md:w-[320px] shrink-0">
        <h3 className="font-semibold text-white text-2xl text-center">
          Fund our work
        </h3>

        <p className="font-normal text-[#D1D5DC] text-base leading-relaxed text-center">
          Help us channel capital to the nonprofit startup ecosystem
        </p>

        <a
          href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-[90%] mx-auto px-6 py-3 h-[44px] bg-white text-[#002c19] rounded-sm hover:bg-gray-100 transition-colors font-semibold text-base"
        >
          Donate
        </a>
      </div>

    </div>
  </div>
</section>
  );
}
