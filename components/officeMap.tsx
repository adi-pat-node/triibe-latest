"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import type {
  LocationEntry,
  LocationAdvisoryMember,
} from "@/types/about";

import { locations } from "@/lib/about-data";

/* =========================================================
   MAP REGIONS
   ---------------------------------------------------------
   The coordinates below are kept from your original map.
   The actual people/data comes from about-data.ts.
========================================================= */

interface Region {
  id: string;
  name: string;
  coordinates: {
    x: number;
    y: number;
  };
  locationNames: string[];
}

const REGIONS: Region[] = [
  {
    id: "toronto",
    name: "Toronto",
    coordinates: { x: 25, y: 22 },
    locationNames: ["Toronto, Canada", "Canada"],
  },

  {
    id: "usa",
    name: "USA",
    coordinates: { x: 22, y: 32 },
    locationNames: [
      "USA",
      "New York, USA",
      "Washington, DC",
    ],
  },

  {
    id: "jamaica",
    name: "Jamaica",
    coordinates: { x: 25, y: 44 },
    locationNames: ["Jamaica"],
  },

  {
    id: "london",
    name: "London",
    coordinates: { x: 48.8, y: 20 },
    locationNames: ["London, UK", "United Kingdom", "UK"],
  },

  {
    id: "sierra-leone",
    name: "Sierra Leone",
    coordinates: { x: 45.5, y: 53 },
    locationNames: ["Sierra Leone"],
  },

  {
    id: "india",
    name: "India",
    coordinates: { x: 74, y: 42 },
    locationNames: [
      "India",
      "Mumbai, India",
      "Ranchi, India",
    ],
  },

  {
    id: "singapore",
    name: "Singapore",
    coordinates: { x: 84, y: 58 },
    locationNames: ["Singapore"],
  },
];

/* =========================================================
   FIND LOCATION DATA
========================================================= */

function getLocationEntries(region: Region): LocationEntry[] {
  return locations.filter((location: LocationEntry) =>
    region.locationNames.some(
      (name) =>
        location.location.toLowerCase().trim() ===
        name.toLowerCase().trim()
    )
  );
}

/* =========================================================
   ADVISORY MEMBER
========================================================= */

function AdvisoryMember({
  member,
}: {
  member: LocationAdvisoryMember;
}) {
  return (
    <div className="flex flex-col items-center text-center w-[110px]">
      <PersonAvatar
        src={member.imagePath}
        name={member.name}
        size={52}
      />

      <p
        className="mt-2 font-medium text-[#002c19]"
        style={{
          fontSize: 11,
          lineHeight: 1.3,
        }}
      >
        {member.name}
      </p>

      {member.role && (
        <p
          className="mt-1 text-[#1A6B3C]"
          style={{
            fontSize: 9,
            lineHeight: 1.3,
            fontWeight: 500,
          }}
        >
          {member.role}
        </p>
      )}

      {member.title && (
        <p
          className="mt-0.5 text-[#002c19]/70"
          style={{
            fontSize: 10,
            lineHeight: 1.25,
          }}
        >
          {member.title}
        </p>
      )}

      <div className="mt-2">
        <LinkedInBadge url={member.linkedIn} />
      </div>
    </div>
  );
}

/* =========================================================
   LOCATION POPUP
========================================================= */

