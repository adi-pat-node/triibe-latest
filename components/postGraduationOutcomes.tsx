"use client";

import Image from "next/image";
import Link from "next/link";

const outcomes = [
  {
    icon: "images/home/container-6.svg",
    title: "Alumni Network",
    description:
      "Continued connection with fellow founders and access to an expanding community of social entrepreneurs",
  },
  {
    icon: "images/home/container-5.svg",
    title: "Ongoing Support",
    description:
      "Access to resources, consultation, and guidance as your organization continues to develop",
  },
  {
    icon: "images/home/container-1.svg",
    title: "Leadership Opportunities",
    description:
      "Mentor current fellows and contribute to the next generation of nonprofit leaders",
  },
];

export default function PostGraduationOutcomes() {
  return (
    <section className="flex flex-col items-start px-4 md:px-50 py-20 w-full bg-gray-50 border-t border-b border-gray-200">
      <div className="flex flex-col items-start gap-16 w-full">
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <h2 className=" font-bold text-[#000000] text-4xl tracking-[-0.90px] leading-10">
            Beyond the Fellowship
          </h2>
          <p className=" font-normal text-[#495565] text-lg tracking-[0] leading-[29.2px]">
            Support extends beyond graduation. TRIIBE alumni remain part of a
            community committed to sustained social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg"
            >
              <div className="flex flex-col items-start gap-4 p-6">
                <Image
                  className="w-12 h-12"
                  alt={outcome.title}
                  src={outcome.icon}
                  width={48}
                  height={48}
                />
                <h3 className=" font-semibold text-[#000000] text-lg tracking-[0] leading-7">
                  {outcome.title}
                </h3>
                <p className=" font-normal text-[#495565] text-sm tracking-[0] leading-[22.8px]">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Button */}
        <div className="flex justify-center w-full">
          <a
            href="/program"
            className="px-6 py-3 bg-[#1a5a4a] hover:bg-[#144539] text-white font-semibold rounded-lg transition-colors"
          >
            Programs
          </a>
        </div>
      </div>
    </section>
  );
}
