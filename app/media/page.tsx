"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ChevronLeft, ChevronRight, Bell, Play } from "lucide-react";
import Image from "next/image";
import CTASection from "@/components/cta";

const workshops = [
  {
    title: "Navigating Partnerships x Augmented Media Development",
    speakers: [
      {
        name: "Tahnoon Murtza",
        avatar:
          "https://ui-avatars.com/api/?name=Tahnoon+Murtza&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Navigating Partnerships",
        description:
          "Growing your business and creating partnerships without age being a limitation",
      },
      {
        name: "Justin Kramm",
        avatar:
          "https://ui-avatars.com/api/?name=Justin+Kramm&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Augmented Tools for Media Development",
        description: "Maximizing new AI techniques to better present your work",
      },
    ],
    duration: "65 minutes",
    type: "Workshop",
    youtubeId: "JHLqGjAnJ8c", // Replace with actual YouTube ID
    signupLink: "#",
    watchLink: "#",
  },
  {
    title: "Navigating Partnerships x Augmented Media Development",
    speakers: [
      {
        name: "Tahnoon Murtza",
        avatar:
          "https://ui-avatars.com/api/?name=Tahnoon+Murtza&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Navigating Partnerships",
        description:
          "Growing your business and creating partnerships without age being a limitation",
      },
      {
        name: "Justin Kramm",
        avatar:
          "https://ui-avatars.com/api/?name=Justin+Kramm&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Augmented Tools for Media Development",
        description: "Maximizing new AI techniques to better present your work",
      },
    ],
    duration: "65 minutes",
    type: "Workshop",
    youtubeId: "JHLqGjAnJ8c", // Replace with actual YouTube ID
    signupLink: "#",
    watchLink: "#",
  },
  {
    title: "Navigating Partnerships x Augmented Media Development",
    speakers: [
      {
        name: "Tahnoon Murtza",
        avatar:
          "https://ui-avatars.com/api/?name=Tahnoon+Murtza&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Navigating Partnerships",
        description:
          "Growing your business and creating partnerships without age being a limitation",
      },
      {
        name: "Justin Kramm",
        avatar:
          "https://ui-avatars.com/api/?name=Justin+Kramm&size=64&background=D1D5DB&color=9CA3AF&rounded=true",
        topic: "Augmented Tools for Media Development",
        description: "Maximizing new AI techniques to better present your work",
      },
    ],
    duration: "65 minutes",
    type: "Workshop",
    youtubeId: "JHLqGjAnJ8c", // Replace with actual YouTube ID
    signupLink: "#",
    watchLink: "#",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/thetriibe/",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@TRIIBEtalk",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/triibe.us/",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@triibetalk",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/1P5jIjrqdDLL1Xoquj5eiE?si=fd24d12a0edf448c",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple",
    url: "https://podcasts.apple.com/us/podcast/triibe-talk/id1855739237",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 2.824c5.065 0 9.176 4.111 9.176 9.176 0 5.064-4.111 9.176-9.176 9.176-5.065 0-9.177-4.112-9.177-9.176 0-5.065 4.112-9.176 9.177-9.176zm.025 3.28c-1.803 0-3.373 1.215-3.834 2.857-.046.167.068.337.249.337.149 0 .277-.099.311-.244.316-1.361 1.528-2.362 2.999-2.362s2.683 1.001 2.999 2.362c.034.145.162.244.311.244.181 0 .295-.17.249-.337-.461-1.642-2.031-2.857-3.834-2.857h-.45zm.025 3.416c-1.078 0-1.95.872-1.95 1.95v4.764c0 .527.473 1 1 1h1.9c.527 0 1-.473 1-1V11.47c0-1.078-.872-1.95-1.95-1.95z" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    url: "https://music.amazon.com/podcasts/da3070b6-5ec9-4ed0-9d8d-67a43f7fbb79/triibe-talk",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M7 16.5c2.5 1.5 5.5 2 8.5 1.5.3-.05.5.15.4.4-.8 1.2-2.5 2.1-4.5 2.1-2.5 0-4.8-1.5-5.5-3.5-.1-.2.1-.4.3-.3.3.1.5.2.8.3zm11-1.5c-.2-.3-1.5-.1-2 0-.2 0-.2-.1 0-.2 1-.7 2.6-.5 2.8-.3.2.2 0 1.9-1 2.7-.1.1-.3.1-.2-.1.2-.5.7-1.7.4-2.1z" />
      </svg>
    ),
  },
  {
    name: "Subscribe",
    url: "#",
    svg: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    isSubscribe: true,
  },
];

