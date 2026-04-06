"use client";

export default function ScheduleCall() {
  return (
    <section className="py-20 px-6 md:px-16 xl:px-50 bg-[#002c19]">
      <div className="max-w-[480px] mx-auto">
        <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
          <h3 className="font-semibold text-white text-2xl text-center">
            Interested in learning more?
          </h3>

          <a
            href="https://calendly.com/kylematthys/30min"
            target="_blank"
            className="w-[80%] px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors font-semibold text-base text-center mx-auto"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  );
}
