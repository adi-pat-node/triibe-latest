import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "TRIIBE Talk Speaker Brief | Guidelines & Preparation",
  description:
    "Everything you need to know before speaking at a TRIIBE Talk. Guidelines, event format, and core values for our next-gen intergenerational conversations.",
};

export default function SpeakerBriefPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-[900px] mx-auto text-[#002c19] space-y-16">
          <div className="text-center border-b border-[#002c19]/10 pb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Speaker Brief
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light mb-10 max-w-2xl mx-auto">
              Everything you need to know before taking the stage at a TRIIBE
              Talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Link
                href="/talk"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300"
              >
                Back to TRIIBE Talk Guide
              </Link>
              <a
                href="https://app.signnow.com/webapp/document/5356c06355f74a52b2f3ddbf363cd029a290ac28?dispatched=true&mobileweb=app_or_mobileweb_choice&redirect_uri=https%253A%252F%252Fapp.signnow.com%252Fhtml%252Fthanks-for-signing%253Fdocument_id%253D5356c06355f74a52b2f3ddbf363cd029a290ac28%2526access_token%253D884462df418a32d16d200b46f2aa47ab22af0a8661e1894264756e792c94205b&sign=1&source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300"
              >
                Sign Alignment Form
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              The Goal of a TRIIBE Talk
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              A TRIIBE Talk is a moderated, intergenerational conversation
              featuring next-gen voices. Our goal is to create practical,
              inspiring, and solutions-oriented discussions that bridge the gap
              between youth ambition and established experience.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              We want to hear about real experiences, hard-learned lessons, and
              ideas that move the nonprofit and startup sectors forward.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Speaker Rules of Engagement
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Be Concise & Dynamic</h3>
                <p className="opacity-90 leading-relaxed">
                  Responses should ideally be kept to about three minutes per
                  question. Build on your fellow panelists' comments rather than
                  starting from scratch every time.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Share Real Stories</h3>
                <p className="opacity-90 leading-relaxed">
                  Avoid high-level platitudes. Ground your advice in real-world
                  examples, specific failures, and clear calls to action.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Keep it Apolitical</h3>
                <p className="opacity-90 leading-relaxed">
                  TRIIBE Talks are designed to unite innovators and investors
                  around shared solutions. Discussions must remain apolitical to
                  maintain consistency and community integrity.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Embrace the Audience</h3>
                <p className="opacity-90 leading-relaxed">
                  The last 10-15 minutes are dedicated to Audience Q&A. Be
                  prepared for direct engagement and off-the-cuff questions from
                  the local community.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              What to Expect on Event Day
            </h2>
            <ul className="list-none space-y-4 opacity-90 text-lg mt-4">
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">30 Mins Prior:</span>
                <span>
                  Arrive at the venue, meet the host, get mic'd up, and connect
                  with your fellow speakers.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">The Panel:</span>
                <span>
                  Expect a 35-minute moderated discussion covering 2 to 3 core
                  questions.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">The Q&A:</span>
                <span>10 minutes of direct audience questions.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">Wrap Up:</span>
                <span>
                  Stick around for the mandatory group photo with all speakers,
                  followed by informal community building.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Discussion Themes to Consider
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Your moderator will guide the conversation, but they are
              encouraged to skip formal introductions and jump straight into the
              ideas and impact. Here are the types of themes you might be asked
              to explore:
            </p>
            <ul className="space-y-3 opacity-90 text-lg mt-4 bg-[#002c19]/5 p-6 md:p-8 rounded-xl">
              <li>
                <strong>The origin tension:</strong> What did you see that
                everyone else was looking at but not acting on?
              </li>
              <li>
                <strong>Hard truths:</strong> What is one thing about your field
                most people in this room may not want to hear?
              </li>
              <li>
                <strong>What actually worked:</strong> What is one decision that
                changed your trajectory, and what would you tell someone facing
                it now?
              </li>
              <li>
                <strong>The unpopular bet:</strong> What unrealistic idea today
                do you think will be mainstream in a decade?
              </li>
              <li>
                <strong>The trade:</strong> What did progress cost you, and was
                it worth it?
              </li>
            </ul>
          </div>

          <div className="space-y-4 bg-[#002c19] text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold pb-2 border-b border-white/20">
              Mandatory Next Step
            </h2>
            <p className="text-lg leading-relaxed opacity-90 pt-4">
              Before taking the stage, all speakers, moderators, and organizers
              must complete the TRIIBE Talk Participation Alignment Form. By
              participating, you agree to embody:
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-90 text-lg my-4">
              <li>Integrity and transparency in all interactions.</li>
              <li>Respect for diverse perspectives and backgrounds.</li>
              <li>A commitment to healthy habits to eliminate burnout.</li>
            </ul>

            <a
              href="https://app.signnow.com/webapp/document/5356c06355f74a52b2f3ddbf363cd029a290ac28?dispatched=true&mobileweb=app_or_mobileweb_choice&redirect_uri=https%253A%252F%252Fapp.signnow.com%252Fhtml%252Fthanks-for-signing%253Fdocument_id%253D5356c06355f74a52b2f3ddbf363cd029a290ac28%2526access_token%253D884462df418a32d16d200b46f2aa47ab22af0a8661e1894264756e792c94205b&sign=1&source=link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-white text-[#002c19] hover:bg-gray-100 transition-all duration-300 mt-4"
            >
              Review & Sign the Alignment Form
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
