"use client";

import Image from "next/image";
import Link from "next/link";

const programSections = [
  {
    title: "Why we do it",
    description: [
      "TRIIBE is the foundation building out the nonprofit startup ecosystem, the bench institutions need to deliver return on impact.",
      //"$83 trillion will transfer to the next generation over the next two decades. TRIIBE Fellows are the bench institutions need to deliver the return on impact.",
    ],
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/events/summit-2.jpg",
    imagePosition: "right",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-center",
  },
  {
    title: "Data-driven approach",
    description: [
      "We fund with data-driven precision, built by the people working in the nonprofit sector, across all ages, roles, and stages.",
    ],
    button: {
      label: "TRIIBE Index",
      link: "/triibeindex",
    },
    bgColor: "bg-[#002c19]",
    textColor: "text-[#fffefee6]",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo2.png",
    imagePosition: "left",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-cover object-[50%_0%]",
  },
  {
    title: "How we do it",

    description: [
      {
        label: "TRIIBE Fellowship",
        link: "/fellowship",
        text: "The TRIIBE Fellowship ensures founders don’t burn out while transitioning from a “youth” nonprofit to an established one.",
      },
      {
        label: "TRIIBE Talks",
        link: "/triibetalk",
        text: "TRIIBE Talks highlight next-gen founders alongside established ones, because age doesn't determine the quality of a voice.",
      },
      {
        label: "TRIIBE I00",
        link: "/triibe100",
        text: "The TRIIBE I00 is the definitive list of next-gen nonprofit founders under 30 to know.",
      },
    ],
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
                  className={
                    section.imageObjectPosition || "object-cover object-center"
                  }
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text Column */}
              <div
                className={`${section.bgColor} flex items-center order-1 md:order-2`}
              >
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-xl md:text-[32px] leading-10`}
                  >
                    {section.title}
                  </h2>
                  <div
                    className={`${section.descriptionColor} text-lg leading-[29.2px] flex flex-col gap-6`}
                  >
                    {Array.isArray(section.description) ? (
                      section.description.map((item, i) =>
                        typeof item === "string" ? (
                          <p key={i}>{item}</p>
                        ) : (
                          <div key={i} className="flex items-center gap-6">
                            <div className="w-[160px] flex-shrink-0">
                              <Link
                                href={item.link}
                                className="block w-full text-center px-4 py-2 bg-white text-[#002c19] text-[13px] font-bold rounded-full whitespace-nowrap hover:bg-gray-100 transition-colors"
                              >
                                {item.label}
                              </Link>
                            </div>
                            <p className="flex-1">{item.text}</p>
                          </div>
                        ),
                      )
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                  {section.button && (
                    <div className="mt-2">
                      <Link
                        href={section.button.link}
                        className="inline-block px-6 py-3 bg-white text-[#002c19] text-[13px] font-bold rounded-full whitespace-nowrap hover:bg-gray-100 transition-colors"
                      >
                        {section.button.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text Column */}
              <div className={`${section.bgColor} flex items-center`}>
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-[32px] leading-10 `}
                  >
                    {section.title}
                  </h2>
                  <div
                    className={`${section.descriptionColor} text-lg leading-[29.2px] flex flex-col gap-6`}
                  >
                    {Array.isArray(section.description) ? (
                      section.description.map((item, i) =>
                        typeof item === "string" ? (
                          <p key={i}>{item}</p>
                        ) : (
                          <div key={i} className="flex flex-col gap-4">
  <p>{item.text}</p>

  <div>
    <Link
      href={item.link}
      className="inline-block px-6 py-3 bg-white text-[#002c19] text-[13px] font-bold rounded-full whitespace-nowrap hover:bg-gray-100 transition-colors"
    >
      {item.label}
    </Link>
  </div>
</div>
                        ),
                      )
                    ) : (
                      <p>{section.description}</p>
                    )}
                  </div>
                  {section.button && (
                    <div className="mt-2">
                      <Link
                        href={section.button.link}
                        className="inline-block px-6 py-3 bg-white text-[#002c19] text-[13px] font-bold rounded-full whitespace-nowrap hover:bg-gray-100 transition-colors"
                      >
                        {section.button.label}
                      </Link>
                    </div>
                  )}
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
