import AboutClient from "./AboutClient";

export const metadata = {
  title: "Our Team And Global Reach | TRIIBE",
  description:
    "Learn more about TRIIBE's team, boards, and global reach, as well as how to get involved and start your own branch.",
  alternates: {
    canonical: "https://www.triibe.org/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
