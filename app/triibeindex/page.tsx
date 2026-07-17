import type { Metadata } from "next";
import IndexPage from "./IndexClient";

export const metadata: Metadata = {
  title: "TRIIBE Index | Data-Driven Nonprofit Funding Insights",
  description:
    "The TRIIBE Index uses data to close nonprofit funding gaps. Take our survey or access advisory insights.",
  alternates: {
    canonical: "https://www.triibe.org/index",
  },
};

export default function Page() {
  return <IndexPage />;
}
