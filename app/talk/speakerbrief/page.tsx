import type { Metadata } from "next";
import SpeakerBriefClient from "./SpeakerBriefClient";

export const metadata: Metadata = {
  title: "TRIIBE Talk Speaker Brief | Guidelines & Preparation",
  description:
    "Prepare to speak at a TRIIBE Talk with our speaker guidelines, event day schedule, and discussion themes. Get ready.",
  alternates: {
    canonical: "https://www.triibe.org/talk/speakerbrief",
  },
};

interface PageProps {
  searchParams: Promise<{
    submission?: string;
  }>;
}

export default async function SpeakerBriefPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return (
    <SpeakerBriefClient
      isSubmissionSuccess={params.submission === "success"}
    />
  );
}