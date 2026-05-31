// Human Check: DONE

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "@fontsource/inter"; //My personal choice

export default function IntroOverlay() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState(0);

  // Phase set up by AI - Async controlling the phase, the return below execute the animation based on the phase
  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(() => setPhase(3), 2200);
    const t4 = setTimeout(() => setShow(false), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!show) return null; // t4 activated -> end

  // Animation is coded by ChatGPT
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0a0a0a]"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <motion.div
        layout
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="flex flex-col items-center gap-2 px-6 text-center"
        style={{ fontFamily: "Inter" }}
      >
        {/* LINE 1 */}
        {phase >= 1 && (
          <motion.div
            layout
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-wrap justify-center items-baseline gap-x-2"
          >
            <span
              className="text-white text-5xl md:text-6xl font-bold tracking-tight"
              style={{
                textShadow: `
                  0 0 40px rgba(255,255,255,0.12),
                  0 0 80px rgba(255,255,255,0.06)
                `,
              }}
            >
              Hello,
            </span>

            {phase >= 2 && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white/70 text-2xl md:text-3xl font-semibold tracking-tight"
              >
                this portfolio is mostly coded by ChatGPT
              </motion.span>
            )}
          </motion.div>
        )}

        {/* LINE 2 */}
        {phase >= 3 && (
          <motion.div
            layout
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white/70 text-xl md:text-2xl font-semibold tracking-tight"
          >
            with me in complete control
          </motion.div>
        )}

      </motion.div>
    </motion.div>
  );
}