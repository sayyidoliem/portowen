import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AboutMe() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) setHasEntered(true);
  }, [isInView]);

  return (
    <motion.section
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
      {/* Title outside box */}
      <h2
        className="
          mb-8
          text-3xl md:text-4xl lg:text-5xl
          font-light
          tracking-[0.08em]
          text-white/90
        "
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        About Me
      </h2>

      {/* Glass box */}
      <div
        className="
          relative
          rounded-3xl
          bg-[rgba(200,170,255,0.08)]
          backdrop-blur-2xl
          border border-[rgba(200,170,255,0.25)]
          shadow-[0_0_60px_rgba(200,170,255,0.25)]
          px-7 py-8 md:px-10 md:py-10
        "
      >
        <div
          className="relative z-10 space-y-4"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          <h3
            className="
              text-xl md:text-2xl
              font-light
              tracking-[0.06em]
              text-white/95
            "
          >
            Owen Putra Halim (19)
          </h3>

          <div
            className="
              space-y-2
              text-base md:text-lg
              font-light
              tracking-[0.03em]
              leading-relaxed
              text-white/80
            "
          >
            <p>Focus on applicable AI systems and adaptability learning.</p>
            <p>Developing AI for competitions and research projects.</p>
            <p>Using AI while ensuring human accountability.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}