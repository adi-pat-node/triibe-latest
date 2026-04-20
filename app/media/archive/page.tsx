"use client";

import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

const ArchivePage = () => {
  const contentByMonth = [
    {
      month: "March 2026",
      items: [
        {
          image: "/images/media/archive/March_Newsletter.jpg",
          category: "newsletter",
          title: "Monthly Update | March 2026",
          description:
            "100+ Changemakers. One Room. We brought together 100+ attendees for the Billion Dollar Impact Summit in NYC.",
          link: "https://blog.triibe.org/p/monthly-update-march-2026",
        },
        {
          image: "/images/media/archive/Workshop16.jpg",
          category: "podcast",
          title:
            "Nancy Bonges on First-Generation Wealth Building at William Blair",
          description:
            "Nancy Bonges’s story starts as the daughter of Korean immigrants whose experience as a first-generation American informs her work as Executive Director of Community Engagement at William Blair, now spearheading a global corporate community strategy.",
          link: "https://www.youtube.com/watch?v=-TY4Iz5BNxg",
        },
        {
          image: "/images/media/archive/Workshop17.jpg",
          category: "podcast",
          title:
            "Why the Non-Profit Model is Broken and How Triibe is Fixing It with Kyle Matthys",
          description:
            "Kyle explains why Gen Z and Gen Alpha are the most socially conscious generations in history and how Triibe is providing the funding, mentorship, and community needed to turn student projects into sustainable non-profit organizations.",
          link: "https://www.youtube.com/watch?v=5tjyws4mq-E",
        },
      ],
    },
    {
      month: "February 2026",
      items: [
        {
          image: "/images/media/archive/Billion_Dollar_Impact.webp",
          category: "newsletter",
          title: "TRIIBE Next-Gen Changemaker Summit Invitation",
          description:
            "Youth-led organizations receive a fraction of philanthropic funding, and most early-stage nonprofits lose momentum before they ever reach scale.",
          link: "https://blog.triibe.org/p/triibe-next-gen-changemaker-summit-invitation",
        },
        {
          image: "/images/media/archive/Workshop12.jpg",
          category: "podcast",
          title: "Shrusti Amula Makes Her Spirit of Giving Back Rise N Shine",
          description:
            "Shrusti Amula, Founder and CEO of Rise N Shine Foundation, unpacks how a student-run composting program grew into a youth-powered movement tackling food waste, climate change, and food insecurity across Maryland.",
          link: "https://www.youtube.com/watch?v=m9qEh6F4WW0",
        },
        {
          image: "/images/media/archive/Workshop13.jpg",
          category: "podcast",
          title: "What Motivated Nayla Jimenez's Philippine Health Initiative",
          description:
            "Nayla Jimenez, founder and executive director of the Philippine Health Initiative, shares how sending balikbayan boxes to her family’s hometown in Cebu City grew into a youth-led nonprofit improving pediatric health, education, and wellness across the Philippines.",
          link: "https://www.youtube.com/watch?v=DizaMOLCk_M",
        },
        {
          image: "/images/media/archive/Workshop14.jpg",
          category: "podcast",
          title:
            "Kahina Haynes on Institutional Knowledge & Revolutionizing Access",
          description:
            "Kahina Haynes, Executive Director of the Dance Institute of Washington, shares how her experience as a third-generation dance artist shapes her worldview.",
          link: "https://www.youtube.com/watch?v=2nfghCY23uo",
        },
        {
          image: "/images/media/archive/Workshop15.jpg",
          category: "podcast",
          title: "Samin Bhan’s App Helps You Stay Present and Lookupp",
          description:
            "Samin Bhan, founder and CEO of Lookupp, is establishing “Lookup Zones” across college campuses to help young people reclaim in-person connection in a screen-saturated world.",
          link: "https://www.youtube.com/watch?v=-OXibXdyUqg",
        },
        {
          image: "/images/media/archive/Workshop19.jpg",
          category: "podcast",
          title:
            "When Youth Meet Purpose, People Lean In: A Conversation with Kyle Matthys",
          description:
            "Hear how his cause inspires young people to grow their skills, connect with their communities, and take action, creating a ripple effect where people naturally lean in and ask, “Tell me more.”",
          link: "https://www.youtube.com/watch?v=dLrNM4RXhW4",
        },
      ],
    },
    {
      month: "January 2026",
      items: [
        {
          image: "/images/media/archive/podcast.png",
          category: "podcast",
          title: "High Tech with HAITECH",
          description:
            "The Founder and Product Lead of HAITECH Learning explores her remarkable journey from growing up in Haiti to launching a nonprofit",
          link: "https://www.youtube.com/watch?v=XNUr1NgLq28",
        },
        {
          image: "/images/media/archive/Workshop.png",
          category: "podcast",
          title: "Signal to Noise Branding x The SuperBetter Mindset",
          description:
            "In these virtual workshops, current and next-gen changemakers will present actionable strategies for entrepreneurs, intrapreneurs, and philentrepreneurs.",
          link: "https://www.youtube.com/watch?v=pNKGIByJNnk",
        },
        {
          image: "/images/media/archive/Workshop9.jpg",
          category: "podcast",
          title: "Danielle Guindo Brings Young Leaders Into a Read Alliance",
          description:
            "Danielle Guindo, Executive Director of Read Alliance, knows just a single word can change how young people see themselves.",
          link: "https://www.youtube.com/watch?v=LFz4qnhMj74",
        },
        {
          image: "/images/media/archive/Workshop10.jpg",
          category: "podcast",
          title: "Varuni Chopra’s Calling to Bridge the Gap in Tech",
          description:
            "Varuni Chopra, Founder of Bridge the Gap, shares how a pandemic-era initiative grew into a national movement connecting young volunteers with senior citizens through technology, empathy, and human connection.",
          link: "https://www.youtube.com/watch?v=ST_nkLV2DeE",
        },
        {
          image: "/images/media/archive/Workshop11.jpg",
          category: "podcast",
          title:
            "Listening Is About Love: Paul Spivey's Path From the Board to Board Search",
          description:
            "Paul Spivey, Principal at Phillips Oppenheim, unpacks what most founders, CEOs, and board members get wrong about leadership, governance, and power.",
          link: "https://www.youtube.com/watch?v=1hMg3K7uu-4",
        },
      ],
    },
    {
      month: "December 2025",
      items: [
        {
          image: "/images/media/archive/Workshop4.jpg",
          category: "podcast",
          title: "Climate Literacy Is a Human Right",
          description:
            "At just 14 years old, Maya Gowda founded SEED to fill a gap she saw in her school’s curriculum: real, actionable climate education.",
          link: "https://www.youtube.com/watch?v=wBh_XAk82Iw",
        },

        {
          image: "/images/media/archive/Workshop5.jpg",
          category: "podcast",
          title: "On a Mission to Serve, Esha Venkat Built a NEST4US",
          description:
            "When she was ten, Esha Venkat never imagined the small acts of service she did with her family would grow into NEST4US, one of the country’s fastest-scaling youth-powered volunteer organizations.",
          link: "https://www.youtube.com/watch?v=VpZAFiQktLo",
        },

        {
          image: "/images/media/archive/Workshop6.jpg",
          category: "podcast",
          title:
            "Carl Nassib’s Journey from Philly and the NFL to Philanthropy",
          description:
            "Former NFL captain and Rayze Founder/CEO Carl Nassib joins TRIIBE talk to discuss his journey from professional football to building a platform that reimagines how people give back.",
          link: "https://www.youtube.com/watch?v=YlkwdCkZMUg",
        },
        {
          image: "/images/media/archive/Workshop7.jpg",
          category: "podcast",
          title: "How Adeline Azrack Became a Restorer of Dignity",
          description:
            "Adeline Azrack's early work with young people from underresourced backgrounds has led to a lifetime of service and leadership inside one of the world's most influential brands.",
          link: "https://www.youtube.com/watch?v=Hsj5jnlbnqg",
        },
        {
          image: "/images/media/archive/Workshop8.jpg",
          category: "podcast",
          title: "For Wendy Diamond, Every Day is Women's Entrepreneurship Day",
          description:
            "In this powerful episode of Tribe Talk, host Kyle Matthys sits down with global entrepreneur, philanthropist, and founder Wendy Diamond to explore a life defined not by circumstance, but by resilience, purpose, and action.",
          link: "https://www.youtube.com/watch?v=bpKSCxXiz0Q",
        },
      ],
    },
    {
      month: "November 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6914b8fe53e5c6fdf6125a6c_70632aae-58b7-18fb-bdca-711530df92dd.png",
          category: "newsletter",
          title: "Onboarding Our 6th TRIIBE Branch!",
          description:
            "In the past month, we onboarded 25 new members, bringing our total to nearly 70 and keeping us on track toward our goal of 100 by year-end.",
          link: "https://blog.triibe.org/p/monthly-update-november-2025",
        },
        {
          image: "/images/media/archive/Workshop1New.jpg",
          category: "podcast",
          title: "From the NFL to Fixing Philanthropy",
          description:
            "Former NFL star and Rayze founder Carl Nassib joins TRIIBE Talk to reveal how a single volunteer day near the Buccaneers’ stadium opened his eyes to a broken system, motivating him give philanthropic giving an upgrade.",
          link: "https://www.youtube.com/watch?v=NZGJ3XkS0IQ",
        },
        {
          image: "/images/media/archive/Workshop2.jpg",
          category: "podcast",
          title:
            "Inspired by Early Tragedy, Olivia Zhang is Putting Cancer Kids First",
          description:
            "At just 14, Olivia Zhang turned unimaginable loss into one of the fastest-growing youth-led nonprofits in the world.",
          link: "https://www.youtube.com/watch?v=BROl4hPWPnU",
        },
        {
          image: "/images/media/archive/Workshop3.jpg",
          category: "podcast",
          title:
            "Hunger into Hope: Robert Lee is Rescuing Leftover Cuisine One Plate at a Time",
          description:
            "Robert Lee, founder of Rescuing Leftover Cuisine, joins TRIIBE Talk to share how immigrant experiences, volunteer power, and smart business models",
          link: "https://www.youtube.com/watch?v=rnKl1Dk6AqM",
        },
      ],
    },
    {
      month: "October 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb74da1166445d9deb42b_octobernewsletter.jpg",
          category: "newsletter",
          title: "TRIIBE talk Podcast Launched",
          description:
            "25 new members, NEST, a $268K podcast partnership, dozens of cohort applicants, and a 6th global branch.",
          link: "https://blog.triibe.org/p/monthly-update-october-2025",
        },
      ],
    },
    // {
    //   month: "September 2025",
    //   items: [
    //     {
    //       image:
    //         "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692cb8157677d1fb7dfb7fb8_septembernewsletter-min.jpg",
    //       category: "newsletter",
    //       title: "New TRIIBE Office",
    //       description:
    //         "Major Climate Week turnout, another new office, global expansion, rapid team growth, updated materials.",
    //       link: "https://us9.campaign-archive.com/?u=88e516b0368da342b9b8c8a74&id=e03ca8d46f",
    //     },
    //   ],
    // },
    {
      month: "August 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/692e3be0b6af306f7ffa3f9b_Screenshot%202025-12-01%20at%2020.07.02.png",
          category: "newsletter",
          title: "Growing Tenfold",
          description:
            "Announcing new mentors, a new office, major partnerships, grant progress, media features, and an updated mission.",
          link: "https://blog.triibe.org/p/monthly-update-august-2025",
        },
      ],
    },
    {
      month: "July 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/6898ddc0d7fe900272e07504_IMG_1223.jpg",
          category: "newsletter",
          title: "Summit 2025 Recap",
          description:
            "Recapping the Changemaker Summit 2025 with over 110 high-profile attendees while expanding our digital presence.",
          link: "https://blog.triibe.org/p/the-triibune-july-edition",
        },
      ],
    },
    {
      month: "June 2025",
      items: [
        // {
        //   image:
        //     "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4d92bcc1dd2b90c8c5a_f363186d-31d2-002b-e5f7-9380774261f3.png",
        //   category: "newsletter",
        //   title: "Launching Our Summit",
        //   description:
        //     "Announcing event sponsors, speakers, and funding for our first summit, alongside new partnerships.",
        //   link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763882",
        // },
        {
          image: "/images/media/archive/Workshop18.jpg",
          category: "podcast",
          title: "Kyle Matthys from Triibe.us on Impact Entrepreneurship",
          description:
            "Kyle Matthys shares his journey as a young entrepreneur passionate about sustainability and community building. He discusses his work with Triibe.us, a nonprofit supporting youth-led initiatives in climate action.",
          link: "https://www.youtube.com/watch?v=CQQ-MjnsG4g",
        },
      ],
    },
    // {
    //   month: "May 2025",
    //   items: [
    //     {
    //       image:
    //         "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4b9c1cd99f5b1d43464_d5ad1fc5-982a-4cc7-031c-ea1ab13290ea.png",
    //       category: "newsletter",
    //       title: "Our First Cohort",
    //       description:
    //         "Welcoming our first cohort as they connect with mentors and debuting TRIIBE merchandise.",
    //       link: "https://mailchi.mp/triibe.us/triibe-newsletter-april-edition-4763842",
    //     },
    //   ],
    // },
    {
      month: "April 2025",
      items: [
        {
          image:
            "https://cdn.prod.website-files.com/6898d941a0824c0e0bfab99b/68b4e4956e3ee6fe54674578_Screenshot%202025-08-31%20at%207.59.49%E2%80%AFPM.png",
          category: "newsletter",
          title: "6 Month Anniversary",
          description:
            "Celebrating our 6-month anniversary, achieving 501(c)(3) status, joining the Wasserman Unstoppable Accelerator.",
          link: "https://blog.triibe.org/p/triibe-newsletter-april-edition",
        },
      ],
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "podcast":
        return "bg-purple-100 text-purple-700";
      case "workshop":
        return "bg-blue-100 text-blue-700";
      case "newsletter":
        return "bg-indigo-100 text-indigo-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Placeholder for future workshops - you can add real data later

  return (
    <main className="min-h-screen ">
      <Header />

      {/* Header */}
      <section className="py-4 mt-20 md:px-12 lg:px-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/media"
            className="inline-flex items-center text-black hover:text-green-950  transition-colors text-[16px]"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Media
          </Link>
        </div>
      </section>

      {/* Newsletters Section */}

      <section className="py-8 bg-white md:px-12 lg:px-50 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Archive
          </h2>

          {contentByMonth.map((monthData, monthIndex) => (
            <div key={monthIndex} className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
                {monthData.month}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {monthData.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`${getCategoryColor(
                            item.category,
                          )} px-3 py-1 rounded-full text-xs font-semibold uppercase`}
                        >
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg px-8 md:px-12 py-8 md:py-10 hover:scale-105 transition-transform">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Stay informed. Join the TRIIBE
            </h3>
            <Link
              href="https://mailchi.mp/triibe.us/subscribe-to-triibe"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-black px-8 py-3 rounded-full font-semibold text-base hover:bg-green-950 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default ArchivePage;
