import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "TRIIBE Summit | Next-Gen Changemaker Summit 2026",
  description:
    "Join the TRIIBE Summit, September 11–13, 2026: a VIP gala, TRIIBE Talks, and a founder workshop. Buy tickets.",
  alternates: {
    canonical: "https://www.triibe.org/summit",
  },
};

export default function Page() {
  return <SummitClient />;
}
