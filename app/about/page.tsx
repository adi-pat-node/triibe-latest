import AboutClient from "./AboutClient";

export const metadata = {
  title: "About TRIIBE | Empowering Next-Gen Nonprofit Innovators",
  description:
    "TRIIBE's global board, advisors & team providing institutional credibility, mentorship & networks to nonprofit founders.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
