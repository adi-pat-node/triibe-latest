"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronLeft, ChevronRight, Bell, Play } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/cta";
import MediaEventsList from "@/components/mediaEventsList";

const mediaCards = [
  {
    id: "podcasts",
    title: " Latest podcast",
    image: "/images/media/podcastLatest.jpg",
    badge: "Latest episode",
    heading:
      "Why the Non-Profit Model is Broken and How Triibe is Fixing It with Kyle Matthys",
    description:
      "Kyle Matthys, Founder and CEO of TRIIBE, speaks about how his cause inspires young people to develop their skills, connect with their communities, and take action.",
    buttons: [
      {
        type: "link",
        text: "Watch",
        href: "https://youtu.be/5tjyws4mq-E?si=0lc8YOvT9BTDog4t",
      },
    ],
  },
  {
    id: "workshops",
    title: "Latest TRIIBE Talk",
    image: "/images/media/archive/Workshop16.jpg",
    badge: "Latest workshop",
    heading:
      "Nancy Bonges on first-generation wealth building at William Blair",
    description:
      "Watch our latest workshop session with industry leaders and experts as they share insights.",
    buttons: [
      {
        type: "link",
        text: "Watch",
        href: "https://www.youtube.com/watch?v=-TY4Iz5BNxg",
      },
    ],
  },
  {
    id: "newsletter",
    title: "TRIIBUNE Newsletter",
    image: "/images/media/archive/March_Newsletter.jpg",
    badge: "March 2026",
    heading: "Monthly Update | March 2026",
    description:
      "100+ Changemakers. One Room. We brought together 100+ attendees for the Billion Dollar Impact Summit in NYC.",
    buttons: [
      {
        type: "link",
        text: "Read",
        href: "https://blog.triibe.org/p/monthly-update-march-2026",
      },
    ],
  },
];

const MediaPage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <main>
      <Header />

      {/* Media Cards Section */}
      <section className="pt-32 pb-4 px-4 md:px-12 lg:px-50 bg-[#3036411A]">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaCards.map((card) => {
              if (card.id === "workshops") {
                return (
                  <div
                    key={card.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <iframe
                      src="https://www.instagram.com/reel/DXu0db1CNlp/embed"
                      className="w-full h-[520px] md:h-[570px] "
                      loading="lazy"
                    />
                  </div>
                );
              }

              return (
                <div
                  key={card.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col"
                >
                  {/* Title */}
                  <div className="p-6 pb-0">
                    <h3 className="font-bold text-black text-2xl mb-4 text-center">
                      {card.title}
                    </h3>
                  </div>

                  {/* Image */}
                  <div className="px-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#3036411A] rounded mb-4">
                        <span className="font-semibold text-black text-sm">
                          {card.badge}
                        </span>
                      </div>

                      <h4 className="font-semibold text-black text-lg mb-3">
                        {card.heading}
                      </h4>

                      <p className="font-normal text-[#495565] text-sm leading-relaxed mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      {card.buttons.map((btn, index) => {
                        if (btn.type === "modal") {
                          return (
                            <button
                              key={index}
                              onClick={() => setShowNewsletter(true)}
                              className="px-6 py-2 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base inline-flex items-center justify-center cursor-pointer"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                            </button>
                          );
                        }

                        return (
                          <a
                            key={index}
                            href={btn.href}
                            target="_blank"
                            className={`${
                              card.buttons.length > 1 ? "flex-1" : "w-full"
                            } px-6 py-3 bg-[#1C5945] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center justify-center`}
                          >
                            {btn.text}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Archive Link */}
          <div className="text-center pt-16 pb-16">
            <Link
              href="/media/archive"
              className="inline-block px-8 py-4 bg-[#1C5945] text-white font-bold hover:shadow-lg border rounded-[12px]"
            >
              View complete archive
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MediaPage;
