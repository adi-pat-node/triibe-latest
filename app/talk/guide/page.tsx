import GuideClient from "./GuideClient";

export const metadata = {
  title: "Nonprofit Storytelling & Talk Guide | TRIIBE",
  description:
    "Learn how to share your nonprofit story, prepare for a TRIIBE Talk, and communicate your social impact effectively.",
  alternates: {
    canonical: "https://www.triibe.org/talk/guide",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
