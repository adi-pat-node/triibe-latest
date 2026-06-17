"use client";

import { useRef, useState } from "react";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const Page = () => {
  const isApplicationOpen = true;
  /* const formRef = useRef<HTMLFormElement>(null);

  const handleCancel = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }; */

  const faqs = [
    {
      question: "How do I apply for a cohort?",
      answer:
        "To apply, complete the application form on this page, attaching your 5-minute video link. You'll receive confirmation once your application has been received.",
    },
    {
      question: "Who is eligible to apply?",
      answer:
        "Next-gen founders aged 20-25 committed to growing your registered nonprofit over the next 3 years.",
    },
    {
      question: "What is the selection process?",
      answer:
        "Our process starts with a thoughtful review of your application and video, then invites semi-finalists for interviews.",
    },
    {
      question: "What support do selected fellows receive?",
      answer:
        "TRIIBE Fellows receive their first $5,000 grant, mentorship, and a peer community. For a full look at additional support, like the Summit, retreat, and documentaries, see the deck above.",
    },
    {
      question: "How long is the Residency",
      answer:
        "TRIIBE supports you for three years, with each year helping you further your nonprofit. Afterwards, fellows stay part of the fellowship for life.",
    },
    {
      question: "When will I hear back?",
      answer:
        "All applicants are notified within two weeks of the application closing, and we keep communication clear and consistent throughout.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main>
      <Header />

      <Script
        src="https://logictry.com/js/connect/v1.js"
        strategy="afterInteractive"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4 md:px-25 lg:px-[200px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]  gap-16 items-start">
            {/* Left - Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/home/whatWeDo2.png"
                alt="TRIIBE Cohort"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h1 className="font-bold text-black text-4xl md:text-[40px] mb-6 leading-tight">
                Apply to the fellowship
              </h1>

              <p className="font-normal text-[#495565] text-[16px] leading-relaxed mb-4">
                We’re looking for next-gen nonprofit founders maximizing a
                return on impact, not income
              </p>

              {/* How to Apply Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h2 className="font-bold text-black text-xl mb-3">
                  How to apply
                </h2>

                <p className="font-normal text-[#495565] text-base mb-3 leading-relaxed">
                  Instead of a pitch deck, please submit a short video (up to 5
                  minutes) describing:
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — What motivates your work? (Your Why)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How have you made a difference? (Your Impact)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How would you use your first grant? (Your Pitch)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 md:px-25 lg:px-[200px] bg-[#3036411A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-black text-4xl mb-4">
            Application Form
          </h2>
          <p className="font-normal text-[#495565] text-base mb-12">
            Please fill out all fields. Fields marked with * are required.
          </p>
          {isApplicationOpen ? (
            <div className="bg-white rounded-lg p-4 md:p-8 min-h-[800px]">
              <iframe
                title="TRIIBE Application Form"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: "800px",
                }}
                src="https://logictry.com/content/6a033212eb0e25408ca14698?autoresize=true&autoscroll=true&allowredirects=true&allowfullscreen=true&onlyscrollfullscreen=false&onclickshowfullscreen=false&showplaceholder=false&showchatbot=false&showbutton=false&showtoggle=true"
              />
            </div>
          ) : (
            <div className="bg-white rounded-lg p-10 md:p-16 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">
                Opening Soon
              </h3>
              <p className="text-[#495565] text-lg">
                Applications for the Fall 2026 cohort will open May 1st.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Deck Section */}
      <section className="py-12 px-4 md:px-25 lg:px-[200px] bg-white">
        <div className="max-w-260 mx-auto">
          <div className="max-w-7xl mx-auto transition-all duration-300 hover:scale-105">
            <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-2xl md:text-3xl font-medium text-gray-900">
                For a full overview, see our deck
              </p>
              <Link
                href="https://drive.google.com/file/d/1XxPb8UfeLXAVUy2zl0mle1lkUe7A2q1K/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-10 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Application FAQs */}

      <section className="pt-16 pb-8 px-4 md:px-25 lg:px-[200px] bg-[#3036411A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Application FAQs
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      openFaqIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-gray-700 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
