import AboutClient from "./AboutClient";

export const metadata = {
  title: "Nonprofit for Next-Gen Founders | TRIIBE",
  description:
    "Learn about TRIIBE, a nonprofit for next-gen founders supporting student changemakers with resources, community, and long-term impact.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
