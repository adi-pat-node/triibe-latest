"use client";

import Image from "next/image";

const statistics = [
  {
    value: "150+",
    label: "FOUNDERS SUPPORTED",
  },
  {
    value: "45",
    label: "UNIVERSITIES REPRESENTED",
  },
  {
    value: "92%",
    label: "COHORT RETENTION",
  },
  {
    value: "$2.1M",
    label: "IN GRANTS AWARDED",
  },
];

const supportedByLogos = [
  {
    src: "/images/home/image-127.png",
    alt: "Supported by partner 1",
    className: "w-64 h-[59px]",
  },
  {
    src: "/images/home/image-128.png",
    alt: "Supported by partner 2",
    className: "w-64 h-[59px]",
  },
  {
    src: "/images/home/image-129.png",
    alt: "Supported by partner 3",
    className: "w-64 h-[58px] object-cover",
  },
  {
    src: "/images/home/image-130.png",
    alt: "Supported by partner 4",
    className: "w-[92px] h-[84px]",
  },
];

const partneredWithLogos = [
  {
    src: "/images/home/image-131.png",
    alt: "Partnered with organization 1",
    className: "w-40 h-[100px]",
  },
  {
    src: "/images/home/image-132.png",
    alt: "Partnered with organization 2",
    className: "w-[129px] h-[100px] object-cover",
  },
  {
    src: "/images/home/image-133.png",
    alt: "Partnered with organization 3",
    className: "w-64 h-[70px] object-cover",
  },
];

export default function KeyStatistics() {
  return (
    <section className="flex flex-col items-center px-4 md:px-50 py-20 w-full bg-[#F6FEEF] border-t border-b border-gray-200">
      <div className="flex flex-col items-center gap-20 w-full max-w-260">
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="h-12 flex items-center justify-center">
                <h3 className=" font-normal text-[#000000] text-5xl text-center tracking-[-1.20px] leading-12 whitespace-nowrap">
                  {stat.value}
                </h3>
              </div>
              <p className=" font-normal text-[#697282] text-xs text-center tracking-[0.60px] leading-4">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}

        <div className="flex flex-col items-center gap-8 w-full">
          <p className=" font-normal text-[#697282] text-xs text-center tracking-[0.60px] leading-4">
            SPONSORED BY
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-15 flex-wrap  md:flex-nowrap">
            {supportedByLogos.map((logo, index) => (
              <Image
                key={index}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
                width={256}
                height={84}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
          <p className=" font-normal text-[#697282] text-xs text-center tracking-[0.60px] leading-4">
            PARTNERED WITH
          </p>
          <div className="flex items-center justify-center gap-12 md:gap-62 flex-wrap  md:flex-nowrap">
            {partneredWithLogos.map((logo, index) => (
              <Image
                key={index}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
                width={256}
                height={100}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
