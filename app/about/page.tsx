import AboutClient from "./AboutClient";

export const metadata = {
  title: "Next-Gen for Next-Gen Nonprofit Founders | TRIIBE",
  description:
    "TRIIBE is the foundation built by next-gen, for next-gen. Learn how we fund, mentor, and connect nonprofit founders under 30 changing the world right now.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
