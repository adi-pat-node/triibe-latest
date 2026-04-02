import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import DonatePage from "@/components/donatePage";
import KeyStatistics from "@/components/keyStatistics";
import ScheduleCall from "@/components/scheduleCall";
const page = () => {
  return (
    <main>
      <Header />

      <DonatePage />

      <KeyStatistics />
      <ScheduleCall />

      <Footer />
    </main>
  );
};

export default page;
