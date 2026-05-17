import type { Metadata } from "next";
import IndexPage from "../index/IndexClient"; // Imports your exact production client component

// Crucial: This prevents Google from indexing this test URL on your live domain
export const metadata: Metadata = {
  title: "TEST - TRIIBE Index Survey",
  description: "Internal production testing page for the TRIIBE Index.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function TestPage() {
  return <IndexPage />;
}