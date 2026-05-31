import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Section({ children, id }) {
  const ref = useRef(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById("scroll-container"));
  }, []);

  const { scrollYProgress } = useScroll({
    container: container || undefined,
    target: ref,
    offset: ["start 85%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [40, 0, 0]);

  return (
    <motion.section
      id={id}
      ref={ref}
      style={{ opacity, y }}
      className="min-h-[60vh] flex items-center scroll-mt-32"
    >
      {children}
    </motion.section>
  );
}