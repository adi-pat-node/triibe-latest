"use client";

import React, { useState } from "react";
import { X, ExternalLink } from "lucide-react";

interface SubLocation {
  name: string;
  description: string;
  link: string;
}

interface Region {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  description: string;
  status: string;
  link: string;
  subLocations?: SubLocation[];
}

const REGIONS: Region[] = [
  {
    id: "toronto",
    name: "Toronto, Canada",
    coordinates: { x: 25, y: 22 },
    description:
      "Helping next-gen nonprofit founders continue their work in Canada.",
    status: "TRIIBE Branch",
    link: "/canada",
  },
  {
    id: "usa",
    name: "USA",
    coordinates: { x: 22, y: 32 },
    description:
      "Helping next-gen nonprofit founders continue their work in the USA.",
    status: "TRIIBE Branch",
    link: "/about",
    subLocations: [
      {
        name: "New York, USA",
        description:
          "Helping next-gen nonprofit founders continue their work in New York.",
        link: "/about",
      },
      {
        name: "Washington, DC",
        description:
          "Helping next-gen nonprofit founders continue their work in DC.",
        link: "/about",
      },
    ],
  },
  {
    id: "jamaica",
    name: "Jamaica",
    coordinates: { x: 25, y: 44 },
    description:
      "Helping next-gen nonprofit founders continue their work in Jamaica.",
    status: "TRIIBE Branch",
    link: "/about",
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
    id: "sierra-leone",
    name: "Sierra Leone",
    coordinates: { x: 45.5, y: 53 },
    description:
      "Helping next-gen nonprofit founders continue their work in Sierra Leone.",
    status: "TRIIBE Branch",
    link: "/about",
  },
  {
    id: "india",
    name: "India",
    coordinates: { x: 74, y: 42 },
    description:
      "Helping next-gen nonprofit founders continue their work in India.",
    status: "TRIIBE Branch",
    link: "/about",
    subLocations: [
      {
        name: "Mumbai, India",
        description:
          "Helping next-gen nonprofit founders continue their work in Mumbai.",
        link: "/about",
      },
      {
        name: "Ranchi, India",
        description:
          "Helping next-gen nonprofit founders continue their work in Ranchi.",
        link: "/about",
      },
    ],
  },
];

function SingleCard({ region }: { region: Region }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl text-left border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5945] bg-green-50 px-2 py-0.5 rounded">
        {region.status}
      </span>
      <h3 className="text-lg md:text-xl font-bold text-black mt-1">
        {region.name}
      </h3>
      <p className="text-xs md:text-sm text-[#495565] mt-1 mb-2 leading-relaxed">
        {region.description}
      </p>
    </div>
  );
}

function SubCard({ sub, status }: { sub: SubLocation; status: string }) {
  return (
    <div className="bg-white p-4 md:p-5 rounded-2xl shadow-2xl text-left border border-gray-100 animate-in fade-in zoom-in-95 duration-200 w-full md:w-80">
      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1C5945] bg-green-50 px-2 py-0.5 rounded">
        {status}
      </span>
      <h3 className="text-base md:text-lg font-bold text-black mt-1">
        {sub.name}
      </h3>
      <p className="text-xs md:text-sm text-[#495565] mt-1 mb-2 leading-relaxed">
        {sub.description}
      </p>
    </div>
  );
}

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

        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm aspect-[2/1] overflow-hidden w-full">
          <img
            src="/images/world1.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Map Pins */}
          {REGIONS.map((region) => (
            <div
              key={region.id}
              onMouseEnter={() => setHoveredRegion(region)}
              onMouseLeave={() => setHoveredRegion(null)}
              className="absolute transform bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 transition-transform cursor-default"
              style={{
                top: `${region.coordinates.y}%`,
                left: `${region.coordinates.x}%`,
              }}
            >
              {hoveredRegion?.id === region.id && (
                <span className="absolute inset-0 rounded-full bg-[#1C5945] opacity-20 animate-ping" />
              )}

              <div
                className={`p-1 rounded-full ${
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
            </div>
          ))}

          {hoveredRegion && (
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 pointer-events-none z-20">
              {hoveredRegion.subLocations ? (
                <div className="flex gap-3 md:gap-4 md:w-auto md:max-w-xl">
                  {hoveredRegion.subLocations.map((sub) => (
                    <SubCard
                      key={sub.name}
                      sub={sub}
                      status={hoveredRegion.status}
                    />
                  ))}
                </div>
              ) : (
                <div className="md:w-80">
                  <SingleCard region={hoveredRegion} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
