import type { Metadata } from "next";
import HostClient from "./HostClient";

export const metadata: Metadata = {
  title: "Nonprofit Interview & Host Guide | TRIIBE",
  description:
    "Use the TRIIBE Talk host guide to prepare nonprofit interviews, ask better questions, and spotlight founder stories.",
  alternates: {
    canonical: "https://www.triibe.org/talk/host",
  },
};

export default function HostPage() {
  return <HostClient />;
}