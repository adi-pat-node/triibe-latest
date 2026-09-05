import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ProgramClient from "./ProgramClient";

const Changemakers = dynamic(() => import("@/components/changemakers"));

export const metadata: Metadata = {
  title: "Nonprofit Founder Fellowship | TRIIBE",
  description:
    "Apply to TRIIBE’s fellowship to transition from a 'youth' nonprofit to an established one.",
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