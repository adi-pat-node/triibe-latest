import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import CTASection from "@/components/cta";
import {
  House,
  Cross,
  GraduationCap,
  Zap,
  Utensils,
  Droplet,
} from "lucide-react";

const teamMembers = [
  {
    name: "Kyle Matthys",
    role: "CEO & FOUNDER",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com/in/kylematthys/",
  },
  {
    name: "Nawaf Alshaikhmubarak",
    role: "COO",
    bio: "Nawaf Alshaikhmubarak is a Mechanical Engineering student at NYU Tandon and the COO of TRIIBE, with software engineering internship experience at Aramco.",
    image: "/images/about/team/NawafAlshaikhmubarak.jpg",
    linkedin: "https://www.linkedin.com/in/nawaf-mub/",
  },
  {
    name: "James Hetherington",
    role: "Board Member",
    bio: "James Maxwell is a Middlebury College student and the Strategic Partnerships Lead at TRIIBE, with a diverse background spanning software engineering, finance, and entrepreneurship.",
    image: "/images/about/team/JamesHetherington.jpg",
    linkedin: "https://www.linkedin.com/in/james-hetherington-590b981b8/",
  },
];

const media = [
  {
    name: "Grace Sengul",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Grace Sengul.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Laya Pothunuri",
    role: "Member",
    bio: "Laya Pothunuri is a sustainability and circular economy practitioner (Royal Botanic Gardens, Kew) and Cambridge affiliated youth climate advocate focused on climate justice and inclusive design.",
    image: "/images/about/team/Laya Pothunuri.jpg",
    linkedin: "https://www.linkedin.com/in/laya-pothunuri-964878175/",
  },
  {
    name: "Pramaey Kapadia",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Pramaey Kapadia.jpg",
    linkedin: "",
  },
  {
    name: "Anjali Anantharaman",
    role: "Member",
    bio: "Anjali Anantharaman is an MS Marketing Analytics (STEM) graduate from Illinois Institute of Technology, working in marketing analytics and digital marketing with experience at Brusche Inc.",
    image: "/images/about/team/Anjali Anantharaman.jpg",
    linkedin: "https://www.linkedin.com/in/anjali-anantharaman/",
  },
  {
    name: "Fionnuala Eastwood",
    role: "Member",
    bio: "Fionnuala Eastwood is a UCLA Cognitive Science graduate with strengths in design, marketing, and user-centered thinking.",
    image: "/images/about/team/Fionnuala Eastwood.png",
    linkedin: "https://www.linkedin.com/in/fionnuala-eastwood/",
  },
];

const events = [
  {
    name: "Roberto Alvarado",
    role: "Member",
    bio: "Roberto Alvarado is a Global Operations Development Program Analyst in Global Markets Operations at Bank of America in New York City (GODP rotational program, 2024 to 2026).",
    image: "/images/about/team/Roberto Alvarado.jpg",
    linkedin: "https://www.linkedin.com/in/robertoalvarado2/",
  },
  {
    name: "Yasmine Ganemtore",
    role: "Member",
    bio: "Yasmine Ganemtore is a Baruch College student studying Political Science and English, with experience in civic engagement work through Campus Vote Project and Fair Elections Center.",
    image: "/images/about/team/Yasmine Ganemtore.png",
    linkedin: "https://www.linkedin.com/in/yasmine-ganemtore/",
  },
  {
    name: "Parker Johnson",
    role: "Member",
    bio: "Zachary Parker Johnson is a NYC licensed real estate salesperson at Brown Harris Stevens who guides clients through real estate transactions.",
    image: "/images/about/team/Parker Johnson.jpg",
    linkedin: "https://www.linkedin.com/in/zachary-parker-johnson/",
  },

  {
    name: "Ania Bartholomew",
    role: "Member",
    bio: "Ania Bartholomew is a Creative Director and content creator who blends artistic vision with technical execution to bring ideas to life.",
    image: "/images/about/team/Ania Bartholomew.png",
    linkedin: "https://www.linkedin.com/in/ania-bartholomew-486b81218/",
  },
  {
    name: "Evelyn Sar",
    role: "Member",
    bio: "Evelyn Sar is a business student at Western University in Canada with experience at KCI.",
    image: "/images/about/team/Evelyn Sar.jpg",
    linkedin: "https://www.linkedin.com/in/evelynsar/",
  },
];

