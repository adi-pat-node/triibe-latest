import type { Metadata } from "next";
import ProgramClient from "./ProgramClient";

export const metadata: Metadata = {
  title: "TRIIBE Fellowship | Startup Dynamics for Nonprofit Innovators",
  description:
    "The TRIIBE Fellowship brings startup dynamics to the nonprofit sector. Apply now.",
  alternates: {
    canonical: "https://www.triibe.org/fellowship",
  },
};

export default function Page() {
  return <ProgramClient />;
}
