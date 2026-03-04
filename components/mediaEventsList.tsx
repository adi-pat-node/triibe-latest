"use client";

import React, { useState, useEffect, useRef } from "react";

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
    // {
    //   id: 0,
    //   title: "TRIIBE Fundraising Mixer",
    //   date: "Saturday, Jan 24",
    //   time: "10:00 AM – 6:30 PM",
    //   location: "Copacabana Nightclub, New York, New York",
    //   image: "/images/events/Jan.png",
    //   isPast: true,
    //   type: "IN-PERSON",
    //   footerText: "This event ended 30 days ago",
    // },
  ],
  "February 2026": [
    {
      id: 1,
      title:
        "Silent Auction Training: Next Gen Changemakers Summit Preparation",
      date: "Monday, February 23",
      time: "2:00 PM - 3:00 PM",
      location: "Zoom",
      image: "/images/events/event3.png",
      status: "closed",
      type: "VIRTUAL",
      lumaUrl: "https://luma.com/mef8t5cw",
    },
    {
      id: 2,
      title: "Billion Dollar Impact: Next Gen Changemakers",
      date: "Saturday, Feb 28",
      time: "10:00 AM – 6:30 PM",
      location: "Copacabana Nightclub, New York, New York",
      image: "/images/events/Feb.jpg",
      status: "closed",
      type: "IN-PERSON",
      lumaUrl: "https://luma.com/7zynhb71",
    },
  ],
  "March 2026": [
    {
      id: 3,
      title:
        "TRIIBE TALK | Navigating Partnerships x Augmented Media Development",
      date: "Wednesday, March 4",
      time: "5:30 PM - 6:30 PM EST",
      location: "YouTube",
      image: "/images/media/UpcomingEvent1.jpg",
      status: "open",
      type: "VIRTUAL",
      lumaUrl: "https://luma.com/4akmpnxv",
    },
  ],
};
export default function MediaEventsList() {
  const [viewDate, setViewDate] = useState(new Date());
  const [calendarYear, setCalendarYear] = useState(2026);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [filter, setFilter] = useState("ALL EVENTS");
  const calendarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
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

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = new Date(viewDate);
    newDate.setMonth(monthIndex);
    newDate.setFullYear(calendarYear);
    setViewDate(newDate);
    setIsCalendarOpen(false);
  };
  return (
    <>
      {/* Events Section */}
      <section className="py-20 px-4 md:px-25 lg:px-50 bg-white">
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
                          {month}
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
              filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm"
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
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock size={14} className="text-gray-400" />
                              <span>{event.time}</span>
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
                          <button className="p-3 text-gray-400 border border-gray-200 rounded-xl hover:bg-gray-50">
                            <Share size={20} className="text-black" />
                          </button>
                          {event.status === "open" ? (
                            <a
                              href={event.lumaUrl || "#"}
                              target="_blank"
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
              ))
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
    </>
  );
}
