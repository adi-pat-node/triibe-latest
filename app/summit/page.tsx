import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "Annual Gathering for Next-Gen Nonprofit Founders | TRIIBE",
  description:
    "The TRIIBE Summit brings together nonprofit founders under 30 for a day of community, conversation, and credibility. Join the next generation building what's next.",
  alternates: {
    canonical: "https://www.triibe.org/summit",
  },
};

export default function Page() {
  return <SummitClient />;
}
