import type { Metadata } from "next";
import HostClient from "./HostClient";

export const metadata: Metadata = {
  title: "TRIIBE Talk Host | Submit Your Event Proposal",
  description:
    "Ready to host a TRIIBE Talk? Submit your information, event location, and speakers in one form. Apply now.",
  alternates: {
    canonical: "https://www.triibe.org/talk/host",
  },
};

export default function HostPage() {
  return <HostClient />;
}