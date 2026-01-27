import Image from "next/image";

interface Changemaker {
  name: string;
  description: string;
  founded: string;
  image: string;
  website: string;
  title?: string;
  university?: string;
}

export default function Changemakers() {
  const cohort1: Changemaker[] = [
    {
      name: "Olivia Zhang",
      title: "Founder and CEO, Cancer Kids First",
      university: "Harvard University, '27",
      description:
        "Supporting young cancer patients and their families through donating goods and hosting interactive events",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
      website: "https://www.cancerkidsfirst.org/",
    },
    {
      name: "Anne-Sophie Frédérick",
      title: "Founder, Haitech Learning",
      university: "Williams College",
      description:
        "Expanding access to education for young Haitians around the globe through technology and language workshops",
      founded: "FOUNDED 2022",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
      website: "https://www.haitechlearning.org/",
    },
    {
      name: "Esha Venkat",
      title: "Founder, Next4Us",
      university: "Georgia Institute of Technology, '26",
      description:
        "Mobilizing youth to tackle issues including hunger, education, and climate justice with volunteering & education",
      founded: "FOUNDED 2016",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4af42d2ddbc8f126cf2c7_esha%202.png",
      website: "https://nest4us.org/",
    },
    {
      name: "Maya Gowda",
      title: "Founder, (SEED)",
      university: "Cornell University'27",
      description:
        "Advancing climate literacy and justice through workshops, curriculum development, and community initiatives",
      founded: "FOUNDED 2019",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
      website: "https://www.seedclimatechange.org/",
    },
  ];

  const cohort2: Changemaker[] = [
    {
      name: "Varuni Chopra",
      title: "Founder, Bridge the Gap Initiative",
      university: "Georgia Institute of Technology",
      description:
        "Empower senior citizens to confidently use technology by providing accessible and community-driven education that connects them to essential digital tools and services",
      founded: "FOUNDED 2022",
      image: "/images/home/VaruniChopra.png",
      website: "https://helpinghandsmain.wixsite.com/mysite",
    },
    {
      name: "Shrusti Amula",
      title: "Founder, Rise N Shine Foundation",
      university: "Georgetown University, '28",
      description:
        "Reduce food waste through compost and food recovery programs to combat climate change and food insecurity",
      founded: "FOUNDED 2019",
      image: "/images/home/ShrustiAmula.png",
      website: "https://www.risenshinefoundation.org/",
    },
    {
      name: "Nayla Jimenez",
      title: "Founder, Philippine Health Initiative",
      university: "University of Florida '27",
      description:
        "Advance pediatric health and educational equity in the Philippines through resource mobilization, cultural exchange, and community collaborations",
      founded: "FOUNDED 2017",
      image: "/images/home/NaylaJimenez.png",
      website: "https://www.philippinehealthinitiative.org/",
    },
    {
      name: "Samin Bhan",
      title: "Founder, Lookupp",
      university: "Stanford University, '28",
      description:
        "Revive the culture of in-person interaction through a mobile app",
      founded: "FOUNDED 2021",
      image: "/images/home/SaminBhan.png",
      website: "https://www.lookupp.net/",
    },
    {
      name: "Gitanjali Rao",
      title: "Founder, Vervient Foundation",
      university: "MIT, '27",
      description:
        "Help other students discover their passion for innovation and STEM",
      founded: "FOUNDED 2018",
      image: "/images/home/GitanjaliRao.png",
      website: "https://gitanjalirao.net/",
    },
  ];

  const renderCard = (changemaker: Changemaker, index: number) => (
    <a
      key={index}
      href={changemaker.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full sm:flex-1 sm:min-w-0 cursor-pointer"
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-t-2xl bg-gray-200">
        <Image
          src={changemaker.image}
          alt={changemaker.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="bg-white rounded-b-2xl p-6 border border-t-0 border-gray-200 h-70 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h3 className=" font-semibold text-black text-lg">
            {changemaker.name}
          </h3>

          <p className=" font-medium text-[#495565] text-[10px] leading-5">
            {changemaker.title}
          </p>
        </div>

        {changemaker.university && (
          <div className="pt-1 border-t border-[#f2f4f6]">
            <p className="font-normal text-[#697282] text-xs leading-4">
              {changemaker.university}
            </p>
          </div>
        )}

        <p className=" font-normal text-[#354152] text-sm flex-1">
          {changemaker.description}
        </p>
      </div>
    </a>
  );

  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className=" font-bold text-black text-4xl tracking-[-0.90px] leading-10 mb-4">
            Our First Two Cohorts
          </h2>
          <p className=" font-normal text-[#495565] text-lg leading-7">
            Undergraduate students building organizations that address critical
            social challenges
          </p>
        </div>

        {/* Row 1: 4 items centered */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          {cohort1.map((person, i) => (
            <div key={i} className="w-full sm:max-w-75 flex-1">
              {renderCard(person, i)}
            </div>
          ))}
        </div>

        {/* Row 2: 5 items on one bar */}
        <div className="flex flex-col sm:flex-row sm:flex-nowrap justify-center gap-4">
          {cohort2.map((person, i) => (
            <div key={i} className="w-full sm:flex-1">
              {renderCard(person, i)}
            </div>
          ))}
        </div>
      </div>

      {/* View All Fellows Button */}
      <div className="flex justify-center w-full mt-12 mb-8">
        <a
          href="/fellows"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors  font-semibold text-black text-sm"
        >
          View All Fellows
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
