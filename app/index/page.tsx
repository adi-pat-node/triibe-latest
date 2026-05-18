import type { Metadata } from "next";
import IndexPage from "./IndexClient";

export const metadata: Metadata = {
  title: "TRIIBE Index | Nonprofit Sector Insights & Survey",
  description:
    "The TRIIBE Index is a dataset of the nonprofit sector built from direct input by the people working in it.",
  alternates: {
    canonical: "https://www.triibe.org/index",
  },
};

export default function Page() {
  return <IndexPage />;
}
