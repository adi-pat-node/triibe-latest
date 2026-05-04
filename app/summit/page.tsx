"use client";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSummit from "@/components/heroSummit";
import Image from "next/image";
import { createElement } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  React.useEffect(() => {
    const calculate = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();

      if (diff <= 0) {
        setTimeLeft((prev) => ({ ...prev, expired: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        expired: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 60000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.expired) return <span>Expired</span>;

  return (
    <div className="flex gap-2 text-sm font-medium text-black">
      <span>{timeLeft.days}d</span>
      <span>{timeLeft.hours}h</span>
      <span>{timeLeft.minutes}m</span>
    </div>
  );
};

const SummitPage = () => {
  // const featuredSpeakers = [
  //   {
  //     title: "TRIIBE Talk 1",
  //     speakers: [
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 2",
  //     speakers: [
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 3: Shelter",
  //     speakers: [
  //       {
  //         name: "Varuni Chopra",
  //         title: "Founder, Bridge the Gap Initiative",
  //         image: "/images/home/VaruniChopra.png",
  //         linkedin: "https://www.linkedin.com/in/varuni-chopra1/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 4: Health",
  //     speakers: [
  //       {
  //         name: "Olivia Zhang",
  //         title: "Founder and CEO, Cancer Kids First",
  //         image:
  //           "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
  //         linkedin: "https://www.linkedin.com/in/olivia-zhang-a792b8229/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Nayla Jimenez",
  //         title: "Founder, Philippine Health Initiative",
  //         image: "/images/home/NaylaJimenez.png",
  //         linkedin: "https://www.linkedin.com/in/naylajimenez/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 5: Education",
  //     speakers: [
  //       {
  //         name: "Anne Frédérick",
  //         title: "Founder, Haitech Learning",
  //         image:
  //           "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
  //         linkedin:
  //           "https://www.linkedin.com/in/anne-sophie-frederick-1364ba235/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Samin Bhan",
  //         title: "Founder, Lookupp",
  //         image: "/images/home/saminbhan-2.png",
  //         linkedin: "https://www.linkedin.com/in/samin-bhan/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 6: Food",
  //     speakers: [
  //       {
  //         name: "Esha Venkat",
  //         title: "Founder, Next4Us",
  //         image: "/images/home/homepage---changemakers-3.png",
  //         linkedin: "https://www.linkedin.com/in/eshavenkat/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Shrusti Amula",
  //         title: "Founder, Rise N Shine Foundation",
  //         image: "/images/home/ShrustiAmula.png",
  //         linkedin: "https://www.linkedin.com/in/shrusti-amula/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  //   {
  //     title: "TRIIBE Talk 7: Education",
  //     speakers: [
  //       {
  //         name: "Maya Gowda",
  //         title: "Founder, SEED",
  //         image:
  //           "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
  //         linkedin: "https://www.linkedin.com/in/maya-gowda-a20484240/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Gitanjali Rao",
  //         title: "Global Keynote, Vervient Foundation",
  //         image: "/images/home/GitanjaliRao.png",
  //         linkedin: "https://www.linkedin.com/in/gitanjalirao/",
  //         tag: "Next-Gen",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //       {
  //         name: "Coming Soon",
  //         title: "",
  //         image: null,
  //         linkedin: "#",
  //         tag: "Established",
  //       },
  //     ],
  //   },
  // ];

  const speakers = [
    {
      name: "Varuni Chopra",
      title: "Founder, Bridge the Gap Initiative",
      image: "/images/home/VaruniChopra.png",
      linkedin: "https://www.linkedin.com/in/varuni-chopra1/",
      tag: "Next-Gen",
    },
    {
      name: "Olivia Zhang",
      title: "Founder and CEO, Cancer Kids First",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68aa07201e49da83227f817d_1%20(1).png",
      linkedin: "https://www.linkedin.com/in/olivia-zhang-a792b8229/",
      tag: "Next-Gen",
    },
    {
      name: "Nayla Jimenez",
      title: "Founder, Philippine Health Initiative",
      image: "/images/home/NaylaJimenez.png",
      linkedin: "https://www.linkedin.com/in/naylajimenez/",
      tag: "Next-Gen",
    },
    {
      name: "Anne Frédérick",
      title: "Founder, Haitech Learning",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ae976ac21db37b22369d_anna.png",
      linkedin: "https://www.linkedin.com/in/anne-sophie-frederick-1364ba235/",
      tag: "Next-Gen",
    },
    {
      name: "Samin Bhan",
      title: "Founder, Lookupp",
      image: "/images/home/saminbhan-2.png",
      linkedin: "https://www.linkedin.com/in/samin-bhan/",
      tag: "Next-Gen",
    },
    {
      name: "Esha Venkat",
      title: "Founder, Next4Us",
      image: "/images/home/homepage---changemakers-3.png",
      linkedin: "https://www.linkedin.com/in/eshavenkat/",
      tag: "Next-Gen",
    },
    {
      name: "Shrusti Amula",
      title: "Founder, Rise N Shine Foundation",
      image: "/images/home/ShrustiAmula.png",
      linkedin: "https://www.linkedin.com/in/shrusti-amula/",
      tag: "Next-Gen",
    },
    {
      name: "Maya Gowda",
      title: "Founder, SEED",
      image:
        "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4ca26ae82ac604cfa0e61_maya%2022.png",
      linkedin: "https://www.linkedin.com/in/maya-gowda-a20484240/",
      tag: "Next-Gen",
    },
    {
      name: "Gitanjali Rao",
      title: "Global Keynote, Vervient Foundation",
      image: "/images/home/GitanjaliRao.png",
      linkedin: "https://www.linkedin.com/in/gitanjalirao/",
      tag: "Next-Gen",
    },
    {
      name: "Kyle Matthys",
      title: "CEO, TRIIBE",
      image: "/images/about/team/KyleMatthys.png",
      linkedin: "https://www.linkedin.com/in/kylematthys/",
      tag: "Moderator",
    },
    {
      name: "Chirag Nijjer",
      title: "Brand Historian for Google and the History Channel",
      image: "/images/summit/Chirag Nijjer.png",
      linkedin: "https://www.linkedin.com/in/chiragspeaks/",
      tag: "MC",
    },
  ];

  const scheduleDays = [
    {
      title: "Day 1, Friday September 4th",
      location:
        "Invite Only Studios, 207 W 25th St, New York NY. Attendees: 400",
      badge: "VIP Gala",
      highlight: {
        image: "/images/summit/Curated1.png",
        label: "ON THE MENU",
        name: "Chef Kim Yong",
        description:
          "Tokyo-trained, Michelin-starred known for single-source bluefin and a minimalist rice program. Curating Friday's tasting and the evening sushi show.",
        bullets: ["Sushi show during Gala"],
      },
      items: [
        {
          time: "6:00 PM",
          title: "VIP Reception",
          description:
            "Networking And Tours With Jazz Performance And Drink Reception",
        },
        {
          time: "6:45 PM",
          title: "Gala Dinner",
          description: "Sit-Down Meal For 400 Guests",
        },
        {
          time: "7:00 PM",
          title: "VIP Opening Ceremony",
          description:
            "keynote by Kyle and Doc and Pat with gifts and sushi show",
        },
        {
          time: "8:15 PM",
          title: "Networking Reception",
          description: "jazz band performance and event photography",
        },
      ],
    },
    {
      title: "Day 2, Saturday September 5th",
      location:
        "Invite Only Studios, 207 W 25th St, New York NY. Attendees: 600",
      badge: "Summit Day",
      highlight: {
        image: "/images/summit/Curated2.png",
        label: "SATURDAY · MIDDAY INTERLUDE",
        name: "Fashion Show",
        description:
          "A 20-minute runway moment staged between the morning and afternoon TRIIBE Talks.", //  "Presented by Steve Madden · a 20-minute runway moment staged between the morning and afternoon TRIIBE Talks.",
        bullets: [
          "1:10 PM · Seating",
          "Main Hall runway",
          "All summit attendees",
        ],
      },
      items: [
        {
          time: "9:30 AM",
          title: "Opening Ceremony",
          description: "Welcome remarks by Kyle Matthys",
        },
        {
          time: "9:40 AM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        { time: "10:25 AM", title: "BREAK" },
        {
          time: "10:40 AM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        { time: "11:25 AM", title: "BREAK" },
        {
          time: "11:40 AM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        {
          time: "12:25 PM",
          title: "Lunch Reception",
          description: "Diverse food trucks",
        },
        {
          time: "1:15 PM",
          title: "Fashion Show",
          description: "Full film crew coverage with TV livestream",
        },
        {
          time: "1:50 PM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        { time: "2:35 PM", title: "BREAK" },
        {
          time: "2:45 PM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        { time: "3:30 PM", title: "BREAK" },
        {
          time: "3:40 PM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        { time: "4:25 PM", title: "BREAK" },
        {
          time: "4:35 PM",
          title: "TRIIBE Talk",
          description:
            "Highlighting next-gen founders alongside established ones, because age doesn't define the quality of a voice.",
        },
        {
          time: "5:20 PM",
          title: "Founder Recognition",
          description: "LED screen presentation with cohorts on stage",
        },
        {
          time: "5:35 PM",
          title: "Closing Remarks",
          description: "Kyle Matthys on stage thanking the audience",
        },
        {
          time: "5:45 PM",
          title: "Drinks Reception",
          description: "Rooftop networking with jazz band",
        },
        {
          time: "6:00 PM",
          title: "Evening Reception",
          description: "Full bar service and continued networking",
        },
      ],
    },
    {
      title: "Day 3, Sunday September 6th",
      location: "Exclusively for Cohorts",
      badge: "",
      highlight: null,
      items: [],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSummit />

      <section className="relative pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white overflow-visible">
        <div className="max-w-260 mx-auto overflow-visible">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-4">
              About the Summit
            </h2>
            <p className="text-black text-base leading-relaxed">
              The Invite Only x TRIIBE Next-Gen Summit is where the TRIIBE comes
              together. Next-gen founders, established voices, foundations,
              funders, mentors, and partners gather for a weekend designed to
              celebrate those prioritizing a return on impact, not income.
              <br />
              <br />A VIP Gala on Friday evening. A full-day summit on Saturday.
              One weekend to recognize the bench of operators future leaders and
              institutions need to deliver a return on impact.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              className="
          w-full h-[300px] relative mb-6

          md:absolute md:left-0 md:-top-24 md:w-[350px] md:h-[450px]

          lg:left-[-150px] lg:bottom-[-65px] lg:top-auto lg:w-[650px] lg:h-[750px]

          z-10
        "
            >
              <Image
                src="/images/summit/snoopSiloutte1.png"
                alt="Snoop Dogg"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div
              className="
          bg-[#002C19] rounded-[10px] py-12 px-6

          md:pl-[380px] md:pr-10

          lg:pl-[360px] lg:pr-12

          min-h-[400px] flex items-center
        "
            >
              <div className="flex flex-col gap-4 max-w-[600px]">
                <div className="flex flex-col gap-1">
                  <h4 className="text-white font-bold text-2xl tracking-wide mb-4">
                    Headlining Keynote · Friday Night
                  </h4>
                  <p className="text-white/70 text-base">
                    In conversation with TRIIBE
                  </p>
                </div>

                <h3
                  className="text-white text-4xl md:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontWeight: 100,
                  }}
                >
                  Coming Soon...
                </h3>

                <p className="text-white/80 text-base leading-relaxed">
                  An intimate fireside on community, capital and the long game
                  of building something that outlasts you.
                  {/*
                  Artist, entrepreneur, cultural architect. An intimate fireside
                  on community, capital, and the long game of building something
                  that outlasts you. */}
                </p>

                <div className="flex flex-wrap gap-x-10 gap-y-2 mt-2 text-white text-base">
                  <span>7:00 PM · VIP Opening Ceremony</span>
                  {/* <span>Fireside format · ~25 min + Q&A</span> */}
                </div>

                {/* <p className="text-white text-base">Stage A · Main Hall</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
            Curated Experiences
          </h2>
          <div className="max-w-200 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                {
                  name: "Tuna Carving by Chef Kim Yong",
                  image: "/images/summit/Curated1.png",
                },
                {
                  name: "Fashion Show",
                  image: "/images/summit/Curated2.png",
                },
                {
                  name: "Super Car Street Takeover",
                  image: "/images/summit/Curated3.png",
                },
                { name: "Food Trucks", image: "/images/summit/Curated4.png" },
                {
                  name: "Jazz Performance",
                  image: "/images/summit/Curated5.png",
                },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-center text-black">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-[#F5F5F5]">
        <div className="max-w-260 mx-auto flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Featured Speakers
          </h2>

          {featuredSpeakers.map((talk, talkIndex) => (
            <div key={talkIndex} className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-black">{talk.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {talk.speakers.map((speaker, i) => (
                  <a
                    key={i}
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 relative flex-shrink-0">
                      {speaker.image && (
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-center gap-1 text-center">
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold text-black text-sm">
                          {speaker.name}
                        </p>

                        {speaker.name !== "Coming Soon" && (
                          <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="#0A66C2"
                          >
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-xs text-[#495565] leading-tight">
                        {speaker.title}
                      </p>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        speaker.tag === "Next-Gen"
                          ? "bg-[#D8EFE4] text-[#1C5945] border-[#1C5945]"
                          : "bg-[#F5F0C9] text-[#6B5B00] border-[#4A3F00]"
                      }`}
                    >
                      {speaker.tag}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-[#F5F5F5]">
        <div className="max-w-260 mx-auto flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Featured Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {speakers.map((speaker, i) => (
              <a
                key={i}
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full max-w-[260px]"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-200">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />

                  {(speaker.tag === "Next-Gen" ||
                    speaker.tag === "Established" ||
                    speaker.tag === "Moderator" ||
                    speaker.tag === "MC") && (
                    <span
                      className={`absolute -top-0.5 -left-0.5 text-xs font-medium px-3 py-1 rounded-br-xl ${
                        speaker.tag === "Next-Gen"
                          ? "bg-[#D8EFE4] text-[#1C5945]"
                          : "bg-[#D8EFE4] text-[#1C5945]"
                      }`}
                    >
                      {speaker.tag}
                    </span>
                  )}
                </div>

                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-black text-sm">
                      {speaker.name}
                    </p>

                    {speaker.linkedin !== "#" && (
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="#0A66C2"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                    )}
                  </div>

                  <p className="text-xs text-[#495565] leading-tight">
                    {speaker.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <p className="text-center text-sm text-[#495565]">
            more speakers coming soon...
          </p>
        </div>
      </section>

      <section className="pt-16 pb-20 px-4 md:px-25 lg:px-50 bg-white">
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Schedule
          </h2>

          {scheduleDays.map((day, dayIndex) => (
            <div
              key={day.title}
              className="bg-[#F5F5F5] rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div
                  className={`flex flex-col ${
                    day.highlight ? "gap-1" : "gap-4"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-black">{day.title}</h3>

                  <p
                    className={`text-xs ${
                      day.highlight
                        ? "text-[#495565]"
                        : "text-[#1A1A1A] font-semibold"
                    }`}
                  >
                    {day.location}
                  </p>
                </div>

                {day.badge && (
                  <span className="bg-[#002C19] text-white text-xs font-semibold px-4 py-2 rounded-full self-start">
                    {day.badge}
                  </span>
                )}
              </div>

              {day.highlight && (
                <>
                  <div className="bg-white rounded-xl flex flex-col md:flex-row overflow-hidden">
                    <div className="relative w-full md:w-56 h-48 md:h-auto flex-shrink-0">
                      <Image
                        src={day.highlight.image}
                        alt={day.highlight.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 p-6">
                      <p className="text-xs font-semibold text-[#495565] uppercase tracking-widest">
                        {day.highlight.label}
                      </p>
                      <h4
                        className="text-2xl italic text-black"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {day.highlight.name}
                      </h4>
                      <p className="text-sm text-[#30364199] leading-relaxed">
                        {day.highlight.description}
                      </p>
                      <div className="flex flex-wrap gap-x-8 gap-y-2 mt-2">
                        {day.highlight.bullets.map((bullet, i) => (
                          <span
                            key={i}
                            className="text-sm text-black/70 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 bg-black rounded-full"></span>
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {day.items.map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[80px_1fr] gap-4 py-3 border-t border-gray-200 items-start"
                      >
                        <span className="text-sm font-semibold text-black">
                          {item.time}
                        </span>

                        {item.title === "BREAK" ? (
                          <div className="flex items-center gap-4 w-full">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-xs text-[#495565] tracking-[0.3em]">
                              BREAK
                            </span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-black mb-2">
                              {item.title}
                            </p>
                            {item.description && (
                              <p className="text-xs text-[#495565]">
                                {item.description}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="pt-20 pb-20 px-4 md:px-25 lg:px-50 bg-[#3036411A]"
        id="tickets"
      >
        <div className="max-w-260 mx-auto flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Buy Tickets
          </h2>

          <div className="max-w-3xl mx-auto flex flex-col gap-6 mb-6 text-sm text-[#303641]">
            <div className="flex flex-col gap-4 text-left">
              <p>
                VIP Full Weekend Access: Friday VIP Gala + Saturday Summit.
                <br />
                <br />
                The VIP Pass includes our Friday gala dinner featuring a live
                tuna carving show, opening ceremony, cocktail reception, and
                jazz performance.
                <br />
                <br />
                Saturday brings 7 TRIIBE Talks, the fashion show, supercar
                showcase, and closing reception.
              </p>

              <p>
                Next-Gen passes are reserved for active nonprofit founders,
                co-founders, and staff members under the age of 30.
              </p>

              <p>
                Street Fan passes give access to the supercar showcase, fashion
                show live-streaming, and include a food truck voucher.
              </p>

              <p>
                Media passes provide online only livestream access to all 7
                TRIIBE Talks and the fashion show.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-3 text-center">
              <p className="font-semibold text-black">
                Ticket Pricing Increases
              </p>

              <p>
                Next price increase: <strong>June 1</strong>
              </p>

              <div className="flex flex-col items-center mt-1">
                <p className="text-xs text-[#495565]">Price increases in</p>
                <div className="text-sm text-black font-medium">
                  <Countdown targetDate="2026-06-01T00:00:00" />
                </div>
              </div>

              <p className="mt-2">
                Final price increase: <strong>August 1</strong>
              </p>

              <div className="flex flex-col items-center mt-1 gap-1">
                <p className="text-xs text-[#495565]">
                  Final price increase in
                </p>
                <div className="text-xs text-[#495565] font-medium">
                  <Countdown targetDate="2026-08-01T00:00:00" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto min-h-[600px]">
            {createElement("givebutter-widget", { id: "gKZZ35" })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SummitPage;

{
  /* <section className="pt-32 pb-20 px-4 md:px-25 lg:px-50 bg-white">
  <div className="max-w-260 mx-auto">sixth Section</div>
</section>; */
}
