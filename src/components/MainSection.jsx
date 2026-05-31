import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MainSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={
        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
      }
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-h-screen flex items-center bg-black"
    >
      <div className="w-full">{children}</div>
    </motion.section>
  );
}