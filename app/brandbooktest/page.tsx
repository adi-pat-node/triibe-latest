import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "TRIIBE Brand Book | Our Identity & Guidelines",
  description:
    "Explore the TRIIBE brand guidelines, including our story, tone of voice, logo usage, color palette, and imagery rules.",
};

export default function TriibeBrandBookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto text-[#002c19] space-y-12">
          <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
            01. Brand Story
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            All seed, no soil
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-16 text-center">
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
          <div className="bg-[#002c19] text-white p-12 rounded-xl mt-16 w-full">
            <div className="max-w-[1200px] mx-auto flex flex-col ">
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
                  Channeling capital to the nonprofit startup ecosystem
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

              <div className="mt-8 md:mt-12 text-center">
                <p className="text-white/90 text-sm md:text-base font-medium">
                  Capital flows directly to innovators. We don&apos;t take a
                  cut.
                </p>
              </div>
            </div>
          </div>

          <section className=" bg-white w-full">
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
                    Mentorship
                  </h4>
                  <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                    Multi-year fellowship, tools to grow: strategy, legal,
                    software
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
                    Visibility
                  </h4>
                  <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                    Digital reach, Summits, and TRIIBE Talks in front of funders
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
                    Credibility
                  </h4>
                  <p className="text-[#002c19]/90 mb-10 flex-grow text-center font-medium">
                    Vetted global list of nonprofit founders under 30 to know
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

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              02. Tone of Voice
            </h2>
            <p className="text-lg leading-relaxed opacity-90 max-w-3xl">
              We uphold an authentic tone, based on our lived experiences,
              hopes, and aspirations. We are resilient and grounded, aiming to
              inspire our members while ensuring they don&apos;t burnout along
              the way.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { title: "Authentic", desc: "Based on lived experiences." },
                { title: "Resilient", desc: "Grounded and sustainable." },
                { title: "Energized", desc: "Excited about the future." },
                { title: "Innovative", desc: "Upholding creativity." },
                { title: "Supportive", desc: "Positive and accessible." },
              ].map((tone) => (
                <div
                  key={tone.title}
                  className="bg-[#002c19] text-white p-6 rounded-xl shadow-md"
                >
                  <h3 className="font-bold text-lg mb-2">{tone.title}</h3>
                  <p className="text-sm opacity-80">{tone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              03. The Logo
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed opacity-90">
                  The TRIIBE logo presents a distinctive visual representation,
                  crafted from the initial letter &apos;T&apos;. It goes beyond
                  the conventional and partially abstracts this letter. The two
                  &ldquo;I&rdquo;s represent the <strong>Innovators</strong> and{" "}
                  <strong>Investors</strong> we unite.
                </p>
                <ul className="list-disc pl-5 space-y-2 opacity-90">
                  <li>
                    <strong>The Wordmark:</strong> A bold and dynamic symbol,
                    optimized for all sizes, balancing playful and serious.
                  </li>
                  <li>
                    <strong>The Symbol:</strong> The &apos;T&apos; can be broken
                    out as a standalone icon for avatars and app icons.
                  </li>
                  <li>
                    <strong>Clear Space:</strong> Always allow ample space
                    around the logo. Never obscure it with surrounding objects.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-full h-32 bg-[#002c19] rounded-xl flex items-center justify-center border border-gray-200">
                  <Image
                    src="/images/home/heroLogo.png"
                    alt="TRIIBE Tree Logo"
                    width={100}
                    height={100}
                    className="w-25 h-100 object-contain "
                  />
                </div>
                <div className="w-full h-32 bg-[#002c19] text-white rounded-xl flex items-center justify-center border border-[#002c19]">
                  <Image
                    src="/images/home/TRIIBEHeroWhite.svg"
                    alt="TRIIBE"
                    width={180}
                    height={60}
                    className="inline-block object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              04. Color Palette
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              The TRIIBE color palette is tonal, derived from our core TRIIBE
              FOREST GREEN. This primary palette should always be present, using
              secondary palettes only as complimentary accents.
            </p>
            <div className="flex flex-wrap gap-8">
              <div className="space-y-3">
                <div className="w-32 h-32 rounded-full bg-[#002c19] shadow-inner border border-gray-200"></div>
                <div>
                  <p className="font-bold">TRIIBE Forest Green</p>
                  <p className="text-sm opacity-70">HEX: #002C19</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="w-32 h-32 rounded-full bg-white shadow-md border border-gray-100"></div>
                <div>
                  <p className="font-bold">TRIIBE White</p>
                  <p className="text-sm opacity-70">HEX: #FFFFFF</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              05. Typography
            </h2>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-8">
              <div>
                <p className="text-sm font-bold opacity-50 uppercase tracking-widest mb-2">
                  Primary Typeface
                </p>
                <h3 className="text-4xl font-medium">Avenir Next</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <p className="font-medium text-lg">Regular (400)</p>
                  <p className="opacity-80 leading-relaxed font-normal break-words">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-lg">Medium (500)</p>
                  <p className="opacity-80 leading-relaxed font-medium break-words">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-lg">Demi-Bold (600)</p>
                  <p className="opacity-80 leading-relaxed font-semibold break-words">
                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt
                    Uu Vv Ww Xx Yy Zz
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                06. Imagery
              </h2>
              <ul className="list-disc pl-5 space-y-3 opacity-90 text-lg">
                <li>
                  <strong>Photography:</strong> Captures the beauty of reality
                  with serenity. Images should be realistic, faceless, and
                  incorporate elements of nature. They radiate happiness using
                  soft natural lighting.
                </li>
                <li>
                  <strong>Illustrations:</strong> Embrace the power of
                  simplicity. Abstract yet meaningful, minimal details, faceless
                  for universal relatability, and unmistakably TRIIBE.
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                07. Layout Rules
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                <strong>Margins:</strong> The margin size should be calculated
                as 5% of the entire document width, applied above, below, and at
                both sides of the artboard.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                <strong>Logo Placement:</strong> On a typical layout, the TRIIBE
                logo mostly appears in the lower left-hand corner. Logo and type
                should be aligned on the left hand side.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-[#002c19]/10 flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Download the Full Brand Book</h3>
            <p className="opacity-90 max-w-lg text-lg">
              Need the complete TRIIBE Brand Book for offline reference, team
              members, or design partners? Download the full PDF below.
            </p>
            <a
              href="/triibe-brand-book.pdf"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#002c19] rounded-sm h-[44px] hover:bg-[#1C5945] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              download="TRIIBE_Brand_Book.pdf"
            >
              Download Brand Book PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
