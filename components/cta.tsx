"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-[#002c19] text-white py-24 px-4 md:px-25 lg:px-[200px] w-full pt-16">
      <div className="max-w-[1200px] mx-auto flex flex-col">

        
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 flex flex-wrap items-center justify-center gap-4">
          Fund our work

          {/* <Image
            src="/images/home/TRIIBEHeroWhite.svg"
            alt="TRIIBE"
            width={180}
            height={60}
            className="inline-block object-contain"
          /> */}
        </h2>

      
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-5xl mx-auto">

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] text-center md:text-left max-w-2xl">
            Channel capital to the nonprofit startup  ecosystem
          </h3>

          <div className="flex-shrink-0 flex justify-center w-48 md:w-64 -ml-8 overflow-visible">
            <Image
              src="/images/home/heroLogo.png"
              alt="TRIIBE Tree Logo"
              width={300}
              height={300}
              className="w-full h-auto object-contain scale-125 md:scale-150"
            />
          </div>

        </div>

      
        <div className="flex justify-center mt-10">
          <a
            href="/donate"
            className="w-full max-w-[550px] rounded-xl bg-white py-5 text-center text-[#002c19] text-2xl font-semibold hover:bg-gray-100 transition"
          >
            Donate
          </a>
        </div>

      
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-white/90 text-sm md:text-base font-medium">
            Bringing startup dynamics to the nonprofit sector
          </p>
        </div>

      </div>
    </section>
  );
}
