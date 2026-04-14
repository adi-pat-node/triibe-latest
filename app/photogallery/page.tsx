import type { Metadata } from "next";
import PhotoGalleryClient from "./PhotoGalleryClient";

export const metadata: Metadata = {
  title: "Nonprofit Event Photos | TRIIBE Gallery",
  description: "Explore nonprofit event photos featuring student leaders, workshops, and community initiatives led by next-gen changemakers.",
};

export default function Page() {
  return <PhotoGalleryClient />;
}