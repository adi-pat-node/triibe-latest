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
        <div className="max-w-300 mx-auto text-[#002c19] space-y-16">
          <div className="text-center mb-16  pb-4">
            <h1 className="text-4xl md:text-6xl font-bold">Brand Book</h1>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              01. Tone of Voice
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
              02. The Logo
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
                <ul className="list-disc pl-5 space-y-2 opacity-90 mb-8">
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

                <div className="bg-red-50 p-6 rounded-xl border border-red-100 mt-6">
                  <h4 className="font-bold text-red-800 mb-4 text-lg">
                    Logo Misuse (The "Don'ts")
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-red-900/80">
                    <li>
                      <strong>Don't stretch or squash:</strong> Always scale the
                      logo proportionately.
                    </li>
                    <li>
                      <strong>Don't change the colors:</strong> Stick to the
                      approved TRIIBE Green and White (or monochrome black).
                    </li>
                    <li>
                      <strong>Don't add effects:</strong> Avoid drop shadows,
                      gradients, or 3D effects.
                    </li>
                    <li>
                      <strong>Don't crowd the logo:</strong> Respect the clear
                      space rules.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-16 h-fit">
                <div className="w-full h-40 bg-[#002c19] rounded-xl flex items-center justify-center border border-gray-200">
                  <Image
                    src="/images/home/heroLogo.png"
                    alt="TRIIBE Tree Logo"
                    width={80}
                    height={80}
                    className="object-contain brightness-0 invert"
                  />
                </div>

                <div className="w-full h-40 bg-white rounded-xl flex items-center justify-center border border-gray-200">
                  <Image
                    src="/images/home/TRIIBEHeroWhite.svg"
                    alt="TRIIBE"
                    width={140}
                    height={50}
                    className="inline-block object-contain"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(13%) sepia(42%) saturate(5833%) hue-rotate(143deg) brightness(93%) contrast(106%)",
                    }}
                  />
                </div>

                <div className="w-full h-40 bg-[#002c19] rounded-xl flex items-center justify-center border border-[#002c19]">
                  <Image
                    src="/images/home/TRIIBEHeroWhite.svg"
                    alt="TRIIBE"
                    width={140}
                    height={50}
                    className="inline-block object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              03. Color Palette
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              The TRIIBE color palette is tonal, derived from our core TRIIBE
              FOREST GREEN. This primary palette should always be present, using
              secondary palettes only as complimentary accents.
            </p>
            <div className="flex flex-wrap gap-10">
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

              <div className="space-y-3">
                <div className="w-32 h-32 rounded-full bg-black shadow-md border border-gray-200"></div>
                <div>
                  <p className="font-bold">TRIIBE Black</p>
                  <p className="text-sm opacity-70">HEX: #000000</p>
                  <p className="text-xs italic opacity-70 mt-1 max-w-[130px] leading-tight">
                    *Only used for monochrome designs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              04. Typography
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
                05. Imagery
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
                06. Layout Rules
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

          <div className="pt-16 border-t border-[#002c19]/10 text-center space-y-8">
            <section className="py-12 w-full">
              <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
                    Download the brand book
                  </p>

                  <a
                    href="/triibe-brand-book.pdf"
                    download="TRIIBE_Brand_Book.pdf"
                    className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    Download Here
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
