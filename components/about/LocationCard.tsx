import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import type { LocationEntry, LocationAdvisoryMember } from "@/types/about";

function AdvisoryChip({ member }: { member: LocationAdvisoryMember }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        minWidth: 100,
        maxWidth: 140,
        alignSelf: "stretch",
      }}
    >
      <PersonAvatar src={member.imagePath} name={member.name} size={40} />
      <p
        style={{
          fontSize: 11,
          color: "#111111",
          fontWeight: 500,
          textAlign: "center",
          whiteSpace: "normal",
          width: "100%",
        }}
      >
        {member.name}
      </p>
      {member.role && (
        <p
          style={{
            fontSize: 10,
            color: "#1A6B3C",
            whiteSpace: "nowrap",
            marginTop: 2,
          }}
        >
          {member.role}
        </p>
      )}
      {member.title && (
        <p
          style={{
            fontSize: 11,
            color: "#888",
            textAlign: "center",
            marginTop: 2,
            whiteSpace: "normal",
          }}
        >
          {member.title}
        </p>
      )}
      <div style={{ marginTop: "auto", paddingTop: 6 }}>
        <LinkedInBadge url={member.linkedIn} />
      </div>
    </div>
  );
}

interface Props {
  entry: LocationEntry;
}

export default function LocationCard({ entry }: Props) {
  return (
    // 1. Made the card stack vertically on mobile, horizontally on desktop
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-[#C0DD97]">
      {/* Left sidebar */}
      <div
        // 2. Removed static width and used tailwind responsive sizing (Full width on mobile, fixed on desktop)
        className="flex flex-col justify-start gap-2 p-4 border-b md:border-b-0 md:border-r border-[#C0DD97] flex-shrink-0 w-full md:w-[140px]"
        style={{ background: "rgba(26,107,60,0.12)" }}
      >
        <span style={{ fontSize: 22, lineHeight: 1 }}>{entry.flag}</span>
        <p
          className="text-[#1A6B3C] font-bold leading-snug"
          style={{ fontSize: 11 }}
        >
          {entry.location}
        </p>
        {entry.locationPath && (
          <a
            href={entry.locationPath}
            className="text-[#1A6B3C] underline mt-1"
            style={{ fontSize: 10 }}
          >
            View →
          </a>
        )}
      </div>

      {/* Right side */}
      <div style={{ flex: 1, padding: 16, minWidth: 0 }}>
        {/* Managing Director */}
        {entry.mdName && (
          <div
            style={{
              marginBottom:
                entry.advisoryBoard.length > 0 || entry.advisoryBoardForming
                  ? 14
                  : 0,
            }}
          >
            <p
              style={{
                fontSize: 9,
                color: "#999",
                textTransform: "uppercase",
                letterSpacing: 1.2,
                marginBottom: 8,
              }}
            >
              Managing Director
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <PersonAvatar
                src={entry.mdImagePath ?? ""}
                name={entry.mdName}
                size={64}
              />
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#111111",
                    lineHeight: 1.3,
                  }}
                >
                  {entry.mdName}
                </p>
                <div style={{ marginTop: 4 }}>
                  <LinkedInBadge url={entry.mdLinkedIn} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Advisory Board */}
        {entry.advisoryBoardForming ? (
          <p
            style={{
              fontSize: 11,
              color: "#aaa",
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            Advisory board forming.
          </p>
        ) : entry.advisoryBoard.length > 0 ? (
          <div>
            {/* 3. Replaced inline flex styles with responsive CSS Grid for mobile & flex row for desktop */}
            <div
              className="grid grid-cols-2 gap-x-6 gap-y-5 py-3 items-start md:flex md:flex-wrap md:gap-[20px_24px] md:items-stretch"
            >
              {entry.advisoryBoard.map((member) => (
                // 4. Wrapped each chip to ensure it behaves correctly inside the grid cells
                <div key={member.name} className="min-w-0 w-full md:w-auto">
                  <AdvisoryChip member={member} />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
