"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="pt-16 ">
      <section className="relative w-full min-h-150 md:min-h-175 lg:min-h-200 bg-[#101828] flex items-center justify-center ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full ">
          <Image
            src="/images/home/heroImage.png"
            alt="College students collaborating"
            fill
            priority
            className="object-fill"
            sizes="100vw"
          />
          <div className="absolute inset-0 w-full h-full bg-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 max-w-225 mx-auto">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h1 className="font-['DM_Sans',Helvetica] font-bold text-white text-4xl md:text-4xl lg:text-[64px] text-center tracking-tight leading-tight max-w-200">
              Funding Next - Gen
              <br />
              Nonprofit Founders
            </h1>
          </div>

          {/* Description */}
          <div className="flex flex-col items-center mt-2">
            <p className="font-['DM_Sans',Helvetica]font-normal text-white text-base md:text-lg text-center tracking-[0] leading-relaxed max-w-175">
              TRIIBE provides funding, mentorship, and sustained community for
              college students building organizations that create social impact.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="  flex flex-col md:flex-row items-center justify-center gap-3 mt-4 ">
            <a
              href="/partner"
              className="px-6 py-3 bg-white text-black hover:bg-gray-100 font-['DM_Sans',Helvetica] font-normal text-sm rounded inline-flex items-center justify-center transition-colors"
            >
              Partner with TRIIBE
            </a>

            <Image
              src="/images/home/heroLogo.png"
              alt="TRIIBE"
              width={80}
              height={80}
              priority
              className="h-20 w-auto"
            />

            <a
              href="/apply"
              className="px-6 py-3 bg-white text-black hover:bg-gray-100 font-['DM_Sans',Helvetica] font-normal text-sm rounded inline-flex items-center justify-center transition-colors gap-2"
            >
              Apply to Fellowship
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
