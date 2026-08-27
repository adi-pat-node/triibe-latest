import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  Compass,
  ExternalLink,
  FileCheck2,
  Megaphone,
  Network,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LiveGrantMetrics from "@/components/grants/live-grant-metrics";

// TRIIBE owns this landing page. GrantAuthority receives only the outbound
// referral and handles the secure account, search, application, and billing flow.
const PRODUCTION_REFERRAL_URL = "https://www.grantauthority.org/r/triibe";
const TRIIBE_GRANTS_SIGN_IN_URL = "https://www.grantauthority.org/signin?next=%2Ftriibe%2Fworkspace";

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
  title: "TRIIBE Grants | Make Your Mission Fundable",
  description:
    "TRIIBE Grants helps next-generation nonprofit founders find source-backed opportunities and move from discovery to stronger applications.",
  alternates: { canonical: "https://www.triibe.org/grants" },
  openGraph: {
    title: "TRIIBE Grants | Make Your Mission Fundable",
    description:
      "Built for next-generation nonprofit founders: credible opportunities, clear eligibility, and a stronger path to application.",
    url: "https://www.triibe.org/grants",
  },
};

const features = [
  {
    icon: Compass,
    title: "See the full field",
    description:
      "Search live opportunities across public and philanthropic sources without starting from a blank browser tab.",
  },
  {
    icon: BadgeCheck,
    title: "Know what fits",
    description:
      "Compare eligibility, deadlines, award ranges, and source evidence before your team invests its time.",
  },
  {
    icon: FileCheck2,
    title: "Move with discipline",
    description:
      "Save strong opportunities, organize requirements, and carry the work forward into a guided application workspace.",
  },
];

const steps = [
  { number: "01", title: "Find", description: "Search by mission, population, place, program, or funding need." },
  { number: "02", title: "Qualify", description: "Review fit, timing, requirements, and the original source before pursuing." },
  { number: "03", title: "Apply", description: "Turn a qualified opportunity into an organized, stronger submission." },
];

const trustPoints = [
  { icon: Search, label: "Free grant search" },
  { icon: ExternalLink, label: "Primary-source links" },
  { icon: BadgeCheck, label: "No fee on grant awards" },
  { icon: ShieldCheck, label: "TRIIBE member pricing" },
];

const ecosystemPillars = [
  {
    icon: CircleDollarSign,
    title: "Funding",
    description: "Search verified opportunities at no cost, with no percentage-based fee on the grants you receive.",
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Build alongside a community that understands the realities of launching and growing a nonprofit organization.",
  },
  {
    icon: Megaphone,
    title: "Visibility",
    description: "Connect the funding journey to TRIIBE I00, the founder community, and the annual Next Gen Summit.",
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
              TRIIBE Grants
            </p>
            <h1 className="mt-6 max-w-[720px] text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Make your mission fundable.
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-white/80 md:text-xl">
              Built for next-generation nonprofit founders, TRIIBE Grants brings live, source-backed opportunities and a clear path from discovery to stronger applications.
            </p>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={TRIIBE_GRANTS_PORTAL_URL}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-7 py-3 text-base font-bold text-[#002c19] transition-colors hover:bg-[#edf4f0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Search grants free
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={TRIIBE_GRANTS_SIGN_IN_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/45 px-7 py-3 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Sign in
              </a>
            </div>
            <p className="mt-3 text-sm font-semibold text-white/80">Free to search. No card required.</p>
            <p className="mt-5 max-w-[650px] text-sm leading-6 text-white/65">
              TRIIBE members save 20% on the first three monthly payments—or 20% on the full first year when paid annually.
            </p>
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
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#426354]">Funding infrastructure for nonprofit innovators</p>
              <p className="mt-3 text-base leading-7 text-[#234638]">
                Credible opportunities, clearer decisions, and a working path from search to submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002c19]/10 bg-[#f7faf8] px-4 py-7" aria-label="Trust commitments">
        <div className="mx-auto grid max-w-[1200px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div className="flex items-center gap-3 text-sm font-semibold text-[#234638]" key={label}>
              <Icon className="h-4 w-4 shrink-0 text-[#547064]" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f0f5f2] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">The funding landscape, live</p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] md:text-5xl">Opportunity you can measure.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#496157]">
              These figures reflect TRIIBE&apos;s verified grants network. They are refreshed from source-backed records and withheld whenever the data is incomplete or outdated.
            </p>
          </div>
          <LiveGrantMetrics />
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">Why TRIIBE Grants</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] md:text-5xl">
              Capital should not be the reason progress stalls.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#496157]">
              TRIIBE is building the startup engine the nonprofit sector has been missing. TRIIBE Grants brings that infrastructure to funding: credible opportunities, clear eligibility, primary-source evidence, and the tools to move from search to submission.
            </p>
          </div>
          <div className="grid gap-5">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-[#002c19]/15 bg-[#f7faf8] p-7 md:p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#002c19] text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-base leading-7 text-[#496157]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f5f2] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] rounded-[28px] bg-[#002c19] p-8 text-white shadow-xl shadow-[#002c19]/10 sm:p-10 md:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Beyond the Hundred</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.035em] md:text-5xl">
              Funding is one part of the TRIIBE network.
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/70 lg:justify-self-end">
              Rooted in TRIIBE&apos;s work with next-generation nonprofit founders and open to mission-driven organizations across the sector.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ecosystemPillars.map(({ icon: Icon, title, description }) => (
              <article className="rounded-2xl border border-white/15 bg-white/[0.06] p-6" key={title}>
                <Icon className="h-5 w-5 text-white/75" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002c19] px-4 py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1050px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">How it works</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.035em] md:text-6xl">Find. Qualify. Apply.</h2>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t border-white/20 pt-6">
                <span className="text-sm font-bold text-white/45">{step.number}</span>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-[820px]">
          <h2 className="text-4xl font-bold tracking-[-0.035em] md:text-6xl">Good missions deserve access to capital.</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-8 text-[#496157]">
            Begin with a free search. Build the evidence, discipline, and momentum to pursue the right opportunity.
          </p>
          <a
            href={TRIIBE_GRANTS_PORTAL_URL}
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#002c19] px-9 py-4 text-lg font-bold text-white transition-colors hover:bg-[#1c5945] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002c19]"
          >
            Start searching free
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <p className="mx-auto mt-6 max-w-[700px] text-xs leading-5 text-[#667a70]">
            Following this link securely connects your signup and eligible checkout savings to TRIIBE. TRIIBE receives aggregate referral performance, never payment-card details.
          </p>
        </div>
      </section>

      <section className="border-y border-[#002c19]/10 bg-[#f0f5f2] px-4 py-14">
        <div className="mx-auto flex max-w-[1000px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-[#547064]" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#547064]">For foundations and networks</p>
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] md:text-3xl">Bring TRIIBE Grants to your community.</h2>
            <p className="mt-3 text-sm leading-6 text-[#496157]">
              Equip a cohort, portfolio, or regional network with a credible path to funding discovery and application readiness.
            </p>
          </div>
          <a
            href="mailto:partnerships@triibe.org?subject=TRIIBE%20Grants%20partnership"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-[#002c19]/25 bg-white px-6 py-3 text-sm font-bold text-[#002c19] hover:bg-[#f7faf8]"
          >
            Bring TRIIBE Grants to your network
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