const partnerships = [
  {
    name: "Haley Pilgrim",
    role: "Member",
    bio: "Haley Pilgrim is a senior leader at Publicis Sapient with a track record of guiding executives and organizations through transformation and change.",
    image: "/images/about/team/Haley Pilgrim.jpg",
    linkedin: "https://www.linkedin.com/in/haleypilgrim/",
  },
];

const outreach = [
  {
    name: "Rowana Miller",
    role: "Member",
    bio: "Rowana Miller is the Founder and Executive Director of Cosmic Writers and an adjunct professor at Pace University, focused on creative writing for social change.",
    image: "/images/about/team/Rowana Miller.jpg",
    linkedin: "https://www.linkedin.com/in/rowana-miller-7506bb179/",
    isInstagram: false,
  },
  {
    name: "Anthony Valencia",
    role: "Member",
    bio: "Anthony Valencia is the Director of Marketing and Communications at TRIIBE, based in New York City",
    image: "/images/about/team/Anthony Valencia.jpg",
    linkedin: "https://www.linkedin.com/in/anthony-valencia-1a1a8695/",
    isInstagram: false,
  },

  {
    name: "Taylor Anderson",
    role: "Member",
    bio: "Taylor Anderson is Fresno based and affiliated with TRIIBE, with an education background at Weber State University and a mission driven focus on patient first care ('Patients are people, not profit.').",
    image: "/images/about/team/Taylor Anderson.jpg",
    linkedin: "https://www.linkedin.com/in/taylor-anderson-74a577396/",
    isInstagram: false,
  },
  {
    name: "Jaden Cappe",
    role: "Member",
    bio: "Jaden Cappe is the Founder and CEO of Reliation Agency, focused on market research and entrepreneurship, and is a SUNY Old Westbury graduate (BA History, minor in Economics).",
    image: "/images/about/team/Jaden Cappe.jpg",
    linkedin: "https://www.linkedin.com/in/jaden-cappe/",
    isInstagram: false,
  },
  {
    name: "Ryan Miller",
    role: "Member",
    bio: "Ryan Miller is the founder of Zenith Project, where he is building AI powered outreach tools focused on creating more human, high quality sales conversations.",
    image: "/images/about/team/Ryan Miller.jpg",
    linkedin: "https://www.linkedin.com/in/ryanmillerhq/",
    isInstagram: false,
  },

  {
    name: "Roman Pikalenko",
    role: "Member",
    bio: "Roman Pikalenko is a Finland based LinkedIn contributor who helps Series A climate tech founders and executives build thought leadership to attract capital and talent.",
    image: "/images/about/team/Roman Pilekanko.jpg",
    linkedin: "https://www.linkedin.com/in/roman-pikalenko/",
    isInstagram: false,
  },

  {
    name: "Davi Santos",
    role: "Member",
    bio: "Davi Santos is an actor who shares Los Angeles based photoshoots and personal lifestyle content on Instagram",
    image: "/images/about/team/Davi Santos.jpg",
    linkedin: "https://www.instagram.com/davi_santos/",
    isInstagram: true,
  },
];

const design = [
  {
    name: "Olivia Cohen",
    role: "Member",
    bio: "Olivia H. Cohen is a Product Operations professional at Cisco ThousandEyes.",
    image: "/images/about/team/Olivia Cohen.jpg",
    linkedin: "https://www.linkedin.com/in/olivia-h-cohen/",
  },
  {
    name: "Tanuja Bodas",
    role: "Member",
    bio: "Tanuja Bodas is a Product Designer focused on B2B and enterprise UX, and graduated with an MS in UX and Interaction Design at Thomas Jefferson University.",
    image: "/images/about/team/Tanuja Bodas.jpg",
    linkedin: "https://www.linkedin.com/in/tanujabodas23/",
  },

  {
    name: "Angela Goldberg",
    role: "Member",
    bio: "Angela Goldberg is a Product Designer with a Master of Human-Computer Interaction and Design background from the University of Washington.",
    image: "/images/about/team/Angela Goldberg.jpg",
    linkedin: "https://www.linkedin.com/in/angela-goldberg/",
  },
];

