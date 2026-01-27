"use client";

import Image from "next/image";

const programSections = [
  {
    title: "Who We Are",
    description:
      "TRIIBE is a fellowship for undergraduate students leading registered nonprofit organizations. We believe that college founders deserve the same level of institutional support as their startup counterparts—sustained community, experienced mentorship, and funding that doesn't disappear after high school.",
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#fffefee6]",
    imageUrl: "/images/home/college-students-collaborating-1.png",
    imagePosition: "right",
    fontWeight: "font-semibold",
  },
  {
    title: "What We Do",
    description:
      "We provide a comprehensive support system: direct funding for organizational needs, structured mentorship from experienced nonprofit leaders and social entrepreneurs, and a tight-knit community of fellow student founders who understand the unique challenges of building impact organizations while in college.",
    bgColor: "bg-[#aedff7]",
    textColor: "text-black",
    descriptionColor: "text-black",
    imageUrl: "/images/home/students-working-together.png",
    imagePosition: "left",
    fontWeight: "font-semibold",
  },
  {
    title: "How We Do It",
    description:
      "Through a selective six-month fellowship, we bring together cohorts of 25 student founders for monthly workshops, one-on-one mentorship sessions, and peer learning experiences. Fellows receive unrestricted funding, ongoing support that extends beyond graduation, and access to a growing alumni network building the future of social impact.",
    bgColor: "bg-[#303641]",
    textColor: "text-white",
    descriptionColor: "text-[#fffefee6]",
    imageUrl: "/images/home/workshop-session.png",
    imagePosition: "right",
    fontWeight: "font-bold",
  },
];

export default function ProgramOverview() {
  return (
    <section className="flex flex-col w-full max-w-260 mx-auto">
      {programSections.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 min-h-[490px]"
        >
          {section.imagePosition === "left" ? (
            <>
              <div className="relative w-full h-full min-h-[490px]">
                <Image
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className={`${section.bgColor} flex items-center`}>
                <div className="flex flex-col justify-center gap-6 px-16 py-12 h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-[32px] leading-10`}
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
                  className="object-cover"
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
