import React from "react";
import { Users, Newspaper, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

const CanadaRegionPage = () => {
  // Dummy data for the Canada region
  const cohorts = [
    { name: "Toronto Impact Cohort 2025", members: 12, status: "Active" },
    {
      name: "Vancouver Sustainability Fellows",
      members: 8,
      status: "Graduated",
    },
  ];

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
    <main className="bg-white ">
      <Header />
      {/* Navigation Header */}
      <section className="pt-32 pb-8 px-4 md:px-[200px] border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/#globalMap"
            className="flex items-center gap-2 text-[#1C5945] font-bold mb-6 hover:underline"
          >
            <ArrowLeft size={16} /> Back to Global Map
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-50 rounded-xl">
              <MapPin className="text-[#1C5945]" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Canada Hub
            </h1>
          </div>
          <p className="text-[#495565] text-lg max-w-2xl">
            Our Canadian initiatives focus on indigenous-led social
            entrepreneurship and sustainable urban development across major
            metropolitan hubs.
          </p>
        </div>
      </section>

      {/* Cohorts Section */}
      <section className="py-16 px-4 md:px-[200px] bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-[#1C5945]" />
            <h2 className="text-2xl font-bold text-black">Active Cohorts</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cohorts.map((cohort, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5945] bg-green-50 px-2 py-1 rounded">
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

      {/* Recent News Section */}
      <section className="py-16 px-4 md:px-[200px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Newspaper className="text-[#1C5945]" />
            <h2 className="text-2xl font-bold text-black">Recent News</h2>
          </div>
          <div className="space-y-8">
            {news.map((item, index) => (
              <div key={index} className="group ">
                <p className="text-sm font-bold text-[#1C5945] mb-1">
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
      <Footer />
    </main>
  );
};

export default CanadaRegionPage;