const tech = [
  {
    name: "Duff Paris",
    role: "Member",
    bio: "Duff Paris is a self-employed professional based in Ottawa and a University of Toronto alum.",
    image: "/images/about/team/Duff Paris.jpg",
    linkedin: "https://www.linkedin.com/in/duff-paris-20b14b291/",
  },
  {
    name: "Andrew Dai",
    role: "Member",
    bio: "Andrew Dai is a University of Waterloo student interested in tech and business, focused on solving hard problems through innovative thinking.",
    image: "/images/about/team/Andrew Dei.jpg",
    linkedin: "https://www.linkedin.com/in/andrew-dai-04ad0211/",
  },
];

const globalRelations = [
  {
    name: "Quinn Hoeven",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Quinn Hoeven.jpg",
    linkedin: "https://www.linkedin.com",
  },

  {
    name: "Jade Kashemsant",
    role: "Member",
    bio: "Jade Kashemsant is a Middlebury College political science student and Asia-policy writer, contributing analysis on Southeast Asian issues and involved with TRIIBE.",
    image: "/images/about/team/Jade Kashemsant.jpg",
    linkedin: "https://www.linkedin.com/in/jadekashemsant/",
  },
];

const regionalDirectors = [
  {
    name: "Musa Konneh",
    role: "Director - Sierra Leone ",
    bio: "Musa Konneh is a Sierra Leone based women and social change advocate, community mobiliser, and youth ambassador, and serves as CEO of MEANS-SL and Vision Tree.",
    image: "/images/about/team/Musa Konneh.jpg",
    linkedin:
      "https://www.linkedin.com/in/musa-konneh-079673110/?originalSubdomain=sl",
  },
  {
    name: "Jonnathan Mtonga",
    role: "Director - Zambia",
    bio: "?",
    image: "/images/about/team/Jonnathan Mtonga.jpg",
    linkedin: "https://www.linkedin.com",
  },
  {
    name: "Patience Nnedinso Eze",
    role: "Director - Nigeria",
    bio: "Patience Nnedinso Eze is a Nigeria based entrepreneur and creative (photography and filmmaking) who also advocates for social impact and volunteers in community initiatives.",
    image: "/images/about/team/Patience Nnedinso Eze.png",
    linkedin: "https://www.linkedin.com/in/patience-nnedinso-eze-b25b4bb7/",
  },
  {
    name: "Ronan Hasan",
    role: "Director - Canada",
    bio: "Ronan Hasan is a University of Toronto student focused on management and strategy, with recent experience at CIBC as a strategy and innovation analyst",
    image: "/images/about/team/Ronan Hasan.jpg",
    linkedin: "https://www.linkedin.com/in/ronan-hasan-4b5158241/",
  },
];

