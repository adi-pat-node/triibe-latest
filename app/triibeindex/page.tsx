import type { Metadata } from "next";
import IndexPage from "./IndexClient";

export const metadata: Metadata = {
  title: "Nonprofit Sector Insights & Survey | TRIIBE",
  description:
    "The TRIIBE Index is a dataset of the nonprofit sector built from direct input by those working in it — across all ages, roles, and stages. Helping TRIIBE and partners fund with data-driven precision.",
  alternates: {
    canonical: "https://www.triibe.org/index",
  },
};

export default function Page() {
  return <IndexPage />;
}
