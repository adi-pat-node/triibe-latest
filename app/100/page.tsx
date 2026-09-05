import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/triibe100/Hero";
import ZoneSection from "@/components/triibe100/ZoneSection";
import { zones } from "@/lib/triibe100/zones";
import { founders } from "@/lib/triibe100/founders";

export const metadata = {
  title: "The 100 Nonprofit Founders Under 30 to Watch | TRIIBE 100",
  description:
    "The annual index of 100 leading nonprofit founders under 30, TRIIBE measuring their social return on investment with Purposefy.",
  alternates: {
    canonical: "https://www.triibe.org/100",
  },
};

export default function Triibe100Page() {
  return (
    <div style={{ background: "#002C19" }}>
      <Header />
      <Hero />
      {zones.map((zone, i) => {
        const zoneFounders = founders.slice(i * 10, i * 10 + 10);

        if (zoneFounders.length === 0) return null;

        return (
          <ZoneSection
            key={zone.id}
            zone={zone}
            founders={zoneFounders}
            isFirst={i === 0}
          />
        );
      })}
      <Footer />
    </div>
  );
}
