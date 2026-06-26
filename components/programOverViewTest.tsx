"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function ProgramOverviewTest() {
  return (
    <>
      <Header />

      <main className="w-full flex flex-col">
        <section className="pt-32 pb-8 px-4 md:px-25 lg:px-[200px] bg-white">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              All seed, no soil
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-16">
              There’s no instrument for nonprofits to scale past seed grants
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-[#002c19] p-10 flex flex-col items-center text-center rounded-lg">
                <h4 className="text-2xl font-bold mb-6">Returns</h4>
                <p className="text-[#002c19]/80 font-medium">
                  A funder can&apos;t take a share of the profit
                </p>
              </div>

              <div className="border border-[#002c19] p-10 flex flex-col items-center text-center rounded-lg">
                <h4 className="text-2xl font-bold mb-6">Commission</h4>
                <p className="text-[#002c19]/80 font-medium">
                  A fundraiser can&apos;t earn a share of the raise
                </p>
              </div>

              <div className="border border-[#002c19] p-10 flex flex-col items-center text-center rounded-lg">
                <h4 className="text-2xl font-bold mb-6">Equity</h4>
                <p className="text-[#002c19]/80 font-medium">
                  A funder can&apos;t own a share of the business
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#002c19] text-white py-24 px-4 md:px-25 lg:px-[200px] w-full">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 flex flex-wrap items-center justify-center gap-4">
              So we built a
              <Image
                src="/images/home/TRIIBEHeroWhite.svg"
                alt="TRIIBE"
                width={180}
                height={60}
                className="inline-block object-contain"
              />
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-16 max-w-4xl mx-auto">
              Two I&apos;s uniting innovators and investors to build nonprofit
              startup instruments and infrastructure
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-white p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Recoverable Grants
                </h4>

                <p className="text-white/90 mb-10 flex-grow  text-center">
                  We recover our three year grant from future surplus
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href="/fellowship"
                    className="flex flex-col items-center justify-center w-[200px] h-[50px] bg-white text-[#002c19] rounded font-bold hover:bg-gray-100 transition-colors leading-tight"
                  >
                    <span>TRIIBE Fellowship</span>
                  </Link>
                </div>
              </div>

              <div className="border border-white p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Mentorship
                </h4>
                <p className="text-white/90 mb-10 flex-grow  text-center">
                  We pair fellows with mentors who help them scale
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href="/talk"
                    className="flex flex-col items-center justify-center w-[200px] h-[50px] bg-white text-[#002c19] rounded font-bold hover:bg-gray-100 transition-colors leading-tight"
                  >
                    <span>TRIIBE Talks</span>
                  </Link>
                </div>
              </div>

              <div className="border border-white p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Visibility
                </h4>
                <p className="text-white/90 mb-10 flex-grow  text-center">
                  We showcase fellows in front of funders
                </p>
                <div className="w-full flex justify-center">
                  <Link
                    href="/100"
                    className="flex items-center justify-center w-[200px] h-[50px] bg-white text-[#002c19] rounded font-bold hover:bg-gray-100 transition-colors leading-tight"
                  >
                    TRIIBE I00
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
