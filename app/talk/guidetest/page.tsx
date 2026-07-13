import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TRIIBE Talk Guide | Host a Talk in Your Community",
  description:
    "A comprehensive guide to hosting a TRIIBE Talk in your community, featuring next-gen voices and intergenerational dialogue.",
};

export default function TriibeTalkGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto text-[#002c19] space-y-16">
          <div className="text-center pb-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-2xl h-32 md:h-48 mb-6 flex items-center justify-center">
              <Image
                src="/images/TRIIBELOGOS/TRIIBETALKLOGO.png"
                alt="TRIIBE Talk"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xl md:text-2xl opacity-90 font-light mb-10">
              A guide to hosting a TRIIBE Talk in your community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              TRIIBE Talk format
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              A TRIIBE Talk is a moderated, intergenerational conversation
              featuring next-gen voices. TRIIBE Talks are designed to be
              adaptable. They can take place in universities, community spaces,
              offices, or public venues of any size, as long as the format
              remains intact.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              TRIIBE Talk requirements
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              To maintain consistency and protect the integrity of the TRIIBE
              community, events using the name TRIIBE Talk, as well as the
              TRIIBE logo and visual materials, must be approved by the TRIIBE
              team and meet the following requirements:
            </p>
            <ol className="list-decimal pl-5 space-y-3 opacity-90 text-lg">
              <li>
                Each TRIIBE Talk follows the core format: at least two next-gen
                voices (preferrably nonprofit founders) and one moderator under
                the age of 30.
              </li>
              <li>
                TRIIBE Talks can focus on topics so long as they remain
                apolitical.
              </li>
              <li>
                All speakers, moderators, and organizers must complete the
                TRIIBE Talk participation alignment form prior to the event.
              </li>
            </ol>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Event planning timeline
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-4">
              While every TRIIBE Talk is unique, most follow a preparation
              timeline of four to eight weeks.
            </p>

            <div className="grid gap-6">
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10 flex flex-col items-start gap-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">4-8 weeks before:</h3>
                  <p className="opacity-90">
                    Select the date, topic, and initial speakers. The venue does
                    not need to be finalized before confirming speakers. Once
                    speakers and venue are confirmed, submit your TRIIBE Talk
                    proposal for approval. TRIIBE will create the official
                    registration page and help promote the event.
                  </p>
                </div>
                <Link
                  href="/talk/host"
                  target="_blank"
                  className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
                >
                  Submit your TRIIBE Talk proposal
                </Link>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">3-4 weeks before:</h3>
                <p className="opacity-90">
                  Share the event with your community and networks. Aligned
                  organizations may cohost the event with approval from TRIIBE.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">1-2 weeks before:</h3>
                <p className="opacity-90">
                  Work with your moderator and speakers to finalize the flow of
                  the conversation. Hosts may use the TRIIBE Talk preparation
                  checklist to ensure event logistics are ready.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">Event week:</h3>
                <p className="opacity-90">
                  Send reminders, ensure all speakers sign the TRIIBE Talk
                  participation alignment form, prepare the space, and focus on
                  creating a welcoming environment for meaningful discussion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Speaker guidelines
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE Talks are designed to be practical, inspiring, and
                solutions-oriented conversations. Speakers should share real
                experiences, lessons learned, and ideas that move the discussion
                forward. At the end of each TRIIBE Talk, please take a group
                photo with all speakers present.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                To keep the conversation dynamic, speakers should keep responses
                concise, build on one another&apos;s comments, and focus on
                stories, real-world examples, and clear calls to action.
              </p>

              <div className="pt-2">
                <Link
                  href="/talk/speakerbrieftest"
                  className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
                >
                  View full speaker brief
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                TRIIBE Talk example schedule
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-[#002c19] bg-[#002c19]/5">
                      <th className="p-4 font-bold w-1/4">Time stamp</th>
                      <th className="p-4 font-bold w-1/4">Segment</th>
                      <th className="p-4 font-bold w-1/2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="opacity-90">
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        1-2 hours prior
                      </td>
                      <td className="p-4 font-medium">
                        Host arrival & final setup
                      </td>
                      <td className="p-4">
                        Prepare the space and ensure microphones, seating,
                        photography or videography, and any food or drink are
                        ready.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        30 minutes prior
                      </td>
                      <td className="p-4 font-medium">
                        Speakers and early arrival
                      </td>
                      <td className="p-4">
                        Speakers arrive, meet with one another, and get settled
                        into the space
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:00 - 0:10
                      </td>
                      <td className="p-4 font-medium">Welcome guests</td>
                      <td className="p-4">
                        Welcome guests as they arrive and allow time for
                        attendees to settle in.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:10 - 0:15
                      </td>
                      <td className="p-4 font-medium">Host introduction</td>
                      <td className="p-4">
                        The host welcomes attendees and introduces the purpose
                        of the TRIIBE Talk.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:15 - 0:50
                      </td>
                      <td className="p-4 font-medium">Moderated panel</td>
                      <td className="p-4">
                        Thirty-five minutes typically allows for two to three
                        questions, with speakers responding for approximately
                        three minutes each.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        0:50 - 1:00
                      </td>
                      <td className="p-4 font-medium">Audience Q&A</td>
                      <td className="p-4">
                        Audience members are invited to ask questions and engage
                        directly with the speakers.
                      </td>
                    </tr>
                    <tr className="border-b border-[#002c19]/10">
                      <td className="p-4 whitespace-nowrap font-medium">
                        1:00 - 2:00
                      </td>
                      <td className="p-4 font-medium">Community building</td>
                      <td className="p-4">
                        Take a group photo with all speakers present and allow
                        time for informal conversation.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm italic opacity-75 mt-2">
                Additional note: If you&apos;re planning to host two TRIIBE
                Talks, allow for a 15 minute break after Q&A, then continue with
                the second 35+10 minute panel before community building.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Discussion questions
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              TRIIBE Talks are designed to spark thoughtful dialogue across
              generations. Moderators are encouraged to adapt these prompts
              while keeping the conversation focused on real experiences,
              practical solutions, and inspiration for future changemakers.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Moderators are encouraged to begin with questions that focus on a
              speaker&apos;s work or motivations rather than a formal
              introduction, allowing the conversation to move quickly into ideas
              and impact. Below are a few themes to consider when creating
              questions:
            </p>
            <div className="bg-[#002c19]/5 p-6 md:p-8 rounded-xl mt-4">
              <ul className="space-y-3 opacity-90 text-lg mb-6">
                <li>
                  <strong>The origin tension:</strong> What did you see that
                  everyone else was looking at but not acting on?
                </li>
                <li>
                  <strong>Hard truths:</strong> What is one thing about your
                  field most people in this room may not want to hear?
                </li>
                <li>
                  <strong>What actually worked:</strong> What is one decision
                  that changed your trajectory, and what would you tell someone
                  facing it now?
                </li>
                <li>
                  <strong>The unpopular bet:</strong> What unrealistic idea
                  today do you think will be mainstream in a decade?
                </li>
                <li>
                  <strong>The trade:</strong> What did progress cost you, and
                  was it worth it?
                </li>
              </ul>

              <Link
                href="https://drive.google.com/file/d/1ZHmC7HoREj9zBfCeLJjoFh8yYaOGnner/view"
                target="_blank"
                className="inline-flex items-center justify-center h-[36px] px-6 rounded-sm font-semibold text-[12px] md:text-sm bg-[#002c19] text-white hover:bg-[#1C5945] transition-all duration-300 mt-2"
              >
                View example questions (UN Global Compact TRIIBE Talk)
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Branding and visual templates
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                To keep TRIIBE Talks visually consistent around the world,
                we&apos;ve created a set of official TRIIBE Talk templates. Once
                your TRIIBE Talk is confirmed, the TRIIBE team will create the
                official event registration page, add your speakers and
                moderator to the graphic, and share the link with you to
                distribute to your community. Templates can also be used to
                invite speakers, partners, and attendees.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="w-full md:col-span-1 bg-[#002c19] rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/triibetalk/talk1New.png"
                    alt="Template Example 1"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="w-full md:col-span-2 bg-[#002c19] rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/triibetalk/talk2New.png"
                    alt="Template Example 2"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Participant alignment form
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE is dedicated to fostering meaningful connections,
                empowering innovation, and creating a lasting positive impact.
                The undersigned individual is expected to embody the following
                values:
              </p>
              <ol className="list-[lower-alpha] pl-5 space-y-2 opacity-90 text-lg mb-4">
                <li>Integrity and transparency in all interactions.</li>
                <li>Respect for diverse perspectives and backgrounds.</li>
                <li>Commitment to healthy habits to eliminate burnout.</li>
              </ol>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Promoting your TRIIBE Talk
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Once your TRIIBE Talk registration page is created, share the
                event link and graphics with your community, networks, and local
                partners. TRIIBE will do the same on our platforms. Inviting
                organizations aligned with the topic can help broaden the
                conversation and reach new audiences.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                After your TRIIBE Talk
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                Immediately following the TRIIBE Talk, hosts are encouraged to
                allow time for informal discussion so attendees and speakers can
                continue the dialogue. Hosts should also share photos or
                recordings, including a group photo of the panelists, with
                TRIIBE.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Before leaving the venue, please help reset the space and ensure
                it is left as it was found. TRIIBE Talks rely on the generosity
                of community spaces, universities, and partners. Caring for the
                venue helps ensure these spaces can continue hosting future
                TRIIBE Talks.
              </p>
            </div>

            <div className="space-y-6 bg-[#002c19] text-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-start">
              <h2 className="text-3xl md:text-4xl font-bold pb-2">
                Continuing the TRIIBE movement
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                We are the most interconnected generation in history. Ideas,
                stories, and solutions travel across borders faster than ever
                before. A single conversation may inspire a room. But when
                conversations happen across cities, campuses, communities,
                countries, and continents, they begin to shape a movement.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE Talks create space for next-gen voices to share ideas
                before we are defined by labels or limited by background,
                whether by geography, race, religion, or circumstance.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                If hosting a TRIIBE Talk is a spark, founding a TRIIBE Branch is
                the fuel. If your community is ready to support
                philentrepreneurs, TRIIBE is here to help you establish a branch
                and channel capital to next-gen nonprofit founders.
              </p>

              <Link
                href="/branchtest"
                target="_blank"
                className="inline-flex items-center justify-center h-[44px] px-8 rounded-sm font-semibold text-sm bg-white text-[#002c19] hover:bg-gray-100 transition-all duration-300 mt-0"
              >
                TRIIBE branch playbook
              </Link>
            </div>
          </div>

          <div className="pt-6 text-center space-y-8">
            <section className="pb-12 w-full">
              <div className="w-full max-w-[1200px] mx-auto transition-all duration-300 hover:scale-[1.02]">
                <div className="bg-white border border-gray-200 rounded-3xl px-8 md:px-12 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-2xl md:text-3xl font-medium text-[#002c19] text-left">
                    Download the TRIIBE Talk guide
                  </p>

                  <a
                    href="/triibe-talk-guide.pdf"
                    download="TRIIBE_Talk_Guide.pdf"
                    className="inline-flex items-center justify-center h-[44px] px-10 rounded-sm font-semibold text-base bg-[#002c19] text-white hover:bg-[#1C5945] whitespace-nowrap transition-all duration-300 hover:text-white hover:scale-105"
                  >
                    Download here
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
