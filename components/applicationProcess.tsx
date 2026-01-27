"use client";

import { ArrowRight } from "lucide-react";

const eligibilityRequirements = [
  "Currently enrolled undergraduate students at accredited institutions",
  "Founders or co-founders of registered 501(c)(3) nonprofit organizations",
  "Active leadership role in organizational operations and strategy",
  "Available for 5–8 hours per week during fellowship term",
];

const cohortDetails = [
  { label: "Cohort Size", value: "~25 Fellows" },
  { label: "Duration", value: "6 Months" },
];

const footerLinks = [
  { text: "Full eligibility requirements", href: "/eligibility" },
  { text: "Application timeline and process", href: "/application-timeline" },
];

export default function ApplicationProcess() {
  return (
    <section className="flex flex-col items-start gap-12 px-4 md:px-[200px] py-20 w-full bg-gray-50">
      <header className="flex flex-col items-start gap-4 w-full">
        <h2 className="[font-family:'DM_Sans',Helvetica] font-bold text-[#000000] text-4xl tracking-[-0.90px] leading-10">
          Apply to the Fellowship
        </h2>
        <p className="max-w-[764px] [font-family:'DM_Sans',Helvetica] font-normal text-[#495565] text-lg leading-[29.2px]">
          TRIIBE provides funding, mentorship, and sustained community for
          college students building organizations that create social impact.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Application Window Card */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#697282] text-xs tracking-[0.60px] leading-4 uppercase">
                APPLICATION WINDOW
              </p>
              <h3 className="[font-family:'DM_Sans',Helvetica] font-normal text-[#000000] text-2xl leading-8">
                Now Open
              </h3>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#495565] text-base leading-[25.6px]">
                Applications for the Spring 2026 cohort are being accepted
                through March 15, 2026.
              </p>
            </div>

            <div className="flex flex-col gap-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                {cohortDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#697282] text-xs leading-4">
                      {detail.label}
                    </p>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#000000] text-xl leading-7">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/apply"
                className="w-full h-12 bg-[#002c19] hover:bg-[#003d24] text-white rounded border border-[#002c19] [font-family:'DM_Sans',Helvetica] font-semibold text-base inline-flex items-center justify-center transition-colors"
              >
                Begin Application
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Eligibility Card */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-10 flex flex-col gap-6">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#697282] text-xs tracking-[0.60px] leading-4 uppercase">
              WHO CAN APPLY
            </p>

            <ul className="flex flex-col gap-4">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex gap-3">
                  <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#99a1ae] text-base leading-6 flex-shrink-0">
                    —
                  </span>
                  <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#354152] text-base leading-6">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-start justify-between gap-4 flex-wrap">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="border-b border-[#99a1ae] [font-family:'DM_Sans',Helvetica] font-normal text-[#101727] text-sm leading-5 hover:text-[#000000] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
