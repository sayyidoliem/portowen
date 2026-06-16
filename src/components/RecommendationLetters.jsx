import { useState } from "react";
import RecommendationLetterBox from "./RecommendationLetterBox";

import letter1 from "../assets/Ivan Sebastian Edbert - Letter of Recommendation.pdf";
import letter2 from "../assets/Stefanus Benhard - Letter of Recommendation.pdf";
import letter3 from "../assets/Signed Gabriel Asael - Letter of Recommendation.pdf";

import reco1 from "../assets/reco1.jpeg";
import reco2 from "../assets/reco2.jpeg";
import reco3 from "../assets/reco3.jpeg";

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

export default function RecommendationLetters() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full px-6 py-32 pb-12 text-center">
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
          Recommendation Letter
        </span>

        <ChevronIcon isOpen={isOpen} />
      </button>

      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-out
          ${isOpen ? "max-h-[2600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="w-[94vw] max-w-[1050px] mx-auto space-y-24">
          <RecommendationLetterBox
            image={reco1}
            name="Ivan Sebastian Edbert"
            role="Head of Artificial Intelligence Program"
            year="2026"
            link= {letter1}
            rightBox={
              <>
                <p>Believed in my potential</p>
                <p>Inspired me to join Apple Academy</p>
              </>
            }
          >
            <li>(2025) Head of Artificial Intelligence Program.</li>
            <li>(2020) Lecturer Specialist for undergraduate program, focusing on AI and cloud computing while conducting research for his master’s studies.</li>
            <li>(2019) Junior Developer at Apple Academy at BINUS Internship.</li>
          </RecommendationLetterBox>

          <RecommendationLetterBox
            image={reco2}
            name="Stefanus Benhard"
            role="Lecturer in Artificial Intelligence Program"
            year="2026"
            link={letter2}
            rightBox={
              <>
                <p>Encouraged me to grow</p>
                <p>Academic Mentor</p>
                <p>Closest Lecturer</p>
              </>
            }
          >
            <li>(2025) Lecturer in Artificial Intelligence Program.</li>
            <li>(2022) Full time Business Innovation Analyst at PT. Astra International.</li>
          </RecommendationLetterBox>

          <RecommendationLetterBox
            image={reco3}
            name="Gabriel Asael"
            role="Lecturer Specialist in Artificial Intelligence Program"
            year="2026"
            link={letter3}
            rightBox={
              <>
                <p>First competition mentor</p>
                <p>My growth witness</p>
                <p>Close Friend</p>
              </>
            }
          >
            <li>(2024) Lecturer in Artificial Intelligence Program.</li>
            <li>(2022) Graduated from Bangkit Academy by Google, GoTo, and Traveloka.</li>
          </RecommendationLetterBox>
        </div>
      </div>
    </section>
  );
}