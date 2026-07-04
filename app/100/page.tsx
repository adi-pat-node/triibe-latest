import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/triibe100/Hero";
import ZoneSection from "@/components/triibe100/ZoneSection";
import { zones } from "@/lib/triibe100/zones";
import { founders } from "@/lib/triibe100/founders";

export const metadata = {
  title: "TRIIBE 100 | The Global List of Nonprofit Innovators Under 30",
  description:
    "Discover TRIIBE 100, the definitive list recognizing nonprofit innovators under 30 driving social change.",
  alternates: {
    canonical: "https://www.triibe.org/100",
  },
};

export default function Triibe100Page() {
  return (
    <div style={{ background: "#002C19" }}>
      <Header />
      <Hero />
      {zones.map((zone, i) => (
        <ZoneSection
          key={zone.id}
          zone={zone}
          founders={founders.slice(i * 10, i * 10 + 10)}
          isFirst={i === 0}
        />
      ))}
      <Footer />
    </div>
  );
}
