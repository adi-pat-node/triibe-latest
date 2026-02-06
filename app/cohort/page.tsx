import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cohort from "@/components/cohort";
import CTASection from "@/components/cta";

const page = () => {
  return (
    <main>
      <Header />
      <section className="pt-16 pb-8 px-4  bg-white">
        <Cohort />
      </section>

      <CTASection />

      <Footer />
    </main>
  );
};

export default page;
