import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import LearningJourney from "../components/LearningJourney";
import ExperienceBubbles from "../components/ExperienceBubbles";
import AboutMe from "../components/AboutMe";
import RecommendationLetters from "../components/RecommendationLetters";


import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function Main({ scrollRef }) {
  return (
    <>
      <Hero />

      <div className="bg-black text-white">

        {/* 🔥 ABOUT (isolated from transform conflict) */}
        <MainSection container={scrollRef}>
          <div className="w-full">
            <AboutMe />
          </div>
        </MainSection>

        <MainSection container={scrollRef}>
          <div className="mx-auto max-w-5xl px-6 pt-40 pb-32 md:pt-56 md:pb-40">
            <ExperienceBubbles />
          </div>
        </MainSection>

        <MainSection container={scrollRef}>
          <RecommendationLetters />
        </MainSection>

        {/* <MainSection container={scrollRef}>
          <div className="max-w-4xl mx-auto px-6 py-32 space-y-6 text-center">
            <h2 className="text-3xl font-semibold">
              Contact
            </h2>
            <a
              href="mailto:owenputraha@gmail.com"
              className="inline-block px-5 py-2 bg-red-500 hover:bg-red-600 transition rounded-lg text-white font-medium"
            >
              Email Me
            </a>
          </div>
        </MainSection> */}

        {/* scroll space */}
        <div className="h-[20vh]" />

      </div>
    </>
  );
}