 import Link from "next/link"
 export default function DeckSection() {
  return (
    <section className="py-12 px-4 md:px-25 lg:px-[200px]">
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
  );
}