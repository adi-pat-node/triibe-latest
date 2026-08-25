import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ProgramClient from "./ProgramClient";

const Changemakers = dynamic(() => import("@/components/changemakers"));

export const metadata: Metadata = {
  title: "TRIIBE Fellowship | Startup Dynamics for Nonprofit Innovators",
  description:
    "The TRIIBE Fellowship brings startup dynamics to the nonprofit sector. Apply now.",
  alternates: {
    canonical: "https://www.triibe.org/fellowship",
  },
};

export default function Page() {
  return (
    <>
      
      <ProgramClient />
      
      
    </>
  );
}