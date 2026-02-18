"use client";

import React, { useEffect, useState } from "react";
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

// 1. Array with exact data from Figma
const FEBRUARY_EVENTS = [
  {
    title: "Billion Dollar Impact: Next Gen Changemakers",
    date: "Saturday, Feb 28",
    time: "10:00 AM – 6:30 PM",
    registerUrl: "https://luma.com/7zynhb71",
    location: "Copacabana Nightclub- New York, New York",
    hostedBy: "Kyle Matthys, Stacey Lauren & Climate Cafe NYC",
    image: "/images/events/event1.png",
    avatars: [
      "/images/events/avatar-1.png",
      "/images/events/avatar-2.png",
      "/images/events/avatar-3.png",
    ],
  },
  {
    title:
      "TRIIBE TALK | Navigating Partnerships x Augmented Media Development",
    date: "Saturday, Feb 28",
    time: "10:00 AM – 6:30 PM",
    registerUrl: "https://luma.com/7zynhb71",
    location: "Copacabana Nightclub- New York, New York",
    hostedBy: "Kyle Matthys, Stacey Lauren & Climate Cafe NYC",
    image: "/images/events/event2.png",
    avatars: [
      "/images/events/avatar-1.png",
      "/images/events/avatar-2.png",
      "/images/events/avatar-3.png",
    ],
  },
];

const SPEAKERS = [
  {
    name: "Jillian Dilorio",
    title: "President of We Are Enough",
    image: "/images/events/speakers/Jillian Dilorio.png",
    linkedin: "https://www.linkedin.com/in/jillian-diiorio-63057b10/",
  },
  {
    name: "Karen Salmansohn",
    title: "Celebrity Author",
    image: "/images/events/speakers/Karen Salmansohn.png",
    linkedin: "https://www.linkedin.com/in/karensalmansohn/",
  },
  {
    name: "Tahnoon Murtza",
    title: "Next-Gen founder of Grey Sheep Ventures",
    image: "/images/events/speakers/Tahnoon Murtza.png",
    linkedin: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
  },
  {
    name: "Hikaru Hayakawa",
    title: "Executive Director Climate Cardinals",
    image: "/images/events/speakers/Hikaru Hayakawa.png",
    linkedin: "https://www.linkedin.com/in/hikaruhayakawa/",
  },
  {
    name: "Nayla Jimenez",
    title: "Executive Director Philippine Health Initiative",
    image: "/images/events/speakers/Nayla Jimenez.png",
    linkedin: "https://www.linkedin.com/in/naylajimenez/",
  },
  {
    name: "Marissa Meltzer",
    title: "Director of Partnerships for David Meltzer Enterprises",
    image: "/images/events/speakers/Marissa Meltzer.png",
    linkedin: "https://www.linkedin.com/in/marissa-meltzer/",
  },
  {
    name: "Dr. Cheng Davis",
    title: "President of the Forum for World Education",
    image: "/images/events/speakers/Cheng Davis.png",
    linkedin: "https://www.linkedin.com/in/cheng-davis-82511937/",
  },
  {
    name: "Chirag Nijjer",
    title: "Brand Historian for Google, Shopify, History Channel",
    image: "/images/events/speakers/Chirag Nijjer.png",
    linkedin: "https://www.linkedin.com/in/chiragspeaks",
  },
  {
    name: "Geoffrey Sargeant",
    title:
      "Managing Director Dominari Securities and Executive Ambassador of The REAL",
    image: "/images/events/speakers/Geoffrey Sargeant.png",
    linkedin: "https://www.linkedin.com/in/geoffsargeant/",
  },
  {
    name: "Gregg Meyer",
    title:
      "Chief Sustainability Officer Steve Madden and Head of Steve Madden Corporate Foundation",
    image: "/images/events/speakers/Gregg Meyer.png",
    linkedin: "https://www.linkedin.com/in/gregg-meyer/",
  },
  {
    name: "Michelle Cameron Coulter",
    title:
      "Olympic Gold Medalist, Tedx speaker, and Inspiring Possibilities podcast",
    image: "/images/events/speakers/Michelle Coulter.png",
    linkedin: "https://www.linkedin.com/in/michelle-cameron-coulter-o-c-oly/",
  },
  {
    name: "Gabriela Jaeger",
    title: "Founder of Global Changemakers",
    image: "/images/events/speakers/Gabriela Jaeger.png",
    linkedin: "https://www.linkedin.com/in/gabriela-jaeger-b04446a5/",
  },
  {
    name: "Anou Singhvi",
    title:
      "Managing Director P.C. Lunia Purveyors of Precious Objects since 1850",
    image: "/images/events/speakers/Anou Singhvi.png",
    linkedin: "https://www.linkedin.com/in/anousinghvi/",
  },
  {
    name: "Kim Sorrelle",
    title: "UN Keynote Speaker, TV Show Host",
    image: "/images/events/speakers/Kim Sorrelle.png",
    linkedin: "https://www.linkedin.com/in/kim-sorrelle-11079523/",
  },
  {
    name: "Laura Carney",
    title: "Best-Selling Author",
    image: "/images/events/speakers/Laura Carney.png",
    linkedin: "https://www.linkedin.com/in/lauracarney/",
  },
  {
    name: "JapNeet K",
    title:
      "Legacy Board TRIIBE, Director Cybersecurity, Founding Chair – The Cyber Studio by The Digital Economist, Board Director ISACA and STEM international award-winning artist",
    image: "/images/events/speakers/JapNeet K.png",
    linkedin: "https://www.linkedin.com/in/japneet-k-34816426",
  },
  {
    name: "Dr. Purnima Voria",
    title:
      "CEO National US India Chamber of Commerce and President of the Rajasthan Foundation USA",
    image: "/images/events/speakers/Purnima Voria.png",
    linkedin: "https://www.linkedin.com/in/purnimavoria/",
  },
  {
    name: "Stacey Lauren",
    title: "Founder of Do The Thing",
    image: "/images/events/speakers/Stacey Lauren.png",
    linkedin: "https://www.linkedin.com/in/staceylauren/",
  },
  {
    name: "Kyle Matthys",
    title: "Founder of TRIIBE",
    image: "/images/events/speakers/Kyle Matthys.png",
    linkedin: "https://www.linkedin.com/in/kylematthys/",
  },
];

