import type { Metadata } from "next";
import MediaClient from "./MediaClient";

export const metadata: Metadata = {
  title: "Nonprofit Content for Students | TRIIBE",
  description:
    "Discover nonprofit content for students including podcasts, events, workshops, and insights for next-gen founders scaling impact.",
};

export default function Page() {
  return <MediaClient />;
}
