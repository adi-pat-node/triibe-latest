import PersonAvatar from "@/components/about/PersonAvatar";
import { LinkedInBadge } from "@/components/about/LinkedInBadge";
import type { Person } from "@/types/about";

interface Props {
  person: Person;
}

export default function LegacyMemberItem({ person }: Props) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-100 bg-white hover:border-[#C0DD97] transition-colors h-full">
      <PersonAvatar src={person.imagePath} name={person.name} size={80} />
      <p className="font-bold text-[#111111] text-sm mt-4 leading-tight">
        {person.name}
      </p>
      {person.role && (
        <span className="inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAF3DE] text-[#1A6B3C] border border-[#C0DD97]">
          {person.role}
        </span>
      )}
      {person.title && (
        <p
          style={{ fontSize: 11, color: "#888", marginTop: 6, lineHeight: 1.4 }}
        >
          {person.title}
        </p>
      )}
      <div className="mt-auto pt-3">
        <LinkedInBadge url={person.linkedIn} />
      </div>
    </div>
  );
}
