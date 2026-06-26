import Header from "@/components/header";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";
const ProgramOverview = dynamic(() => import("@/components/programOverview"));
import TriibeGlobeWrapper from "@/components/TriibeGlobeWrapper";
const KeyStatistics = dynamic(() => import("@/components/keyStatistics"));
const Changemakers = dynamic(() => import("@/components/changemakers"));
const Footer = dynamic(() => import("@/components/footer"));

export const metadata = {
  title: "TRIIBE | Funding Next-Gen Nonprofit Founders",
  description:
    "TRIIBE funds next-gen nonprofit founders in their 20s with fellowships, mentorship, and a global community of changemakers.",
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
