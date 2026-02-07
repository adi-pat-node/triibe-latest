"use client";

import Image from "next/image";

const programSections = [
  {
    title: "Who We Are",
    description:
      "Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE. Next-gen for next-gen, a foundation made up of incredible changemakers under the age of 30 supporting fellow nonprofit founders.",
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
      "We ensure next-gen changemakers are always at the table, as a focal point, not a footnote. Whether through our college fellowship, or the TRIIBE 100 fund (supporting the top 100 nonprofits run by founders under 30), we are the seal of credibility, improving the perception of next-gen capabilities, and inspiring others to pursue social impact.",
    bgColor: "bg-[#002c19]",
    textColor: "text-[#fffefee6]",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDoNew3.jpg",
    imagePosition: "left",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-center object-bottom",
  },
  {
    title: "How We Do It",
    description:
      "We provide a comprehensive support system: direct funding for organizational needs, structured mentorship from experienced nonprofit leaders and social entrepreneurs, and a tight-knit community of fellow student founders who understand the unique challenges of building impact organizations.",
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
    <section className="flex flex-col w-full items-start   md:px-4 md:px-50  pt-16">
      {programSections.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 min-h-[490px]"
        >
          {section.imagePosition === "left" ? (
            <>
              <div className="relative w-full h-full min-h-[490px] order-2 md:order-1">
                <Image
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className={`object-cover ${section.imageObjectPosition || "object-center"}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className={`${section.bgColor} flex items-center order-1 md:order-2`}
              >
                <div className="flex flex-col justify-center gap-6 px-16 py-12 h-full">
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
                <div className="flex flex-col justify-center gap-6 px-16 py-12 h-full">
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
