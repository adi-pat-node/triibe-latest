import type { Metadata } from "next";
import TriibeTalkClient from "./TriibeTalkClient";

export const metadata: Metadata = {
  title: "Events & Conversations for Young Nonprofit Founders | TRIIBE",
  description:
    "TRIIBE Talks spotlight next-gen nonprofit founders through workshops, panels, and community conversations. Find an event or host one in your city.",
  alternates: {
    canonical: "https://www.triibe.org/talk",
  },
};

export default function Page() {
  return <TriibeTalkClient />;
}
