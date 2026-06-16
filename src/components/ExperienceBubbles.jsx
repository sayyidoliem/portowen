import { useState } from "react";

import visoraImg from "../assets/visora.jpeg";
import sreImg from "../assets/SRE.jpeg";
import cauImg from "../assets/CAU.jpeg";
import aiopen from "../assets/aiopen.jpeg";
import nlpImg from "../assets/nlp.jpeg";

function ChevronIcon({ isOpen }) {
  return (
    <svg
      className={`
        w-7 h-7 md:w-8 md:h-8
        shrink-0
        text-white/80
        transition-transform duration-300
        ${isOpen ? "rotate-180" : "rotate-0"}
      `}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25L12 15.75L4.5 8.25"
      />
    </svg>
  );
}

export default function ExperienceBubbles() {
  const [isOpen, setIsOpen] = useState(false);

  const experiences = [
    {
      year: "2026",
      image: cauImg,
      title: "AI International Hackathon",
      subtitle: "Representative of BINUS University in Global Hackathon, AI in Healthcare",
      description:
        "Represented BINUS University Kemanggisan in an international AI in Healthcare hackathon at Central Asian University, Uzbekistan. Built a skin cancer classification and segmentation model while dealing with poor data quality, which became a major learning curve in preprocessing, model selection, and international competition standards.",
    },
    {
      year: "2026",
      image: sreImg,
      title: "SRE ITB Hackathon",
      subtitle: "Plastic Waste Low-Energy Density-Based Separation — Best Theme Ideas",
      description:
        "Led the project as Project Manager and won Best Theme Ideas with an IoT-based waste management concept using density comparison. The idea focused on practical, low-energy plastic waste sorting that could be easier to apply in real environments.",
    },
    {
      year: "2026",
      image: aiopen,
      title: "AI Open President University Challenge",
      subtitle: "AI Legal Assistant with Auto-Updated BPOM Regulation",
      description:
        "Led an ongoing project based on a real case from TUV NORD Indonesia. The solution is an AI legal assistant that retrieves updated BPOM regulation chunks, helps answer customer service questions, supports violation checks, and assists report creation.",
    },
    {
      year: "2026",
      image: nlpImg,
      title: "Pre-Agentic NLP Retrieval System",
      subtitle: "NLP Course — Reducing Model Hallucination",
      description:
        "Built a pre-agentic NLP system to reduce hallucination by using retrieval before generation. This became a stable middle-ground approach between relying on non-fine-tuned APIs and using expensive fine-tuning resources.",
    },
    {
      year: "2025",
      image: visoraImg,
      title: "VISORA",
      subtitle: "My First AI System — AI Assistant for Blind People",
      description:
        "Built my first AI system for visually impaired users using object detection and voice-based interaction. VISORA grew together with my AI knowledge, from a random V1, a more structured real-time V2, and a planned V3 using better training methods and cloud computing.",
    },
  ];

  const groupedExperiences = experiences.reduce((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});

  const years = Object.keys(groupedExperiences).sort((a, b) => b - a);

  return (
    <section className="w-full text-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          mx-auto
          mb-14
          flex items-center justify-center gap-4
          w-[760px] max-w-[92vw]
          text-white/90
        "
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        <span
          className="
            text-4xl md:text-5xl lg:text-6xl
            font-light
            tracking-[0.08em]
            whitespace-nowrap
          "
        >
          Highlighted Experiences
        </span>

        <ChevronIcon isOpen={isOpen} />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-[3200px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="w-full space-y-16">
          {years.map((year) => (
            <div
              key={year}
              className="grid grid-cols-[80px_1fr] gap-5 md:grid-cols-[120px_1fr]"
            >
              <div className="relative text-right">
                <p className="sticky top-24 pt-4 text-lg font-medium text-white/70 md:text-xl">
                  {year}
                </p>

                <div className="absolute right-[-11px] top-16 h-[calc(100%-4rem)] w-px bg-white/20 md:right-[-15px]" />
              </div>

              <div className="space-y-10">
                {groupedExperiences[year].map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="
                      min-h-[300px] rounded-2xl
                      border border-white/15 bg-white/[0.04]
                      p-6 backdrop-blur-md
                      shadow-[0_0_40px_rgba(255,255,255,0.04)]
                      transition duration-300
                      hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/25
                    "
                  >
                    <div className="grid h-full gap-6 md:grid-cols-[1fr_260px] md:items-center">
                      <div className="text-left">
                        <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white/70">
                          {index + 1}
                        </div>

                        <h3 className="text-2xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm text-white/45">
                          {item.subtitle}
                        </p>

                        <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65">
                          {item.description}
                        </p>
                      </div>

                      <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-48 w-full object-cover md:h-56"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}