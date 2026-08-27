"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Billing = "monthly" | "yearly";
type PaidPlan = "autogrant" | "professional";

const plans = {
  monthly: {
    autogrant: { price: "$79", standard: "$99", period: "/mo", note: "20% off your first 3 months" },
    professional: { price: "$399", standard: "$499", period: "/mo", note: "20% off your first 3 months" },
  },
  yearly: {
    autogrant: { price: "$66", standard: "$83", period: "/mo", note: "20% off the full first year · billed annually" },
    professional: { price: "$333", standard: "$416", period: "/mo", note: "20% off the full first year · billed annually" },
  },
} as const;

function attributedPlanHref(referralUrl: string, plan: PaidPlan, billing: Billing) {
  try {
    const url = new URL(referralUrl);
    url.searchParams.set("plan", plan);
    url.searchParams.set("billing", billing);
    return url.toString();
  } catch {
    return referralUrl;
  }
}

export default function GrantsPricing({ referralUrl }: { referralUrl: string }) {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="px-4 py-20 md:py-28" aria-labelledby="triibe-rate-heading">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">Member pricing</p>
            <h2 id="triibe-rate-heading" className="mt-3 text-4xl font-bold tracking-[-0.035em] md:text-5xl">The TRIIBE rate</h2>
            <p className="mt-4 max-w-[680px] text-base font-semibold leading-7 text-[#315344]">
              Get 20% off your first three monthly payments—or 20% off the full first year when paid annually.
            </p>
          </div>

          <div className="inline-grid w-full max-w-[300px] grid-cols-2 rounded-lg border border-[#002c19]/20 bg-[#f0f5f2] p-1" aria-label="Billing period">
            {(["monthly", "yearly"] as Billing[]).map((period) => (
              <button
                key={period}
                type="button"
                onClick={() => setBilling(period)}
                aria-pressed={billing === period}
                className={`min-h-11 rounded-md px-4 text-sm font-bold transition ${billing === period ? "bg-[#002c19] text-white shadow-sm" : "text-[#315344] hover:bg-white"}`}
              >
                {period === "monthly" ? "Monthly" : "Annual"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <article className="flex min-h-[360px] flex-col rounded-2xl border border-[#002c19]/15 bg-white p-7 shadow-sm">
            <p className="text-lg font-bold">Explorer</p>
            <p className="mt-6 text-5xl font-bold tracking-[-0.045em]">Free</p>
            <p className="mt-6 text-base leading-7 text-[#496157]">Search all live grants and the whole funding network.</p>
            <ul className="mt-6 space-y-3 text-sm text-[#315344]">
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />No card to browse</li>
              <li className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />Source-backed opportunity details</li>
            </ul>
            <a href={referralUrl} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#002c19] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1c5945] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002c19]">
              Start free <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          {([
            {
              key: "autogrant" as const,
              name: "AutoGrant",
              body: "5 full applications a month, drafted and verified, in minutes—not hours.",
              action: "Choose AutoGrant",
              featured: true,
            },
            {
              key: "professional" as const,
              name: "Professional",
              body: "30 full applications a month, pipeline forecasting, and funder intelligence for organizations raising capital at scale.",
              action: "Choose Professional",
              featured: false,
            },
          ]).map((plan) => {
            const price = plans[billing][plan.key];
            return (
              <article key={plan.key} className={`relative flex min-h-[360px] flex-col rounded-2xl bg-white p-7 shadow-sm ${plan.featured ? "border-2 border-[#002c19]" : "border border-[#002c19]/15"}`}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-lg font-bold">{plan.name}</p>
                  <span className="rounded-full bg-[#002c19] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">20% off</span>
                </div>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-5xl font-bold tracking-[-0.045em]">{price.price}</span>
                  <span className="text-sm font-semibold text-[#496157]">{price.period}</span>
                  <span className="text-sm text-[#667a70] line-through">{price.standard}</span>
                </div>
                <p className="mt-2 text-xs font-bold text-[#315344]">{price.note}</p>
                <p className="mt-6 text-base leading-7 text-[#496157]">{plan.body}</p>
                <a href={attributedPlanHref(referralUrl, plan.key, billing)} className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#002c19] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1c5945] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002c19]">
                  {plan.action} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-xs leading-5 text-[#667a70]">
          Paid selections create your account first, then open secure checkout with your TRIIBE offer attached. Final pricing and renewal terms are shown before payment.
        </p>
      </div>
    </section>
  );
}
