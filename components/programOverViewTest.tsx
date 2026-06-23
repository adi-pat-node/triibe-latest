"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

function CircleGraphic() {
  return (
    <div className="relative w-full max-w-[650px] aspect-square mx-auto">
      <div className="absolute inset-[10%] rounded-full border-[3px] border-dashed border-white/70" />

      <div className="absolute inset-[22%] rounded-full border-[10px] border-white bg-[#002c19] flex items-center justify-center text-white font-bold text-2xl text-center p-8">
        TRIIBE
      </div>

      <div className="absolute top-0 left-0 w-[34%] aspect-[1.5/1] bg-[#003d24] rounded-full flex items-center justify-center text-center p-4 text-white text-sm font-semibold">
        Fund next-gen nonprofit founders under 30
      </div>

      <div className="absolute top-0 right-0 w-[34%] aspect-[1.5/1] bg-[#003d24] rounded-full flex items-center justify-center text-center p-4 text-white text-sm font-semibold">
        Back them with mentorship and visibility
      </div>

      <div className="absolute bottom-0 left-0 w-[34%] aspect-[1.5/1] bg-[#003d24] rounded-full flex items-center justify-center text-center p-4 text-white text-sm font-semibold">
        Inspire more founders to launch their own nonprofit
      </div>

      <div className="absolute bottom-0 right-0 w-[34%] aspect-[1.5/1] bg-[#003d24] rounded-full flex items-center justify-center text-center p-4 text-white text-sm font-semibold">
        TRIIBE Fellows set the standard for nonprofit leadership
      </div>
    </div>
  );
}

export default function ProgramOverviewTest() {
  return (
    <>
      <Header />
      <section className="w-full md:px-25 lg:px-50  flex flex-col my-32">
        {/* SECTION 1 */}
        <div className="bg-[#002c19] text-white pt-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
              Nonprofit startup founders are funded for traction, not scale
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 mb-10">
              <h3 className="text-center text-2xl font-semibold">
                Seed funding for young nonprofits
              </h3>

              <h3 className="text-center text-2xl font-semibold">
                No infrastructure for startups to scale
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 ">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/images/home/section1.png"
                  alt="Seed funding for young nonprofits"
                  fill
                  className="object-contain "
                />
              </div>
              <div className="flex h-full items-center justify-center ">
                <div className="space-y-8 ">
                  <div className="border-l-2 border-white/80 pl-4">
                    <h4 className="text-2xl font-semibold leading-none mb-2">
                      No equity
                    </h4>
                    <p className="text-white/70 text-base">
                      A funder can't own a share of the business
                    </p>
                  </div>

                  <div className="border-l-2 border-white/80 pl-4">
                    <h4 className="text-2xl font-semibold leading-none mb-2">
                      No future returns
                    </h4>
                    <p className="text-white/70 text-base">
                      A funder can't take a share of the profit
                    </p>
                  </div>

                  <div className="border-l-2 border-white/80 pl-4">
                    <h4 className="text-2xl font-semibold leading-none mb-2">
                      No commission
                    </h4>
                    <p className="text-white/70 text-base">
                      A fundraiser can't earn a share of the raise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="bg-[#002c19] text-white pt-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
              We&apos;re building the nonprofit startup infrastructure
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <p className="mb-4">
                    Our fellowship: a multi-year recoverable grant, financial
                    audit, mentorship, and visibility for next-gen nonprofit
                    founders
                  </p>

                  <Link
                    href="/fellowship"
                    className="inline-block px-6 py-3 bg-white text-[#002c19] rounded-lg font-bold"
                  >
                    TRIIBE Fellowship
                  </Link>
                </div>

                <div>
                  <p className="mb-4">
                    Intergenerational talks and summits with next-gen nonprofit
                    founders alongside peers over 30
                  </p>

                  <Link
                    href="/talk"
                    className="inline-block px-6 py-3 bg-white text-[#002c19] rounded-lg font-bold"
                  >
                    TRIIBE Talks
                  </Link>
                </div>

                <div>
                  <p className="mb-4">
                    Funding the definitive global list of nonprofit founders
                    under 30 to know
                  </p>

                  <Link
                    href="/100"
                    className="inline-block px-6 py-3 bg-white text-[#002c19] rounded-lg font-bold"
                  >
                    TRIIBE I00
                  </Link>
                </div>
              </div>

              <CircleGraphic />
            </div>
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="bg-[#002c19] text-white py-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
              How we sustain it
            </h2>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                <div>
                  <p className="mb-4">
                    Branded stages, gatherings, and cross-border exchanges
                  </p>

                  <Link
                    href="/summit"
                    className="inline-block px-6 py-3 bg-white text-[#002c19] rounded-lg font-bold"
                  >
                    Summit
                  </Link>
                </div>

                <div>
                  <p className="mb-4">
                    Proprietary data used to make recommendations on where to
                    deploy capital or hire talent
                  </p>

                  <Link
                    href="/index"
                    className="inline-block px-6 py-3 bg-white text-[#002c19] rounded-lg font-bold"
                  >
                    TRIIBE Index
                  </Link>
                </div>
              </div>

              <div className="relative w-full min-h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/events/summit-2.jpg"
                  alt="TRIIBE Talks"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
