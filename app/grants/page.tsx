import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BadgeCheck, Search, Sparkles } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// The public landing page stays on TRIIBE. This is an outbound handoff only:
// GrantAuthority records the partner referral and continues directly to signup.
const PRODUCTION_REFERRAL_URL = "https://www.grantauthority.org/r/triibe";

function resolveReferralUrl() {
  const configuredUrl = process.env.GRANTAUTHORITY_REFERRAL_URL?.trim();
  if (!configuredUrl) return PRODUCTION_REFERRAL_URL;

  try {
    const url = new URL(configuredUrl);
    const isProductionHost =
      url.hostname === "grantauthority.org" ||
      url.hostname === "www.grantauthority.org";
    const isBrightsteadPreview =
      url.hostname.startsWith("grantai-") &&
      url.hostname.endsWith("-brightstead-technologies.vercel.app");

    if (
      url.protocol === "https:" &&
      url.pathname === "/r/triibe" &&
      !url.search &&
      !url.hash &&
      (isProductionHost || isBrightsteadPreview)
    ) {
      return url.toString();
    }
  } catch {
    // Invalid or unapproved destinations fail closed to production.
  }

  return PRODUCTION_REFERRAL_URL;
}

const TRIIBE_GRANTS_PORTAL_URL = resolveReferralUrl();

export const metadata: Metadata = {
  title: "TRIIBE Grants | Find and Pursue Funding",
  description:
    "Search vetted grants, understand eligibility, and build stronger applications through TRIIBE's GrantAuthority portal.",
  alternates: {
    canonical: "https://www.triibe.org/grants",
  },
  openGraph: {
    title: "TRIIBE Grants | Find and Pursue Funding",
    description:
      "A TRIIBE-branded path to free grant search, eligibility insight, and application support.",
    url: "https://www.triibe.org/grants",
  },
};

const features = [
  {
    icon: Search,
    title: "Search with confidence",
    description: "Explore vetted grant opportunities and review the original source before you invest time.",
  },
  {
    icon: BadgeCheck,
    title: "Understand your fit",
    description: "See the requirements, timing, and eligibility signals that shape a stronger go-or-no-go decision.",
  },
  {
    icon: Sparkles,
    title: "Build stronger applications",
    description: "Move from discovery into a guided workspace when you are ready to pursue an opportunity.",
  },
];

const steps = [
  {
    number: "01",
    title: "Start with TRIIBE",
    description: "Begin here on triibe.org, then continue to the secure TRIIBE Grants account flow.",
  },
  {
    number: "02",
    title: "Create your account",
    description: "Create a free account and begin searching for opportunities.",
  },
  {
    number: "03",
    title: "Keep your TRIIBE benefit",
    description: "Save 20% on your first three monthly payments or on the full first year when you pay annually.",
  },
];

export default function GrantsPage() {
  return (
    <main className="min-h-screen bg-white text-[#002c19]">
      <Header />

      <section className="relative overflow-hidden bg-[#002c19] px-4 pb-20 pt-28 text-white md:pb-28 md:pt-36">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_15%,#ffffff_0,transparent_24%),radial-gradient(circle_at_80%_80%,#7fbf9b_0,transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]">
              TRIIBE founder access
            </div>
            <h1 className="mt-6 max-w-[720px] text-4xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              Find funding with more confidence.
            </h1>
            <p className="mt-6 max-w-[660px] text-lg leading-8 text-white/80 md:text-xl">
              Search vetted grants for free, understand fit faster, and build stronger applications through TRIIBE&apos;s GrantAuthority portal.
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={TRIIBE_GRANTS_PORTAL_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-base font-bold text-[#002c19] transition-colors hover:bg-[#edf4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Create your free account
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <p className="max-w-[340px] text-sm leading-6 text-white/70">
                Free account. Save 20% for your first 3 months, or 20% on the full first year when paid annually.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/20 bg-white p-8 shadow-2xl shadow-black/20 sm:p-10">
            <Image
              src="/images/home/TRIIBEGrants.png"
              alt="TRIIBE Grants"
              width={600}
              height={150}
              priority
              className="mx-auto h-auto w-full max-w-[430px] object-contain"
            />
            <div className="mt-8 border-t border-[#002c19]/15 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#426354]">Powered by GrantAuthority</p>
              <p className="mt-3 text-base leading-7 text-[#234638]">
                One secure place to discover opportunities, evaluate eligibility, and move your funding work forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">Built for the funding journey</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-5xl">From opportunity to application</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-[#002c19]/20 bg-[#f7faf8] p-7 md:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#002c19] text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-[#496157]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f5f2] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1050px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">How it works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.025em] md:text-5xl">One link. Three simple steps.</h2>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="text-center">
                <span className="text-5xl font-black text-[#002c19]/15">{step.number}</span>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#496157]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-[760px]">
          <h2 className="text-3xl font-bold tracking-[-0.025em] md:text-5xl">Ready to find your next opportunity?</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-[#496157]">
            Enter through TRIIBE to keep your founder access and partner benefit connected from signup through checkout.
          </p>
          <a
            href={TRIIBE_GRANTS_PORTAL_URL}
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#002c19] px-9 py-4 text-lg font-bold text-white transition-colors hover:bg-[#1c5945] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002c19]"
          >
            Create your free account
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <p className="mx-auto mt-6 max-w-[650px] text-xs leading-5 text-[#667a70]">
            GrantAuthority operates the account, grant-search, and billing experience. Following this partner link lets GrantAuthority attribute the journey to TRIIBE. TRIIBE receives aggregate referral performance, never payment-card details.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
