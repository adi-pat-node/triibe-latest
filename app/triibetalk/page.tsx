import type { Metadata } from "next";
import TriibeTalkClient from "./TriibeTalkClient";

export const metadata: Metadata = {
  title: "Talks for Next-Gen Changemakers | TRIIBE",
  description:
    "Join talks for next-gen changemakers featuring workshops, discussions, and insights from leaders empowering the next generation.",
};

export default function Page() {
  return <TriibeTalkClient />;
}
