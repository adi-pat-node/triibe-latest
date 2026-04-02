"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, Lock } from "lucide-react";

const tiers = [
  {
    id: "seed",
    name: "Seed",
    amount: 1000,
    subtitle: "TRIIBE Talk Sponsorship",
    description:
      "Host an event to discover founders and recruit local leadership in a new city.",
    popular: false,
  },
  {
    id: "roots",
    name: "Roots",
    amount: 30000,
    subtitle: "Sophomore Cohort Sponsorship",
    description:
      "Launch a cohort of 5 founders with $25K in grants and a branch lead stipend.",
    popular: true,
  },
  {
    id: "skyline",
    name: "Skyline",
    amount: 55000,
    subtitle: "Junior Cohort Sponsorship",
    description:
      "Follow-on grants of $50K to scale proven founders and deepen community impact.",
    popular: false,
  },
  {
    id: "stars",
    name: "Stars",
    amount: 150000,
    subtitle: "Senior Cohort Sponsorship",
    description:
      "Next-gen changemakers receive $125K in grants and full storytelling support.",
    popular: false,
  },
];

const bullets = [
  {
    icon: "/images/donate/1.png",
    text: "$1,000 sparks a movement - fund a TRIIBE Talk that discovers founders in a new city",
  },
  {
    icon: "/images/donate/2.png",
    text: "$30,000 launches a cohort - 5 founders receive grants and mentorship to take root",
  },
  {
    icon: "/images/donate/3.png",
    text: "$150,000 amplifies futures - next-gen changemakers receive $125K in grants and full storytelling support",
  },
];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState("roots");
  const [paymentMode, setPaymentMode] = useState<"full" | "installments">(
    "full",
  );

  const selected = tiers.find((t) => t.id === selectedTier)!;

  const formatAmount = (amount: number) => `$${amount.toLocaleString("en-US")}`;

  return (
    <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50 bg-white">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="flex-1 max-w-xl">
            <div className="mb-12">
              <Image
                src="/images/donate/logo.svg"
                alt="TRIIBE"
                width={240}
                height={80}
                className="object-contain"
              />
            </div>

            <h1 className="text-3l md:text-4xl font-bold text-black leading-tight mb-10">
              Your investment launches the next generation of changemakers.
            </h1>

            <div className="flex flex-col gap-6 mb-16">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Image
                    src={b.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="mt-0.5 flex-shrink-0"
                  />
                  <p className="text-[#495565] text-[15px] leading-relaxed">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-125 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#1B4332] mb-1">
                Choose Your Impact
              </h2>
              <p className="text-sm text-[#6B7C72]">
                Every dollar goes directly to funding and supporting the next
                generation of nonprofit founders.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id)}
                  className={`relative text-left p-4 rounded-xl border transition-all duration-150 ${
                    selectedTier === tier.id
                      ? "border-[#1C5945]  bg-white shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 right-3 bg-[#D4A853] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  {selectedTier === tier.id && (
                    <span className="absolute top-3 right-3 w-5 h-5 bg-[#1C5945] rounded-full flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                  <p className="text-sm text-[#3D5A4C] mb-1">{tier.name}</p>
                  <p className="text-2xl font-bold text-[#1B4332] mb-1">
                    {formatAmount(tier.amount)}
                  </p>
                  <p className="text-xs text-[#A09B91] mb-2">{tier.subtitle}</p>
                  <p className="text-xs text-[#6B7C72] leading-relaxed">
                    {tier.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="bg-[#FAFAF7] m-4 p-4 rounded-lg  text-center border border-[#E8E4DD]">
              <div className="flex gap-3">
                <button
                  onClick={() => setPaymentMode("full")}
                  className={`flex-1 py-3 text-sm font-semibold  rounded-xl  transition-colors border border-gray-200 ${
                    paymentMode === "full"
                      ? "bg-[#1C5945] text-white"
                      : "bg-white text-[#6B7C72] hover:bg-gray-50"
                  }`}
                >
                  Pay in Full
                </button>
                <button
                  onClick={() => setPaymentMode("installments")}
                  className={`flex-1 py-3 text-sm font-semibold rounded-xl border border-gray-200 transition-colors ${
                    paymentMode === "installments"
                      ? "bg-[#1C5945] text-white"
                      : "bg-white text-[#6B7C72] hover:bg-gray-50"
                  }`}
                >
                  Monthly Installments
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-[#6B7C72] mb-1">
                  One-time contribution
                </p>
                <p className="text-4xl font-normal text-[#1B4332]">
                  {formatAmount(selected.amount)}
                </p>
              </div>
            </div>
            <button className="w-full py-4 bg-[#1C5945] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-[#164a38] transition-colors">
              <Heart size={18} fill="none" />
              Donate {formatAmount(selected.amount)}
            </button>

            <div className="flex items-center justify-center gap-6 text-xs text-[#495565]">
              <div className="flex items-center gap-1.5">
                <Lock size={12} />
                <span>Secure donation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span>Tax-deductible contribution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
