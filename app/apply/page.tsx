import type { Metadata } from "next";
import ApplyClient from "./ApplyClient";

export const metadata: Metadata = {
  title: "Apply To Grow Your Nonprofit | TRIIBE",
  description:
    "Apply to TRIIBE’s fellowship to transition from a 'youth' nonprofit to an established one. ",
  openGraph: {
    title: "Apply To Grow Your Nonprofit | TRIIBE",
    description:
      "Apply to TRIIBE’s fellowship to transition from a 'youth' nonprofit to an established one. ",
    url: "https://www.triibe.org/apply",
  },
  alternates: {
    canonical: "https://www.triibe.org/apply",
  },
};

export default function Page() {
  return <ApplyClient />;
}