const EVENT_PERKS = [
  { id: 1, title: "Lunch", desc: "Because big ideas need fuel" },
  { id: 2, title: "Concerts", desc: "Live performances by celebrity guests." },
  { id: 3, title: "Roulette", desc: "Show your work, win the room" },
  {
    id: 4,
    title: "Interactive Workshops",
    desc: "Create, collaborate, and connect",
  },
  {
    id: 5,
    title: "Live auction",
    desc: "Unique opportunities: workshops, experiences, and offerings from mentors, creators, and leaders",
  },
  {
    id: 6,
    title: "Live Bids",
    desc: "To help fund the next generation of changemakers",
  },
];

const page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const target = new Date("2026-02-28T10:00:00-05:00").getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
        setIsReady(true);
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const currentEvent = FEBRUARY_EVENTS[activeIndex];
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-50 bg-white ">
        <div className=" max-w-260 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
            {/* Left Column: Details */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-black leading-[1.1] mb-10 max-w-[600px]">
                {currentEvent.title}
              </h1>

              {/* Exact Metadata Grid from Figma */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 mb-8 text-[#495565]">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-gray-400" />
                    <span className="text-[17px]">{currentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-gray-400" />
                    <span className="text-[17px]">{currentEvent.time}</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gray-400 mt-1" />
                  <span className="text-[17px] leading-snug">
                    {currentEvent.location.split("-").map((part, i) => (
                      <React.Fragment key={i}>
                        {part.trim()}
                        {i === 0 ? "," : ""}
                        <br />
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>

              {/* Avatar Section */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex -space-x-2.5">
                  {currentEvent.avatars.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-100"
                    >
                      <Image
                        src={src}
                        alt="Host"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#495565] font-medium">
                  Hosted by {currentEvent.hostedBy}
                </p>
              </div>

              <a
                href={currentEvent.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-[#1D4D3F] text-white px-10 py-3.5 rounded-lg font-bold text-lg hover:bg-[#163a30] transition-all text-center"
              >
                Register
              </a>
            </div>

            {/* Right Column: Featured Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={currentEvent.image}
                alt="Event Poster"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Toggle Indicators (Circular Icons) */}
          <div className="flex justify-center gap-3 mt-12">
            {FEBRUARY_EVENTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-[#1D4D3F] scale-125"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-12 pb-16   px-4 md:px-50 bg-white ">
        <div className=" max-w-260 mx-auto">
          <div className="max-w-[850px]">
            {/* Section Title */}
            <h2 className="text-2xl font-bold text-black mb-8">About Event</h2>

            {/* Static Description Content */}
            <div className="space-y-6 text-[#4A5565] text-lg leading-relaxed mb-10">
              <p>
                A full-day summit + global showcase supporting the next
                generation of nonprofit founders.
              </p>
              <p>
                On February 28th, TRIIBE and Do The Thing are bringing together
                an extraordinary community of builders, mentors, and supporters
                for a full-day experience designed to celebrate and fund the
                next generation of change makers.
              </p>
              <p>
                This gala will begin at 10:00 AM and conclude at 6:30 PM at the
                Copacabana on 51st and 11th Street.
              </p>
              <p>
                VIP Guests will be invited for a private dinner the night
                before.
              </p>
            </div>

            {/* Static Tags Section */}
            <div className="flex flex-wrap gap-3">
              {[
                "Wellness",
                "Tech",
                "Climate",
                "Purpose",
                "Taking root today to advance tomorrow",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-[#364153] text-sm font-medium bg-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16  px-4 md:px-50 bg-white ">
        <div className=" max-w-260 mx-auto">
          <h2 className="text-2xl font-bold text-black mb-10">
            Notable Speakers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-12">
            {SPEAKERS.map((speaker, index) => (
              <a
                key={index}
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {/* Speaker Image */}
                <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-[#F8F8F8] p-2 shadow-sm">
                  <div className="relative w-full h-full rounded-md overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Name and LinkedIn Icon Row */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-black text-sm leading-tight">
                    {speaker.name}
                  </h3>
                  {/* LinkedIn Icon Placeholder - Matches blue in design */}
                  <svg
                    className="w-4 h-4 text-[#0077B5] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>

                {/* Title */}
                <p className="text-[#495565] text-[12px] leading-relaxed">
                  {speaker.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-16  px-4 md:px-50 bg-white ">
        <div className=" max-w-260 mx-auto">
          <h2 className="text-2xl font-bold text-black mb-12">Event Perks</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 grid-flow-row md:grid-flow-col gap-x-16 gap-y-10">
            {EVENT_PERKS.map((perk) => (
              <div key={perk.id} className="flex items-start gap-6">
                {/* Number Box */}
                <div className="flex-shrink-0 w-12 h-12 bg-[#E9ECEF] flex items-center justify-center rounded-sm">
                  <span className="text-black font-bold text-lg">
                    {perk.id}
                  </span>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-black">{perk.title}</h3>
                  <p className="text-[#495565] text-base leading-snug max-w-[400px]">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="  px-6 bg-white md:px-[200px]">
        <div className="max-w-260 mx-auto bg-black">
          <div className="max-w-5xl mx-auto  ">
            <h1 className="text-2xl md:text-6xl font-normal tracking-tighter text-[#B0E1F8] leading-tight pt-12 px-12">
              Nonprofit Founders Are Cut Off <br /> From Funding In College
            </h1>
          </div> */}

      {/* <section className="py-8 px-6 bg-gray-50"> */}
      {/* <div className="max-w-7xl mx-auto ">
            <div className="relative w-full h-100 ">
              <div className="relative w-full h-100 overflow-hidden bg-black">
                <Image
                  src="/images/programs/problem_infographic3.png"
                  alt="The Problem - 80% of student-led nonprofits fade within a year"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className=" py-16 px-6 bg-white md:px-[200px]">
        <div className="max-w-260 mx-auto bg-white">
          {/* <section className="py-8 px-6 bg-gray-50"> */}
          <div className="max-w-7xl mx-auto ">
            <div className="relative w-full  aspect-[16/9] overflow-hidden bg-black">
              <Image
                src="/images/events/image 361.png"
                alt="The Problem - 80% of student-led nonprofits fade within a year"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" md:px-50 bg-white">
        <div className="max-w-260 mx-auto bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* The Problem Card */}
            <div className="bg-[#002c19] p-8 rounded-lg">
              <h3 className="font-bold text-white text-3xl mb-6">
                The Problem
              </h3>
              <p className="font-normal text-white/90 text-sm leading-relaxed">
                The biggest drop-off isn’t inspiration. It's structure. When
                founders turn 18 and enter college, time disappears, funding
                dries up, and the support systems that helped them grow no
                longer exist.
              </p>
            </div>

            {/* The Solution Card */}
            <div className="bg-[#AEDFF7] p-8 rounded-lg">
              <h3 className="font-bold text-black text-3xl mb-6">
                The Solution
              </h3>
              <p className="font-normal text-black text-sm leading-relaxed">
                TRIIBE is the missing pipeline for social impact. We operate a
                fellowship built for nonprofit founders, a clear path through
                college with the three things early-stage founders actually
                need: funding, mentorship, and community. Our cohorts are small
                by design because we invest deeply. Each TRIIBE branch has
                cohorts of five nonprofit founders with real operating
                experience, each already running their foundation for an average
                of six years. Several have already been recognized as Forbes 30
                Under 30, George Bush Points of Light Fellows, and L’Oréal Women
                of Worth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 px-6 bg-white md:px-[200px]">
        <div className="max-w-260 mx-auto bg-white">
          {/* <section className="py-8 px-6 bg-gray-50"> */}
          <div className="max-w-7xl mx-auto ">
            <div className="relative w-full  aspect-[16/9] overflow-hidden bg-black">
              <Image
                src="/images/events/image 360.png"
                alt="The Problem - 80% of student-led nonprofits fade within a year"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-20  px-4 md:px-50 bg-white ">
        <div className=" max-w-260 mx-auto">
          <div className="mx-auto flex flex-col items-center">
            <h2 className="text-2xl font-bold text-black mb-10">
              Event starts in
            </h2>

            {/* Centered Timer Grid */}
            <div className="flex gap-4 md:gap-6 mb-12 justify-center">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                // { label: "Seconds", value: timeLeft.seconds },
              ].map((unit, i) => (
                <div
                  key={i}
                  className="w-24 h-32 md:w-28 md:h-36 border-2 border-[#1D4D3F] rounded-lg flex flex-col items-center justify-center bg-white"
                >
                  <span className="text-4xl md:text-5xl font-bold text-black mb-1">
                    {isReady ? unit.value.toString().padStart(2, "0") : "--"}
                  </span>
                  <span className="text-[#495565] text-sm font-medium uppercase tracking-wide">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Centered Button */}
            <a
              href="https://luma.com/7zynhb71"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1D4D3F] text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-[#163a30] transition-all "
            >
              Register
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default page;
