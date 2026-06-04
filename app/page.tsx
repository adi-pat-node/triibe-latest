import DeckSection from "@/components/deckSection";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import MissionStatement from "@/components/missionStatement";
import ProgramOverview from "@/components/programOverview";
import ApplicationProcess from "@/components/applicationProcess";
import FellowshipBenefits from "@/components/fellowshipBenefits";
import KeyStatistics from "@/components/keyStatistics";
import Changemakers from "@/components/changemakers";
import PostGraduationOutcomes from "@/components/postGraduationOutcomes";
import SponsorsAndPartners from "@/components/sponsorsAndPartners";
import ImpactMetrics from "@/components/impactMetrics";
import CTASection from "@/components/cta";
import OfficeMap from "@/components/officeMap";
import TriibeGlobeWrapper from "@/components/TriibeGlobeWrapper";

export const metadata = {
  title:
    "Undergraduate Nonprofit Fellowship & Grants for Founders Under 30 | TRIIBE",
  description:
    "TRIIBE funds and mentors nonprofit founders aged 20-25 — unrestricted grants, real mentorship, and a community of next-gen changemakers. Apply today.",
  alternates: {
    canonical: "https://www.triibe.org",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* <MissionStatement /> */}
      <ProgramOverview />
      {/* <DeckSection /> */}
      {/* <OfficeMap /> */}
      <TriibeGlobeWrapper />
      {/* <FellowshipBenefits /> */}
      <KeyStatistics />
      <Changemakers />
      {/* <PostGraduationOutcomes /> */}

      {/* <SponsorsAndPartners /> */}
      {/* <ImpactMetrics /> */}
      {/* <CTASection /> */}
      <Footer />
      {/* <Newsletter /> */}
    </div>
  );
}
