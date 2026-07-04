import type { Metadata } from "next";
import TriibeTalkClient from "./TriibeTalkClient";

export const metadata: Metadata = {
  title: "TRIIBE Talk | Intergenerational Nonprofit Conversations",
  description:
    "TRIIBE Talks connects next-gen nonprofit innovators with leaders over 30 to exchange insights, experience, and ideas.",
  alternates: {
    canonical: "https://www.triibe.org/talk",
  },
};

export default function Page() {
  return <TriibeTalkClient />;
}
