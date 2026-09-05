import type { Metadata } from "next";
import TriibeTalkClient from "./TriibeTalkClient";

export const metadata: Metadata = {
  title: "Nonprofit Stories, Events & Interviews | TRIIBE",
  description:
    "TRIIBE Talks are intergenerational conversations featuring next-gen voices, developed with the Founder of TEDx on TRIIBE's legacy board.",
  alternates: {
    canonical: "https://www.triibe.org/talk",
  },
};

export default function Page() {
  return <TriibeTalkClient />;
}
