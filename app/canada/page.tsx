import React from "react";
import { Users, Newspaper } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const CanadaRegionPage = () => {
  // Dummy data for cohorts
  const cohorts = [
    { name: "Toronto Impact Cohort 2025", members: 12, status: "Active" },
    {
      name: "Vancouver Sustainability Fellows",
      members: 8,
      status: "Graduated",
    },
  ];

  // Dummy data for boards
  const boardOfDirectors = [
    { name: "Jane Doe", role: "Regional Chair" },
    { name: "John Smith", role: "Treasurer" },
  ];

  const advisoryBoard = [
    { name: "Dr. Aris Vance", role: "Sustainability Advisor" },
    { name: "Sarah Jenkins", role: "Community Development Consultant" },
  ];

  // Dummy data for recent news
  const news = [
    {
      title: "TRIIBE Expands to Montreal",
      date: "Feb 15, 2025",
      excerpt:
        "New partnership announced with local social enterprises in Quebec.",
    },
    {
      title: "Impact Report: Canada Q1",
      date: "Jan 10, 2025",
      excerpt:
        "Our Canadian fellows have reached a milestone of $1M in community value.",
    },
  ];

  return (
    <main className="bg-white text-[#002c19]">
      <Header />

      {/* Header Title Section */}
      <section className="pt-32 pb-8 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#002c19]">
            TRIIBE Canada Branch
          </h1>
        </div>
      </section>

      {/* Cohorts Section */}
      <section className="py-12 px-4 md:px-[200px] bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-[#002c19]" />
            <h2 className="text-2xl font-bold">Canada Cohorts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#002c19] bg-green-50 px-2 py-1 rounded">
                  {cohort.status}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-1">{cohort.name}</h3>
                <p className="text-sm text-[#495565]">
                  {cohort.members} Impact Members
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Board of Directors Section */}
      <section className="py-12 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold border-b border-[#002c19]/10 pb-2 mb-8">
            Regional Board of Directors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boardOfDirectors.map((member, index) => (
              <div
                key={index}
                className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10"
              >
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm opacity-80 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Advisory Board Section */}
      <section className="py-12 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-2xl font-bold border-b border-[#002c19]/10 pb-2 mb-8">
            Regional Advisory Board
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {advisoryBoard.map((member, index) => (
              <div
                key={index}
                className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10"
              >
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm opacity-80 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="py-12 px-4 md:px-[200px] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-[#002c19]" />
            <h2 className="text-2xl font-bold">Recent News</h2>
          </div>
          <div className="space-y-8">
            {news.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <p className="text-sm font-bold text-[#002c19] mb-1">
                  {item.date}
                </p>
                <h3 className="text-xl font-bold group-hover:underline mb-2">
                  {item.title}
                </h3>
                <p className="text-[#495565] leading-relaxed">{item.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Full Bubble Navigation Banner */}
      <section className="py-16 px-4 md:px-[200px] border-t border-[#002c19]/10 text-center">
        <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.01]">
          <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
              Discover other branches
            </p>
            <Link
              href="/#globalMap"
              className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:scale-105"
            >
              Global Map
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CanadaRegionPage;
