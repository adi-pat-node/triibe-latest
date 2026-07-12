"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Script from "next/script";

const infoCards = [
  {
    description:
      "The TRIIBE Index identifies funding gaps with data-driven precision, built by those across all roles and stages.",
    buttonText: "Take the survey",
    buttonLink: "#survey",
  },
  {
    description:
      "$83 trillion will transfer between generations over the next two decades. We offer data-driven advisory and consultancy support so funders, foundations, and donor-advised funds can deploy with precision.",
    buttonText: "Access our insights",
    buttonLink:
      "mailto:partnerships@triibe.org?subject=TRIIBE%20Index%20Advisory%20Interest",
  },
  /* {
    description:
      "Because the anonymized data comes from the network, 50% of advisory revenue is shared with partner organizations who help build it, proportional to the responses they contributed.",
    buttonText: "Become a partner",
    buttonLink:
      "mailto:partnerships@triibe.org?subject=TRIIBE%20Index%20Partnership%20Interest",
  }, */
];

const IndexPage = () => {
  return (
    <main className="bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-12 lg:px-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <img
            src="/images/TRIIBELOGOS/TRIIBE INDEX LOGO.png"
            alt="TRIIBE Index"
            className="w-auto h-[64px] object-contain mx-auto block mb-5"
          />
          <p className="text-base text-[#002c19]/80 font-normal max-w-[420px] mx-auto text-center leading-relaxed mt-12">
            Your experiences help shape a more transparent, informed, and
            collaborative nonprofit ecosystem.
          </p>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#3036411A]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <p className=" font-semibold text-[#002c19] leading-relaxed text-base flex-1">
                {card.description}
              </p>
              <Link
                href={card.buttonLink}
                className="inline-flex min-w-[220px] items-center justify-center rounded-sm h-[44px] bg-[#002c19] px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-[#003d24]"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Information Cards */}
      {/* <section className="flex flex-col w-full md:px-25 lg:px-50 bg-white  py-12">
        {infoCards.map((card, index) => {
          const textOnLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]"
            >
              {textOnLeft ? (
                <>
                  <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 bg-white border border-gray-200 shadow-sm">
                    <p className="text-[#303641] text-lg leading-[29.2px]">
                      {card.description}
                    </p>
                    <Link
                      href={card.buttonLink}
                      className="self-center px-8 py-3 bg-[#1C5945] text-white text-sm font-bold rounded-full hover:bg-[#003d24] transition-colors"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                  <div />
                </>
              ) : (
                <>
                  <div />
                  <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 bg-white border border-gray-200 shadow-sm">
                    <p className="text-[#303641] text-lg leading-[29.2px]">
                      {card.description}
                    </p>
                    <Link
                      href={card.buttonLink}
                      className="self-center px-8 py-3 bg-[#1C5945] text-white text-sm font-bold rounded-full hover:bg-[#003d24] transition-colors"
                    >
                      {card.buttonText}
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section> */}

      {/* Survey Section */}
      <section id="survey" className="py-12 px-4 md:px-12 lg:px-24 bg-white">
        {/* <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="text-[#495565] text-lg max-w-3xl mx-auto leading-relaxed">
            Your experiences help shape a more transparent, informed, and
            collaborative nonprofit ecosystem.
          </p>
        </div> */}
        <div className="max-w-7xl mx-auto">
          <iframe
            title="TRIIBE Index Survey"
            loading="lazy"
            className="block h-[1400px] w-full border-0 bg-white shadow-none outline-none"
            src="https://logictry.com/content/6a071c734c4cef96ac706b9e?autoresize=true&autoscroll=true&allowredirects=true&allowfullscreen=false&onlyscrollfullscreen=false&onclickshowfullscreen=false&showplaceholder=false&showchatbot=false&showbutton=false&showtoggle=false&showfullscreen=false"
          ></iframe>
        </div>
      </section>

      {/* Index Partners */}
      {/*  <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#3036411A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Index Partners
          </h2>

          <div className="bg-white rounded-3xl border border-gray-200 p-16 flex items-center justify-center"> */}
      {/* <Link
              href="https://www.unitedyc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/images/home/unitedyouthcouncil.png"
                alt="Index Partner"
                width={260}
                height={120}
                className="object-contain"
              />
            </Link> */}
      {/*  <p className="text-xl md:text-2xl font-medium text-gray-400 tracking-wide uppercase">
              Coming Soon...
            </p>
          </div>
        </div>
      </section> */}

      <Script
        src="https://logictry.com/js/connect/v1.js"
        strategy="afterInteractive"
      />

      <Footer />
    </main>
  );
};

export default IndexPage;
