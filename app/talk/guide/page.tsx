import GuideClient from "./GuideClient";

export const metadata = {
  title: "TRIIBE Talk Guide | Host a Talk in Your Community",
  description:
    "Find everything you need to host a TRIIBE Talk, from format and requirements to planning and templates. Get started.",
  alternates: {
    canonical: "https://www.triibe.org/talk/guide",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
