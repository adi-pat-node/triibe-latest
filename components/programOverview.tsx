"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

export default function ProgramOverviewTest() {
  return (
    <>
      <main className="w-full flex flex-col">
        <section className="pt-16 pb-16 px-4 md:px-25 lg:px-[200px] bg-white">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              All seed, no soil
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-16">
              The nonprofit sector has no startup engine because the incentives
              that build one don’t exist
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

        <section className="bg-[#002c19] text-white py-24 px-4 md:px-25 lg:px-[200px] w-full pt-16">
          <div className="max-w-[1200px] mx-auto flex flex-col">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-4">
              So we built a
              <Image
                src="/images/home/TRIIBEHeroWhite.svg"
                alt="TRIIBE"
                width={180}
                height={60}
                className="inline-block object-contain"
              />
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-center md:text-left max-w-2xl">
                If incentives won’t build the nonprofit startup sector, we will
              </h3>

              <div className="flex-shrink-0 flex justify-center w-48 md:w-64 -ml-8 overflow-visible">
                <Image
                  src="/images/home/heroLogo.png"
                  alt="TRIIBE Tree Logo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain scale-125 md:scale-150"
                />
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <a
                href="/donate"
                className="w-[550px] rounded-xl bg-white py-5 text-center text-[#002c19] text-2xl font-semibold hover:bg-gray-100 transition"
              >
                Donate
              </a>
            </div>

            <div className="mt-8 md:mt-10 text-center">
              <p className="text-white/90 text-sm md:text-base font-medium">
                Bringing startup dynamics to the nonprofit sector
              </p>
            </div>
          </div>
        </section>

        <section className="pt-16 pb-1 px-4 md:px-25 lg:px-[200px] bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Our Infrastructure
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-16 max-w-3xl mx-auto">
              Making next-gen nonprofit founders fundable
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Funding
                </h4>
                <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                  We raise for them year round, backed by financial review,
                  interviews and audits.
                </p>
                {/* <div className="w-full flex justify-center">
                  <a
                    href="/fellowship#applyfellowship"
                    className="flex flex-col items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-green-900 transition-colors leading-tight"
                  >
                    <span>TRIIBE Fellowship</span>
                  </a>
                </div> */}
              </div>

              <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Mentorship
                </h4>
                <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                  Software, legal and operating support for every founder.
                </p>
                {/* <div className="w-full flex justify-center">
                  <Link
                    href="/talk"
                    className="flex flex-col items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-green-900 transition-colors leading-tight"
                  >
                    <span>TRIIBE Talks</span>
                  </Link>
                </div> */}
              </div>

              <div className="border border-[#002c19] p-8 md:p-10 flex flex-col h-full rounded-lg">
                <h4 className="text-2xl font-bold mb-6 min-h-[64px] flex items-center justify-center text-center">
                  Visibility
                </h4>
                <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                  On stage at the annual Next-Gen summit in front of peers,
                  donors and press.
                </p>
                {/* <div className="w-full flex justify-center">
                  <Link
                    href="/100"
                    className="flex items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-green-900 transition-colors leading-tight"
                  >
                    TRIIBE I00
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 w-full px-4 md:px-25 lg:px-50">
          <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
            <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
                Learn more about leading nonprofit founders under 30
              </p>

              <Link
                href="/100"
                className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300   hover:text-white hover:scale-105"
              >
                TRIIBE l00
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-25 lg:px-[200px] bg-white w-full">
          <div className="max-w-[1200px] mx-auto text-center text-[#002c19]">
            <h2 className="text-4xl md:text-6xl font-bold mb-12">
              Free services for the nonprofit sector
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#002c19] rounded-2xl p-8 md:p-10 flex flex-col items-center h-full">
                <div className="h-[90px] w-full flex items-center justify-center mb-4">
                  <Image
                    src="/images/home/TRIIBEGrants.png"
                    alt="TRIIBE Grants"
                    width={300}
                    height={90}
                    className="h-[60px] w-auto object-contain scale-[0.7]"
                  />
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <p className="text-xl leading-8">
                    The largest grant database in the world
                  </p>

                  <p className="text-xl leading-8">
                    Fully vetted & enriched daily, free for anyone to search
                  </p>

                  <p className="text-xl leading-8">
                    Endorsed by Jax Harrison, Grant Authority Co-Founder and
                    TRIIBE Legacy Board Member
                  </p>
                </div>

                <div className="w-full flex justify-center mt-8">
                  <Link
                    href="/grants"
                    className="flex items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-[#1C5945] transition-colors"
                  >
                    TRIIBE Grants
                  </Link>
                </div>
              </div>

              <div className="border border-[#002c19] rounded-2xl p-8 md:p-10 flex flex-col items-center h-full">
                <div className="h-[90px] w-full flex items-center justify-center mb-4">
                  <Image
                    src="/images/home/TRIIBETalk.jpeg"
                    alt="TRIIBE TALK"
                    width={300}
                    height={90}
                    className="h-[60px] w-auto object-contain scale-[0.7]"
                  />
                </div>

                <div className="flex flex-col items-center justify-center text-center gap-3">
                  <p className="text-xl leading-8">
                    A decentralized stage and playbook to run it
                  </p>

                  <p className="text-xl leading-8">
                    Intergenerational conversations, featuring next-gen voices
                  </p>

                  <p className="text-xl leading-8">
                    Endorsed by Lara Stein, TEDx Founder and TRIIBE Legacy Board
                    Member
                  </p>
                </div>

                <div className="w-full flex justify-center mt-8">
                  <Link
                    href="/talk"
                    className="flex items-center justify-center w-[200px] bg-[#002c19] text-white rounded-sm h-[44px] font-bold hover:bg-[#1C5945] transition-colors"
                  >
                    TRIIBE Talk
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
