import PersonCard from "@/components/about/PersonCard";
import type { Person } from "@/types/about";

interface Props {
  title: string;
  members: Person[];
}

export default function BranchSection({ title, members }: Props) {
  return (
    <section className="py-8">
      <h2 className="text-xl font-bold border-b border-[#002c19]/10 pb-2 mb-8 uppercase tracking-wider text-[#002c19]/80">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member) => (
          <PersonCard key={member.name} person={member} photoSize={80} />
        ))}
      </div>
    </section>
  );
}
