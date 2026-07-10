import Header from "@/components/header";
import Footer from "@/components/footer";
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
          <div className="text-center border-b border-[#002c19]/10 pb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TRIIBE Talk Guide
            </h1>
            <p className="text-xl md:text-2xl opacity-90 font-light">
              A guide to hosting a TRIIBE Talk in your community.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Introduction To TRIIBE
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              The nonprofit sector has no startup engine because the incentives
              that build one (returns, commission, and equity) don't exist. So
              we built a TRIIBE, channeling capital and bringing startup
              dynamics to nonprofits.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Our multi-year fellowship develops fundable founders, ensuring
              they don't burn out while transitioning from a "youth" nonprofit
              to an established one.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                The TRIIBE Approach
              </h2>
              <ul className="list-disc pl-5 space-y-2 opacity-90 text-lg">
                <li>
                  TRIIBE Talks and summits are intergenerational, featuring
                  next-gen voices.
                </li>
                <li>
                  The TRIIBE Index identifies funding gaps with data-driven
                  precision, built by those across all roles and stages.
                </li>
                <li>
                  The TRIIBE 100 is the global list of nonprofit founders under
                  30 to know.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                TRIIBE Talk Format
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                A TRIIBE Talk is a moderated, intergenerational conversation
                featuring next-gen voices. TRIIBE Talks are designed to be
                adaptable. They can take place in universities, community
                spaces, offices, or public venues of any size, as long as the
                format remains intact.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              TRIIBE Talk Requirements
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
                TRIIBE Talk Participation Alignment Form prior to the event.
              </li>
            </ol>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Event Planning Timeline
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-4">
              While every TRIIBE Talk is unique, most follow a preparation
              timeline of four to eight weeks.
            </p>

            <div className="grid gap-6">
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">4-8 Weeks before:</h3>
                <p className="opacity-90">
                  Select the date, topic, and initial speakers. The venue does
                  not need to be finalized before confirming speakers. Once
                  speakers and venue are confirmed, submit your TRIIBE Talk
                  proposal for approval. TRIIBE will create the official
                  registration page and help promote the event.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">3-4 Weeks before:</h3>
                <p className="opacity-90">
                  Share the event with your community and networks. Aligned
                  organizations may cohost the event with approval from TRIIBE.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">1-2 Weeks before:</h3>
                <p className="opacity-90">
                  Work with your moderator and speakers to finalize the flow of
                  the conversation. Hosts may use the TRIIBE Talk Preparation
                  Checklist to ensure event logistics are ready.
                </p>
              </div>
              <div className="bg-[#002c19]/5 p-6 rounded-xl border border-[#002c19]/10">
                <h3 className="font-bold text-xl mb-2">Event week:</h3>
                <p className="opacity-90">
                  Send reminders, ensure all speakers sign the TRIIBE Talk
                  Participation Alignment Form, prepare the space, and focus on
                  creating a welcoming environment for meaningful discussion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Speaker Guidelines
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
                concise, build on one another's comments, and focus on stories,
                real-world examples, and clear calls to action.
              </p>
              {/* <p className="text-lg leading-relaxed opacity-90 font-medium">
                Hosts should share the{" "}
                <a
                  href="#"
                  className="underline text-[#1C5945] hover:opacity-70"
                >
                  TRIIBE Talk Speaker Brief
                </a>{" "}
                with all speakers in advance so everyone understands the goals
                and structure of the conversation.
              </p> */}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold pb-2">
                TRIIBE Talk Example Schedule
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-[#002c19] bg-[#002c19]/5">
                      <th className="p-4 font-bold w-1/4">Time Stamp</th>
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
                Additional note: If you're planning to host two TRIIBE Talks,
                allow for a 15 minute break after Q&A, then continue with the
                second 35+10 minute panel before community building.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Suggested Discussion Questions
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              TRIIBE Talks are designed to spark thoughtful dialogue across
              generations. Moderators are encouraged to adapt these prompts
              while keeping the conversation focused on real experiences,
              practical solutions, and inspiration for future changemakers.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Moderators are encouraged to begin with questions that focus on a
              speaker's work or motivations rather than a formal introduction,
              allowing the conversation to move quickly into ideas and impact.
              Below are a few themes to consider when creating questions:
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
            {/* <p className="text-lg leading-relaxed opacity-90 font-medium pt-2">
              Linked are{" "}
              <a href="#" className="underline text-[#1C5945] hover:opacity-70">
                sample questions at a TRIIBE Talk with the United Nations Global
                Compact
              </a>
              .
            </p> */}
          </div>

          {/* <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Branding And Visual Templates
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                To keep TRIIBE Talks visually consistent around the world, we've
                created a set of official TRIIBE Talk templates. Once your
                TRIIBE Talk is confirmed, the TRIIBE team will create the
                official event registration page, add your speakers and
                moderator to the graphic, and share the link with you to
                distribute to your community. Templates can also be used to
                invite speakers, partners, and attendees.
              </p>

              <div className="w-full h-64 bg-[#002c19]/10 rounded-xl flex items-center justify-center border-2 border-dashed border-[#002c19]/30">
                <p className="opacity-60 font-medium">
                  Template Images Placeholder
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Participant Alignment Form
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                All speakers, moderators, and organizers participating in a
                TRIIBE Talk should complete the{" "}
                <a
                  href="#"
                  className="underline text-[#1C5945] hover:opacity-70"
                >
                  TRIIBE Talk Participation Alignment Form linked here
                </a>{" "}
                prior to the event.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                TRIIBE is dedicated to fostering meaningful connections,
                empowering innovation, and creating a lasting positive impact.
                The undersigned individual is expected to embody the following
                values:
              </p>
              <ul className="list-disc pl-5 space-y-2 opacity-90 text-lg">
                <li>Integrity and transparency in all interactions.</li>
                <li>Respect for diverse perspectives and backgrounds.</li>
                <li>Commitment to healthy habits to eliminate burnout.</li>
              </ul>
              <p className="text-lg leading-relaxed opacity-90 text-sm mt-4 bg-gray-50 p-6 rounded-lg">
                By participating in a TRIIBE Talk event, the undersigned
                acknowledges that their participation is voluntary and does not
                constitute an employment relationship with TRIIBE. The
                undersigned also acknowledges that TRIIBE Talk events may be
                photographed, filmed, or recorded, and grants TRIIBE permission
                to use their image, voice, and likeness in photographs, video,
                or audio recordings for educational, promotional, and archival
                purposes.
              </p>
            </div>
          </div> */}

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Promoting & After Your Talk
              </h2>
              <p className="text-lg leading-relaxed opacity-90">
                <strong>Promoting:</strong> Once your TRIIBE Talk registration
                page is created, share the event link and graphics with your
                community, networks, and local partners. TRIIBE will do the same
                on our platforms. Inviting organizations aligned with the topic
                can help broaden the conversation and reach new audiences.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                <strong>After the event:</strong> Immediately following the
                TRIIBE Talk, hosts are encouraged to allow time for informal
                discussion so attendees and speakers can continue the dialogue.
                Hosts should also share photos or recordings, including a group
                photo of the panelists, with TRIIBE.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Before leaving the venue, please help reset the space and ensure
                it is left as it was found. TRIIBE Talks rely on the generosity
                of community spaces, universities, and partners. Caring for the
                venue helps ensure these spaces can continue hosting future
                TRIIBE Talks.
              </p>
            </div>

            <div className="space-y-4 bg-[#002c19] text-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold pb-2">
                Continuing The TRIIBE Movement
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
            </div>
          </div>

          <div className="pt-12 border-t border-[#002c19]/10 flex flex-col items-center text-center space-y-6">
            <h3 className="text-2xl font-bold">Prefer to read offline?</h3>
            <p className="opacity-90 max-w-lg text-lg">
              You can download the original PDF version of the TRIIBE Talk Guide
              for easy sharing and offline viewing.
            </p>
            <a
              href="/triibe-talk-guide.pdf"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#002c19] rounded-full hover:bg-[#1C5945] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              download
            >
              Download Guide as PDF
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
