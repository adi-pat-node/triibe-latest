import Header from "@/components/header";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const ProgramOverview = dynamic(() => import("@/components/programOverview"));
import TriibeGlobeWrapper from "@/components/TriibeGlobeWrapper";
const KeyStatistics = dynamic(() => import("@/components/keyStatistics"));
const Changemakers = dynamic(() => import("@/components/changemakers"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata = {
  title: "TRIIBE | Uniting Nonprofit Innovators & Investors",
  description:
    "TRIIBE unites next-gen nonprofit innovators and investors through fellowships, mentorship, and community.",
  alternates: {
    canonical: "https://www.triibe.org",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <ProgramOverview />
      <TriibeGlobeWrapper />
      <KeyStatistics />
      <Changemakers />
      <Footer />
    </div>
  );
}
