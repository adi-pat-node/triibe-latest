import type { Metadata } from "next";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "TRIIBE Grants | Live Metrics Methodology",
  description: "How the live aggregate figures on TRIIBE Grants are calculated and kept current.",
};

const openRules = [
  "The opportunity is approved for public visibility.",
  "Its status is active, open, or rolling.",
  "It is not marked as junk, a past award, or a procurement notice.",
  "Its deadline is current or future, or the source explicitly identifies it as open or rolling.",
];

export default function GrantsMethodologyPage() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-[#002c19]">
      <Header />
      <section className="bg-[#002c19] px-4 pb-16 pt-28 text-white md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[960px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">TRIIBE Grants · Data transparency</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-5xl md:text-6xl">Live metrics methodology</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            How TRIIBE Grants defines and maintains the live funding figures shown across the network.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto grid max-w-[960px] gap-5">
          <article className="rounded-2xl border border-[#002c19]/15 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Active grant opportunities</h2>
            <p className="mt-3 text-sm leading-7 text-[#496157]">An opportunity is counted only when every rule below is satisfied:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm leading-7 text-[#496157]">
              {openRules.map((rule) => <li key={rule}>{rule}</li>)}
            </ul>
          </article>

          <article className="rounded-2xl border border-[#002c19]/15 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Active funding sources</h2>
            <p className="mt-3 text-sm leading-7 text-[#496157]">
              This is the number of distinct, named funding sources represented across the same active-opportunity population. Names are normalized for capitalization and repeated spaces before counting. It is not a count of every funder that exists.
            </p>
          </article>

          <article className="rounded-2xl border border-[#002c19]/15 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold">Currently listed funding</h2>
            <p className="mt-3 text-sm leading-7 text-[#496157]">
              This is the sum of the listed maximum award for each active opportunity. When a maximum is unavailable, a positive listed minimum is used. Missing, non-positive, and implausibly large amounts above $10 billion for a single opportunity are excluded. It describes amounts advertised in source records; it is not a guarantee that funds remain uncommitted or that any applicant will receive an award.
            </p>
          </article>

          <article className="rounded-2xl border border-[#002c19]/15 bg-[#f0f5f2] p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#547064]" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold">Freshness and availability</h2>
                <p className="mt-3 text-sm leading-7 text-[#496157]">
                  TRIIBE Grants refreshes its verified funding snapshot every five minutes and displays the latest update time. If the source data is incomplete or outdated, the figures are temporarily withheld rather than replaced with estimates.
                </p>
              </div>
            </div>
          </article>

          <div className="pt-3">
            <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#002c19] px-6 py-3 text-sm font-bold text-white hover:bg-[#1c5945]" href="/grants">
              Return to TRIIBE Grants
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
