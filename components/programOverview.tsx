"use client";

import Image from "next/image";
import Link from "next/link";

const programSections = [
  {
    title: "Why we do it",
    description:
      "Even successful nonprofit founders are cut off from funding by 20",
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/events/summit-2.jpg",
    imagePosition: "right",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-center",
  },
  {
    title: "How we do it",
    description: "",
    listItems: [
      {
        label: "TRIIBE Fellowship",
        link: "/fellowship",
        text: "Our 3-year Fellowship ensures founders don't burn out while transitioning from a 'youth' nonprofit to an established one",
      },
      {
        label: "TRIIBE Talks",
        link: "/talk",
        text: "TRIIBE Talks highlight next-gen nonprofit founders alongside peers over 30, because age doesn't determine the quality of a voice",
      },
      {
        label: "TRIIBE I00",
        link: "/100",
        text: "The TRIIBE I00 is the definitive global list of nonprofit founders under 30 to know",
      },
    ],
    bgColor: "bg-[#002c19]",
    textColor: "text-white",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo4.jpg",
    imagePosition: "right",
    fontWeight: "font-bold",
    imageObjectPosition: "object-center",
  },
  {
    title: "Data-driven approach",
    description:
      "The TRIIBE Index is the dataset helping us and our partners fund with data-driven precision, built by those in the nonprofit sector, across all ages, roles, and stages",
    button: {
      label: "TRIIBE Index",
      link: "/index",
    },
    bgColor: "bg-[#002c19]",
    textColor: "text-[#fffefee6]",
    descriptionColor: "text-[#ffffffcc]",
    imageUrl: "/images/home/whatWeDo2.png",
    imagePosition: "left",
    fontWeight: "font-semibold",
    imageObjectPosition: "object-cover object-[50%_0%]",
  },
];

export default function ProgramOverview() {
  return (
    <section className="flex flex-col w-full items-start md:px-25 lg:px-50 mt-16">
      {/* <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center py-12 px-10 gap-8 md:gap-10">
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
      </div> */}

      <div className="w-full flex flex-col">
        {programSections.map((section, index) => {
          // Determine if the image should be on the left for medium screens and up
          // Index 1 (How we do it) will be true (image on left)
          // Index 0 (Why) and Index 2 (Data-driven) will be false (image on right)
          const isImageLeft = index % 2 !== 0;

          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch w-full md:min-h-[490px]"
            >
              {/* Image Container */}
              <div
                className={`relative w-full md:w-1/2 min-h-[300px] overflow-hidden order-2 ${
                  isImageLeft ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  key={section.imageObjectPosition}
                  src={section.imageUrl}
                  alt={`${section.title} illustration`}
                  fill
                  className={`object-cover ${section.imageObjectPosition || "object-center"}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content Container */}
              <div
                className={`${section.bgColor} flex items-center w-full md:w-1/2 order-1 ${
                  isImageLeft ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="flex flex-col justify-center gap-6 px-5 md:px-8 lg:px-16 py-12 w-full h-full">
                  <h2
                    className={`${section.textColor} ${section.fontWeight} text-xl md:text-[32px] leading-10`}
                  >
                    {section.title}
                  </h2>

                  <div
                    className={`${section.descriptionColor} text-lg leading-[29.2px] flex flex-col gap-6`}
                  >
                    {section.description && <p>{section.description}</p>}

                    {section.listItems && (
                      <div className="flex flex-col gap-8">
                        {section.listItems.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col items-start gap-4"
                          >
                            <p>{item.text}</p>
                            <Link
                              href={item.link}
                              className="inline-block px-6 py-3 bg-white text-[#002c19] text-[13px] font-bold rounded-lg whitespace-nowrap hover:bg-gray-100 transition-colors"
                            >
                              {item.label}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {section.button && (
                    <div className="mt-4">
                      <Link
                        href={section.button.link}
                        className="inline-block px-6 py-3 bg-white text-[#002c19] text-[13px] font-bold rounded-lg whitespace-nowrap hover:bg-gray-100 transition-colors"
                      >
                        {section.button.label}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
