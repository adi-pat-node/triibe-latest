import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";

const events = [
  {
    id: "changemaker-summit-2025",
    image: "/images/events/event1.jpg",
    status: "PAST EVENT",
    year: "2025",
    title: "TRIIBE Changemaker Summit",
    description:
      "An annual NYC convening that centers youth nonprofit founders and connects them with mentors, partners, and supporters.",
    date: "Nov 16, 2024",
    location: "New York, NY • Manhattan Center",
  },
  {
    id: "davos-summit-2026",
    image: "/images/events/event1.jpg",
    status: "PAST EVENT",
    year: "2026",
    title: "TRIIBE Davos Summit",
    description:
      "An annual NYC convening that centers youth nonprofit founders and connects them with mentors, partners, and supporters.",
    date: "Nov 16, 2024",
    location: "New York, NY • Manhattan Center",
  },
  {
    id: "event-3-2026",
    image: "/images/events/event1.jpg",
    status: "UPCOMING",
    year: "2026",
    title: "TRIIBE Event #3",
    description:
      "An annual NYC convening that centers youth nonprofit founders and connects them with mentors, partners, and supporters.",
    date: "Nov 16, 2024",
    location: "New York, NY • Manhattan Center",
  },
];

const page = () => {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 md:px-50 bg-white">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-center ">
            {/* Left Content */}
            <div>
              <h1 className="font-bold text-black text-4xl md:text-4xl mb-6 ">
                Connecting Youth Leaders with the Resources to Scale Impact
              </h1>
              <p className="font-normal text-[#495565] text-gl mb-8 leading-relaxed">
                TRIIBE hosts convening experiences that bring together youth
                nonprofit founders, experienced mentors, funders, and partners
                to support meaningful connections and drive social change.
              </p>
              <div className="flex gap-4">
                <a
                  href="/partner"
                  className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base"
                >
                  Partner / Sponsor
                </a>
                <a
                  href="#updates"
                  className="px-6 py-3 bg-[#1C5945] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base"
                >
                  Get Updates
                </a>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-2 max-w-100 ">
              <div className="relative aspect-square rounded-tl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-1.jpg"
                  alt="TRIIBE Summit"
                  fill
                  className="object-cover "
                />
              </div>
              <div className="relative aspect-square rounded-tr-4xl overflow-hidden">
                <Image
                  src="/images/events/newImg.jpg"
                  alt="TRIIBE Summit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-bl-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-2.jpg"
                  alt="TRIIBE Summit"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-br-4xl overflow-hidden">
                <Image
                  src="/images/events/summit-4.jpg"
                  alt="TRIIBE Summit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Problem & Solution Section */}
      <section className="py-20 px-4 md:px-50 bg-white">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* The Problem Card */}
            <div className="bg-[#002c19] p-12 rounded-lg">
              <h3 className="font-bold text-white text-3xl mb-6">
                The Problem
              </h3>
              <p className="font-normal text-white/80 text-lg leading-relaxed">
                Youth-led nonprofits struggle to sustain themselves without
                institutional credibility, experienced mentorship, and robust
                professional networks. After high school accolades fade, student
                founders face isolation and limited resources.
              </p>
            </div>

            {/* The Solution Card */}
            <div className="bg-[#aedff7] p-12 rounded-lg">
              <h3 className="font-bold text-black text-3xl mb-6">
                The Solution
              </h3>
              <p className="font-normal text-black text-lg leading-relaxed">
                The Summit creates a high-signal room where vetted youth
                founders meet experienced partners who can provide mentorship,
                unlock strategic partnerships, and offer practical support. It's
                where credibility is built and lasting connections are formed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="flex flex-col items-start px-4 md:px-50 py-20 w-full bg-white">
        <div className="flex flex-col items-start gap-12 w-full">
          {/* Header */}
          <h2 className="font-bold text-[#000000] text-4xl tracking-[-0.90px] leading-10">
            Our Events
          </h2>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="p-4">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 flex-grow">
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === "UPCOMING"
                          ? "bg-[#AEDFF7] text-black"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {event.status}
                    </span>
                    <span className="text-gray-500 text-sm">{event.year}</span>
                  </div>
                  <h3 className="font-bold text-[#000000] text-xl leading-7">
                    {event.title}
                  </h3>
                  <p className="font-normal text-[#495565] text-sm leading-[22.8px]">
                    {event.description}
                  </p>
                  <div className="flex flex-col gap-2 text-sm text-[#495565]">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <a
                    href={`#${event.id}`}
                    className="w-full mt-auto px-6 py-3 bg-[#1a5a4a] hover:bg-[#144539] text-white font-semibold rounded-lg transition-colors block text-center"
                  >
                    Learn More & See Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Summit Is Section */}
      <section
        id="changemaker-summit-2025"
        className="py-20 px-4 md:px-50 bg-[#e8f4f8] border-t border-b border-gray-200"
      >
        <div className="max-w-300 mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600">
              PAST EVENT — 2024
            </span>
          </div>

          {/* Title and Button */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="font-bold text-black text-4xl md:text-4xl">
              TRIIBE Changemaker Summit
            </h1>
            <button className="px-6 py-3 bg-white border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base whitespace-nowrap">
              Photo Gallery
            </button>
          </div>
          <h2 className="font-bold text-black text-3xl md:text-3xl mb-8">
            What the Summit Is
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <p className="font-normal text-[#495565] text-lg leading-relaxed pt-8">
                The TRIIBE Changemaker Summit is an annual convening designed
                for undergraduate students who have founded and are actively
                leading registered nonprofit organizations. It brings together
                the next generation of social impact leaders for a day of
                learning, connection, and collaboration.
              </p>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Youth founders leading impactful nonprofits
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Mentors and partners from established organizations
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Interactive panel discussions on key topics
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Intimate fireside chats with industry leaders
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Structured networking opportunities
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Community building and peer connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happened at the 2025 Summit Section */}
      <section className="py-20 px-4 md:px-50 bg-gray-50  border-t border-b border-gray-200">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            What Happened at the 2025 Summit
          </h2>

          {/* At a Glance */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              AT A GLANCE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">Date</p>
                <p className="font-semibold text-black text-lg">
                  August 2, 2025
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Location
                </p>
                <p className="font-semibold text-black text-lg">
                  Newlab, Brooklyn
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Format
                </p>
                <p className="font-semibold text-black text-lg">
                  1:00 to 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              PROGRAM HIGHLIGHTS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Mobilizing Communities for Compassionate Action
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Fundraising and Communication in this Political Landscape
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Education as a Tool for Social Mobility and Transformation
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Networking session and silent art auction
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid Placeholder */}
          <div className="bg-white border border-gray-200 rounded-lg p-12 flex items-center justify-center min-h-25">
            <p className="font-normal text-[#697282] text-lg">
              Speaker and community photo grid placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 md:px-50 bg-[#3036411A]">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-5xl mb-8 text-center">
            Impact
          </h2>

          <p className="font-normal text-[#495565] text-lg leading-relaxed mb-16 text-center max-w-250 mx-auto">
            We measure impact through both quantitative metrics and qualitative
            outcomes—tracking connections made, partnerships formed, and the
            sustained engagement of participants over time. Success means
            founders leave with tangible resources and relationships that
            endure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "The Summit connected me with mentors who understand the unique
                challenges of running a nonprofit in college. These
                relationships have been invaluable."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Sarah Johnson
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Education Access Initiative
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "As a partner, this event gave us direct access to vetted
                youth-led organizations doing incredible work. It's the most
                efficient way to find authentic impact."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Michael Chen
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Director of Partnerships, Impact Foundation
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "Finally, a space where student founders are taken seriously.
                The conversations were substantive, the connections were real,
                and the support continues."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Priya Patel
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Community Health Coalition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-50 bg-[#F9FAFB]  border-t border-b border-gray-200">
        <div className=" mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* For Founders */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Founders
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct access to experienced mentors
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Institutional credibility and validation
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Strategic partnership opportunities
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Peer community of fellow founders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Practical resources and support
                  </p>
                </div>
              </div>
            </div>

            {/* For Partners & Sponsors */}
            <div className="bg-white border border-gray-200 rounded-lg pt-8 px-4">
              <h3 className="font-bold text-black text-xl mb-6">
                For Partners & Sponsors
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Connection to vetted youth-led organizations
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Clear pathways for meaningful contribution
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Community visibility and brand alignment
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct impact measurement
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Early access to emerging leaders
                  </p>
                </div>
              </div>
            </div>

            {/* For Attendees */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Attendees
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Learning from diverse perspectives
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Networking with impact leaders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Exposure to youth-led solutions
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Understanding the youth nonprofit ecosystem
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Inspiration for their own work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Moments Section */}
      <section className="py-20 px-4 md:px-50 bg-white ">
        <div className="max-w-300 mx-auto">
          {/* <h2 className="font-bold text-black text-3xl md:text-4xl mb-12">
            Media & Moments
          </h2> */}

          {/* Photo Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 1</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 2</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 3</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 4</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 5</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 6</p>
            </div>
          </div> */}

          {/* Video Highlight */}
          {/* <div className="bg-gray-100 border border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center mb-16 min-h-75">
            <p className="font-normal text-[#697282] text-base mb-6">
              Video highlight placeholder
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base"
            >
              Watch Summit Highlights
            </a>
          </div> */}

          {/* Press Mentions */}
          <div>
            <h3 className=" text-black font-bold text-2xl uppercase tracking-wider mb-6">
              PRESS MENTIONS
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Summit Is Section */}
      <section
        id="davos-summit-2026"
        className="py-20 px-4 md:px-50 bg-[#e8f4f8] border-t border-b border-gray-200"
      >
        <div className="max-w-300 mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600">
              PAST EVENT — 2024
            </span>
          </div>

          {/* Title and Button */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="font-bold text-black text-4xl md:text-4xl">
              TRIIBE Davos Summit
            </h1>
            <button className="px-6 py-3 bg-white border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base whitespace-nowrap">
              Photo Gallery
            </button>
          </div>
          <h2 className="font-bold text-black text-3xl md:text-3xl mb-8">
            What the Summit Is
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <p className="font-normal text-[#495565] text-lg leading-relaxed pt-8">
                The TRIIBE Changemaker Summit is an annual convening designed
                for undergraduate students who have founded and are actively
                leading registered nonprofit organizations. It brings together
                the next generation of social impact leaders for a day of
                learning, connection, and collaboration.
              </p>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Youth founders leading impactful nonprofits
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Mentors and partners from established organizations
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Interactive panel discussions on key topics
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Intimate fireside chats with industry leaders
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Structured networking opportunities
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Community building and peer connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happened at the 2025 Summit Section */}
      <section className="py-20 px-4 md:px-50 bg-gray-50  border-t border-b border-gray-200">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            What Happened at the 2025 Summit
          </h2>

          {/* At a Glance */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              AT A GLANCE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">Date</p>
                <p className="font-semibold text-black text-lg">
                  August 2, 2025
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Location
                </p>
                <p className="font-semibold text-black text-lg">
                  Newlab, Brooklyn
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Format
                </p>
                <p className="font-semibold text-black text-lg">
                  1:00 to 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              PROGRAM HIGHLIGHTS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Mobilizing Communities for Compassionate Action
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Fundraising and Communication in this Political Landscape
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Education as a Tool for Social Mobility and Transformation
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Networking session and silent art auction
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid Placeholder */}
          <div className="bg-white border border-gray-200 rounded-lg p-12 flex items-center justify-center min-h-25">
            <p className="font-normal text-[#697282] text-lg">
              Speaker and community photo grid placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 md:px-50 bg-[#3036411A]">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-5xl mb-8 text-center">
            Impact
          </h2>

          <p className="font-normal text-[#495565] text-lg leading-relaxed mb-16 text-center max-w-250 mx-auto">
            We measure impact through both quantitative metrics and qualitative
            outcomes—tracking connections made, partnerships formed, and the
            sustained engagement of participants over time. Success means
            founders leave with tangible resources and relationships that
            endure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "The Summit connected me with mentors who understand the unique
                challenges of running a nonprofit in college. These
                relationships have been invaluable."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Sarah Johnson
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Education Access Initiative
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "As a partner, this event gave us direct access to vetted
                youth-led organizations doing incredible work. It's the most
                efficient way to find authentic impact."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Michael Chen
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Director of Partnerships, Impact Foundation
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "Finally, a space where student founders are taken seriously.
                The conversations were substantive, the connections were real,
                and the support continues."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Priya Patel
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Community Health Coalition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-50 bg-[#F9FAFB]  border-t border-b border-gray-200">
        <div className=" mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* For Founders */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Founders
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct access to experienced mentors
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Institutional credibility and validation
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Strategic partnership opportunities
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Peer community of fellow founders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Practical resources and support
                  </p>
                </div>
              </div>
            </div>

            {/* For Partners & Sponsors */}
            <div className="bg-white border border-gray-200 rounded-lg pt-8 px-4">
              <h3 className="font-bold text-black text-xl mb-6">
                For Partners & Sponsors
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Connection to vetted youth-led organizations
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Clear pathways for meaningful contribution
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Community visibility and brand alignment
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct impact measurement
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Early access to emerging leaders
                  </p>
                </div>
              </div>
            </div>

            {/* For Attendees */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Attendees
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Learning from diverse perspectives
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Networking with impact leaders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Exposure to youth-led solutions
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Understanding the youth nonprofit ecosystem
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Inspiration for their own work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Moments Section */}
      <section className="py-20 px-4 md:px-50 bg-white ">
        <div className="max-w-300 mx-auto">
          {/* <h2 className="font-bold text-black text-3xl md:text-4xl mb-12">
            Media & Moments
          </h2> */}

          {/* Photo Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 1</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 2</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 3</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 4</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 5</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 6</p>
            </div>
          </div> */}

          {/* Video Highlight */}
          {/* <div className="bg-gray-100 border border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center mb-16 min-h-75">
            <p className="font-normal text-[#697282] text-base mb-6">
              Video highlight placeholder
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base"
            >
              Watch Summit Highlights
            </a>
          </div> */}

          {/* Press Mentions */}
          <div>
            <h3 className=" text-black font-bold text-2xl uppercase tracking-wider mb-6">
              PRESS MENTIONS
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Summit Is Section */}
      <section
        id="event-3-2026"
        className="py-20 px-4 md:px-50 bg-[#e8f4f8] border-t border-b border-gray-200"
      >
        <div className="max-w-300 mx-auto">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-gray-600">
              PAST EVENT — 2024
            </span>
          </div>

          {/* Title and Button */}
          <div className="flex justify-between items-start mb-8">
            <h1 className="font-bold text-black text-4xl md:text-4xl">
              TRIIBE Event #3
            </h1>
            <button className="px-6 py-3 bg-white border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base whitespace-nowrap">
              Photo Gallery
            </button>
          </div>
          <h2 className="font-bold text-black text-3xl md:text-3xl mb-8">
            What the Summit Is
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Description */}
            <div>
              <p className="font-normal text-[#495565] text-lg leading-relaxed pt-8">
                The TRIIBE Changemaker Summit is an annual convening designed
                for undergraduate students who have founded and are actively
                leading registered nonprofit organizations. It brings together
                the next generation of social impact leaders for a day of
                learning, connection, and collaboration.
              </p>
            </div>

            {/* Right Column - Features List */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Youth founders leading impactful nonprofits
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Mentors and partners from established organizations
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Interactive panel discussions on key topics
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Intimate fireside chats with industry leaders
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Structured networking opportunities
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#697282] mt-1">—</span>
                <p className="font-normal text-[#495565] text-lg">
                  Community building and peer connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happened at the 2025 Summit Section */}
      <section className="py-20 px-4 md:px-50 bg-gray-50  border-t border-b border-gray-200">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            What Happened at the 2025 Summit
          </h2>

          {/* At a Glance */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              AT A GLANCE
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">Date</p>
                <p className="font-semibold text-black text-lg">
                  August 2, 2025
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Location
                </p>
                <p className="font-semibold text-black text-lg">
                  Newlab, Brooklyn
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="font-normal text-[#697282] text-sm mb-2">
                  Format
                </p>
                <p className="font-semibold text-black text-lg">
                  1:00 to 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="mb-16">
            <h3 className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-6">
              PROGRAM HIGHLIGHTS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Mobilizing Communities for Compassionate Action
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Fundraising and Communication in this Political Landscape
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Education as a Tool for Social Mobility and Transformation
                </p>
              </div>

              <div className="flex gap-3">
                <p className="font-normal text-[#495565] text-base">
                  — Networking session and silent art auction
                </p>
              </div>
            </div>
          </div>

          {/* Photo Grid Placeholder */}
          <div className="bg-white border border-gray-200 rounded-lg p-12 flex items-center justify-center min-h-25">
            <p className="font-normal text-[#697282] text-lg">
              Speaker and community photo grid placeholder
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 md:px-50 bg-[#3036411A]">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-5xl mb-8 text-center">
            Impact
          </h2>

          <p className="font-normal text-[#495565] text-lg leading-relaxed mb-16 text-center max-w-250 mx-auto">
            We measure impact through both quantitative metrics and qualitative
            outcomes—tracking connections made, partnerships formed, and the
            sustained engagement of participants over time. Success means
            founders leave with tangible resources and relationships that
            endure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {/* Testimonial 1 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "The Summit connected me with mentors who understand the unique
                challenges of running a nonprofit in college. These
                relationships have been invaluable."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Sarah Johnson
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Education Access Initiative
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "As a partner, this event gave us direct access to vetted
                youth-led organizations doing incredible work. It's the most
                efficient way to find authentic impact."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Michael Chen
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Director of Partnerships, Impact Foundation
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9FAFB] border border-gray-200 rounded-lg p-8">
              <p className="font-normal text-[#495565] text-base leading-relaxed mb-6 italic">
                "Finally, a space where student founders are taken seriously.
                The conversations were substantive, the connections were real,
                and the support continues."
              </p>
              <div>
                <p className="font-semibold text-black text-base mb-1">
                  Priya Patel
                </p>
                <p className="font-normal text-[#697282] text-sm">
                  Founder, Community Health Coalition
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-50 bg-[#F9FAFB]  border-t border-b border-gray-200">
        <div className=" mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* For Founders */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Founders
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct access to experienced mentors
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Institutional credibility and validation
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Strategic partnership opportunities
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Peer community of fellow founders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Practical resources and support
                  </p>
                </div>
              </div>
            </div>

            {/* For Partners & Sponsors */}
            <div className="bg-white border border-gray-200 rounded-lg pt-8 px-4">
              <h3 className="font-bold text-black text-xl mb-6">
                For Partners & Sponsors
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Connection to vetted youth-led organizations
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Clear pathways for meaningful contribution
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Community visibility and brand alignment
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Direct impact measurement
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Early access to emerging leaders
                  </p>
                </div>
              </div>
            </div>

            {/* For Attendees */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-xl mb-6">
                For Attendees
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Learning from diverse perspectives
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Networking with impact leaders
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Exposure to youth-led solutions
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Understanding the youth nonprofit ecosystem
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#697282] mt-1">—</span>
                  <p className="font-normal text-[#495565] text-base">
                    Inspiration for their own work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Moments Section */}
      <section className="py-20 px-4 md:px-50 bg-white ">
        <div className="max-w-300 mx-auto">
          {/* <h2 className="font-bold text-black text-3xl md:text-4xl mb-12">
            Media & Moments
          </h2> */}

          {/* Photo Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 1</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 2</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 3</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 4</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 5</p>
            </div>
            <div className="bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center aspect-video">
              <p className="font-normal text-[#697282] text-base">Photo 6</p>
            </div>
          </div> */}

          {/* Video Highlight */}
          {/* <div className="bg-gray-100 border border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center mb-16 min-h-75">
            <p className="font-normal text-[#697282] text-base mb-6">
              Video highlight placeholder
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base"
            >
              Watch Summit Highlights
            </a>
          </div> */}

          {/* Press Mentions */}
          <div>
            <h3 className=" text-black font-bold text-2xl uppercase tracking-wider mb-6">
              PRESS MENTIONS
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
              <div className="flex gap-3 py-4 border-b border-gray-300">
                <p className="font-normal text-[#495565] text-base">
                  — Press mention placeholder - Publication name and article
                  title
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Summit Save the Date Section */}
      {/* <section className="py-20 px-4 md:px-50 bg-[#002c19]">
        <div className="max-w-200 mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#003d24] rounded-full mb-8">
            <span className="font-semibold text-white text-sm uppercase tracking-wider">
              SAVE THE DATE
            </span>
          </div>

          <h2 className="font-bold text-white text-4xl md:text-4xl lg:text-5xl mb-12 leading-tight">
            2026 TRIIBE
            <br />
            Changemaker Summit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-150 mx-auto">
            <div>
              <p className="font-normal text-white/60 text-sm uppercase tracking-wider mb-2">
                Date
              </p>
              <p className="font-semibold text-white text-xl">
                To Be Announced
              </p>
            </div>

            <div>
              <p className="font-normal text-white/60 text-sm uppercase tracking-wider mb-2">
                Location
              </p>
              <p className="font-semibold text-white text-xl">New York City</p>
            </div>

            <div>
              <p className="font-normal text-white/60 text-sm uppercase tracking-wider mb-2">
                Venue
              </p>
              <p className="font-semibold text-white text-xl">
                To Be Announced
              </p>
            </div>
          </div>

          <p className="font-normal text-white text-lg leading-relaxed mb-10 max-w-150 mx-auto">
            Building bridges between the next generation of nonprofit leaders
            and the partners who can amplify their impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-transparent text-white border border-white rounded hover:bg-white/10 transition-colors font-semibold text-base"
            >
              Become a Speaker or Partner
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base"
            >
              Get Updates
            </a>
          </div>
        </div>
      </section> */}

      {/* Past Summits Section */}
      {/* <section className="py-20 px-4 md:px-50 bg-white">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-4xl md:text-4xl mb-12">
            Past Summits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-3xl mb-3">2024</h3>
              <p className="font-normal text-[#495565] text-base mb-6">
                November 16, 2024 • New York, NY
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-white text-black border border-gray-100 rounded hover:bg-gray-50 transition-colors font-semibold text-sm"
              >
                View Recap
              </a>
            </div>


            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <h3 className="font-bold text-black text-4xl mb-3">2023</h3>
              <p className="font-normal text-[#495565] text-base mb-6">
                October 21, 2023 • New York, NY
              </p>
              <a
                href="#"
                className="inline-block px-6 py-2 bg-white text-black border border-gray-100 rounded hover:bg-gray-50 transition-colors font-semibold text-sm"
              >
                View Recap
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <CTASection />
      <Footer />
    </main>
  );
};

export default page;
