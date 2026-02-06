import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";
import CTASectionContact from "@/components/ctaContact";
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
        </div>
      </section>

      <CTASectionContact />

      <Footer />
    </main>
  );
};

export default page;
