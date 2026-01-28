"use client";

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-50 bg-[#002c19]">
      <div className="max-w-260 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          {/* Be a Cohort */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6  justify-between">
            <h3 className=" font-semibold text-white text-2xl">Join A Cohort</h3>
            <p className=" font-normal text-white text-base leading-relaxed">
              Are you an undergraduate nonprofit founder? Apply to join our
              community of changemakers.
            </p>
            <a
              href="/apply"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors  font-semibold text-base text-center"
            >
              Apply
            </a>
          </div>

          {/* Contact Us */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
            <h3 className=" font-semibold text-white text-2xl">Contact Us</h3>
            <p className=" font-normal text-white text-base leading-relaxed">
              Partner with TRIIBE to empower the next generation of nonprofit
              leaders.
            </p>
            <a
              href="/contact"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors  font-semibold text-base text-center"
            >
              Get in touch
            </a>
          </div>

          {/* Give */}
          <div className="bg-[#002c19] border border-white rounded-lg p-8 flex flex-col gap-6 justify-between">
            <h3 className=" font-semibold text-white text-2xl">Fund Our Work</h3>
            <p className=" font-normal text-white text-base leading-relaxed">
              Your donation helps founders make an impact in food, water,
              shelter, health, education, and energy.
            </p>
            <a
              href="/donate"
              className="w-full px-6 py-3 bg-white text-black rounded hover:bg-gray-100 transition-colors  font-semibold text-base text-center"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
