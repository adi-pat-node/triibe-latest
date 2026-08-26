"use client";

import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Changemaker {
  name: string;
  description: string;
  founded: string;
  image: string;
  website: string;
  linkedin?: string;
  title?: string;
  university?: string;
}

export default function Changemakers() {
  const [selectedChangemaker, setSelectedChangemaker] =
    useState<Changemaker | null>(null);
  const cohort1: Changemaker[] = [
    {
      name: "Olivia Zhang",
      title: "Founder and CEO, Cancer Kids First",
      university: "2024 U.S. fellow",
      description:
        "Supporting young cancer patients and their families through donating goods and hosting interactive events",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
      website: "https://www.cancerkidsfirst.org/",
      linkedin: "https://www.linkedin.com/in/olivia-zhang-a792b8229/",
    },
    {
      name: "Anne-Sophie Frédérick",
      title: "Founder, Haitech Learning",
      university: "2024 U.S. fellow",
      description:
        "Expanding multilingual technology education access across borders",
      founded: "FOUNDED 2022",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
      website: "https://www.haitechlearning.org/",
      linkedin: "https://www.linkedin.com/in/anne-sophie-fr%C3%A9d%C3%A9rick-1364ba235/",
    },
    {
      name: "Esha Venkat",
      title: "Founder, NEST4US",
      university: "2024 U.S. fellow",
      description:
        "Mobilizing youth to tackle issues including hunger, education, and climate justice with volunteering & education",
      founded: "FOUNDED 2016",
      image: "/images/home/homepage---changemakers-3.png",
      website: "https://nest4us.org/",
      linkedin: "https://www.linkedin.com/in/eshavenkat/",
    },
    {
      name: "Maya Gowda",
      title: "Founder, (SEED)",
      university: "2024 U.S. fellow",
      description:
        "Advancing climate literacy and justice through workshops, curriculum development, and community initiatives",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
      website: "https://www.seedclimatechange.org/",
      linkedin: "https://www.linkedin.com/in/maya-gowda-a20484240/",
    },
  ];

  const cohort2: Changemaker[] = [
    {
      name: "Samin Bhan",
      title: "Founder, Lookupp",
      university: "2025 U.S. fellow",
      description:
        "Revive the culture of in-person interaction through a mobile app",
      founded: "FOUNDED 2021",
      image: "/images/home/saminbhan-2.png",
      website: "https://www.lookupp.net/",
      linkedin: "https://www.linkedin.com/in/samin-bhan/",
    },

    {
      name: "Shrusti Amula",
      title: "Founder, Rise N Shine Foundation",
      university: "2025 U.S. fellow",
      description:
        "Reduce food waste through compost and food recovery programs to combat climate change and food insecurity",
      founded: "FOUNDED 2019",
      image: "/images/home/ShrustiAmula.png",
      website: "https://www.risenshinefoundation.org/",
      linkedin: "https://www.linkedin.com/in/shrusti-amula/",
    },

    {
      name: "Nayla Jimenez",
      title: "Founder, Philippine Health Initiative",
      university: "2025 U.S. fellow",
      description:
        "Advance pediatric health and educational equity in the Philippines",
      founded: "FOUNDED 2017",
      image: "/images/home/NaylaJimenez.png",
      website: "https://www.philippinehealthinitiative.org/",
      linkedin: "https://www.linkedin.com/in/naylajimenez/",
    },
    {
      name: "Varuni Chopra",
      title: "Founder, Bridge the Gap Initiative",
      university: "2025 U.S. fellow",
      description:
        "Empower senior citizens to confidently use technology, connecting them to essential digital tools and services",
      founded: "FOUNDED 2022",
      image: "/images/triibe100/VaruniChopra.png",
      website: "https://helpinghandsmain.wixsite.com/mysite",
      linkedin: "https://www.linkedin.com/in/varuni-chopra1/",
    },
    {
      name: "Gitanjali Rao",
      title: "Founder, Vervient Foundation",
      university: "2025 U.S. fellow",
      description:
        "Help other students discover their passion for innovation and STEM",
      founded: "FOUNDED 2018",
      image: "/images/home/GitanjaliRao.png",
      website: "https://gitanjalirao.net/",
      linkedin: "https://www.linkedin.com/in/gitanjalirao/",
    },
  ];

  const cohort3: Changemaker[] = [
    {
      name: "Bella Brown",
      title: "Co-Founder, Living Outside",
      university: "2026 U.S. fellow",
      description:
        "Destigmatize homelessness through care bags distributed with conversation, dignity, and direct human connection",
      founded: "",
      image: "/images/triibe100/BellaBrown.jpg",
      website: "https://www.livingoutside.org/",
      linkedin: "https://www.linkedin.com/in/bellabrown369/",
    },

    {
      name: "Sonali Ratnasinghe",
      title: "Founder and Executive Director, Youth Ambassadors of Service",
      university: "2026 U.S. fellow",
      description:
        "Train high school students to lead real service initiatives through nonprofit internships and mentorship",
      founded: "",
      image: "/images/triibe100/SonaliRatnasinghe.jpg",
      website: " https://www.youthambassadorsofservice.org/",
      linkedin: "https://www.linkedin.com/in/sonaliratnasinghe/",
    },

    {
      name: "Nav Agarwal",
      title: "Founder, One Step Greener",
      university: "2026 U.S. fellow",
      description:
        "Move Delhi toward a zero-waste future through household recycling, education, and tree planting",
      founded: "",
      image: "/images/triibe100/NavAgarwal.jpg",
      website: " https://www.onestepgreener.org/",
      linkedin: "https://www.linkedin.com/in/nav-agarwal-45009a158/",
    },
    {
      name: "Claire Chi",
      title: "Founder and Executive Director, Dancing Against Hunger",
      university: "2026 U.S. fellow",
      description:
        "Relieve food insecurity in schools through accessible dance education and community food drives",
      founded: "",
      image: "/images/triibe100/Claire Chi.png",
      website: " https://www.dancingagainsthunger.org/",
      linkedin: "https://www.linkedin.com/in/claire-chi/",
    },
    {
      name: "Zoe Terry",
      title: "Founder and CEO, Zoe's Dolls",
      university: "2026 U.S. fellow",
      description:
        "Build self-esteem in Black and brown girls by gifting dolls made in their own image",
      founded: "",
      image: "/images/triibe100/Zoe Terry.png",
      website: "https://zoesdolls.com/",
      linkedin: "https://www.linkedin.com/in/zoe-terry-01b14235b/",
    },
  ];

  const renderCard = (changemaker: Changemaker, index: number) => (
    <button
      key={index}
      type="button"
      onClick={() => setSelectedChangemaker(changemaker)}
      className="group flex flex-col w-full h-full sm:flex-1 sm:min-w-0 cursor-pointer text-left"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl bg-gray-200 shrink-0">
        <Image
          src={changemaker.image}
          alt={changemaker.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="bg-white rounded-b-2xl p-6 md:p-4 lg:p-6 border border-t-0 border-gray-200 flex flex-col gap-3 flex-grow">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-[#002c19] text-lg">
            {changemaker.name}
          </h3>

          <p className="font-medium text-[#002c19]/80 text-xs leading-5">
            {changemaker.title} <ArrowUpRight className="w-4 h-4 inline" />
          </p>
        </div>

        {changemaker.university && (
          <div className="pt-1 border-t border-[#f2f4f6]">
            <p className="font-normal text-[#002c19]/80 text-xs leading-4">
              {changemaker.university}
            </p>
          </div>
        )}

        <p
          className={`font-normal text-[#002c19]/80 flex-1 ${
            changemaker.name === "Varuni Chopra"
              ? "text-[13px] leading-[18px]"
              : "text-sm leading-5"
          }`}
        >
          {changemaker.description}
        </p>
      </div>
    </button>
  );

  return (
    <section className="py-6 md:py-20 bg-white w-full" id="cohortSection">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="mb-8">
            <h2 className="font-bold text-[#002c19] text-4xl md:text-6xl tracking-[-0.90px] leading-10 mb-4">
              Our cohorts
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-stretch gap-6 mb-16">
            {cohort1.map((person, i) => (
              <div key={i} className="w-full sm:max-w-75 flex-1 flex">
                {renderCard(person, i)}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-stretch gap-4 mb-16">
            {cohort2.map((person, i) => (
              <div key={i} className="w-full sm:flex-1 flex">
                {renderCard(person, i)}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center items-stretch gap-4">
            {cohort3.map((person, i) => (
              <div key={i} className="w-full sm:flex-1 flex">
                {renderCard(person, i)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <section className="py-12 w-full px-4 md:px-25 lg:px-50">
        <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
              Identifying gaps with data-driven precision
            </p>

            <Link
              href="/index"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300   hover:text-white hover:scale-105"
            >
              TRIIBE Index
            </Link>
          </div>
        </div>
      </section> */}

      {selectedChangemaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={() => setSelectedChangemaker(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedChangemaker(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#002c19] shadow-sm hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* LEFT — PHOTO */}
              <div className="relative w-full md:w-1/2 h-[350px] md:h-[500px] bg-gray-200">
                <Image
                  src={selectedChangemaker.image}
                  alt={selectedChangemaker.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* RIGHT — INFORMATION */}
              <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center text-[#002c19]">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {selectedChangemaker.name}
                </h2>

                {selectedChangemaker.title && (
                  <p className="text-base md:text-lg font-medium text-[#002c19]/80 mb-2">
                    {selectedChangemaker.title}
                  </p>
                )}

                {selectedChangemaker.university && (
                  <p className="text-sm text-[#002c19]/60 mb-6">
                    {selectedChangemaker.university}
                  </p>
                )}

                {selectedChangemaker.founded && (
                  <p className="text-xs font-semibold tracking-wide text-[#002c19]/60 mb-5">
                    {selectedChangemaker.founded}
                  </p>
                )}

                <p className="text-base md:text-lg leading-7 text-[#002c19]/80 mb-8">
                  {selectedChangemaker.description}
                </p>

                <div className="flex items-center gap-4">
  {/* Website */}
  {selectedChangemaker.website && (
    <a
      href={selectedChangemaker.website.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${selectedChangemaker.name}'s website`}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        flexShrink: 0,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#002C19"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-6.6-3.3-9S9.8 5.4 12 3Z" />
      </svg>
    </a>
  )}

  {/* LinkedIn */}
  {selectedChangemaker.linkedin && (
    <a
      href={selectedChangemaker.linkedin.trim()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${selectedChangemaker.name}'s LinkedIn`}
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "50%",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "transform 200ms ease, box-shadow 200ms ease",
        flexShrink: 0,
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="#002C19"
        aria-hidden="true"
      >
        <path d="M6.5 8.5H3.25V21H6.5V8.5ZM4.875 3C3.84 3 3 3.84 3 4.875C3 5.91 3.84 6.75 4.875 6.75C5.91 6.75 6.75 5.91 6.75 4.875C6.75 3.84 5.91 3 4.875 3ZM20.75 13.84C20.75 10.09 18.75 8.25 16.08 8.25C13.92 8.25 12.95 9.44 12.5 10.11V8.5H9.25V21H12.5V14.81C12.5 13.18 12.81 11.6 14.88 11.6C16.92 11.6 16.95 13.47 16.95 14.91V21H20.2V14.05C20.2 13.98 20.75 13.91 20.75 13.84Z" />
      </svg>
    </a>
  )}
</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
