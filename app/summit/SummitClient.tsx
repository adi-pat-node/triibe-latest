"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
/* import HeroSummit from "./heroSummit"; */
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";
import Script from "next/script";

const SummitPage = () => {
  // Run of the show schedule data matching the 2027 timeline document
  const scheduleDays = [
    /* {
      title: "Day 0, Thursday September 16th",
      badge: "Arrivals",
      location: "Arlo Hotel lobby & JFK / Newark Pickups",
      highlight: null,
      items: [
        {
          time: "8:00 AM",
          title: "Fellows land through the day",
          description:
            "JFK and Newark arrivals. Buddy pairs meet at the hotel.",
        },
        {
          time: "8:00 PM",
          title: "Open Dinner at the hotel",
          description: "Casual welcome dinner hosted by Kyle and Nawaf.",
        },
      ],
    }, */
    {
      title: "Day 1, Friday September 17th",
      badge: "The Cohort Day",
      location: "Rooftop Pavilion, Javits Center",
      highlight: {
        image: "/images/summit/friday-cohort.jpeg",
        label: "FELLOWS · EXCLUSIVE",
        name: "Cohort Day & Dinner Concert",
        description:
          "Founders only. Round table workshops spilling onto the farm terrace followed by an intimate evening dinner and private concert.",
        bullets: [
          "Rooftop Pavilion & Terrace",
          "Cohort workshops & fireside chats",
          "Farm to table dinner",
          "Private dinner concert",
        ],
      },
      items: [
        /* {
          time: "7:30 AM",
          title: "Breakfast at the hotel",
          description: "Buddy pairs walk to Javits together.",
        }, */
        {
          time: "8:30 AM",
          title: "Rooftop Pavilion Opening Remarks",
          /* description:
            "Kyle welcomes the cohort and sets the plan for the day.", */
        },
        {
          time: "9:00 AM",
          title: "Cohort workshops and fireside chats",
          /* description: "Round table sessions for founders on the terrace.", */
        },
        {
          time: "12:00 PM",
          title: "Terraced lunch",
          /* description:
            "Standing and scattered seating on the farm and orchard.",  */
        },
        {
          time: "1:00 PM",
          title: "Afternoon sessions and interactive workshops with guests",
          /* description: "Interactive workshops continue with invited guests.", */
        },
        /* {
          time: "5:00 PM",
          title: "Free period",
          description:
            "Fellows get to know one another. Room resets for seated dinner.",
        }, */
        {
          time: "6:30 PM",
          title: "TRIIBE 100 farm to table dinner with concert",
          /* description:
            "Farm to table dinner. Ambient lighting, no podium, no ask.", */
        },
        /* {
          time: "6:45 PM",
          title: "Dinner Remarks",
          description: "Kyle introduces the concert.",
        },
        {
          time: "6:50 PM",
          title: "Dinner Concert",
          description: "Celebrity artist performs live for TRIIBE.",
        },
        {
          time: "7:05 PM",
          title: "TRIIBE 100 dinner",
          description:
            "Dinner and intergenerational conversation across rounds of ten.",
        },
        {
          time: "9:30 PM",
          title: "Night ends",
          description: "Return to hotel before an early start.",
        }, */
      ],
    },
    {
      title: "Day 2, Saturday September 18th (Daytime)",
      badge: "The Public Day",
      location: "Javits Center Crystal Palace & Stages",
      highlight: {
        image: "/images/summit/javits-center.jpg",
        label: "SATURDAY · FORUM",
        name: "TRIIBE Talks & Supercar Showcase",
        description:
          "2,000 public attendees across seven simultaneous stages hosting TRIIBE Talks, plus the Crystal Palace supercar showcase.",
        bullets: [
          "7 parallel session rooms",
          "Supercar showcase in Crystal Palace",
          "Public networking & grab-and-go refreshments",
        ],
      },
      items: [
        /* {
          time: "6:30 AM",
          title: "Crew and AV call",
          description: "Seven rooms audio, projection, and recording checks.",
        },
        {
          time: "7:30 AM",
          title: "Staff and volunteer briefing",
          description: "Registration desks go live.",
        }, */
        {
          time: "8:30 AM",
          title: "Doors open to public",
          /* description: "Speakers check in. Doors open to public at 8:30 AM.", */
        },
        {
          time: "9:00 AM",
          title: "Block 1 - TRIIBE Talks",
          /* description: "Seven parallel sessions across the summit tracks.", */
        },
        { time: "9:30 AM", title: "15 minute break" },
        {
          time: "9:45 AM",
          title: "Block 2 - TRIIBE Talks",
          /* description: "Seven parallel sessions.", */
        },
        {
          time: "10:15 AM",
          title:
            "Refreshment break. Cars and activations in the Crystal Palace",
          /* description:
            "Included with day pass. Cars and hospitality in the Crystal Palace.", */
        },
        {
          time: "11:00 AM",
          title: "Block 3 - TRIIBE Talks",
          /* description: "Seven parallel sessions.", */
        },
        { time: "11:30 AM", title: "15 minute break" },
        {
          time: "11:45 AM",
          title: "Block 4 - TRIIBE Talks",
          /* description: "Seven parallel sessions.", */
        },
        { time: "12:15 PM", title: "15 minute break" },
        {
          time: "12:30 PM",
          title: "Block 5 - TRIIBE Talks",
          /* description: "Seven parallel sessions.", */
        },
        {
          time: "1:00 PM",
          title: "Lunch break",
          /* description:
            "Public lunch. River Pavilion gala setup begins on Level 4.", */
        },
        {
          time: "2:00 PM",
          title: "Block 6 - TRIIBE Talks",
          /* description: "Seven parallel sessions.", */
        },
        { time: "2:30 PM", title: "15 minute break" },
        {
          time: "2:45 PM",
          title: "Block 7 - TRIIBE Talks",
          /* description: "Final block of seven parallel sessions.", */
        },
        {
          time: "3:15 PM",
          title: "Networking and activations",
          /* description:
            "Closing thanks in Crystal Palace. Fellows head to hotel to change for Gala.", */
        },
        {
          time: "4:30 PM",
          title: "Venue closed to the public",
          description: "",
        },
      ],
    },
    {
      title: "Day 2, Saturday September 18th (Evening)",
      badge: "VIP Gala",
      location: "River Pavilion, Level 4 (Overlooking the Hudson)",
      highlight: {
        image: "/images/summit/javitscenter.jpg",
        label: "SATURDAY · GALA",
        name: "Black Tie VIP Gala & Fashion Show",
        description:
          "500 curated guests. Featuring keynotes, concerts, a fashion show, and paddle raise.",
        bullets: [
          "Black tie attire",
          "Next-Gen Design runway show",
          "Keynotes & live paddle raise",
          "Hudson River panoramic views",
        ],
      },
      items: [
        {
          time: "6:00 PM",
          title: "Gala Arrival & Seating",
          description:
            "Black tie. Plated appetizers served as guests take their seats.",
        },
        {
          time: "7:00 PM",
          title: "Welcome Remarks",
          /* description: "Kyle opens the evening program.", */
        },
        {
          time: "7:10 PM",
          title: "Live celebrity musical performance.",
          /* description: "Celebrity musical performance.", */
        },
        {
          time: "7:25 PM",
          title: "Kyle Matthys & Title Sponsor keynotes & Paddle Raise",
          /* description:
            "Kyle Matthys & Title Sponsor keynotes, live paddle raise for cohorts.", */
        },
        {
          time: "7:40 PM",
          title:
            "Next-Gen designer fashion show. Guests vote on the winner for a cash prize.",
          /* description:
            "Runway competition featuring three Parsons designers. Audience votes via QR code.", */
        },
        {
          time: "8:20 PM",
          title: "Dessert & Mingling",
          /* description:
            "Open networking and celebratory drinks running through 11:00 PM.", */
        },
        {
          time: "11:00 PM",
          title: "Gala Concludes",
          /* description: "Event close and overnight venue strike.", */
        },
      ],
    },
    /* {
      title: "Day 3, Sunday September 19th",
      badge: "Closing",
      location: "Hotel & Javits Center",
      highlight: null,
      items: [
        {
          time: "10:00 AM",
          title: "Breakfast at the hotel",
          description: "Fellows check out, store bags at the lobby.",
        },
        {
          time: "11:00 AM",
          title: "Closing circle",
          description:
            "Reflective, low-production circle of chairs over coffee.",
        },
        {
          time: "1:00 PM",
          title: "Departures",
          description: "Fellows depart for JFK and Newark airports.",
        },
      ],
    }, */
  ];

  const sponsorTiers = [
    {
      title: "Title Sponsor",
      price: "$500K",
      availability: "1 available",
      bullets: [
        "Keynote opportunity",
        "Logo on stage and marketing for 1 year",
        "Next-gen awards presenter at gala",
        "Two Gala tables for 8 each",
        "Personal interviews highlighted in our media, pre and post event",
        "Documentary acknowledgements",
        "Accommodations for 16 guests",
      ],
    },
    {
      title: "Presenting Sponsor",
      price: "$250K",
      availability: "2 available",
      bullets: [
        "Named at Gala and Forum",
        "Logo on stage and marketing for 1 year",
        "Two Gala tables for 8 each",
        "Personal interviews highlighted in our media, pre and post event",
        "Documentary acknowledgements",
        "Accommodations for 8 guests",
      ],
    },
    {
      title: "Premier Table",
      price: "$50K",
      availability: "4 available",
      bullets: [
        "Logo on stage and marketing for 1 year",
        "Gala table for 8",
        "Personal interviews highlighted in our media, pre and post event",
      ],
    },
    {
      title: "VIP Table",
      price: "$25K",
      availability: "10 available",
      bullets: ["Logo on stage and marketing for 1 year", "Gala table for 8"],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* <HeroSummit /> */}

      {/* Recap Button linking back to 2026 Summit Page */}
      <div className="w-full bg-[#F5F5F5] py-4 px-4 text-center border-b border-gray-200">
        <Link
          href="/summit-2026"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#002c19] hover:text-[#002c19]/70 transition-colors"
        >
          <span>Looking for the previous edition?</span>
          <span className="underline underline-offset-4">
            Explore 2026 Summit Recap &rarr;
          </span>
        </Link>
      </div>

      {/* Next-Gen Summit Hero & Overview Section */}
      <section className="relative w-full bg-white overflow-hidden pb-20">
        {/* Full-width Hero Banner with Centered Content matching the website hero */}
        <div className="relative w-full min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden">
          {/* Hero Background Image */}
          <Image
            src="/images/summit/javits-center.jpg"
            alt="Javits Center Exterior"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Dark scrim overlay for high-contrast white text */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Foreground Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
            {/* TRIIBE Logo mark */}
            <div className="relative w-36 h-10 mb-4 brightness-0 invert">
              <Image
                src="/images/TRIIBELOGOS/TRIIBE NAME.png"
                alt="TRIIBE Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
              TRIIBE Next-Gen Summit 2027
            </h1>

            {/* Event Metadata Badges / Info Row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm md:text-base font-medium mb-3">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Saturday, September 18, 2027
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Multi-day experience
              </span>
            </div>

            <p className="flex items-center justify-center gap-1.5 text-white/80 text-sm font-medium mb-8">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Planning for the Javits Center
            </p>

            {/* Buy Tickets CTA Button */}
            {/* <a
              href="#tickets"
              className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-white text-[#002c19] text-sm md:text-base font-bold shadow-md hover:bg-zinc-100 hover:scale-[1.02] transition-all"
            >
              Buy Tickets
            </a> */}
          </div>
        </div>

        {/* Lower Container: Narrative Lead & Features Grid */}
        <div className="max-w-6xl mx-auto px-4 md:px-12 lg:px-20 pt-16">
          <p className="text-base sm:text-lg text-[#002c19] font-medium text-center max-w-3xl mx-auto leading-relaxed mb-12">
            The annual gathering of the TRIIBE 100 leading nonprofit founders
            under 30
            <br />
            <span className="text-[#002c19]/80 text-sm sm:text-base">
              The opening weekend to Climate Week NYC and the UN General
              Assembly
            </span>
          </p>

          {/* Metrics & Highlights Grid */}
          <div className="w-full border-t border-gray-100 pt-10">
            {/* Key Figures: 3 columns horizontal across both mobile and desktop */}
            <div className="w-full grid grid-cols-3 gap-6 sm:gap-8 items-start py-4">
              <div className="text-left">
                <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                  2000
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                  Public Attendees
                </span>
              </div>
              <div className="text-left">
                <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                  100
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                  TRIIBE Fellows
                </span>
              </div>
              <div className="text-left">
                <span className="block text-3xl sm:text-4xl md:text-5xl font-black text-[#002c19]">
                  500
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-[#002c19]/80 uppercase tracking-wide">
                  VIP Gala Guests
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section 3: Run of the Show Timeline (Identical current design code) */}
      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center">
            Schedule & Run of Show
          </h2>

          {scheduleDays.map((day) => (
            <React.Fragment key={day.title}>
              <div className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div
                    className={`flex flex-col ${
                      day.highlight ? "gap-1" : "gap-4"
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-[#002c19]">
                      {day.title}
                    </h3>

                    <p
                      className={`text-xs ${
                        day.highlight
                          ? "text-[#002c19]/80"
                          : "text-[#002c19]/80 font-semibold"
                      }`}
                    >
                      {day.location}
                    </p>
                  </div>

                  {day.badge && (
                    <span className="bg-[#002C19] text-white text-xs font-semibold px-4 py-2 rounded-full self-start">
                      {day.badge}
                    </span>
                  )}
                </div>

                {day.highlight && (
                  <div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden">
                    <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={day.highlight.image}
                        alt={day.highlight.name}
                        fill
                        className={
                          day.highlight.image ===
                          "/images/TRIIBELOGOS/TRIIBE LOGO.png"
                            ? "object-contain p-4"
                            : "object-cover"
                        }
                      />
                    </div>

                    <div className="flex flex-col gap-3 p-6">
                      <p className="text-xs font-semibold text-[#002c19]/80 uppercase tracking-widest">
                        {day.highlight.label}
                      </p>

                      <h4
                        className="text-2xl italic text-[#002c19]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {day.highlight.name}
                      </h4>

                      <p className="text-sm text-[#002c19]/80 leading-relaxed">
                        {day.highlight.description}
                      </p>

                      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                        {day.highlight.bullets.map((bullet, i) => (
                          <span
                            key={i}
                            className="text-sm text-[#002c19]/80 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {day.items && day.items.length > 0 && (
                  <div className="flex flex-col">
                    {day.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[80px_1fr] gap-4 py-3 border-t border-gray-200 items-start"
                      >
                        <span className="text-sm font-semibold text-[#002c19]">
                          {item.time}
                        </span>

                        {item.title === "BREAK" ||
                        item.title === "15 minute break" ? (
                          <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-xs text-[#002c19]/80 tracking-[0.3em] uppercase">
                              {item.title}
                            </span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-[#002c19] mb-1">
                              {item.title}
                            </p>

                            {item.description && (
                              <p className="text-xs text-[#002c19]/80 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="py-12 w-full px-4 md:px-25 lg:px-50">
        <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#002c19]">
              The TRIIBE Next-Gen Summit 2026
            </p>

            <Link
              href="/summit-2026"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300   hover:text-white hover:scale-105"
            >
              Recap
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Sponsor Our Summit Section (Dark Green card style from graphic) */}
      <section className="pt-20 pb-24 px-4 md:px-12 lg:px-24 bg-[#05291b] text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-center mb-3">
            Sponsor our summit
          </h2>
          <p className="text-lg md:text-xl text-white/90 text-center font-normal mb-16">
            Channeling capital to the nonprofit startup ecosystem
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorTiers.map((tier, idx) => (
              <div
                key={idx}
                className="border border-white/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between bg-transparent"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-white mb-1">
                    {tier.title}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-1">
                    {tier.price}
                  </div>
                  <p className="text-xs text-white/70 mb-6 font-normal">
                    {tier.availability}
                  </p>

                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/90 leading-snug">
                    {tier.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-white mt-1 text-xs">&bull;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20">
                  <a
                    href="mailto:partnerships@triibe.org?subject=Summit%20Sponsorship%20Inquiry"
                    className="block w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider rounded-lg bg-white text-[#002c19] hover:bg-white/90 transition-colors"
                  >
                    Inquire Tier
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Tickets Section & Givebutter Embed (Unchanged existing code) */}
      {/* <section
        className="pt-20 pb-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]"
        id="tickets"
      >
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002c19] text-center">
            Buy tickets
          </h2>

          <div className="w-full">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-[#002c19]">
                    VIP Pass
                  </h3>
                  <p className="text-base font-medium text-[#002c19]/80">
                    Includes:
                  </p>
                </div>

                <ul className="flex flex-col gap-4 text-[#002c19] text-base leading-relaxed list-disc pl-5">
                  <li>
                    Friday gala dinner featuring a live tuna carving show,
                    opening ceremony, cocktail reception, and fashion show.
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-5 h-full">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-bold text-[#002c19]">
                    Saturday Only
                  </h3>
                  <p className="text-base font-medium text-[#002c19]/80">
                    Includes:
                  </p>
                </div>

                <ul className="flex flex-col gap-4 text-[#002c19] text-base leading-relaxed list-disc pl-5">
                  <li>
                    Saturday includes 7 TRIIBE Talks, the supercar showcase, and
                    closing reception.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto min-h-[600px]">
            {createElement("givebutter-widget", { id: "gKZZ35" })}
          </div>
        </div>
      </section> */}

      {/* Givebutter script loader */}
      {/* <Script
        src="https://widgets.givebutter.com/latest.umd.cjs?acct=xLAdgtMt2xZoh67c&p=other"
        strategy="lazyOnload"
      /> */}

      <Footer />
    </main>
  );
};

export default SummitPage;