const members = [
  {
    name: "Dominic Yap",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Dominic Yap.jpg",
    linkedin: "https://www.linkedin.com",
    isInstagram: false,
  },
  {
    name: "Alexandra Vidal",
    role: "Member",
    bio: "Strategic program and compliance leader driving equity focused, measurable social impact through scaled national programs, enterprise training, regulatory excellence, and partnership building.",
    image: "/images/about/team/Alexandra Vidal.webp",
    linkedin: "https://www.linkedin.com/in/alexandrav1/",
    isInstagram: false,
  },

  {
    name: "Amaan Habibulla",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Amaan Habibulla.jpg",
    linkedin: "https://www.linkedin.com",
    isInstagram: false,
  },
  {
    name: "Gianna Mountroukas",
    role: "Member",
    bio: "Gianna Mountroukas is at Observer Media and studied at McGill University, based in Irvington.",
    image: "/images/about/team/Gianna Mountroukas.jpg",
    linkedin: "https://www.linkedin.com/in/gianna-mountroukas-a585a9232/",
    isInstagram: false,
  },

  {
    name: "Dylan Hanson",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Dylan Hanson.jpg",
    linkedin: "https://www.linkedin.com/in/~dylan/",
    isInstagram: false,
  },

  {
    name: "Josh Nodiff",
    role: "TEAM",
    bio: "Joshua Nodiff is the founder and executive director of the Climate Imaginarium on Governors Island, a Columbia Climate School alum focused on climate storytelling and community buildingcc",
    image: "/images/about/team/Josh Nodiff.avif",
    linkedin: "https://www.linkedin.com/in/joshnodiff/",
    isInstagram: false,
  },

  {
    name: "Keshav Sani",
    role: "Member",
    bio: "Keshav Sani is a Babson College student based in New York with experience at Sportek App.",
    image: "/images/about/team/Keshav Sani.jpg",
    linkedin: "https://www.linkedin.com/in/keshav-sani-853550204/",
    isInstagram: false,
  },
  {
    name: "Aaradhya Thakur",
    role: "Member",
    bio: "Aaradhya Thakur is an entrepreneur in real estate (development and trading), with experience at TRIIBE and an Adelphi University background, based in Mumbai.",
    image: "/images/about/team/Aaradhya Thakur.jpg",
    linkedin: "https://www.linkedin.com/in/aaradhya-thakur-674b1b1a4/",
    isInstagram: false,
  },
  {
    name: "Stephanie Pacheco",
    role: "Member",
    bio: "Stephanie Pacheco is a Bronx based professional affiliated with the Broadway Advocacy Coalition and a CUNY alum.",
    image: "/images/about/team/Stephanie Pacheco.jpg",
    linkedin: "https://www.linkedin.com/in/stephanie-pacheco-086225201/",
    isInstagram: false,
  },

  {
    name: "Tahnoon Murtza",
    role: "Member",
    bio: "Tahnoon M. is a 3x founder and venture investor, Partner at Grey Sheep Ventures and Venture Partner at New Zealand Venture Capital (NZVC).",
    image: "/images/about/team/Tahnoon Murtza.jpg",
    linkedin: "https://www.linkedin.com/in/tahnoon-m-b4071419a/",
    isInstagram: false,
  },

  {
    name: "Sina Albanese",
    role: "Member",
    bio: "Sina Albanese is the co-founder and CEO of Koralo, building fermentation powered functional foods (including seafood alternatives) and scaling the brand from South Korea into new markets.",
    image: "/images/about/team/Sina Albanese.jpg",
    linkedin: "https://www.linkedin.com/in/sina-albanese/",
    isInstagram: false,
  },

  {
    name: "Frederick Tsao",
    role: "Member",
    bio: "Frederick Mochizuki Tsao is at Pavilion Capital and describes himself as a fifth generation steward to his family business, with a Middlebury College background.",
    image: "/images/about/team/Frederick Tsao.jpg",
    linkedin: "https://www.linkedin.com/in/frederick-mochizuki-tsao/",
    isInstagram: false,
  },
  {
    name: "George Shi",
    role: "Member",
    bio: "George Shi appears to be a senior SAP Transportation Management (TM) consultant at Logventus, with prior experience at SAP and IBM.",
    image: "/images/about/team/George Shi.jpg",
    linkedin: "https://www.linkedin.com/in/george-shi-4a9b18190/",
    isInstagram: false,
  },
  {
    name: "Himal Pandey",
    role: "Member",
    bio: "Himal Pandey is an information technology student in Nepal, building skills in tech and software development.",
    image: "/images/about/team/Himal Pandey.jpg",
    linkedin: "https://www.linkedin.com/in/himalpandey/",
    isInstagram: false,
  },

  {
    name: "Will Reynolds",
    role: "Member",
    bio: "Will Reynolds is a New Zealand born climate and energy manufacturing professional focused on decarbonization and scaling US superconductor manufacturing.",
    image: "/images/about/team/Will Reynolds.jpg",
    linkedin: "https://www.linkedin.com/in/wreynoldsnz/",
    isInstagram: false,
  },
  {
    name: "Jacob Shulman",
    role: "Member",
    bio: "Jacob Shulman is the founder of Trivium Venture Network, an angel syndicate focused on connecting, advising, and investing in mission driven founders.",
    image: "/images/about/team/Jacob Shulman.jpg",
    linkedin: "https://www.linkedin.com/in/jacob-shulman-85a44720b/",
    isInstagram: false,
  },
  {
    name: "Luis Utrilla",
    role: "Member",
    bio: "?",
    image: "/images/about/team/Luis Utrilla.jpg",
    linkedin: "https://www.linkedin.com",
    isInstagram: false,
  },
  {
    name: "Alex Garfin",
    role: "Member",
    bio: "Alex Garfin (@alexgarfin) is an American actor best known for playing Jordan Kent on Superman and Lois and for voicing Linus in The Peanuts Movie.",
    image: "/images/about/team/Alex Garfin.jpg",
    linkedin: "https://www.instagram.com/alexgarfin/",
    isInstagram: true,
  },
  {
    name: "Ryan Zhang",
    role: "Member",
    bio: "Ryan Zhang is a Schulich School of Business BBA student with experience at TRIIBE.",
    image: "/images/about/team/Ryan Zhang.jpg",
    linkedin: "https://www.linkedin.com/in/ryan7zhang/",
    isInstagram: false,
  },

  {
    name: "Alan Cavagnaro",
    role: "Member",
    bio: "Alan Cavagnaro is a UNA-USA Global Goals Ambassador (SDG 11) working at the intersection of housing, sustainable communities, and urban policy; including leadership with DesegregateCT",
    image: "/images/about/team/Alan Cavagnaro.jpg",
    linkedin: "https://www.linkedin.com/in/alancavagnaro/",
    isInstagram: false,
  },

  {
    name: "Mahir Laul",
    role: "Member",
    bio: "Mahir Laul is the Founder and CEO of Velric, building in the hiring space, and is also active as a speaker and advisor.",
    image: "/images/about/team/Mahir Laul.png",
    linkedin: "https://www.linkedin.com/in/mahirlaul/",
    isInstagram: false,
  },

  {
    name: "Stephen Michael",
    role: "Member",
    bio: "Stephen Michael is the Founder and CEO of Propel Earth, building a platform (an 'operating system') to help changemakers coordinate globally.",
    image: "/images/about/team/Stephen Michael.jpg",
    linkedin: "https://www.linkedin.com/in/stephennmichael/",
    isInstagram: false,
  },
  // {
  //   name: "Shashank Shandilya",
  //   role: "Member",
  //   bio: "Shashank Shandilya is a sophomore at Birla Institute of Technology, Mesra and a Strategy Intern at TRIIBE, with interests in competitive programming and consulting (180DC).",
  //   image: "/images/about/team/Shashank Shandilya.jpg",
  //   linkedin: "https://www.linkedin.com/in/shashankshandilya13/",
  //   isInstagram: false,
  // },
];

