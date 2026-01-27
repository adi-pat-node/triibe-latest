import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";
const page = () => {
  return (
    <main>
      <Header />
      <section>
        <div className="h-screen mt-32 items-start flex justify-center">
          <h1 className="text-3xl">Page under construction</h1>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
};

export default page;
