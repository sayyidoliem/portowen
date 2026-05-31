import MainSection from "../components/MainSection";
import Hero from "../components/Hero";
import LearningJourney from "../components/LearningJourney";
import ExperienceBubbles from "../components/ExperienceBubbles";


import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AboutDelayed() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) setHasEntered(true);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={
        hasEntered
          ? isInView
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 0 }
          : {}
      }
      transition={{
        duration: hasEntered ? 0.9 : 1.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        max-w-3xl mx-auto px-6 py-28
        -translate-y-16
        text-center
        relative
      "
    >
      {/* 🔥 LILAC GLASS BACKDROP */}
      <div
        className="
          absolute inset-0
          rounded-3xl
          bg-[rgba(200,170,255,0.08)]
          backdrop-blur-2xl
          border border-[rgba(200,170,255,0.25)]
          shadow-[0_0_60px_rgba(200,170,255,0.25)]
        "
      />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 space-y-6">
        <h2 className="text-3xl font-semibold text-white">
          About Me
        </h2>

        <p className="text-white/80 leading-relaxed text-lg space-y-2">
          <span className="block">Hello, I’m Owen Putra Halim (19). I focus on AI systems and adaptability learning.</span>
          <span className="block">
            I also use AI for competitions and projects while ensuring human accountability.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

export default function Main({ scrollRef }) {
  return (
    <>
      <Hero />

      <div className="bg-black text-white">

        {/* 🔥 ABOUT (isolated from transform conflict) */}
        <MainSection container={scrollRef}>
          <div className="w-full">
            <AboutDelayed />
          </div>
        </MainSection>

        <MainSection container={scrollRef}>
          <LearningJourney />
        </MainSection>

        <MainSection container={scrollRef}>
          <div className="mx-auto max-w-5xl px-6 pt-40 pb-32 md:pt-56 md:pb-40">
            <ExperienceBubbles />
          </div>
        </MainSection>

        <MainSection container={scrollRef}>
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
        </MainSection>

        {/* scroll space */}
        <div className="h-[100vh]" />

      </div>
    </>
  );
}