const southAmerica = [
  {
    name: "Satyam Pandey",
    role: "Member",
    bio: "Satyam Pandey is a quantitative analyst and data scientist (Exelon) focused on machine learning, statistical modeling, and data-driven decision making.",
    image: "/images/about/team/Satyam Pandey.png",
    linkedin: "https://www.linkedin.com/in/satyyampandey/",
  },
];

const europe = [
  {
    name: "Grace Kim",
    role: "Member",
    bio: "Grace Kim (Yale 22) is a New York City public school special education teacher who also volunteers with Yale Alumni Educators and 1stGenYale.",
    image: "/images/about/team/Grace Kim.jpg",
    linkedin: "https://www.linkedin.com/in/gracekim22/",
  },

  {
    name: "Chirag Nijjer",
    role: "Member",
    bio: "Chirag Nijjer is a Customer Centricity leader at Google and a brand marketing keynote speaker and creator who decodes brand history and storytelling for modern marketing.",
    image: "/images/about/team/Chirag Nijjer.png",
    linkedin: "https://www.linkedin.com/in/chiragspeaks/",
  },
];

const asia = [
  {
    name: "Rejoy Kumar",
    role: "Member",
    bio: "Rejoy Kumar is a Bhubaneswar based student at Birla Institute of Technology, Mesra with experience at TRIIBE.",
    image: "/images/about/team/Rejoy Kumar.jpg",
    linkedin: "https://www.linkedin.com/in/rejoy-kumar-2b8904217/",
    isInstagram: false,
  },

  {
    name: "Sarthak Anand",
    role: "Member",
    bio: "Sarthak Anand is a LinkedIn creator who shared updates from attending the Startup Mahakumbh event at Bharat Mandapam (New Delhi).",
    image: "/images/about/team/Sarthak Anand.jpg",
    linkedin: "https://www.linkedin.com/in/sarthak-anand-b27044229/",
    isInstagram: false,
  },
];

