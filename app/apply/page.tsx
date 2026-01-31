import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
const page = () => {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-8 px-4 md:px-[200px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr]  gap-16 items-start">
            {/* Left - Image */}
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/about/about-photo-2.jpg"
                alt="TRIIBE Cohort"
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h1 className="font-bold text-black text-4xl md:text-[40px] mb-6 leading-tight">
                Apply to be a Cohort
              </h1>

              <p className="font-normal text-[#495565] text-[16px] leading-relaxed mb-4">
                Join us for a transformative day of connection, learning, and
                community building. We're looking for passionate undergraduate
                nonprofit founders ready to take their organizations to the next
                level.
              </p>

              {/* How to Apply Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h2 className="font-bold text-black text-xl mb-3">
                  How to Apply
                </h2>

                <p className="font-normal text-[#495565] text-base mb-3 leading-relaxed">
                  Instead of a pitch deck, please submit a short video (up to 5
                  minutes) describing:
                </p>

                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — What motivates your work? (Your Why)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How have you made a difference? (Your Impact)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-normal text-[#495565] text-base">
                      — How would you use your first grant? (Your Pitch)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 px-4 md:px-[200px] bg-[#F6FEEF]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-bold text-black text-4xl mb-4">
            Application Form
          </h2>
          <p className="font-normal text-[#495565] text-base mb-12">
            Please fill out all fields. Fields marked with * are required.
          </p>

          <div className="bg-white rounded-lg p-8 md:p-12">
            <form>
              {/* Row 1: Full Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@university.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Row 2: LinkedIn and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    placeholder="City, State/Country"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Row 3: Organization Name and Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your nonprofit organization name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Organization Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 4: Video Application Link and Message */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Video Application Link *
                  </label>
                  <input
                    type="url"
                    placeholder="https://youtube.com/watch?v=... or Loom link"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent"
                    required
                  />
                  <p className="font-normal text-[#697282] text-xs mt-2">
                    Please record a 2-3 minute video introducing yourself, your
                    organization, and why you'd like to attend the Summit.
                  </p>
                </div>

                <div>
                  <label className="block font-semibold text-black text-sm mb-2">
                    Message to the Team
                  </label>
                  <textarea
                    placeholder="Is there anything else you'd like us to know?"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002c19] focus:border-transparent resize-none"
                  />
                </div>
              </div>

              {/* Form Actions */}
              {/* Form Actions */}
              <div className="border-t border-gray-200 pt-6 flex justify-end gap-4">
                <button
                  type="button"
                  className="px-8 py-3 bg-white text-black border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#002c19] text-white rounded-lg hover:bg-[#003d24] transition-colors font-semibold text-base"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default page;
