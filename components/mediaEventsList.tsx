"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  MapPin,
  Calendar,
  Clock,
  Share,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MONTHLY_EVENTS: Record<string, any[]> = {
  "January 2026": [
    {
      id: 0,
      title: "TRIIBE Fundraising Mixer",
      isoStart: "2026-01-24T15:00:00Z",
      isoEnd: "2026-01-24T23:30:00Z",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Jan.png",
      isPast: true,
      type: "IN-PERSON",
      footerText: "This event ended 30 days ago",
      slug: "",
    },
  ],
  "February 2026": [
    {
      id: 1,
      title:
        "Silent Auction Training: Next Gen Changemakers Summit Preparation",
      isoStart: "2026-02-23T19:00:00Z",
      isoEnd: "2026-02-23T20:00:00Z",
      location: "Virtual",
      image: "/images/events/event3.png",
      status: "closed",
      type: "VIRTUAL",
      lumaUrl: "https://luma.com/mef8t5cw",
      slug: "",
    },
    {
      id: 2,
      title: "Billion Dollar Impact: Next Gen Changemakers",
      isoStart: "2026-02-28T15:00:00Z",
      isoEnd: "2026-02-28T23:30:00Z",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Feb.jpg",
      status: "closed",
      type: "IN-PERSON",
      lumaUrl: "https://luma.com/7zynhb71",
      slug: "/events/eventlist",
    },
  ],
  "March 2026": [
    // {
    //   id: 3,
    //   title:
    //     "TRIIBE TALK | Navigating Partnerships x Augmented Media Development",
    //   isoStart: "2026-03-04T22:30:00Z",
    //   isoEnd: "2026-03-04T23:30:00Z",
    //   location: "Virtual",
    //   image: "/images/media/UpcomingEvent1.jpg",
    //   status: "closed",
    //   type: "VIRTUAL",
    //   lumaUrl: "https://luma.com/4akmpnxv",
    // },
    {
      id: 4,
      title:
        "TRIIBE Talk: The Future Of Education, Powering Entrepreneurship And Philentrepreneurship",
      isoStart: "2026-03-12T22:00:00Z", // 6:00 PM EDT
      isoEnd: "2026-03-13T01:30:00Z", // 9:30 PM EDT
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/event3.avif",
      status: "open",
      type: "IN-PERSON",
      lumaUrl: "https://luma.com/pvrqm3ok",
      slug: "",
    },
    {
      id: 5,
      title: "Next-Gen Changemakers Virtual Auction",
      isoStart: "2026-03-20T17:30:00Z", // 1:30 PM EDT
      isoEnd: "2026-03-20T19:30:00Z", // 3:30 PM EDT
      location: "Virtual",
      image: "/images/events/event4_Mar20th.avif",
      status: "open",
      type: "VIRTUAL",
      lumaUrl: "https://luma.com/wsbszr4z",
      slug: "",
    },
    {
      id: 6,
      title: "TRIIBE x Learning Planet Institute Paris Reception",
      isoStart: "2026-03-31T16:30:00Z",
      isoEnd: "2026-03-31T18:30:00Z",
      location: "Learning Planet Institue, Paris, Ile-de-France",
      image: "/images/events/event5_Mar31st.avif",
      status: "open",
      type: "IN-PERSON",
      lumaUrl: "https://luma.com/mraevyda",
      slug: "",
    },
  ],
};

