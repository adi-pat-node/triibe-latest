"use client";

import { useEffect } from "react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-25 lg:px-50 bg-[#002c19]">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 xl:gap-12">
          {/* Be a Cohort */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl text-center">
              Join a cohort
            </h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed text-center">
              Are you a next-gen nonprofit founder? Apply to become a TRIIBE
              Fellow.
            </p>
            <a
              href="/apply"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black rounded-sm h-[44px] hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Apply
            </a>
          </div>

          {/* Contact Us */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl text-center">
              Get involved
            </h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed text-center">
              Partner with TRIIBE to empower next-gen founders.
            </p>
            <a
              href="mailto:partnerships@triibe.org"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black rounded-sm h-[44px] hover:bg-gray-100 transition-colors font-semibold text-base text-center"
            >
              Contact us
            </a>
          </div>

          {/* Give */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between w-full">
            <h3 className="font-semibold text-white text-2xl text-center">
              Fund our work
            </h3>
            <p className="font-normal text-[#D1D5DC] text-base leading-relaxed text-center">
              Back the founder before the world knows their name
            </p>
            <a
              href="https://donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-black rounded-sm h-[44px] hover:bg-gray-100 transition-colors font-semibold text-base text-center cursor-pointer"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
