"use client";

import Image from "next/image";

const benefits = [
  {
    number: "01",
    icon: "/images/home/container-3.svg",
    title: "Direct Funding",
    description:
      "Financial grants to support nonprofit operations, programming, and organizational growth",
  },
  {
    number: "02",
    icon: "/images/home/container-2.svg",
    title: "Mentorship",
    description:
      "One-on-one guidance from experienced nonprofit leaders and social entrepreneurs",
  },
  {
    number: "03",
    icon: "/images/home/container.svg",
    title: "Community",
    description:
      "A cohort of fellow undergraduate founders building meaningful organizations",
  },
  {
    number: "04",
    icon: "/images/home/container-7.svg",
    title: "Programming",
    description:
      "Workshops and speaker series covering governance, fundraising, and organizational development",
  },
  {
    number: "05",
    icon: "/images/home/container-4.svg",
    title: "Resources",
    description:
      "Access to operational tools, legal support, and sector-specific expertise",
  },
];

export default function FellowshipBenefits() {
  return (
    <section className="flex flex-col items-start gap-12 px-4 md:px-[200px] py-20 w-full bg-gray-50">
      <div className="flex flex-col items-start gap-4 w-full">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-black text-4xl tracking-[-0.90px] leading-10">
          What Fellows Receive
        </h2>
        <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#495565] text-lg leading-[29.2px] max-w-[876px]">
          Comprehensive support designed for undergraduate nonprofit founders
          navigating the unique challenges of building organizations while in
          college.
        </p>
      </div>

      <div className="w-full border-t border-gray-200 bg-white rounded-lg">
        <div className="p-0">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.number}
              className="flex items-center gap-4 px-3.5 py-5 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center justify-end min-w-[24px]">
                <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#99a1ae] text-lg text-right leading-7">
                  {benefit.number}
                </span>
              </div>

              <Image
                className="w-10 h-10 flex-shrink-0"
                alt={benefit.title}
                src={benefit.icon}
                width={40}
                height={40}
              />

              <div className="flex flex-col gap-1 flex-1">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-semibold text-black text-lg leading-[24.8px]">
                  {benefit.title}
                </h3>
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#495565] text-sm leading-[21px]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
