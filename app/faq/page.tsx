"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

const faqs = [
  {
    question: "What is TRIIBE?",
    answer:
      "TRIIBE is a 501(c)(3) nonprofit that funds the next generation of nonprofit founders. We provide undergraduate sophomores who have founded their own 501(c)(3) nonprofits with a three-year fellowship that combines unrestricted funding, mentorship, and community to help them continue their work through college and beyond.",
  },
  {
    question: "What is TRIIBE's mission?",
    answer:
      "TRIIBE's mission is to fund, mentor, and connect next-gen nonprofit founders so they don't burn out when transitioning from a youth nonprofit to an established nonprofit. We help changemakers take root today to advance tomorrow.",
  },
  {
    question: "Why does TRIIBE exist?",
    answer:
      "Nonprofit founders are cut off from funding when entering college, and 80% of student-led nonprofits fade within a year. Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE - next-gen for next-gen - a foundation made up of incredible changemakers under the age of 30.",
  },
  {
    question: "What does TRIIBE do?",
    answer:
      "TRIIBE is building the nonprofit startup ecosystem through three pillars: the TRIIBE College Fellowship (unrestricted funding, mentorship, community), TRIIBE Talks (a decentralized global network highlighting next-gen voices), and the TRIIBE 100 (a definitive seal of credibility for nonprofit founders under 30 building with humility).",
  },
  {
    question: "Where is TRIIBE located?",
    answer:
      "TRIIBE is headquartered in New York City. Our flagship event, the Next-Gen Changemaker Summit, takes place at Invite Only Studios at 207 W 25th St, New York NY. We also have a global network with regional directors in Sierra Leone, Zambia, Nigeria, Canada, India, and Jamaica.",
  },
  {
    question: "Is TRIIBE a registered nonprofit?",
    answer:
      "Yes. TRIIBE is a registered 501(c)(3) nonprofit organization and holds the Candid Platinum Transparency Seal, the highest level of transparency rating awarded by Candid (formerly GuideStar). Donations to TRIIBE are tax-deductible.",
  },
  {
    question: "Is TRIIBE part of any larger organization?",
    answer: "TRIIBE is an independent member of the United World Leaders.",
  },

  {
    question: "What is the TRIIBE College Fellowship?",
    answer:
      "The TRIIBE College Fellowship is a three-year program for undergraduate nonprofit founders. Fellows receive a total of $40,000 in unrestricted funding ($5K sophomore year, $10K junior year, $25K senior year), mentorship from two experienced mentors per quarter, and community with a cohort of peer founders.",
  },
  {
    question: "Who is eligible to apply for the TRIIBE Fellowship?",
    answer:
      "Eligible applicants must be currently enrolled undergraduate students, founders or co-founders of registered 501(c)(3) nonprofits, in active leadership roles in their organizations, and aspire to continue their work full-time after graduating. Applicants must be sophomores at the time of application.",
  },
  {
    question: "How do I apply to the TRIIBE Fellowship?",
    answer:
      "Apply at triibe.org/apply. Instead of a traditional pitch deck, applicants submit a short video (up to 5 minutes) describing their why (motivation), impact (difference made), and pitch (how they'd use the first grant). Applications for the Fall 2026 cohort open May 1st.",
  },
  {
    question: "How much funding do TRIIBE Fellows receive?",
    answer:
      "Fellows receive $40,000 in total unrestricted funding over the three-year program. Year 1 (Roots, sophomore year): $5,000. Year 2 (Skyline, junior year): $10,000. Year 3 (Stars, senior year): $25,000.",
  },
  {
    question: "What can the TRIIBE Fellowship funding be used for?",
    answer:
      "The funding is fully unrestricted and can be used for any legitimate organizational expenses including operations, program costs, team compensation, technology, marketing, or other needs that support the nonprofit's mission and growth.",
  },
  {
    question: "How much time does the TRIIBE Fellowship require?",
    answer:
      "Approximately 5-8 hours per week, including monthly check-ins, quarterly mentor meetings, cohort workshops, and time to implement organizational goals. The program is designed to work alongside academic commitments.",
  },
  {
    question: "How big is each TRIIBE cohort?",
    answer: "Each cohort consists of 5 fellows.",
  },
  {
    question: "What happens after a TRIIBE Fellow graduates?",
    answer:
      "Fellows transition to the TRIIBE alumni network with continued access to mentorship, resources, and community. Alumni stay connected for life and can contribute back as mentors for future cohorts. The fellowship's third year specifically focuses on post-graduation transition planning, leadership succession, and securing multi-year funding commitments.",
  },
  {
    question: "How does TRIIBE measure impact?",
    answer:
      "TRIIBE uses case studies and quarterly surveys to measure each founder's digital presence, sense of community and wellbeing, organizational impact, and funds raised beyond TRIIBE's grants.",
  },
  {
    question: "What impact areas does TRIIBE focus on?",
    answer:
      "TRIIBE supports founders working in five impact areas: Food (security, sustainable agriculture, nutrition, food systems), Water (clean access, sanitation, conservation), Shelter (affordable housing, homelessness prevention), Health (healthcare access, mental health, preventative care), and Education (educational equity, literacy, opportunity pathways).",
  },
  {
    question: "What kind of founders does TRIIBE support?",
    answer:
      "TRIIBE supports student and young nonprofit founders under 30 - specifically undergraduate sophomores who have already founded a registered 501(c)(3) nonprofit. Fellows receive grants, fellowships, mentorship, and the opportunity to work on real projects and scale their impact.",
  },
  {
    question: "Does TRIIBE offer grants for nonprofit founders?",
    answer:
      "Yes. TRIIBE provides $40,000 in unrestricted grants over three years to each fellow ($5,000 sophomore year, $10,000 junior year, $25,000 senior year), alongside mentorship, community, and program support.",
  },
  {
    question: "What are TRIIBE Talks?",
    answer:
      "TRIIBE Talks are a decentralized global network of talks for next-gen changemakers featuring workshops, discussions, and insights from leaders empowering the next generation. They highlight the quality of next-gen voices and serve as a platform for nonprofit founders under 30 to share their stories and amplify their impact.",
  },
  {
    question: "What is the TRIIBE 100?",
    answer:
      "The TRIIBE 100 serves as a definitive seal of credibility for nonprofit founders under 30 building with humility. It is part of TRIIBE's mission to provide visibility and credibility to next-gen nonprofit founders.",
  },
  {
    question: "Where can I watch TRIIBE Talks and TRIIBE media content?",
    answer:
      "TRIIBE Talks and media content can be found at triibe.org/media and on TRIIBE's YouTube channel (@TRIIBEorg). The media page highlights youth nonprofit founders and next-generation changemakers creating real impact globally.",
  },
  {
    question: "What is the Next-Gen Changemaker Summit?",
    answer:
      "The Next-Gen Changemaker Summit is TRIIBE's flagship invite-only event held September 4–6, 2026 in New York City, hosted in partnership with Invite Only. It brings together next-gen nonprofit founders, established changemakers, funders, mentors, and partners for a multi-day weekend including a VIP Gala on Friday evening, a full-day summit on Saturday with seven TRIIBE Talks, and curated experiences such as the Steve Madden Fashion Show.",
  },

  {
    question: "Who founded TRIIBE?",
    answer:
      "TRIIBE was founded by Kyle Matthys, who serves as CEO and Founder. Kyle leads TRIIBE in supporting young nonprofit founders advancing food, water, shelter, health, education, and energy initiatives.",
  },
  {
    question: "Who runs TRIIBE?",
    answer:
      "TRIIBE is led by Kyle Matthys (CEO & Founder) and Nawaf Alshaikhmubarak (COO, a Mechanical Engineering student at NYU Tandon). The board includes James Hetherington, with a Legacy Board featuring JapNeet K (Mphasis), Flaviu Simihaian (1PB.org), Stacey Lauren (Do The Thing), Gregg Meyer (Steve Madden Corporate Foundation), Stefan Avivson, Lara Stein (founder of TEDx), Dr. Purnima Voria (National US India Chamber of Commerce), Chelsea Toler (Logictry), and Geoffrey Sargeant (The REAL).",
  },
  {
    question: "Who are TRIIBE's regional directors?",
    answer:
      "TRIIBE has regional directors around the world: Musa Konneh (Sierra Leone), Jonnathan Mtonga (Zambia), Patience Nnedinso Eze (Nigeria), Ronan Hasan (Canada), Satyam Pandey (India), and Oshane Panton (Jamaica).",
  },

  {
    question: "Who are TRIIBE's current Fellows?",
    answer:
      "Spring 2025 cohort: Olivia Zhang (Cancer Kids First, Harvard), Anne-Sophie Frédérick (Haitech Learning, Williams), Esha Venkat (Next4Us, Georgia Tech), and Maya Gowda (SEED, Cornell). Fall 2025 cohort: Samin Bhan (Lookupp, Stanford), Shrusti Amula (Rise N Shine Foundation, Georgetown), Nayla Jimenez (Philippine Health Initiative, University of Florida), Varuni Chopra (Bridge the Gap Initiative, Georgia Tech), and Gitanjali Rao (Vervient Foundation, MIT).",
  },

  {
    question: "Who sponsors TRIIBE?",
    answer:
      "TRIIBE is sponsored by Steve Madden, Allegiance Partners, Rayze, Do The Thing, and Streamr.",
  },
  {
    question: "Who are TRIIBE's partners?",
    answer:
      "TRIIBE partners with ESG News, Cloz Talk, Brooklyn Law School, WEDO (Women's Entrepreneurship Day Organization), Illuminem, United Planet, Inspire Youth Journal, Learning Planet Institute, Climate Cafe NYC, WE7, Touch-A-Life Foundation, Impact Hub New York Metropolitan Area, The Billion Dollar Impact Marketplace, FINPUBLICA, SILC (Sustainability Investment Leadership Council), FWE (Forum for World Education), Zenith, and Blue Planet Alliance.",
  },

  {
    question: "How can I support TRIIBE?",
    answer:
      "There are several ways to support TRIIBE: donate at donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz, partner with TRIIBE to empower next-gen nonprofit leaders, become a mentor, or apply to the fellowship if you're an eligible undergraduate founder.",
  },
  {
    question: "How do I donate to TRIIBE?",
    answer:
      "Donations can be made through TRIIBE's Rayze page at donate.rayzeapp.com/orgs/tIbe07j0XKkLQezHHXoz. All donations are tax-deductible. Your donation helps fund founders making an impact in food, water, shelter, health, and education.",
  },
  {
    question: "How can my organization partner with TRIIBE?",
    answer:
      "Organizations interested in partnering with TRIIBE can email partnerships@triibe.org.",
  },
  {
    question: "How do I contact TRIIBE?",
    answer:
      "TRIIBE can be reached at partnerships@triibe.org. You can also connect on LinkedIn (linkedin.com/company/thetriibe), Instagram (@triibe__talk), or YouTube (@TRIIBEorg).",
  },
];

const FAQPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <h1 className="text-4xl font-bold text-black mb-12 text-center">
            FAQ's
          </h1>
          <div className="flex flex-col gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h2 className="text-xl font-bold text-black">{faq.question}</h2>
                <p className="text-base text-[#495565] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQPage;
