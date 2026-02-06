import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";
const page = () => {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-8 px-4 md:px-[200px] bg-white">
        <div className="max-w-[1200px] mx-auto">
          {/* Heading - Centered */}
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Contact Us
          </h1>

          {/* Subheading - Centered */}
          <p className="text-lg text-gray-600 mb-8 text-center">
            Let's build a stronger generation of nonprofits together
          </p>
          {/* Contact Cards - Centered */}
          <div className="grid grid-cols-1   max-w-3xs mx-auto mb-8">
            {/* Email Card */}
            <div className="border border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center">
              {/* Email Icon */}
              <div className="mb-8">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* Email Label */}
              <h5 className="text-base font-semibold text-gray-900 mb-4">
                Email:
              </h5>

              {/* Email Link */}
              <a
                href="mailto:team@triibe.us"
                className="text-gray-900 hover:text-gray-700 transition-colors underline"
              >
                team@triibe.us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
};

export default page;
