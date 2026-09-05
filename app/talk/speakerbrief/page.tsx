import type { Metadata } from "next";
import SpeakerBriefClient from "./SpeakerBriefClient";

export const metadata: Metadata = {
  title: "Nonprofit Speaker Guide | TRIIBE Talk",
  description:
    "Prepare for your TRIIBE Talk with speaker guidance, storytelling tips, and a templatized run of show.",
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