function LocationPopup({
  entry,
  onClose,
}: {
  entry: LocationEntry;
  onClose: () => void;
}) {
  const hasAdvisoryBoard = entry.advisoryBoard?.length > 0;

  return (
    <div
      className="
        relative
        w-full
        max-w-[640px]
        bg-white
        rounded-[22px]
        border-2
        border-[#002c19]
        shadow-2xl
        overflow-hidden
        animate-in
        fade-in
        zoom-in-95
        duration-200
      "
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="
          absolute
          top-5
          right-5
          z-10
          text-gray-400
          hover:text-[#002c19]
          transition-colors
        "
        aria-label="Close"
      >
        <X size={22} strokeWidth={2.5} />
      </button>

      <div className="flex">
        {/* =============================================
            LEFT LOCATION SIDEBAR
        ============================================== */}

        <div
          className="
            w-[138px]
            shrink-0
            p-5
            flex
            flex-col
            justify-start
            border-r
            border-[#C0DD97]
          "
          style={{
            background: "rgba(26,107,60,0.12)",
          }}
        >
          <span
            className="font-bold text-[#002c19]"
            style={{
              fontSize: 28,
              lineHeight: 1,
            }}
          >
            {entry.flag}
          </span>

          <p
            className="mt-3 font-bold text-[#002c19]"
            style={{
              fontSize: 16,
              lineHeight: 1.25,
            }}
          >
            {entry.location}
          </p>
        </div>

        {/* =============================================
            RIGHT CONTENT
        ============================================== */}

        <div className="flex-1 min-w-0 p-6 pr-14">
          {/* ===========================================
              MANAGING DIRECTOR
          ============================================ */}

          {entry.mdName && (
            <div
              className={
                hasAdvisoryBoard
                  ? "mb-6"
                  : ""
              }
            >
              <p
                className="
                  uppercase
                  tracking-[1.5px]
                  font-bold
                  text-[#002c19]
                  mb-3
                "
                style={{
                  fontSize: 10,
                }}
              >
                Managing Director
              </p>

              <div className="flex items-center gap-4">
                <PersonAvatar
                  src={entry.mdImagePath ?? ""}
                  name={entry.mdName}
                  size={96}
                />

                <div>
                  <p
                    className="font-bold text-[#002c19]"
                    style={{
                      fontSize: 20,
                      lineHeight: 1.25,
                    }}
                  >
                    {entry.mdName}
                  </p>

                  <div className="mt-2">
                    <LinkedInBadge url={entry.mdLinkedIn} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ===========================================
              ADVISORY BOARD

              IMPORTANT:
              We ONLY render this when members actually
              exist.

              advisoryBoardForming is deliberately ignored.
          ============================================ */}

          {hasAdvisoryBoard && (
            <div>
              <p
                className="
                  uppercase
                  tracking-[1.5px]
                  font-bold
                  text-[#002c19]
                  mb-4
                "
                style={{
                  fontSize: 10,
                }}
              >
                Advisory Board
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-5">
                {entry.advisoryBoard.map(
                  (member: LocationAdvisoryMember) => (
                    <AdvisoryMember
                      key={member.name}
                      member={member}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN MAP COMPONENT
========================================================= */

export default function OfficeMap() {
  const [hoveredRegion, setHoveredRegion] =
    useState<Region | null>(null);

  /*
   * Get the actual location entries from about-data.ts.
   *
   * A region can potentially map to multiple entries
   * (for example India → Mumbai + Ranchi).
   */
  const selectedEntries = hoveredRegion
    ? getLocationEntries(hoveredRegion)
    : [];

  return (
    <section
      id="globalMap"
      className="pt-12 pb-24 px-4 md:px-50 bg-white"
    >
      <div className="max-w-260 mx-auto text-center">
        {/* =============================================
            HEADER
        ============================================== */}

        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          Global network
        </h2>

        <p className="text-[#495565] text-lg max-w-2xl mx-auto mb-12">
          Click on the map to learn more
        </p>

        {/* =============================================
            MAP
        ============================================== */}

        <div
          className="
            relative
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
            aspect-[2/1]
            overflow-hidden
            w-full
          "
        >
          <img
            src="/images/world1.svg"
            alt="World Map"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              pointer-events-none
            "
          />

          {/* ===========================================
              MAP PINS
          ============================================ */}

          {REGIONS.map((region) => (
            <div
              key={region.id}
              onMouseEnter={() =>
                setHoveredRegion(region)
              }
              className="
                absolute
                transform
                bg-white/80
                rounded-full
                -translate-x-1/2
                -translate-y-1/2
                z-10
                hover:scale-110
                transition-transform
                cursor-pointer
              "
              style={{
                top: `${region.coordinates.y}%`,
                left: `${region.coordinates.x}%`,
              }}
            >
              {/* Pulse */}
              {hoveredRegion?.id === region.id && (
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#1C5945]
                    opacity-20
                    animate-ping
                  "
                />
              )}

              <div
                className={`
                  p-1
                  rounded-full
                  ${
                    hoveredRegion?.id === region.id
                      ? "border-[#1C5945] scale-110 shadow-lg transition-all border"
                      : ""
                  }
                `}
              >
                <img
                  src="/mapPin.png"
                  alt={region.name}
                  className="
                    w-6
                    h-6
                    md:w-8
                    md:h-8
                    object-contain
                  "
                />
              </div>
            </div>
          ))}

          {/* ===========================================
              POPUP

              Only render data that actually exists.

              NO:
              "Advisory board forming."

              If there is no advisory board, the popup
              simply ends after the MD.
          ============================================ */}

          {hoveredRegion && selectedEntries.length > 0 && (
            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                md:bottom-8
                md:left-8
                md:right-8
                z-20
                flex
                justify-start
              "
              onMouseEnter={() => {
                setHoveredRegion(hoveredRegion);
              }}
            >
              <div className="w-full flex flex-col gap-4">
                {selectedEntries.map((entry) => (
                  <LocationPopup
                    key={entry.location}
                    entry={entry}
                    onClose={() =>
                      setHoveredRegion(null)
                    }
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}