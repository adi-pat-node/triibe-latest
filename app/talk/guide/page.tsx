import GuideClient from "./GuideClient";

export const metadata = {
  title: "TRIIBE Talk Guide | Host a Talk in Your Community",
  description:
    "A comprehensive guide to hosting a TRIIBE Talk in your community, featuring next-gen voices and intergenerational dialogue.",
  alternates: {
    canonical: "https://www.triibe.org/talk/guide",
  },
};

export default function GuidePage() {
  return <GuideClient />;
}
