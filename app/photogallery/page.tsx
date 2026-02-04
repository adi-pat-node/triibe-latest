import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";

// 1. Define the data structure to keep the JSX clean
const GALLERY_SECTIONS = [
  {
    title: "World Economic Forum 2026",
    images: [
      { src: "/images/photogallery/photo-1.jpg", alt: "Event view" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Team meeting" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Discussion group" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Dinner event" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Event view" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Team meeting" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Discussion group" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Dinner event" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Event view" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Team meeting" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Discussion group" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Dinner event" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Event view" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Team meeting" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Discussion group" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Dinner event" },
    ],
  },
  {
    title: "Changemakers Summit 2025",
    images: [
      { src: "/images/photogallery/photo-1.jpg", alt: "Summit start" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Workshop" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Networking" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Closing ceremony" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Summit start" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Workshop" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Networking" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Closing ceremony" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Summit start" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Workshop" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Networking" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Closing ceremony" },
      { src: "/images/photogallery/photo-1.jpg", alt: "Summit start" },
      { src: "/images/photogallery/photo-2.jpg", alt: "Workshop" },
      { src: "/images/photogallery/photo-3.jpg", alt: "Networking" },
      { src: "/images/photogallery/photo-4.jpg", alt: "Closing ceremony" },
    ],
  },

  {
    title: "Our brand new NYC Office",
    images: [],
  },
  // Add more sections here easily...
];

const PhotoGallery = () => {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-4 px-4 md:px-50 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="font-bold text-black text-5xl md:text-6xl mb-8">
            Photo Gallery
          </h1>

          {GALLERY_SECTIONS.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mb-6">
              {/* Section Header */}
              <div className="flex justify-end mb-6">
                <p className="text-gray-600 font-medium">{section.title}</p>
              </div>

              {/* Photo Grid - Using your specific proportions */}
              <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr_0.8fr_1.2fr] gap-4">
                {section.images.map((image, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default PhotoGallery;
