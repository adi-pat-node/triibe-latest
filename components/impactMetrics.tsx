"use client";

const impactAreas = [
  "Education",
  "Health & Wellness",
  "Food Security",
  "Youth Development",
  "Economic Empowerment",
  "Arts & Culture",
  "Mental Health",
  "Community Development",
  "Technology Access",
  "Access to Housing",
  "Renewable Energy",
  "International Development",
  "Clean Water Access",
];

export default function ImpactMetrics() {
  return (
    <section className="flex flex-col items-start  pb-20 pt-20 px-4 md:px-50 w-full bg-gray-50 border-t border-gray-200">
      <div className="flex flex-col items-start gap-12 w-full">
        <header className="flex flex-col items-start gap-4 w-full">
          <h2 className=" font-bold text-[#000000] text-4xl tracking-[-0.90px] leading-10">
            Areas of Impact
          </h2>
          <p className=" font-normal text-[#495565] text-lg leading-7">
            Fellows work across diverse sectors addressing critical social
            challenges
          </p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full items-start md:whitespace-nowrap">
          {impactAreas.map((area, index) => (
            <div
              key={index}
              className=" px-3 py-2 bg-white rounded border border-[#d0d5db] text-black text-xs font-semibold md:w-fit "
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
