import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import type { Department } from "@/types/about";

function MemberChip({
  name,
  imagePath,
  linkedIn,
}: {
  name: string;
  imagePath: string;
  linkedIn?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        width: 110,
        minWidth: 110,
        maxWidth: 110,
      }}
    >
      <PersonAvatar src={imagePath} name={name} size={40} />
      <p
        style={{
          fontSize: 11,
          color: "#111111",
          fontWeight: 500,
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
        }}
      >
        {name}
      </p>
      <LinkedInBadge url={linkedIn} />
    </div>
  );
}

interface Props {
  department: Department;
}

export default function DepartmentRow({ department }: Props) {
  const { name, Icon, members } = department;

  return (
    // 1. Stacks vertically on mobile, horizontally on desktop
    <div className="flex flex-col md:flex-row rounded-xl overflow-hidden border border-[#C0DD97]">
      <div
        // 2. Full width on mobile, fixed width (130px) on desktop. Fixed bottom border switches to right border on desktop.
        className="flex flex-col justify-center gap-1.5 p-4 border-b md:border-b-0 md:border-r border-[#C0DD97] flex-shrink-0 w-full md:w-[130px]"
        style={{ background: "rgba(26,107,60,0.12)" }}
      >
        <Icon size={20} className="text-[#1A6B3C]" />
        <p className="text-[#1A6B3C] font-bold text-sm leading-tight">{name}</p>
        <p className="text-[#2D7A4B] text-xs">
          {members.length} {members.length === 1 ? "member" : "members"}
        </p>
      </div>
      
      {/* 3. Removed inline flex styles; replaced with a 2-column mobile grid and fallback desktop flex row */}
      <div
        className="grid grid-cols-2 gap-x-7 gap-y-4 p-4 items-start md:flex md:flex-wrap md:gap-[16px_28px] md:items-start md:content-start md:flex-1"
      >
        {members.map((member) => (
          // 4. Container wrapper to prevent any alignment shifting inside the grid cells
          <div key={member.name} className="min-w-0 w-full md:w-auto">
            <MemberChip
              name={member.name}
              imagePath={member.imagePath}
              linkedIn={member.linkedIn}
            />
          </div>
        ))}
      </div>
    </div>
  );
}