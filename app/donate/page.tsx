import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
const page = () => {
  return (
    <main>
      {/* <Header /> */}
      <section>
        <div className="h-screen flex items-center justify-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold pr-6">404</h1>

            <div className="h-8 w-px bg-gray-300"></div>

            <p className="pl-6 text-gray-600 text-base">
              This page could not be found.
            </p>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </main>
  );
};

export default page;
