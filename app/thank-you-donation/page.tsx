import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Thank You - Donation",
  description: "Thank you page",
  alternates: {
    canonical: "https://www.triibe.org/thank-you-donation",
  },
};

export default function ThankYouDonation() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <section className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm font-semibold text-[#1C5945] tracking-widest mb-4">
            SUCCESS
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Thank You!
          </h1>

          <p className="text-lg text-[#495565] leading-relaxed mb-12 max-w-xl mx-auto">
            Thank you for your generous donation via Rayze App! Your investment
            helps us fund and scale the next generation of nonprofit leaders.
          </p>

          <Link
            href="/"
            className="bg-[#1C5945] text-white px-8 py-3.5 rounded-lg font-bold hover:bg-[#164737] transition-colors inline-block"
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
