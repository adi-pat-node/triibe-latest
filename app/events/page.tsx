"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  Share,
  Share2,
  ChevronDown,
} from "lucide-react";

// 1. Data Structure
const MONTHLY_EVENTS: Record<string, any[]> = {
  "January 2026": [
    {
      id: 0,
      title: "TRIIBE Fundraising Mixer",
      date: "Saturday, Feb 28",
      time: "10:00 AM – 6:30 PM",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Jan.png",
      isPast: true,
      footerText: "This event ended 30 days ago",
    },
  ],
  "February 2026": [
    {
      id: 1,
      title: "Billion Dollar Impact: Next Gen Changemakers",
      date: "Saturday, Feb 28",
      time: "10:00 AM – 6:30 PM",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Feb.jpg",
      status: "open",
      lumaUrl: "https://luma.com/7zynhb71",
    },
    {
      id: 2,
      title: "Billion Dollar Impact: Next Gen Changemakers",
      date: "Saturday, Feb 28",
      time: "10:00 AM – 6:30 PM",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Feb.jpg",
      status: "closed",
    },
  ],
  "March 2026": [],
};

const page = () => {
  // Helper to get current month in "Month Year" format (e.g., "February 2026")
  const getFormattedCurrentMonth = () => {
    const now = new Date();
    return now.toLocaleString("en-US", { month: "long", year: "numeric" });
  };
  const months = Object.keys(MONTHLY_EVENTS);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const autoMonth = getFormattedCurrentMonth();
    return months.includes(autoMonth) ? autoMonth : months[0];
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentIndex = months.indexOf(currentMonth);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentMonth(months[currentIndex - 1]);
  };

  const handleNext = () => {
    if (currentIndex < months.length - 1)
      setCurrentMonth(months[currentIndex + 1]);
  };

  const currentEvents = MONTHLY_EVENTS[currentMonth] || [];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section (Existing) */}

      <section className="pt-32 pb-20 px-4 md:px-50 bg-white ">
        {/* ... (Your existing Hero code remains the same) */}
        <div className=" max-w-260 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center ">
            <div>
              <h1 className="font-bold text-black text-4xl md:text-4xl mb-6 ">
                Connecting Youth Leaders with the Resources to Scale Impact
              </h1>
              <p className="font-normal text-[#495565] text-gl mb-8 leading-relaxed">
                TRIIBE hosts convening experiences that bring together youth
                nonprofit founders, experienced mentors, funders, and partners
                to build meaningful connections and drive social change.
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-center ">
                <a
                  href="/partner"
                  className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold"
                >
                  Partner / Sponsor
                </a>
                <a
                  href="#updates"
                  className="px-6 py-3 bg-[#1C5945] text-white rounded hover:bg-[#003d24] transition-colors font-semibold"
                >
                  Get Updates
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 max-w-100 ">
              <div className="relative aspect-square rounded-tl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-1.jpg"
                  alt="1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-tr-4xl overflow-hidden">
                <Image
                  src="/images/events/newImg.jpg"
                  alt="2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-bl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-2.jpg"
                  alt="3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-br-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-4.jpg"
                  alt="4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 md:px-50 bg-gray-50">
        <div className="max-w-260 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 gap-4">
            <h2 className="text-4xl font-bold text-black ">
              {currentMonth.split(" ")[0]} Events
            </h2>
            <div className="flex items-center border border-gray-200 rounded-lg p-1">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="p-2 disabled:opacity-20"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-[180px] px-4 py-1 font-medium"
                >
                  {currentMonth}{" "}
                  <ChevronDown size={16} className="ml-2 text-gray-400" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-full bg-white border border-gray-100 rounded-lg shadow-xl z-50 overflow-hidden">
                    {months.map((m) => (
                      <button
                        key={m}
                        className="w-full px-4 py-3 text-sm hover:bg-gray-50 text-center"
                        onClick={() => {
                          setCurrentMonth(m);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={handleNext}
                disabled={currentIndex === months.length - 1}
                className="p-2 disabled:opacity-20"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {currentEvents.length > 0 ? (
              currentEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm transition-shadow"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-black">
                            {event.title}
                          </h3>
                          {event.isPast && (
                            <span className="px-3 py-0.5 bg-gray-100 text-[#8A919D] text-[10px] font-bold rounded-full uppercase tracking-wider">
                              Past Event
                            </span>
                          )}
                        </div>

                        <div className="space-y-2">
                          {/* Date and Time Row */}
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#495565]">
                            <div className="flex items-center gap-2 whitespace-nowrap">
                              <Calendar size={14} className="text-gray-400" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2 whitespace-nowrap">
                              <Clock size={14} className="text-gray-400" />
                              <span>{event.time}</span>
                            </div>
                          </div>

                          {/* Location Row (Always below) */}
                          <div className="flex items-center gap-2 text-sm text-[#495565]">
                            <MapPin size={14} className="text-gray-400" />
                            <span>{event.location}</span>
                          </div>

                          {/* Past Event Footer Text */}
                          {event.footerText && (
                            <p className="text-sm text-gray-400 pt-1">
                              {event.footerText}
                            </p>
                          )}
                        </div>
                      </div>

                      {!event.isPast && (
                        <div className="flex items-center gap-4 w-full md:w-auto">
                          <button className="p-3 text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                            <Share size={20} className="text-black" />
                          </button>
                          {event.status === "open" ? (
                            <a
                              href={event.lumaUrl}
                              target="_blank"
                              className="w-[180px] py-3 bg-[#052319] text-white rounded-xl font-bold text-center transition-colors"
                            >
                              Register
                            </a>
                          ) : (
                            <button
                              disabled
                              className="w-[180px] py-3 bg-[#8A919D] text-white rounded-xl font-bold cursor-not-allowed text-center"
                            >
                              Registration Closed
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              /* March Scenario: Empty State */
              <div className="p-12 border border-gray-100 rounded-xl bg-white">
                <h3 className="text-2xl font-normal text-black mb-4">
                  No events for now
                </h3>
                <p className="text-[#495565]">
                  Keep visiting this page for upcoming events
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default page;