const mentors = [
  {
    name: "Kyle Matthys",
    role: "CEO",
    bio: "Founder and CEO of TRIIBE. We help young nonprofit founders scale from sophomore to senior year of college: Those advancing food, water, shelter, health, education, or energy.",
    image: "/images/about/team/KyleMatthys.jpg",
    linkedin: "https://www.linkedin.com/in/kylematthys/",
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
      <section className="pt-32 pb-20 px-4 md:px-50 bg-white     ">
        <div className="max-w-300 mx-auto">
          <div className="flex md:items-start justify-between mb-12 flex-col md:flex-row gap-4 items-center ">
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
            <div className="bg-[#B4E9A0] aspect-square rounded-lg"></div>
            <div className="bg-[#B4E9A0] aspect-square rounded-lg"></div>
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
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
            <div>
              <h2 className="font-bold text-black text-3xl mb-8">
                HOW TRIIBE WORKS
              </h2>
            </div>

            <div className="space-y-2">
              <div>
                <h3 className="font-semibold text-black text-2xl mb-6">
                  TRIIBE helps next-gen nonprofit founders continue their work
                  when they enter college.
                </h3>
              </div>

              <p className="font-normal text-[#495565] text-lg leading-relaxed mb-2">
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
      <section className="py-2 px-4 md:px-50 bg-white/90 ">
        <div className=" mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
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
                <p className="font-normal text-[#495565] text-[16px] leading-relaxed">
                  TRIIBE supports the founders. Founders lead the work in their
                  communities.
                </p>
              </div>

              {/* Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Food */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">Food</h4>
                  </div>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Security, sustainable agriculture, nutrition access, and
                    community food systems.
                  </p>
                </div>

                {/* Water */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Droplet className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">Water</h4>
                  </div>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Clean access, sanitation infrastructure, conservation, and
                    scarcity solutions.
                  </p>
                </div>

                {/* Shelter */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <House className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">
                      Shelter
                    </h4>
                  </div>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Affordable housing, homelessness prevention, and emergency
                    services.
                  </p>
                </div>

                {/* Health */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Cross className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">
                      Health
                    </h4>
                  </div>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Healthcare access, mental health services, and preventative
                    care.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">
                      Education
                    </h4>
                  </div>
                  <p className="font-normal text-[#495565] text-base leading-relaxed">
                    Educational equity, literacy programs, and pathways to
                    opportunity.
                  </p>
                </div>

                {/* Energy */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 mb-2" />
                    <h4 className="font-bold text-black text-xl mb-3">
                      Energy
                    </h4>
                  </div>
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
      <section className="py-16 px-4 md:px-50 bg-white">
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
        <div className="border-b border-gray-200 mt-8"></div>
      </section>

      {/* Members Section */}
      <section className=" px-4 md:px-50 bg-white  ">
        <div className="max-w-300 mx-auto">
          <h2 className="font-bold text-black text-3xl mb-8">TEAMS</h2>
          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            Media
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {media.map((member, index) => {
              const Wrapper = member.linkedin ? "a" : "div";

              return (
                <Wrapper
                  key={member.name}
                  href={member.linkedin || undefined}
                  target={member.linkedin ? "_blank" : undefined}
                  rel={member.linkedin ? "noopener noreferrer" : undefined}
                  className={`block bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow
          ${member.linkedin ? "hover:shadow-lg cursor-pointer" : "cursor-default"}`}
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

                      <svg
                        className="w-5 h-5"
                        fill="#0077b5"
                        viewBox="0 0 24 24"
                      >
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
                </Wrapper>
              );
            })}
          </div>

          <p className="font-normal text-[#697282] text-xl uppercase tracking-wider mb-12">
            EVENTS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {events.map((member, index) => (
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
            Partnerships
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {partnerships.map((member, index) => (
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
            Outreach
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {outreach.map((member, index) => (
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

                    {member.isInstagram ? (
                      <svg
                        className="w-6 h-6"
                        fill="url(#instagram-gradient)"
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <linearGradient
                            id="instagram-gradient"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "#FD5949", stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: "#D6249F", stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#285AEB", stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="#0077b5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
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
            Design
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {design.map((member, index) => (
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
            TECH
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {tech.map((member, index) => (
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
            Global Relations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {globalRelations.map((member, index) => (
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
            Regional Directors
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {regionalDirectors.map((member, index) => (
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
            Members
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

                    {member.isInstagram ? (
                      <svg
                        className="w-6 h-6"
                        fill="url(#instagram-gradient)"
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <linearGradient
                            id="instagram-gradient"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "#FD5949", stopOpacity: 1 }}
                            />
                            <stop
                              offset="50%"
                              style={{ stopColor: "#D6249F", stopOpacity: 1 }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "#285AEB", stopOpacity: 1 }}
                            />
                          </linearGradient>
                        </defs>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="#0077b5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
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
