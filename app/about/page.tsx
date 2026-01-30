import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";

const teamMembers = [
  {
    name: "Kyle Matthys",
    role: "CEO & FOUNDER",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Nawaf Alshaikhmubarak",
    role: "COO",
    bio: "Nawaf Alshaikhmubarak is a Mechanical Engineering student at NYU Tandon and the COO of TRIIBE, with software engineering internship experience at Aramco.",
    image: "/images/about/team/NawafAlshaikhmubarak.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "James Hetherington",
    role: "COO",
    bio: "Nawaf Alshaikhmubarak is a Mechanical Engineering student at NYU Tandon and the COO of TRIIBE, with software engineering internship experience at Aramco.",
    image: "/images/about/team/JamesHetherington.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

const members = [
  {
    name: "Josh Nodiff",
    role: "TEAM",
    bio: "Joshua Nodiff is the founder and executive director of the Climate Imaginarium on Governors Island, a Columbia Climate School alum focused on climate storytelling and community buildingcc",
    image: "/images/about/team/Josh Nodiff.avif",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Patience Nnedinso Eze",
    role: "Member",
    bio: "Patience Nnedinso Eze is a Nigeria based entrepreneur and creative (photography and filmmaking) who also advocates for social impact and volunteers in community initiatives.",
    image: "/images/about/team/Patience Nnedinso Eze.png",
    linkedin: "https:/www.linkedin.com",
  },
  {
    name: "Mahir Laul",
    role: "Member",
    bio: "Mahir Laul is the Founder and CEO of Velric, building in the hiring space, and is also active as a speaker and advisor.",
    image: "/images/about/team/Mahir Laul.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Davi Santos",
    role: "Member",
    bio: "Davi Santos is an actor who shares Los Angeles based photoshoots and personal lifestyle content on Instagram",
    image: "/images/about/team/Davi Santos.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Shashank Shandilya",
    role: "Member",
    bio: "Shashank Shandilya is a sophomore at Birla Institute of Technology, Mesra and a Strategy Intern at TRIIBE, with interests in competitive programming and consulting (180DC).",
    image: "/images/about/team/Shashank Shandilya.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jacob Shulman",
    role: "Member",
    bio: "Jacob Shulman is the founder of Trivium Venture Network, an angel syndicate focused on connecting, advising, and investing in mission driven founders.",
    image: "/images/about/team/Jacob Shulman.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

const southAmerica = [
  {
    name: "Stephen Michael",
    role: "Member",
    bio: "Stephen Michael is the Founder and CEO of Propel Earth, building a platform (an 'operating system') to help changemakers coordinate globally.",
    image: "/images/about/team/Stephen Michael.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Tanuja Bodas",
    role: "Member",
    bio: "Tanuja Bodas is a Product Designer focused on B2B and enterprise UX, and graduated with an MS in UX and Interaction Design at Thomas Jefferson University.",
    image: "/images/about/team/Tanuja Bodas.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Ronan Hasan",
    role: "Member",
    bio: "Ronan Hasan is a University of Toronto student focused on management and strategy, with recent experience at CIBC as a strategy and innovation analyst",
    image: "/images/about/team/Ronan Hasan.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Satyam Pandey",
    role: "Member",
    bio: "Satyam Pandey is a quantitative analyst and data scientist (Exelon) focused on machine learning, statistical modeling, and data-driven decision making.",
    image: "/images/about/team/Satyam Pandey.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Parker Johnson",
    role: "Member",
    bio: "Zachary Parker Johnson is a NYC licensed real estate salesperson at Brown Harris Stevens who guides clients through real estate transactions.",
    image: "/images/about/team/Parker Johnson.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Alexandra Vidal",
    role: "Member",
    bio: "Strategic program and compliance leader driving equity focused, measurable social impact through scaled national programs, enterprise training, regulatory excellence, and partnership building.",
    image: "/images/about/team/Alexandra Vidal.webp",
    linkedin: "https://www.linkedin.com",
  },
];

const europe = [
  {
    name: "Alan Cavagnaro",
    role: "Member",
    bio: "Alan Cavagnaro is a UNA-USA Global Goals Ambassador (SDG 11) working at the intersection of housing, sustainable communities, and urban policy; including leadership with DesegregateCT",
    image: "/images/about/team/Alan Cavagnaro.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Grace Kim",
    role: "Member",
    bio: "Grace Kim (Yale 22) is a New York City public school special education teacher who also volunteers with Yale Alumni Educators and 1stGenYale.",
    image: "/images/about/team/Grace Kim.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jade Kashemsant",
    role: "Member",
    bio: "Jade Kashemsant is a Middlebury College political science student and Asia-policy writer, contributing analysis on Southeast Asian issues and involved with TRIIBE.",
    image: "/images/about/team/Jade Kashemsant.jpg",
    linkedin: "https://www.linkedin.com",
  },
];
const africa = [
  {
    name: "Rowana Miller",
    role: "Member",
    bio: "Rowana Miller is the Founder and Executive Director of Cosmic Writers and an adjunct professor at Pace University, focused on creative writing for social change.",
    image: "/images/about/team/Rowana Miller.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Pramaey Kapadia",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Pramaey Kapadia.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dominic Yap",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Dominic Yap.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Evelyn Sar",
    role: "Member",
    bio: "Evelyn Sar is a business student at Western University in Canada with experience at KCI.",
    image: "/images/about/team/Evelyn Sar.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Olivia Cohen",
    role: "Member",
    bio: "Olivia H. Cohen is a Product Operations professional at Cisco ThousandEyes.",
    image: "/images/about/team/Olivia Cohen.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Ryan Miller",
    role: "Member",
    bio: "Ryan Miller is the founder of Zenith Project, where he is building AI powered outreach tools focused on creating more human, high quality sales conversations.",
    image: "/images/about/team/Ryan Miller.jpg",
    linkedin: "https://www.linkedin.com",
  },
];
const middleEast = [
  {
    name: "Ania Bartholomew",
    role: "Member",
    bio: "Ania Bartholomew is a Creative Director and content creator who blends artistic vision with technical execution to bring ideas to life.",
    image: "/images/about/team/Ania Bartholomew.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Stephanie Pacheco",
    role: "Member",
    bio: "Stephanie Pacheco is a Bronx based professional affiliated with the Broadway Advocacy Coalition and a CUNY alum.",
    image: "/images/about/team/Stephanie Pacheco.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Laya Pothunuri",
    role: "Member",
    bio: "Laya Pothunuri is a sustainability and circular economy practitioner (Royal Botanic Gardens, Kew) and Cambridge affiliated youth climate advocate focused on climate justice and inclusive design.",
    image: "/images/about/team/Laya Pothunuri.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Himal Pandey",
    role: "Member",
    bio: "Himal Pandey is an information technology student in Nepal, building skills in tech and software development.",
    image: "/images/about/team/Himal Pandey.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Tahnoon Murtza",
    role: "Member",
    bio: "Tahnoon M. is a 3x founder and venture investor, Partner at Grey Sheep Ventures and Venture Partner at New Zealand Venture Capital (NZVC).",
    image: "/images/about/team/Tahnoon Murtza.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Anthony Valencia",
    role: "Member",
    bio: "Anthony Valencia is the Director of Marketing and Communications at TRIIBE, based in New York City",
    image: "/images/about/team/Anthony Valencia.jpg",
    linkedin: "https://www.linkedin.com",
  },
];
const asia = [
  {
    name: "Keshav Sani",
    role: "Member",
    bio: "Keshav Sani is a Babson College student based in New York with experience at Sportek App.",
    image: "/images/about/team/Keshav Sani.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Roberto Alvarado",
    role: "Member",
    bio: "Roberto Alvarado is a Global Operations Development Program Analyst in Global Markets Operations at Bank of America in New York City (GODP rotational program, 2024 to 2026).",
    image: "/images/about/team/Roberto Alvarado.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Anjali Anantharaman",
    role: "Member",
    bio: "Anjali Anantharaman is an MS Marketing Analytics (STEM) graduate from Illinois Institute of Technology, working in marketing analytics and digital marketing with experience at Brusche Inc.",
    image: "/images/about/team/Anjali Anantharaman.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "George Shi",
    role: "Member",
    bio: "George Shi appears to be a senior SAP Transportation Management (TM) consultant at Logventus, with prior experience at SAP and IBM.",
    image: "/images/about/team/George Shi.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jaden Cappe",
    role: "Member",
    bio: "Jaden Cappe is the Founder and CEO of Reliation Agency, focused on market research and entrepreneurship, and is a SUNY Old Westbury graduate (BA History, minor in Economics).",
    image: "/images/about/team/Jaden Cappe.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Alex Garfin",
    role: "Member",
    bio: "Alex Garfin (@alexgarfin) is an American actor best known for playing Jordan Kent on Superman and Lois and for voicing Linus in The Peanuts Movie.",
    image: "/images/about/team/Alex Garfin.jpg",
    linkedin: "https://www.instagram.com",
  },
  {
    name: "Yasmine Ganemtore",
    role: "Member",
    bio: "Yasmine Ganemtore is a Baruch College student studying Political Science and English, with experience in civic engagement work through Campus Vote Project and Fair Elections Center.",
    image: "/images/about/team/Yasmine Ganemtore.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Aaradhya Thakur",
    role: "Member",
    bio: "Aaradhya Thakur is an entrepreneur in real estate (development and trading), with experience at TRIIBE and an Adelphi University background, based in Mumbai.",
    image: "/images/about/team/Aaradhya Thakur.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Gianna Mountroukas",
    role: "Member",
    bio: "Gianna Mountroukas is at Observer Media and studied at McGill University, based in Irvington.",
    image: "/images/about/team/Gianna Mountroukas.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Roman Pikalenko",
    role: "Member",
    bio: "Roman Pikalenko is a Finland based LinkedIn contributor who helps Series A climate tech founders and executives build thought leadership to attract capital and talent.",
    image: "/images/about/team/Roman Pilekanko.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Fionnuala Eastwood",
    role: "Member",
    bio: "Fionnuala Eastwood is a UCLA Cognitive Science graduate with strengths in design, marketing, and user-centered thinking.",
    image: "/images/about/team/Fionnuala Eastwood.png",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Ryan Zhang",
    role: "Member",
    bio: "Ryan Zhang is a Schulich School of Business BBA student with experience at TRIIBE.",
    image: "/images/about/team/Ryan Zhang.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Andrew Dai",
    role: "Member",
    bio: "Andrew Dai is a University of Waterloo student interested in tech and business, focused on solving hard problems through innovative thinking.",
    image: "/images/about/team/Andrew Dei.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Rejoy Kumar",
    role: "Member",
    bio: "Rejoy Kumar is a Bhubaneswar based student at Birla Institute of Technology, Mesra with experience at TRIIBE.",
    image: "/images/about/team/Rejoy Kumar.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Angela Goldberg",
    role: "Member",
    bio: "Angela Goldberg is a Product Designer with a Master of Human-Computer Interaction and Design background from the University of Washington.",
    image: "/images/about/team/Angela Goldberg.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Duff Paris",
    role: "Member",
    bio: "Duff Paris is a self-employed professional based in Ottawa and a University of Toronto alum.",
    image: "/images/about/team/Duff Paris.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Quinn Hoeven",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Quinn Hoeven.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Amaan Habibulla",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Amaan Habibulla.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Luis Utrilla",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Luis Utrilla.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Grace Sengul",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Grace Sengul.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Will Reynolds",
    role: "Member",
    bio: "Will Reynolds is a New Zealand born climate and energy manufacturing professional focused on decarbonization and scaling US superconductor manufacturing.",
    image: "/images/about/team/Will Reynolds.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Taylor Anderson",
    role: "Member",
    bio: "Taylor Anderson is Fresno based and affiliated with TRIIBE, with an education background at Weber State University and a mission driven focus on patient first care ('Patients are people, not profit.').",
    image: "/images/about/team/Taylor Anderson.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Jonnathan Mtonga",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Jonnathan Mtonga.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Musa Konneh",
    role: "Member",
    bio: "Musa Konneh is a Sierra Leone based women and social change advocate, community mobiliser, and youth ambassador, and serves as CEO of MEANS-SL and Vision Tree.",
    image: "/images/about/team/Musa Konneh.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Haley Pilgrim",
    role: "Member",
    bio: "Haley Pilgrim is a senior leader at Publicis Sapient with a track record of guiding executives and organizations through transformation and change.",
    image: "/images/about/team/Haley Pilgrim.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Sarthak Anand",
    role: "Member",
    bio: "Sarthak Anand is a LinkedIn creator who shared updates from attending the Startup Mahakumbh event at Bharat Mandapam (New Delhi).",
    image: "/images/about/team/Sarthak Anand.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Dylan Hanson",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Dylan Hanson.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

const mentors = [
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com",
  },
];

const page = () => {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 md:px-50 bg-white     ">
        <div className="max-w-300 mx-auto">
          <div className="flex items-start justify-between mb-12">
            <h1 className="font-bold text-black text-5xl md:text-6xl">
              About Us
            </h1>
            <a
              href="#gallery"
              className="px-6 py-3 bg-white text-black border border-black rounded hover:bg-gray-50 transition-colors font-semibold text-base"
            >
              Photo Gallery
            </a>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-[#c6f82a] aspect-square rounded-lg"></div>
            <div className="bg-[#c6f82a] aspect-square rounded-lg"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/about/about-photo-1.jpg"
                alt="TRIIBE Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/about/about-photo-2.jpg"
                alt="TRIIBE Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* How TRIIBE Works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-bold text-black text-3xl mb-8">
                HOW TRIIBE WORKS
              </h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-black text-2xl mb-4">
                  TRIIBE helps next-gen nonprofit founders continue their work
                  when they enter college.
                </h3>
              </div>

              <p className="font-normal text-[#495565] text-lg leading-relaxed">
                Three-year fellowship combining funding, mentorship, and
                community for student founders.
              </p>

              <p className="font-normal text-[#495565] text-lg leading-relaxed">
                Structured support that grows with your organization each year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 px-4 md:px-50 bg-white/90 ">
        <div className=" mx-auto">
          <div className="grid  grid-cols-[1fr_2fr] gap-16">
            {/* Left Side - Section Title */}
            <div>
              <h2 className="font-bold text-black text-3xl">IMPACT AREAS</h2>
            </div>

            {/* Right Side - Content */}
            <div>
              {/* Header */}
              <div className="mb-12">
                <h3 className="font-semibold text-black text-2xl mb-4">
                  Human needs first.
                </h3>
                <p className="font-normal text-[#495565] text-lg leading-relaxed">
                  TRIIBE supports the founders. Founders lead the work in their
                  communities.
                </p>
              </div>

              {/* Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Food */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">Food</h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Security, sustainable agriculture, nutrition access, and
                    community food systems.
                  </p>
                </div>

                {/* Water */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">Water</h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Clean access, sanitation infrastructure, conservation, and
                    scarcity solutions.
                  </p>
                </div>

                {/* Shelter */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">Shelter</h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Affordable housing, homelessness prevention, and emergency
                    services.
                  </p>
                </div>

                {/* Health */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">Health</h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Healthcare access, mental health services, and preventative
                    care.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">
                    Education
                  </h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Educational equity, literacy programs, and pathways to
                    opportunity.
                  </p>
                </div>

                {/* Energy */}
                <div>
                  <h4 className="font-bold text-black text-xl mb-3">Energy</h4>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Clean energy access, sustainable power, and climate
                    resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 mt-8"></div>
      </section>

      {/* C-Suite and Board Section */}
      <section className="py-8 px-4 md:px-50 bg-white">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-3xl mb-12">
            C-SUITE AND BOARD
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg
                      className="w-5 h-5 "
                      fill="#0077b5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-[#697282] text-sm uppercase tracking-wider mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-16 px-4 md:px-50 bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-3xl mb-8">MEMBERS</h2>
          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            TEAM WISE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {members.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            SOUTH AMERICA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {southAmerica.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            EUROPE
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {europe.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            AFRICA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {africa.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            MIDDLE EAST
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {middleEast.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            ASIA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {asia.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            Mentors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {mentors.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="block  bg-white border border-gray-200 rounded-lg overflow-hidden  hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-square bg-gray-100 p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-black text-xl">
                      {member.name}
                    </h3>

                    <svg className="w-5 h-5" fill="#0077b5" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <p className="font-normal text-[#697282] text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="font-normal text-[#495565] text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  );
};

export default page;
