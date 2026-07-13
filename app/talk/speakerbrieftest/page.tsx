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
              Speaker brief
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light mb-10 max-w-2xl mx-auto">
              "People will forget what you said, but people will never forget
              how you made them feel” - Maya Angelou
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
              <Link
                href="/talk"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300"
              >
                Back to TRIIBE Talk guide
              </Link>
              <a
                href="https://app.signnow.com/webapp/document/5356c06355f74a52b2f3ddbf363cd029a290ac28?dispatched=true&mobileweb=app_or_mobileweb_choice&redirect_uri=https%253A%252F%252Fapp.signnow.com%252Fhtml%252Fthanks-for-signing%253Fdocument_id%253D5356c06355f74a52b2f3ddbf363cd029a290ac28%2526access_token%253D884462df418a32d16d200b46f2aa47ab22af0a8661e1894264756e792c94205b&sign=1&source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300"
              >
                Sign alignment form
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              The goal of a TRIIBE Talk
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              A TRIIBE Talk is a moderated, intergenerational conversation
              featuring next-gen voices. Our goal is to create practical,
              inspiring, and solutions-oriented discussions.
            </p>
            {/* <p className="text-lg leading-relaxed opacity-90">
              We want to hear about real experiences, hard-learned lessons, and
              ideas that move the nonprofit and startup sectors forward.
            </p> */}
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Speaker rules of engagement
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Be concise & dynamic</h3>
                <p className="opacity-90 leading-relaxed">
                  Responses should ideally be kept to about three minutes per
                  question. Build on your fellow panelists' comments rather than
                  starting from scratch every time.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Share real stories</h3>
                <p className="opacity-90 leading-relaxed">
                  Avoid high-level platitudes. Ground your advice in real-world
                  examples, specific failures, and clear calls to action.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Keep it apolitical</h3>
                <p className="opacity-90 leading-relaxed">
                  TRIIBE Talks are designed to unite innovators and investors
                  around shared solutions. Discussions must remain apolitical to
                  maintain consistency and community integrity.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-3">Embrace the audience</h3>
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
              What to expect on event day
            </h2>
            <ul className="list-none space-y-4 opacity-90 text-lg mt-4">
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">30 mins prior:</span>
                <span>
                  Arrive at the venue, meet the host, get mic'd up, and connect
                  with your fellow speakers.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold min-w-[120px]">The panel:</span>
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
                <span className="font-bold min-w-[120px]">Wrap up:</span>
                <span>
                  Stick around for the group photo with all speakers, followed
                  by informal community building.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Discussion questions
            </h2>

            <p className="text-lg leading-relaxed opacity-90">
              Your moderator will guide the conversation, but they are
              encouraged to skip formal introductions and jump straight into the
              ideas and impact. Here are the types of themes you might be asked
              to explore:
            </p>

            <ul className="space-y-4 text-lg leading-relaxed mt-6">
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
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Participant alignment form
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              TRIIBE is dedicated to fostering meaningful connections,
              empowering innovation, and creating a lasting positive impact. The
              undersigned individual is expected to embody the following values:
            </p>
            <ol className="list-[lower-alpha] pl-5 space-y-2 opacity-90 text-lg mb-4">
              <li>Integrity and transparency in all interactions.</li>
              <li>Respect for diverse perspectives and backgrounds.</li>
              <li>Commitment to healthy habits to eliminate burnout.</li>
            </ol>

            <a
              href="https://app.signnow.com/webapp/document/5356c06355f74a52b2f3ddbf363cd029a290ac28?dispatched=true&mobileweb=app_or_mobileweb_choice&redirect_uri=https%253A%252F%252Fapp.signnow.com%252Fhtml%252Fthanks-for-signing%253Fdocument_id%253D5356c06355f74a52b2f3ddbf363cd029a290ac28%2526access_token%253D884462df418a32d16d200b46f2aa47ab22af0a8661e1894264756e792c94205b&sign=1&source=link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-white text-[#002c19] hover:bg-gray-100 transition-all duration-300 mt-4"
            >
              Review & sign the alignment form
            </a>
          </div>
        </div>
      </section>

      <div className="pt-6 text-center space-y-8">
        <section className="pb-25 w-full">
          <div className="w-full max-w-[860px] mx-auto transition-all duration-300 hover:scale-[1.02]">
            <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
                Download the speaker brief
              </p>

              <a
                href="/TRIIBE Speaker Brief.pdf"
                download="TRIIBE_Speaker_Brief.pdf"
                className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
              >
                Download here
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
