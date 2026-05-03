"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";

const EARLY_BIRD_DEADLINE = new Date("2026-06-01T00:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    calc();
    const id = setInterval(calc, 1000 * 60);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function HeroSummit() {
  const earlyBird = useCountdown(EARLY_BIRD_DEADLINE);

  return (
    <main className="pt-16">
      <section className="relative w-full min-h-150 md:min-h-175 lg:min-h-200 bg-[#101828] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/summit/HeroSummit1.png"
            alt="Next-Gen Changemaker Summit"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 w-full h-full bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 max-w-225 mx-auto ">
          <div className="flex flex-col items-center  pb-3">
            <h1 className="font-['DM_Sans',Helvetica] font-bold text-white text-4xl md:text-4xl lg:text-5xl text-center tracking-tight leading-tight max-w-200">
              Next-Gen nonprofit Summit
            </h1>
          </div>

          <div className="flex flex-col items-center pb-6">
            <p className="font-['DM_Sans',Helvetica] font-normal text-white text-base md:text-lg text-center tracking-[0] leading-relaxed">
              Hosted by Invite Only x TRIIBE
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              <span>September 4–6, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} />
              <span>Multi-Day Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              <span>25th and 7th St, New York, NY</span>
            </div>
          </div>

          <div className="bg-white backdrop-blur-sm border border-white/20 rounded-xl px-8 py-4 mb-6 text-center">
            <p className="text-black text-lg font-bold mb-3">
              Early Bird Sale ends in
            </p>
            <div className="flex items-end justify-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-black font-bold text-4xl leading-none">
                  {String(earlyBird.days).padStart(2, "0")}
                </span>
                <span className="text-black text-xs mt-1">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-black font-bold text-4xl leading-none">
                  {String(earlyBird.hours).padStart(2, "0")}
                </span>
                <span className="text-black text-xs mt-1">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-black font-bold text-4xl leading-none">
                  {String(earlyBird.minutes).padStart(2, "0")}
                </span>
                <span className="text-black text-xs mt-1">Mins</span>
              </div>
            </div>
          </div>

          <a
            href="#tickets"
            className="px-12 py-3 bg-white text-black font-bold text-sm rounded hover:bg-gray-100 transition-colors mt-4"
          >
            Buy Tickets
          </a>
        </div>
      </section>
    </main>
  );
}
