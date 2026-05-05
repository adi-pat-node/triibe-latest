"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm font-semibold text-[#1C5945] tracking-widest mb-4">
            404
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            This page doesn&apos;t exist
          </h1>

          <p className="text-lg text-[#495565] leading-relaxed mb-12 max-w-xl mx-auto">
            The path
            <code className="bg-gray-100 text-[#1C5945] px-2 py-1 rounded font-mono text-base">
              {pathname}
            </code>
            could not be found. It may have been moved, renamed, or no longer
            exists.
          </p>

          <div className="bg-[#F5F5F0] border border-[#1C5945]/20 rounded-2xl p-8 mb-12">
            <p className="text-lg md:text-xl italic text-black leading-relaxed mb-4">
              Everyone wants a village, but nobody wants to be a villager. So we
              built a TRIIBE.
            </p>
            <p className="text-sm font-semibold text-[#1C5945] tracking-wider">
              TRIIBE: Funding next-gen nonprofit founders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#1C5945] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#164737] transition-colors w-full sm:w-auto"
            >
              Back to Homepage
            </Link>
            <Link
              href="/program"
              className="bg-white text-black border border-black px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
