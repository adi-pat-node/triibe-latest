"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Script from "next/script";

const infoCards = [
  {
    description:
      "The TRIIBE Index is the dataset of the nonprofit sector built from direct input by the people working in it: founders, directors, board members, staff, and volunteers, across all ages, roles, and stages.",
    buttonText: "Take the survey",
    buttonLink: "#survey",
  },
  {
    description:
      "We use the TRIIBE Index to fund next-gen nonprofit founders with data-driven precision, offering that same precision through advisory and consultancy work to funders, foundations, and donor-advised funds.",
    buttonText: "Access our insights",
    buttonLink:
      "mailto:partnerships@triibe.org?subject=TRIIBE%20Index%20Advisory%20Interest",
  },
  {
    description:
      "Because the anonymized data comes from the network, 50% of advisory revenue is shared with partner organizations who help build the Index, proportional to the responses they contributed.",
    buttonText: "Become a partner",
    buttonLink:
      "mailto:partnerships@triibe.org?subject=TRIIBE%20Index%20Partnership%20Interest",
  },
];

const IndexPage = () => {
  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-10">
            <Image
              src="/images/media/TRIIBEIndex.png"
              alt="TRIIBE Index"
              width={1200}
              height={600}
              className="w-full max-w-5xl h-auto rounded-3xl object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* Information Cards */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#3036411A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col justify-between min-h-[360px]"
            >
              <div>
              <p className="text-[#495565] font-semibold text-black leading-relaxed text-base">
                  {card.description}
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href={card.buttonLink}
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#1C5945] text-white rounded-xl font-semibold hover:bg-[#003d24] transition-colors"
                >
                  {card.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Survey Section */}
      <section
        id="survey"
        className="py-20 px-4 md:px-12 lg:px-24 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            TRIIBE Index Survey
          </h2>

          <p className="text-[#495565] text-lg max-w-3xl mx-auto leading-relaxed">
            Your experiences help shape a more transparent, informed, and
            collaborative nonprofit ecosystem.
          </p>
        </div>

        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
  <iframe
    style={{
      border: 0,
      width: "100%",
      height: "1400px",
    }}
    src="https://logictry.com/content/6a071c734c4cef96ac706b9e?autoresize=true&autoscroll=true&allowredirects=true&allowfullscreen=true&onlyscrollfullscreen=false&onclickshowfullscreen=false&showplaceholder=false&showchatbot=false&showbutton=false&showtoggle=true"
  ></iframe>
</div>
      </section>

      {/* Index Partners */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#3036411A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Index Partners
          </h2>

          <div className="bg-white rounded-3xl border border-gray-200 p-16">
            <p className="text-[#495565] text-lg leading-relaxed max-w-2xl mx-auto">
              Coming Soon...
            </p>
          </div>
        </div>
      </section>

      <Script
      src="https://logictry.com/js/connect/v1.js"
      strategy="afterInteractive"
      />

      <Footer />
    </main>
  );
};

export default IndexPage;

