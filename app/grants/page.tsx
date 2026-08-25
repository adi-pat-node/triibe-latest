"use client";

import Image from "next/image";

export default function GrantsPage() {
  return (
    <main className="min-h-screen bg-white text-[#002c19]">
      <section className="w-full flex flex-col items-center px-4 pt-8 md:pt-12">
        <div className="w-full flex justify-center mb-8">
          <Image
            src="/images/home/TRIIBEGrants.png"
            alt="TRIIBE Grants"
            width={600}
            height={150}
            priority
            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain object-center"
          />
        </div>

        <div className="flex flex-col items-center text-center mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold">
            Coming by Friday
          </h1>
        </div>
      </section>
    </main>
  );
}