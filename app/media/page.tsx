import type { Metadata } from "next";
import MediaClient from "./MediaClient";

export const metadata: Metadata = {
  title: "TRIIBE Media | Youth Nonprofit Stories, TRIIBE Talks & Impact Content",
  description:
    "Watch TRIIBE Talks, discover youth nonprofit founders, and explore media content highlighting next-generation changemakers creating real impact globally.",
  alternates: {
    canonical: "https://www.triibe.org/media",
  },
};

export default function Page() {
  return <MediaClient />;
}
