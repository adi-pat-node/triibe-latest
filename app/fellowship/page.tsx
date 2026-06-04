import type { Metadata } from "next";
import ProgramClient from "./ProgramClient";

export const metadata: Metadata = {
  title: "$40K Funding & Mentorship for Nonprofit Founders Ages 20–25 | TRIIBE",
  description:
    "The TRIIBE Fellowship provides $40K in unrestricted funding, quarterly mentorship, and community for registered nonprofit founders aged 20–25.",
  alternates: {
    canonical: "https://www.triibe.org/fellowship",
  },
};

export default function Page() {
  return <ProgramClient />;
}
