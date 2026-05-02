"use client";

import Image from "next/image";

const programSections = [
  {
    title: "Why We Do It",
    description: `Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation funding next-gen founders, ensuring they don't burn out when transitioning from a "youth" nonprofit to an established collective.`,
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo1.jpg",
    imagePosition: "right",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-center",
  },
  {
    title: "What We Do",
    description:
      "We are building out the startup ecosystem for collectives, maximizing a return on impact, not income. Whether through our Fellowship, TRIIBE Talks, or the TRIIBE I00, we are providing stability, visibility, and credibility to next-gen founders taking root today to advance tomorrow. ",
    bgColor: "bg-[#002c19]",
    textColor: "text-[#fffefee6]",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo2.png",
    imagePosition: "left",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-cover object-[50%_0%]",
  },
  {
    title: "How We Do It",
    description: (
      <>
        • The TRIIBE Fellowship provides unrestricted funding, mentorship and community.
         <br /> • TRIIBE Talks empower a decentralized global network to highlight
          the quality of next-gen voices. <br /> • The TRIIBE I00 serves as the seal of credibility for
           next-gen founders continuing their collectives with humility.

      </>
    ),
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo4.jpg",
    imagePosition: "right",
    fontWeight: "font-bold",
    imageObjectPosition: "object-center ",
  },
];

export default function ProgramOverview() {
  return (
    <section className="flex flex-col w-full items-start md:px-25 lg:px-50 pt-3">
      <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center py-12 px-10 gap-8 md:gap-10">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-700 leading-relaxed text-lg">
            Independent member of the United World Leaders
          </p>
        </div>

        <div className="flex justify-center md:justify-end md:items-center">
          <Image
            src="/UWL Raster File.png"
            alt="logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
      {programSections.map((section, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 md:h-490px">
          {section.imagePosition === "left" ? (
            <>
              <div className="relative w-full h-[300px] md:h-full overflow-hidden order-2 md:order-1">
                <Image
                  key={section.imageObjectPosition}
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className={
                    section.imageObjectPosition ||
                    "object-cover object-[50%_-10%]"
                  }
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className={`${section.bgColor} flex items-center order-1 md:order-2`}
              >
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-xl md:text-[32px] leading-10`}
                  >
                    {section.title}
                  </h2>
                  <p
                    className={`${section.descriptionColor} text-lg leading-[29.2px]`}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={`${section.bgColor} flex items-center`}>
                <div className="flex flex-col justify-center gap-6  px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-[32px] leading-10 `}
                  >
                    {section.title}
                  </h2>
                  <p
                    className={`${section.descriptionColor} text-lg leading-[29.2px] `}
                  >
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="relative w-full h-full min-h-[490px]">
                <Image
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className={`object-cover ${section.imageObjectPosition || "object-center"}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}
