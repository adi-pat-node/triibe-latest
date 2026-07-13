import React from "react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PersonCard from "@/components/about/PersonCard";

import Image from "next/image";
import ApplicationProcess from "@/components/applicationProcess";

const CanadaRegionPage = () => {
  const boardOfDirectors = [
    {
      name: "Kyle Matthys",
      role: "Founder & CEO",
      imagePath: "/images/team/kyle-matthys.jpg",
      linkedIn: "#",
    },
    {
      name: "Kyle Matthys",
      role: "Founder & CEO",
      imagePath: "/images/team/kyle-matthys.jpg",
      linkedIn: "#",
    },
  ];

  const advisoryBoard = [
    {
      name: "Kyle Matthys",
      role: "Founder & CEO",
      imagePath: "/images/team/kyle-matthys.jpg",
      linkedIn: "#",
    },
    {
      name: "Kyle Matthys",
      role: "Founder & CEO",
      imagePath: "/images/team/kyle-matthys.jpg",
      linkedIn: "#",
    },
  ];

  const news = [
    {
      title: "TRIIBE expands to Montreal",
      date: "Feb 15, 2025",
      excerpt:
        "New partnership announced with local social enterprises in Quebec.",
      link: "https://blog.triibe.org/p/the-triibune-june-2026",
    },
    {
      title: "Impact report: Canada Q1",
      date: "Jan 10, 2025",
      excerpt:
        "Our Canadian fellows have reached a milestone of $1M in community value.",
      link: "https://blog.triibe.org/p/monthly-update-november-2025",
    },
  ];

  return (
    <main className="bg-white text-[#002c19]">
      <Header />

      <section className="pt-32 pb-8 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto flex items-center gap-2 md:gap-4">
          <Image
            src="/images/TRIIBELOGOS/TRIIBE NAME.png"
            alt="TRIIBE"
            width={120}
            height={40}
            className="w-20 sm:w-24 md:w-32 h-auto"
          />
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-[#002c19] whitespace-nowrap">
            Canada branch
          </h1>
        </div>
      </section>

      <ApplicationProcess />

      <section className="py-12 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold border-b border-[#002c19]/10 pb-2 mb-8">
            Regional associate board
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {boardOfDirectors.map((member, index) => (
              <PersonCard key={index} person={member} photoSize={80} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold border-b border-[#002c19]/10 pb-2 mb-8">
            Regional advisory board
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {advisoryBoard.map((member, index) => (
              <PersonCard key={index} person={member} photoSize={80} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold border-b border-[#002c19]/10 pb-2 mb-8">
            Recent news
          </h2>
          <div className="space-y-8">
            {news.map((item, index) => (
              <Link href={item.link} key={index} className="block group">
                <p className="text-sm font-bold text-[#002c19] mb-1">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold group-hover:underline mb-2">
                  {item.title}
                </h3>
                <p className="text-[#495565] leading-relaxed">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-[200px] text-center">
        <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.01]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
              Discover other branches
            </p>
            <Link
              href="/#triibe-globe-header"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:scale-105"
            >
              Global map
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CanadaRegionPage;
