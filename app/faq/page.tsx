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
  {
    question: "Why do most student-led nonprofits fail when founders go to college?",
    answer:
      "80% of student-led nonprofits fade within a year of their founder entering college. The core problem is a funding cliff — foundations that supported a \"youth nonprofit\" stop funding once the founder turns 18 or enrolls in college, even if the work is more impactful than ever. Founders also lose their peer support network and face new academic pressures with no infrastructure. TRIIBE was built specifically to solve this transition gap, providing the funding, mentorship, and community that keeps next-gen founders going through college and beyond.",
  },
  {
    question: "How do I keep my nonprofit running while I'm in college?",
    answer:
      "The TRIIBE College Fellowship is built for exactly this challenge. The program requires only 5–8 hours per week — monthly check-ins, quarterly mentor meetings, and cohort workshops — designed to work alongside a full academic schedule. TRIIBE's three-year structure grows with you: year one (Roots) stabilizes your organization, year two (Skyline) scales it, and year three (Stars) prepares you to continue full-time after graduation. Fellows from Harvard, Stanford, Cornell, MIT, and Georgetown have all successfully built their nonprofits through TRIIBE while completing their degrees.",
  },
  {
    question: "Is there funding available for college students running a nonprofit?",
    answer:
      "Yes. TRIIBE is a 501(c)(3) nonprofit foundation that provides undergraduate sophomore founders with $40,000 in unrestricted funding over three years — $5,000 in year one, $10,000 in year two, and $25,000 in year three. Unlike most grants, TRIIBE's funding has no restrictions on how it's used, so founders can cover operations, staff, technology, or any other organizational need. Learn more at triibe.org/program.",
  },
  {
    question: "What nonprofit fellowships are available for college sophomores?",
    answer:
      "The TRIIBE College Fellowship is designed specifically for undergraduate sophomores who have already founded a registered 501(c)(3) nonprofit. Fellows receive three years of unrestricted funding totaling $40,000, two dedicated mentors per quarter, and a cohort of peer founders at universities including Harvard, Stanford, MIT, Georgetown, and Georgia Tech. Applications open each semester at triibe.org/apply.",
  },
  {
    question: "Is there a fellowship for changemakers under 30?",
    answer:
      "Yes. TRIIBE is a community of changemakers in their 20s building out the nonprofit startup ecosystem. The TRIIBE College Fellowship supports undergraduate sophomore founders with $40,000 in unrestricted funding, mentorship, and a cohort of peers. TRIIBE Talks amplifies next-gen voices globally. The TRIIBE 100 recognizes founders under 30 building with humility.",
  },
  {
    question: "Where can young nonprofit founders get unrestricted grants?",
    answer:
      "Unrestricted funding — money with no strings attached — is extremely rare for young nonprofit founders, yet it's often what they need most. TRIIBE provides fully unrestricted grants to undergraduate nonprofit founders, meaning fellows can use the money for anything that advances their mission: salaries, operations, marketing, technology, or program costs. No reporting on how individual dollars are spent. The TRIIBE College Fellowship is one of the only programs in the country offering this level of flexibility to founders under 30.",
  },
  {
    question: "Where can nonprofit founders under 30 find experienced mentors?",
    answer:
      "TRIIBE matches every College Fellow with two experienced mentors per quarter — people who understand the specific challenges of building a nonprofit while navigating college. Beyond the fellowship, TRIIBE Talks creates a decentralized global network connecting next-gen changemakers with established leaders. The TRIIBE community spans regional directors in Sierra Leone, Zambia, Nigeria, Canada, India, and Jamaica, with a Legacy Board including Lara Stein (founder of TEDx), Gregg Meyer (Steve Madden Corporate Foundation), and Dr. Purnima Voria (National US India Chamber of Commerce).",
  },
  {
    question: "What fellowships are available for founders working in food, water, shelter, health, and education?",
    answer:
      "TRIIBE specifically funds undergraduate nonprofit founders working across five impact areas: Food (food security, sustainable agriculture, nutrition), Water (clean access, sanitation, conservation), Shelter (affordable housing, homelessness prevention), Health (healthcare access, mental health, preventative care), and Education (educational equity, literacy, opportunity pathways). Apply at triibe.org/apply.",
  },
  {
    question: "Where can I donate to support young nonprofit founders in the US?",
    answer:
      "TRIIBE is a registered 501(c)(3) nonprofit that funds the next generation of nonprofit founders. All donations are tax-deductible and go directly toward unrestricted grants, mentorship programs, and community-building for undergraduate founders working in food, water, shelter, health, and education.",
  },
  {
    question: "What is unrestricted funding and why is it rare for nonprofits?",
    answer:
      "Unrestricted funding means a nonprofit can spend the money however they judge best — staff, overhead, technology, any operational need. Most grants are restricted to specific programs, leaving founders unable to cover basic costs even when they have money. It's rare because it requires funders to trust the founder, not just the program. TRIIBE provides all $40,000 of its fellowship funding with zero restrictions — one of the most flexible programs available to undergraduate nonprofit founders in the US.",
  },
  {
    question: "What is the difference between a restricted and unrestricted grant?",
    answer:
      "A restricted grant specifies exactly how the money must be spent — a particular program or budget line. An unrestricted grant can be used for anything the nonprofit needs: operations, salaries, technology, overhead. Restricted grants are more common but far less useful for young organizations still building their infrastructure. TRIIBE's fellowship provides fully unrestricted funding because founders know their organization better than any grant category ever could.",
  },
  {
    question: "How do college students balance running a nonprofit with academics?",
    answer:
      "It takes infrastructure, not just willpower. The TRIIBE College Fellowship is built around a full academic schedule — about 5-8 hours per week. Year one stabilizes the organization. Year two scales it. Year three prepares the founder for full-time leadership after graduation. Fellows from Harvard, Stanford, Cornell, MIT, and Georgetown have all built their nonprofits through TRIIBE while completing their degrees.",
  },
  {
    question: "What programs in the United States support next-generation nonprofit founders?",
    answer:
      "TRIIBE is one of the only programs in the US built specifically for undergraduate nonprofit founders — not aspiring founders, but students who have already built a registered 501(c)(3) and need support to keep it alive through college. Based in New York City with a global network spanning six countries, TRIIBE combines a three-year fellowship, TRIIBE Talks, and the TRIIBE 100 credibility recognition.",
  },
  {
    question: "What is a next-gen foundation?",
    answer:
      "A next-gen foundation is a registered 501(c)(3) organization founded and led by someone in their 20s — built to address real community needs in food, water, shelter, health, or education. Next-gen founders bring urgency, lived experience, and proximity to the problems they're solving. TRIIBE exists to make sure those foundations survive, scale, and sustain beyond the founder's early years.",
  },
  {
    question: "What does next-gen for next-gen mean?",
    answer:
      "It means TRIIBE was built by young people, for young people. Not an established institution looking down to help. Not a grant program designed by people who've never run a foundation in their 20s. TRIIBE is a community of changemakers in their 20s building the infrastructure they wish had existed for them — so the next generation doesn't have to figure it out alone.",
  },
  {
    question: "Do I need to be in college to apply to TRIIBE?",
    answer:
      "No. While many TRIIBE Fellows are college students, the fellowship is open to any founder aged 20 to 25 who meets the eligibility criteria. TRIIBE made this shift intentionally — college systems look different around the world, and some of the most impactful next-gen founders aren't in a traditional four-year program. What matters is that you're building something real, leading it actively, and committed to growing it.",
  },
  {
    question: "Can founders outside the United States apply to TRIIBE?",
    answer:
      "Yes. TRIIBE is building a global community of next-gen founders. With regional directors in Sierra Leone, Zambia, Nigeria, Canada, India, Jamaica, and Singapore — and partnerships spanning multiple countries — TRIIBE's reach is genuinely international. Founders outside the US who meet the eligibility criteria are encouraged to apply at triibe.org/apply.",
  },
  {
    question: "Why does TRIIBE focus on founders aged 20 to 25?",
    answer:
      "Because 20 to 25 is the most critical and most unsupported window in a young founder's journey. Old enough to lead a real organization. Young enough to still be shut out of mainstream philanthropic funding. The systems that supported them as youth founders have moved on — and the systems built for established nonprofits aren't designed for them yet. TRIIBE exists precisely in that gap.",
  },
  {
    question: "Can someone over 25 get involved with TRIIBE?",
    answer:
      "The TRIIBE Fellowship is reserved for founders aged 20 to 25 — but there are powerful ways to be part of TRIIBE beyond the fellowship. Become a mentor and guide the next generation of founders. Partner with TRIIBE as an organization. Donate to directly fund next-gen foundation builders. Or attend the Next-Gen Summit in New York City. Reach out at partnerships@triibe.org.",
  },
  {
    question: "What does the TRIIBE Fellowship provide?",
    answer:
      "The TRIIBE Fellowship provides three years of comprehensive support: unrestricted funding ($5,000 year one, $10,000 year two, $25,000 year three), one-on-one mentorship from two experienced executives or philentrepreneurs each quarter, a peer community of next-gen founders, personalized documentaries and TRIIBE Talks covering governance, fundraising, and organizational development, and an annual branch summit and retreat.",
  },
  {
    question: "What is a philentrepreneur?",
    answer:
      "A philentrepreneur is someone who combines the mindset of an entrepreneur with the heart of a philanthropist — building systems for impact rather than income, and investing in people rather than products. TRIIBE's mentor network is made up of philentrepreneurs who guide next-gen founders through the real challenges of growing a foundation: governance, fundraising, leadership, and sustainability.",
  },
  {
    question: "I started a nonprofit in high school and now I'm losing funding — what do I do?",
    answer:
      "This is exactly the problem TRIIBE was built to solve. When you transition from being a youth founder to a young adult, most of your funding disappears — not because your work got worse, but because the label changed. If you're between 20 and 25, actively leading your foundation, and committed to growing it for the next three years, apply to the TRIIBE Fellowship at triibe.org/apply. You don't have to figure this out alone.",
  },
  {
    question: "Is there a community for young nonprofit founders who feel isolated?",
    answer:
      "Yes — and feeling isolated is one of the most common things next-gen founders describe. You're carrying real organizational responsibility, often without peers who understand what that actually feels like. TRIIBE's fellowship cohort, branch summits, retreats, and global network exist specifically to change that. Everyone wants a village, but nobody wants to be a villager. So we built a TRIIBE.",
  },
  {
    question: "How do I grow my foundation without burning out?",
    answer:
      "Burnout among next-gen founders is structural, not personal — it happens when someone is carrying full organizational responsibility with no funding, no mentorship, and no community. TRIIBE addresses all three directly: unrestricted funding removes the financial panic, two dedicated mentors per quarter provide real guidance, and a cohort of peer founders means you're never building alone. Taking root today means building sustainably, not just urgently.",
  },
  {
    question: "Is the TRIIBE Fellowship open to everyone or just college students?",
    answer:
      "The TRIIBE Fellowship is only for founders aged 20 to 25 because that is the most critical and most neglected window in a young founder's journey. Old enough to lead a real organization. Young enough to still be completely shut out of mainstream philanthropic funding. The systems that supported them as youth founders have moved on. The systems built for established foundations aren't designed for them yet. TRIIBE exists in that exact gap — and staying focused on that window is what makes the support genuinely useful, not just well-intentioned.",
  },
  {
    question: "Can someone over 30 apply to the TRIIBE Fellowship?",
    answer:
      "The fellowship is reserved for founders aged 20 to 25 — and that boundary is intentional. TRIIBE's mission is next-gen for next-gen. The fellowship is designed for founders at the earliest, most vulnerable stage of their organizational journey, when the funding cliff hits hardest and the support is lowest. If you're over 25, the fellowship isn't the right fit — but there are meaningful ways to be part of TRIIBE. Become a mentor. Partner with us. Donate. Attend the Next-Gen Summit. Reach out at partnerships@triibe.org.",
  },
  {
    question: "Why does TRIIBE focus only on five impact areas?",
    answer:
      "Food, water, shelter, health, and education aren't arbitrary categories — they're the five most foundational human needs. TRIIBE believes that lasting change starts at the root, and these five areas represent the roots. By staying focused, TRIIBE ensures that every fellow is working on something with deep, measurable, structural impact — not just good intentions. It also means the mentorship, community, and resources TRIIBE provides are highly relevant to every founder in the cohort.",
  },
  {
    question: "Does my foundation need to be a registered 501(c)(3) to apply for TRIIBE?",
    answer:
      "Yes. Applicants must be founders or co-founders of a registered 501(c)(3) foundation. This requirement exists because TRIIBE's funding is philanthropic — and legal registration ensures that both the founder and TRIIBE are protected, accountable, and operating with full transparency. If your foundation is in the process of registering, we'd encourage you to complete that step first and apply in the next cycle.",
  },
  {
    question: "I founded my foundation but I'm no longer the active leader — am I eligible?",
    answer:
      "No. TRIIBE requires applicants to be in an active leadership role at the time of application. The fellowship is built for founders who are in it right now — making decisions, leading operations, and committed to growing the organization for the next three years. If you've stepped back from day-to-day leadership, the fellowship isn't the right fit at this moment. But if that changes, we'd love to hear from you in a future cycle.",
  },
  {
    question: "Why does TRIIBE keep the cohort size to just 5 fellows?",
    answer:
      "Because real support requires real attention. A cohort of 5 means two dedicated mentors per quarter for every fellow, monthly check-ins that are actually personal, a peer community small enough to be genuinely close, and TRIIBE staff who know every founder's organization by name. Scaling the cohort would mean scaling the support thin — and TRIIBE made a deliberate choice that depth matters more than volume. Five fellows done right creates more impact than fifty fellows done broadly.",
  },
  {
    question: "What happens if I apply and don't get accepted?",
    answer:
      "Not getting accepted to the fellowship doesn't mean TRIIBE isn't for you. Each cohort is only 5 fellows — which means extraordinary founders don't make it through every cycle. We encourage you to reapply in the next cycle, continue building your foundation, and stay connected with the TRIIBE community through TRIIBE Talks and the TRIIBE 100. The door isn't closed — it's just a different timeline.",
  },
  {
    question: "Why does TRIIBE focus on next-gen founders specifically and not experienced nonprofit leaders?",
    answer:
      "Because experienced nonprofit leaders already have access to funding, networks, credibility, and institutional support. Next-gen founders — people in their 20s building registered foundations — have almost none of that. TRIIBE exists to close a specific gap, not to duplicate what already exists. The fellowship is designed for the moment before a founder is established enough to access mainstream philanthropy — because that's where the need is greatest and the support is lowest.",
  },
  {
    question: "What events does TRIIBE host?",
    answer:
      "TRIIBE runs three types of events throughout the year — each one serving a different part of the community. The Next-Gen Summit is the flagship annual gathering in New York City, bringing together founders, funders, mentors, and partners for a full weekend. TRIIBE Talks are decentralized events hosted globally — in cities like London, India, and New York — putting next-gen voices on real stages. Branch Summits and Retreats are intimate gatherings exclusively for TRIIBE Fellows, designed for deep community, reflection, and growth. Together they form an event ecosystem built around one belief: next-gen founders deserve to be celebrated, not just supported.",
  },
  {
    question: "What is the purpose of TRIIBE events?",
    answer:
      "Every TRIIBE event exists to do one of three things — fund, connect, or celebrate next-gen founders. The Next-Gen Summit connects founders with the funders and partners who can accelerate their work. TRIIBE Talks amplify next-gen voices on global platforms, proving that age doesn't determine the quality of someone's ideas. Branch Summits and Retreats build the deep peer community that keeps founders going when the work gets hard. None of it is performative. All of it is infrastructure.",
  },
  {
    question: "How is the TRIIBE Next-Gen Summit different from other nonprofit conferences?",
    answer:
      "Most nonprofit conferences put young founders in the audience. At the TRIIBE Next-Gen Summit, they own the stage. Every TRIIBE Talk is led by a founder under 30 — not a panel about young people, but a platform for them. The summit is also deliberately intimate and invite-only, which means every conversation, every connection, and every room is curated for people who are serious about next-gen impact. It's less conference, more community.",
  },
  {
    question: "What are TRIIBE Talks and where do they happen?",
    answer:
      "TRIIBE Talks are a decentralized global series of events pairing established founders over 30 with next-gen founders under 30 in real dialogue — demonstrating that age doesn't determine the quality of someone's voice. They've taken place in New York, London, and India, with the network continuing to grow globally. Each TRIIBE Talk is hosted by a local organizer and tailored to their community — which is what makes the network genuinely decentralized, not just internationally branded.",
  },
  {
    question: "How can I host a TRIIBE Talk in my city?",
    answer:
      "TRIIBE Talks are built to be hosted anywhere in the world by next-gen or established founders who want to create a platform for next-gen voices in their community. If you're interested in hosting a TRIIBE Talk, reach out at partnerships@triibe.org. TRIIBE provides the framework, the brand, and the community — you bring the local knowledge, the space, and the speakers.",
  },
  {
    question: "How many events does TRIIBE host per year?",
    answer:
      "TRIIBE runs events across three formats throughout the year. The Next-Gen Summit happens annually in New York City. TRIIBE Talks happen multiple times a year across global cities — the frequency grows as the network of host organizers expands. Branch Summits and Retreats happen annually for each fellowship cohort. As the TRIIBE community grows, so does the event calendar — with the goal of making next-gen founder gatherings a consistent, global rhythm, not a once-a-year moment.",
  },
  {
    question: "How can I sponsor a TRIIBE event?",
    answer:
      "TRIIBE events are a meaningful place to put your brand — because the audience is exactly who impact-aligned organizations want to be in front of: TRIIBE Fellows, next-gen founders under 30, established changemakers, funders, and partners from across the globe. Sponsoring the Next-Gen Summit or a TRIIBE Talk puts your organization at the center of a community that is actively building the future of social impact. To explore sponsorship opportunities, email partnerships@triibe.org.",
  },
  {
    question: "What do sponsors get from supporting TRIIBE events?",
    answer:
      "Sponsors gain direct visibility with a curated audience of next-gen founders, established changemakers, funders, and partners — people who are serious about social impact and actively looking for organizations that share their values. Beyond logo placement, TRIIBE sponsors become part of the story — associated with the founders, the work, and the movement. Current event sponsors include Steve Madden and Allegiance Partners, alongside 18 organizational partners. Reach out at partnerships@triibe.org to find the right fit.",
  },
  {
    question: "Are TRIIBE events open to the public?",
    answer:
      "It depends on the event. The Next-Gen Summit is invite-only — a curated gathering designed for meaningful connection, not mass attendance. TRIIBE Talks vary by host and location — some are open community events, others are more intimate. Branch Summits and Retreats are exclusively for TRIIBE Fellows. If you want to be in the room, the best first step is to reach out at partnerships@triibe.org or apply to the fellowship at triibe.org/apply.",
  },
  {
    question: "What happened at past TRIIBE events?",
    answer:
      "TRIIBE has hosted events in New York City, London, and India — bringing together next-gen founders and established leaders across multiple continents. Each event has featured TRIIBE Talks pairing next-gen voices with established changemakers, creating conversations that demonstrate exactly what TRIIBE believes: age doesn't determine the quality of someone's ideas. Highlights, recaps, and media from past events can be found at triibe.org/media and on YouTube @TRIIBEorg.",
  },
  {
    question: "How do TRIIBE events help next-gen founders grow their foundations?",
    answer:
      "Three ways. The Next-Gen Summit puts founders in the same room as funders and partners who can directly accelerate their work — and many fellowship funding conversations start there. TRIIBE Talks give founders a real public platform, building the visibility and credibility that opens doors long after the event ends. Branch Summits and Retreats build the peer community that sustains founders through the hard seasons — because knowing you're not alone is one of the most underrated forms of support a founder can have.",
  },
  {
    question: "How do I find nonprofit events for young founders in New York City?",
    answer:
      "The TRIIBE Next-Gen Summit is one of the only events in New York City built exclusively around founders under 30. Held September 4-6, 2026 at 25th and 7th St, New York City — it brings together next-gen founders, established changemakers, funders, mentors, and partners for a full weekend of connection, conversation, and celebration. To get on the radar for an invite, reach out at partnerships@triibe.org or follow TRIIBE on Instagram @triibe__talk.",
  },
  {
    question: "How do I find changemaker events in 2026?",
    answer:
      "The TRIIBE Next-Gen Summit is one of the most focused changemaker events of 2026 — invite-only, intimate, and built entirely around next-gen founders doing real work in food, water, shelter, health, and education. Unlike broad social impact conferences, every person in the room at a TRIIBE event is there because they're serious about building something that lasts. Follow TRIIBE on LinkedIn and Instagram to stay updated on events as they're announced.",
  },
  {
    question: "How can I stay updated on TRIIBE events?",
    answer:
      "Three ways to never miss a TRIIBE event. Follow TRIIBE on Instagram @triibe__talk for real-time updates, behind the scenes content, and speaker announcements. Connect on LinkedIn at linkedin.com/company/thetriibe for summit and TRIIBE Talk announcements reaching the funder and partner community. Subscribe on YouTube @TRIIBEorg for recaps, TRIIBE Talk recordings, and founder stories from past events.",
  },
  {
    question: "How do I get invited to the TRIIBE Next-Gen Summit?",
    answer:
      "The Next-Gen Summit is invite-only — and there are three ways in. Apply to the TRIIBE Fellowship at triibe.org/apply and join as a fellow. Partner with TRIIBE as an organization and be part of the community that makes the summit possible. Or reach out directly at partnerships@triibe.org and introduce yourself — TRIIBE is always looking for funders, mentors, and partners who believe in the next generation before the world catches up.",
  },
  {
    question: "Are there nonprofit events on social media I can follow?",
    answer:
      "Yes. TRIIBE is one of the most active next-gen foundation communities on social media. Follow @triibe__talk on Instagram and TikTok for event content, founder stories, TRIIBE Talk clips, and summit highlights. TRIIBE's social media is built around one idea — showing the world what next-gen founders are actually building, not just talking about it. If you're a founder, a funder, or someone who believes in next-gen impact, this is the community to follow.",
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