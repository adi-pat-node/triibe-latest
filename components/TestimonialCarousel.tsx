"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Receiving TRIIBE’s support further strengthened the work of Vervient Foundation by highlighting that community and connection matter as much as ideas. Knowing there’s a network of like-minded leaders cheering me on fuels our mission to empower students with an innovation mindset and reminds me that there’s always a shoulder to lean on in this journey.",
    name: "Gitanjali Rao",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Global Keynote, Vervient Foundation est. 2018",
  },
  {
    quote:
      "TRIIBE has been an instrumental resource in making sure that my organization continues to be supported after high school. I'm extremely grateful for all of the support TRIIBE has given Philippine Health Initiative and TRIIBE's emphasis on centering youth changemakers has brought together a great community of incredible founders.",
    name: "Nayla Jimenez",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Founder, Philippine Health Initiative est. 2017",
  },
  {
    quote:
      "Through TRIIBE I’ve experienced what it truly means to be supported while building something meaningful. TRIIBE has provided more than funding, it has offered transformative mentorship, strategic structure, and a powerful community of values-driven founders who continuously challenge me to think bigger and lead with intention. When many young leaders enter college and suddenly find themselves navigating ambition without guidance, TRIIBE fills that gap. They help equip us with the tools, accountability, and clarity needed to turn vision into sustainable impact. Through personalized mentorship, I’ve sharpened my storytelling, strengthened my long-term strategy, and learned how to scale my initiatives thoughtfully. What makes TRIIBE unique is its belief that young leaders should never build alone.",
    name: "Shrusti Amula",
    year: "TRIIBE Fellow Fall 2025",
    organization: "Founder, Rise N Shine Foundation est. 2019",
  },
  {
    quote:
      "I am immensely grateful for the TRIIBE community that has inspired me to continue SEED’s mission in bridging the global climate literacy gap. My TRIIBE mentors and peers are the leaders our world needs.",
    name: "Maya Gowda",
    year: "TRIIBE Fellow Spring 2024",
    organization: "Founder, SEED est. 2019",
  },
  {
    quote:
      "Being part of TRIIBE has shown me how powerful it is to be surrounded by people who are all committed to creating tangible change. I’m driven by the belief that small acts of connection can scale into meaningful change.",
    name: "Varuni Chopra",
    year: "TRIIBE Fellow Spring 2025",
    organization: "Founder, Bridge The Gap est. 2022",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12">
          <div className="text-center">
            <h2 className="font-bold text-[#002c19] text-4xl mb-4 tracking-[-0.90px] leading-10">
              Hear from our fellows
            </h2>
          </div>

          <div className="flex items-center justify-between gap-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8 text-[#002c19]" />
            </button>

            <div className="flex-1 text-center">
              <blockquote className="mb-8">
                <p className="font-normal text-[#002c19] text-xl leading-relaxed mb-8">
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>

              <div className="flex flex-col gap-2">
                <p className="font-semibold text-[#002c19]/80 text-lg">
                  {currentTestimonial.name}
                </p>

                <p className="font-normal text-[#002c19] text-base">
                  {currentTestimonial.year}
                </p>

                <p className="font-normal text-[#002c19] text-base">
                  {currentTestimonial.organization}
                </p>
              </div>
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8 text-[#002c19]" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#303641] w-8"
                    : "bg-black w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}