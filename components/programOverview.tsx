"use client";

import Image from "next/image";

const programSections = [
  {
    title: "Why We Do It",
description: [
    "Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE: the foundation funding next-gen nonprofit founders.",
    "$83 trillion will transfer between generations over the next two decades. TRIIBE Fellows are the bench of operators future leaders and institutions need to deliver a return on impact."
  ],  
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
      "We are building the nonprofit startup ecosystem, maximizing a return on impact, not income. Through TRIIBE Talks, the TRIIBE Fellowship, and the TRIIBE I00, we provide next-gen nonprofit founders visibility, stability, and credibility.",
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
        • TRIIBE Talks highlight next-gen founders alongside established ones, because age doesn't define the quality of a voice.
         <br /> • The TRIIBE Fellowship ensures founders don’t burn out while transitioning from
          a “youth” nonprofit to an established one. <br /> • The TRIIBE I00 is the definitive
           list of the 100 next-gen nonprofit founders to know.

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
      {/*UW Header Section omitted for brevity*/}
      
      {programSections.map((section, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 md:h-490px">
          {section.imagePosition === "left" ? (
            <>
              {/* Image Column */}
              <div className="relative w-full h-[300px] md:h-full overflow-hidden order-2 md:order-1">
                <Image
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className={section.imageObjectPosition || "object-cover object-center"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Column */}
              <div className={`${section.bgColor} flex items-center order-1 md:order-2`}>
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2 className={`${section.textColor} ${section.fontWeight} text-xl md:text-[32px] leading-10`}>
                    {section.title}
                  </h2>
                  {/* Updated Description Logic */}
                  <div className={`${section.descriptionColor} text-lg leading-[29.2px] flex flex-col gap-4`}>
                    {Array.isArray(section.description) ? (
                      section.description.map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text Column */}
              <div className={`${section.bgColor} flex items-center`}>
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2 className={`${section.textColor} ${section.fontWeight} text-[32px] leading-10 `}>
                    {section.title}
                  </h2>
                  {/* Updated Description Logic */}
                  <div className={`${section.descriptionColor} text-lg leading-[29.2px] flex flex-col gap-4`}>
                    {Array.isArray(section.description) ? (
                      section.description.map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Image Column */}
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
