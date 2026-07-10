import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "TRIIBE Branch Playbook",
  description: "A guide to setting up a TRIIBE Branch in your region.",
};

export default function TriibeBranchPlaybookPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50">
        <div className="max-w-300 mx-auto text-[#002c19] space-y-20">
          <div className="text-center border-b border-[#002c19]/10 pb-12">
            <p className="text-sm font-bold tracking-widest uppercase mb-4 opacity-70">
              TRIIBE Branch Playbook
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Taking root</h1>
            <p className="text-xl md:text-2xl font-medium mb-6">
              A guide to setting up a Branch in your region.
            </p>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              If your community is ready to support philentrepreneurs, the
              TRIIBE team is here to help you establish a local branch and
              channel capital to next-gen nonprofit founders in your region. New
              to TRIIBE?{" "}
              <a
                href="https://drive.google.com/file/d/1NU9zXE7_gViOPSDR2lny3zejR9GCj-uT/view"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline hover:text-[#1C5945] transition-colors"
              >
                Read our 1-pager first.
              </a>
            </p>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Phase 1: Taking Root
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10">
                  1
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Sign the Volunteer Agreement
                </h3>
                <p className="opacity-90 leading-relaxed">
                  One form joins you to TRIIBE and unlocks the TRIIBE brand,
                  logo, and media.
                </p>
              </div>

              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10">
                  2
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Host your first TRIIBE Talk
                </h3>
                <p className="opacity-90 leading-relaxed">
                  An intergenerational talk, featuring next-gen voices in the
                  region. You can find the TRIIBE Talk Guide here.
                </p>
              </div>

              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10">
                  3
                </span>
                <h3 className="text-xl font-bold mb-3">Form the boards</h3>
                <p className="opacity-90 leading-relaxed">
                  A regional advisory board (over 30) that opens doors and a
                  regional associate board (under 30) that serve as a pipeline
                  to the future regional voting board of directors, both capped
                  at 11 members.
                </p>
              </div>

              <div className="bg-[#002c19]/5 p-8 rounded-2xl border border-[#002c19]/10 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10">
                  4
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Host the first cohort
                </h3>
                <p className="opacity-90 leading-relaxed">
                  Outreach using TRIIBE Talks and introductions to find the
                  initial cohort of 5 nonprofit founders in their early 20s to
                  support, who apply on TRIIBE&apos;s Apply Page.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#002c19] text-white p-10 md:p-16 rounded-3xl text-center shadow-lg my-16">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              &ldquo;If hosting a TRIIBE Talk is a spark, founding a local
              TRIIBE Branch is the fuel.&rdquo;
            </h3>
          </div>

          <div className="space-y-10">
            <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
              Phase 2: Branching out
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-[#002c19]/20 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#002c19]">
                  5
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Pass the promotional review
                </h3>
                <p className="opacity-90 leading-relaxed">
                  The four kick-off steps are complete, with both boards seated
                  at five members or more.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-[#002c19]/20 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#002c19]">
                  6
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Plan the regional next-gen summit
                </h3>
                <p className="opacity-90 leading-relaxed">
                  The managing director builds the plan for the region&apos;s
                  first annual Summit.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-[#002c19]/20 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#002c19]">
                  7
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Receive TRIIBE funding
                </h3>
                <p className="opacity-90 leading-relaxed">
                  Branch funding is based on tier, by GNI per capita for the
                  region, including salary and summit underwriting.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-[#002c19]/20 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-bold opacity-10 text-[#002c19]">
                  8
                </span>
                <h3 className="text-xl font-bold mb-3">
                  Sign the branch forms
                </h3>
                <p className="opacity-90 leading-relaxed">
                  Templatized bylaws and branch agreement. Boards convert and
                  hire the managing director full time.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-10 pt-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold border-b border-[#002c19]/10 pb-2">
                Regional operations
              </h2>
              <p className="text-lg opacity-90 leading-relaxed">
                A living branch runs on rhythm. Four things repeat, each feeding
                the next: Talks fill the pipeline, the cohorts grow, the boards
                open doors, and the Summit turns it into revenue that funds the
                next year.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#002c19] text-white px-3 py-1 text-sm font-bold rounded-full">
                    Annual
                  </span>
                </div>
                <div className="md:w-3/4 space-y-2">
                  <h4 className="text-xl font-bold">Annual Summit</h4>
                  <p className="opacity-90">
                    Showcase the regional cohorts at a gala and TRIIBE Talks,
                    hosting the sponsors and funders whose support powers the
                    branch.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#002c19] text-white px-3 py-1 text-sm font-bold rounded-full">
                    Quarterly
                  </span>
                </div>
                <div className="md:w-3/4 space-y-2">
                  <h4 className="text-xl font-bold">Fellows in Residence</h4>
                  <p className="opacity-90">
                    Support the cohort, introducing new mentors each quarter,
                    across their three-year journey. A new cohort joins each
                    year, up to 15 fellows at full capacity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#002c19] text-white px-3 py-1 text-sm font-bold rounded-full">
                    Quarterly
                  </span>
                </div>
                <div className="md:w-3/4 space-y-2">
                  <h4 className="text-xl font-bold">Board meetings</h4>
                  <p className="opacity-90">
                    Keep the advisory board and board of directors active,
                    turning their networks into local funding and reach.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <div className="md:w-1/4">
                  <span className="inline-block bg-[#002c19] text-white px-3 py-1 text-sm font-bold rounded-full">
                    Monthly
                  </span>
                </div>
                <div className="md:w-3/4 space-y-2">
                  <h4 className="text-xl font-bold">TRIIBE Talks</h4>
                  <p className="opacity-90">
                    Keep facilitating intergenerational talks, promoting TRIIBE
                    and feeding the fellow pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-[#002c19]/10 text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Questions</h3>
              <p className="opacity-90 text-lg">
                Questions, comments, complaints? We would be happy to hear from
                you at{" "}
                <a
                  href="mailto:partnerships@triibe.org"
                  className="font-bold underline hover:text-[#1C5945] transition-colors"
                >
                  partnerships@triibe.org
                </a>
                .
              </p>
            </div>

            <a
              href="/triibe-branch-playbook.pdf"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-[#002c19] rounded-sm h-[44px] hover:bg-[#1C5945] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              download="TRIIBE_Branch_Playbook.pdf"
            >
              Download the Branch Guide
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