export default function MediaEventsList() {
  const router = useRouter();
  const [viewDate, setViewDate] = useState(new Date());
  const [calendarYear, setCalendarYear] = useState(2026);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [filter, setFilter] = useState("ALL EVENTS");
  const [isMounted, setIsMounted] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonthName = months[viewDate.getMonth()];
  const selectedYear = viewDate.getFullYear();
  const selectedMonthYear = `${currentMonthName} ${selectedYear}`;

  const monthEvents = MONTHLY_EVENTS[selectedMonthYear] || [];
  const filteredEvents =
    filter === "ALL EVENTS"
      ? monthEvents
      : monthEvents.filter((event) => event.type === filter);

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(monthIndex);
    newDate.setFullYear(calendarYear);
    setViewDate(newDate);
    setIsCalendarOpen(false);
  };

  const formatDisplayRange = (startStr: string, endStr: string) => {
    if (!isMounted) return { date: "Loading...", localRange: "..." };

    const start = new Date(startStr);
    const end = new Date(endStr);

    const date = start.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });

    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "2-digit",
    };

    const localStart = start.toLocaleTimeString("en-US", timeOptions);
    const localEnd = end.toLocaleTimeString("en-US", timeOptions);

    return {
      date,
      localRange: `${localStart} – ${localEnd}`,
    };
  };

  return (
    <section className="py-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <h2 className="text-4xl font-bold text-black">
            {currentMonthName} Events
          </h2>

          <div className="flex flex-col items-end gap-4 w-full md:w-auto">
            <div className="relative" ref={calendarRef}>
              <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="p-2.5 bg-white border border-gray-100 rounded-xl shadow-sm"
              >
                <Calendar size={22} className="text-black" />
              </button>

              {isCalendarOpen && (
                <div className="absolute top-full mt-4 right-0 w-[90vw] max-w-[320px] md:w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 z-[100] p-6">
                  <div className="flex justify-between items-center mb-6">
                    <button
                      onClick={() => setCalendarYear(calendarYear - 1)}
                      className="text-gray-400 hover:text-black"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-bold text-[#303641] text-xl">
                      {calendarYear}
                    </span>
                    <button
                      onClick={() => setCalendarYear(calendarYear + 1)}
                      className="text-gray-400 hover:text-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 border-l border-t border-gray-100">
                    {months.map((month, idx) => (
                      <button
                        key={month}
                        onClick={() => handleMonthSelect(idx)}
                        className={`py-4 text-sm border-r border-b border-gray-100 transition-colors ${
                          idx === viewDate.getMonth() &&
                          selectedYear === calendarYear
                            ? "bg-[#303641] text-white font-bold"
                            : "text-[#495565] hover:bg-gray-50"
                        }`}
                      >
                        {month.substring(0, 3)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              {["ALL EVENTS", "VIRTUAL", "IN-PERSON"].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-colors ${
                    filter === type
                      ? "bg-[#1C5945] text-white"
                      : "bg-white text-[#495565] border border-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6 min-h-[200px]">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => {
              const timeData = formatDisplayRange(event.isoStart, event.isoEnd);
              return (
                <div
                  key={event.id}
                  onClick={() => (event.slug ? router.push(event.slug) : null)}
                  className={`p-6 border border-gray-100 rounded-xl bg-white shadow-sm transition-all group ${
                    event.slug ? "cursor-pointer hover:shadow-md" : ""
                  }`}
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
                    <div className="flex-grow flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-black">
                            {event.title}
                          </h3>
                          {event.isPast && (
                            <span className="px-3 py-0.5 bg-gray-100 text-[#8A919D] text-[10px] font-bold rounded-full uppercase">
                              Past Event
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#495565]">
                            <div className="flex items-center gap-2">
                              <Calendar size={14} className="text-gray-400" />
                              <span>{timeData.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-gray-400" />
                              <span>{timeData.localRange}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-[#495565]">
                            <MapPin size={14} className="text-gray-400" />
                            <span>{event.location}</span>
                          </div>
                          {event.isPast && event.footerText && (
                            <p className="text-sm text-gray-400 pt-1 italic">
                              {event.footerText}
                            </p>
                          )}
                        </div>
                      </div>

                      {!event.isPast && (
                        <div className="flex items-center gap-4 w-full md:w-auto">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (event.lumaUrl) {
                                navigator.clipboard.writeText(event.lumaUrl);
                                alert("Registration link copied to clipboard!");
                              }
                            }}
                            className="p-3 text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-50"
                            title="Copy Link"
                          >
                            <Share size={20} className="text-black" />
                          </button>
                          {event.status === "open" ? (
                            <a
                              href={event.lumaUrl || "#"}
                              target="_blank"
                              onClick={(e) => e.stopPropagation()}
                              className="w-full md:w-[180px] py-3 bg-[#002C19] text-white rounded-xl font-bold text-center"
                            >
                              Register
                            </a>
                          ) : (
                            <button
                              disabled
                              className="w-full md:w-[180px] py-3 bg-[#30364199] text-white rounded-xl font-bold cursor-not-allowed text-center"
                            >
                              Registration Closed
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-12 border border-gray-100 rounded-xl bg-white text-left flex flex-col justify-center min-h-[180px]">
              <h3 className="text-2xl font-normal text-black mb-4">
                No events for now
              </h3>
              <p className="text-[#495565]">Stay tuned for upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
