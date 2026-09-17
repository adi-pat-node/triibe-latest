import type { Metadata } from "next";
import SummitClient from "./SummitClient";

export const metadata: Metadata = {
  title: "Next-Gen Nonprofit Founders Summit | TRIIBE",
  description:
    "Join TRIIBE’s Next-Gen summit to meet the worlds 100 leading nonprofit founders under 30.",
  alternates: {
    canonical: "https://www.triibe.org/summit",
  },
};

export default function Page() {
  return <SummitClient />;
}
