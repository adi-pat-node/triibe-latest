"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";

interface Region {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  status: string;
  link: string;
}

const REGIONS: Region[] = [
  {
    id: "toronto",
    name: "Toronto, Canada",
    coordinates: { x: 25, y: 23 },
    description:
      "Helping next-gen nonprofit founders continue their work in Canada.",
    status: "TRIIBE Branch",
    link: "/canada",
  },
  {
    id: "london",
    name: "London, UK",
    coordinates: { x: 48.8, y: 20 },
    description:
      "Helping next-gen nonprofit founders continue their work in the UK.",
    status: "TRIIBE Branch",
    link: "/about",
  },
  {
    id: "mumbai",
    name: "Mumbai, India",
    coordinates: { x: 73.5, y: 44 },
    description:
      "Helping next-gen nonprofit founders continue their work in India.",
    status: "TRIIBE Branch",
    link: "/about",
  },
  {
    id: "manila",
    name: "Manila, Philippines",
    coordinates: { x: 89.2, y: 50 },
    description:
      "Helping next-gen nonprofit founders continue their work in the Philippines.",
    status: "TRIIBE Branch",
    link: "/about",
  },
];

export default function OfficeMap() {
  const [hoveredRegion, setHoveredRegion] = useState<Region | null>(null);

  return (
    <section id="globalMap" className="pt-12 pb-24 px-4 md:px-50 bg-white">
      <div className="max-w-260 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Global Network
        </h2>
        <p className="text-[#495565] text-lg max-w-2xl mx-auto mb-12">
          With 50+ volunteers, TRIIBE Has 10+ branches in regions across the
          globe <br /> Click on the map to learn more
        </p>

        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm  aspect-[2/1]  overflow-hidden w-full">
          <img
            src="/images/world1.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Map Pins (Custom Logos) */}
          {REGIONS.map((region) => (
            <Link
              key={region.id}
              href={region.link}
              onMouseEnter={() => setHoveredRegion(region)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="absolute transform bg-white/80 rounded-full  -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform cursor-pointer"
              style={{
                top: `${region.coordinates.y}%`,
                left: `${region.coordinates.x}%`,
              }}
            >
              {/* Glow effect behind logo on hover */}
              {hoveredRegion?.id === region.id && (
                <span className="absolute inset-0 rounded-full bg-[#1C5945] opacity-20 animate-ping" />
              )}

              <div
                className={`p-1  rounded-full    ${
                  hoveredRegion?.id === region.id
                    ? "border-[#1C5945] scale-110 shadow-lg transition-all border"
                    : ""
                }`}
              >
                <img
                  src="/mapPin.png"
                  alt={region.name}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
              </div>
            </Link>
          ))}

          {/* Info Card - Appears on Hover */}
          {hoveredRegion && (
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto md:w-80 bg-white p-4 md:p-6 rounded-2xl shadow-2xl text-left border border-gray-100 animate-in fade-in zoom-in-95 duration-200 pointer-events-none z-20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5945] bg-green-50 px-2 py-0.5 rounded">
                {hoveredRegion.status}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-black mt-1">
                {hoveredRegion.name}
              </h3>
              <p className="text-xs md:text-sm text-[#495565] mt-1 mb-2 leading-relaxed">
                {hoveredRegion.description}
              </p>
              <p className="text-[10px] text-gray-400 italic font-medium">
                Click to learn more →
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