const MediaPage = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [currentWorkshop, setCurrentWorkshop] = useState(0);

  const goToPrevious = () => {
    setCurrentWorkshop((prev) =>
      prev === 0 ? workshops.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentWorkshop((prev) =>
      prev === workshops.length - 1 ? 0 : prev + 1,
    );
  };

  const workshop = workshops[currentWorkshop];

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 md:px-50 bg-white">
        <div className="max-w-300 mx-auto">
          <div className="mb-12">
            <h1 className="font-bold text-black text-5xl mb-4">TRIIBE Talk</h1>
            <p className="font-normal text-[#495565] text-xl">
              Real conversations with student nonprofit leaders building
              community impact
            </p>
          </div>

          {/* Workshop Card */}
          <div className="mb-8">
            <h2 className="font-semibold text-black text-2xl mb-6">
              {workshop.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Video Embed */}
              <div className="w-full">
                <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden h-full max-w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${workshop.youtubeId}?autoplay=1&mute=1`}
                    title={workshop.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              {/* Speakers Info */}
              <div className="min-h-87.5">
                <div className="flex gap-6 mb-6">
                  {workshop.speakers.map((speaker, index) => (
                    <div key={index} className="flex-1">
                      <div className="w-16 h-16 bg-gray-300 rounded-full mb-3 overflow-hidden">
                        <img
                          src={speaker.avatar}
                          alt={speaker.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-black text-lg mb-1">
                        {speaker.name}
                      </h3>
                      <p className="font-semibold text-black text-sm mb-2">
                        {speaker.topic}
                      </p>
                      <p className="font-normal text-[#495565] text-sm">
                        {speaker.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4"></div>
                <div className="text-sm text-[#697282] mt-4">
                  {workshop.duration} · {workshop.type}
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={workshop.signupLink}
                    className="px-8 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base inline-flex items-center gap-2 justify-center min-w-35"
                  >
                    <Bell className="w-4 h-4" />
                    Sign up
                  </a>
                  <a
                    href={workshop.watchLink}
                    className="px-8 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center gap-2 justify-center min-w-45"
                  >
                    <Play className="w-4 h-4" />
                    Watch / Listen
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous workshop"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {workshops.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentWorkshop(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentWorkshop
                      ? "bg-black w-2"
                      : "bg-gray-300 w-2"
                  }`}
                  aria-label={`Go to workshop ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next workshop"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Media Cards Section */}
      <section className="py-20 px-4 md:px-50 bg-gray-50">
        <div className="max-w-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Podcasts Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 pb-0">
                <h3 className="font-bold text-black text-2xl mb-4">Podcasts</h3>
              </div>
              <div className="px-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/media/podcast.png"
                    alt="TRIIBE Talk Podcast"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between min-h-100">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#c6f82a] rounded mb-4">
                    <span className="font-semibold text-black text-sm">
                      Latest Episode
                    </span>
                  </div>
                  <h4 className="font-semibold text-black text-lg mb-3">
                    High Tech with HAITECH
                  </h4>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed mb-6">
                    Founder and Product Lead of HAITECH Learning explores her
                    remarkable journey from growing up in Haiti to launching a
                    nonprofit.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=XNUr1NgLq28"
                  target="_blank"
                  className="w-full px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Play
                </a>
              </div>
            </div>

            {/* Workshops Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 pb-0">
                <h3 className="font-bold text-black text-2xl mb-4">
                  Workshops
                </h3>
              </div>
              <div className="px-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/media/workshop.png"
                    alt="TRIIBE Talk Workshops"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between min-h-100">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#c6f82a] rounded mb-4">
                    <span className="font-semibold text-black text-sm">
                      Latest Workshop
                    </span>
                  </div>
                  <h4 className="font-semibold text-black text-lg mb-3">
                    Signal to Noise Branding x The SuperBetter Mindset
                  </h4>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed mb-6">
                    Watch our latest workshop session with industry leaders and
                    experts as they share insights.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=pNKGIByJNnk"
                  target="_blank"
                  className="w-full px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch
                </a>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 pb-0">
                <h3 className="font-bold text-black text-xl mb-4">
                  TRIBUNE Newsletter
                </h3>
              </div>
              <div className="px-6">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6914b8fe53e5c6fdf6125a6c_70632aae-58b7-18fb-bdca-711530df92dd.png"
                    alt="TRIBUNE Newsletter"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between min-h-100">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#c6f82a] rounded mb-4">
                    <span className="font-semibold text-black text-sm">
                      NOV 2025
                    </span>
                  </div>
                  <h4 className="font-semibold text-black text-lg mb-3">
                    Our 6th TRIIBE Branch is Here!
                  </h4>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed mb-6">
                    In the past month, we onboarded 25 new members, bringing our
                    total to nearly 70 and keeping us on track toward our goal
                    of 100 by year-end. We launched...
                  </p>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="px-6 py-2 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base inline-flex items-center justify-center"
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
                  </a>
                  <a
                    href="https://mailchi.mp/triibe.us/the-triibune-october-newsletter"
                    target="_blank"
                    className="flex-1 px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center justify-center gap-2"
                  >
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Newsletter Section */}
      {/* <section className="py-20 px-4 md:px-50 bg-white">
        <div className="max-w-300 mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-bold text-black text-3xl">Latest Newsletter</h2>
            <a
              href="#"
              className="font-normal text-black text-base underline  inline-flex items-center gap-2"
            >
              Past issues
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="mb-8">
            <p className="font-normal text-[#697282] text-sm mb-4 uppercase tracking-wider">
              TRIIBE TALK • ISSUE #12 • JANUARY 2026
            </p>
            <h3 className="font-bold text-black text-xl md:text-[26px] mb-8">
              [Newsletter Title: How 3 Fellows Scaled Their Impact in 6 Months]
            </h3>

            <div className="border-l-4 border-black pl-6 mb-8">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-semibold text-black text-base">
                    • Scaling strategy:
                  </span>
                  <span className="font-normal text-black text-base">
                    Framework for growth without sacrificing mission
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-black text-base">
                    • Scaling strategy:
                  </span>
                  <span className="font-normal text-black text-base">
                    Framework for growth without sacrificing mission
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-black text-base">
                    • Scaling strategy:
                  </span>
                  <span className="font-normal text-black text-base">
                    Framework for growth without sacrificing mission
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-[#002c19] text-white rounded hover:bg-[#003d24] transition-colors font-semibold text-base inline-flex items-center gap-2"
              >
                Read latest
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base inline-flex items-center gap-2"
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
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Social Links */}
      <section className="py-12 bg-gray-50 ">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Connect With Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[450px] mx-auto">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target={social.isSubscribe ? undefined : "_blank"}
                rel={social.isSubscribe ? undefined : "noopener noreferrer"}
                onClick={
                  social.isSubscribe
                    ? (e) => {
                        e.preventDefault();
                        setShowNewsletter(true);
                      }
                    : undefined
                }
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow text-black group-hover:text-gray-600">
                  {social.svg}
                </div>
                {/* <span className="text-sm font-medium text-gray-700">
                  {social.name}
                </span> */}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />

      <Footer />

      {/* Newsletter Popup */}
      {/* {showNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-10 max-w-md w-full relative">
            <button
              onClick={() => setShowNewsletter(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center mb-8">
              <Image
                src="/images/TriibeHero.svg"
                alt="TRIIBE"
                width={64}
                height={64}
                className="h-16 w-auto mx-auto mb-6"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Subscribe to the TRIIBUNE!
              </h3>
              <p className="text-base text-gray-700">
                Monthly updates on our impact, new projects, and ways to get
                involved!
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowNewsletter(false);
              }}
              className="space-y-4"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-base"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium text-white bg-[#004d40] hover:bg-[#00352a] transition-colors rounded-lg"
              >
                Subscribe!
              </button>
              <button
                type="button"
                onClick={() => setShowNewsletter(false)}
                className="w-full text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                No, thank you
              </button>
            </form>
          </div>
        </div>
      )} */}
    </main>
  );
};

export default MediaPage;
