import type { Metadata } from "next";
import ProgramClient from "./ProgramClient";

export const metadata: Metadata = {
  title: "Nonprofit Programs for Students | TRIIBE",
  description:
    "Explore nonprofit programs for students including fellowships, mentorship, and initiatives designed for next-gen changemakers.",
  alternates: {
    canonical: "https://www.triibe.org/fellowship",
  },
};

export default function Page() {
  return <ProgramClient />;
}
