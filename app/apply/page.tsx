import type { Metadata } from "next";
import ApplyClient from "./ApplyClient";

export const metadata: Metadata = {
  title: "Apply to the TRIIBE Fellowship | TRIIBE",
  description:
    "Are you a nonprofit founder aged 20–25 with an active 501(c)(3)? Apply to the Spring 2026 TRIIBE Fellowship for $40K in unrestricted funding, mentorship, and a 3-year community. Applications open now.",
  openGraph: {
    title: "Apply to the TRIIBE Fellowship | TRIIBE",
    description:
      "Are you a nonprofit founder aged 20–25 with an active 501(c)(3)? Apply to the Spring 2026 TRIIBE Fellowship for $40K in unrestricted funding, mentorship, and a 3-year community. Applications open now.",
    url: "https://www.triibe.org/apply",
  },
  alternates: {
    canonical: "https://www.triibe.org/apply",
  },
};

export default function Page() {
  return <ApplyClient />;
}
