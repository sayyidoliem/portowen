// Orbit Links coded with ChatGPT, link and drag animation, controlled by me :)

import { useEffect, useRef } from "react";
import vitaepdf from "../assets/vitae.pdf";

const LINKS = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/owen-putra-halim-2b9927322/" },
  { label: "CV", url: "vitaepdf" },
  { label: "GitHub", url: "https://github.com/owenputra6" },
  { label: "Instagram", url: "https://www.instagram.com/neyyla.op?igsh=MWQ3cG1idzlobGI5bA%3D%3D&utm_source=qr" },
  { label: "Medium", url: "#https://medium.com/@owenputraha166" },
  { label: "Email", url: "mailto:owenputraha@gmail.com" },
  { label: "Phone", url: "tel:+6285849672843" },
];

export default function OrbitLinks() {
  const itemsRef = useRef([]);
  const angleRef = useRef(0);

  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    let raf;

    const animate = () => {
      // 🐢 slow auto motion
      angleRef.current += 0.0012;

      const rx = 340;
      const ry = 140;
      const offsetX = -70;

      itemsRef.current.forEach((el, i) => {
        if (!el) return;

        const base = (i / LINKS.length) * Math.PI * 2;
        const angle = angleRef.current + base;

        const x = Math.cos(angle) * rx + offsetX;
        const y = Math.sin(angle) * ry;

        const depth = (Math.sin(angle) + 1) / 2;

        // 🔥 LOWER BACK VISIBILITY
        const opacity = 0.005 + depth * 0.85;

        const blur = (1 - depth) * 2;

        el.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        el.style.opacity = opacity;
        el.style.filter = `blur(${blur}px)`;
        el.style.zIndex = Math.floor(depth * 100);

        el.style.pointerEvents = depth > 0.6 ? "auto" : "none";
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    // 🖱 DIRECT DRAG (no fighting)
    const handlePointerDown = (e) => {
      dragging.current = true;
      lastX.current = e.clientX;
    };

    const handlePointerMove = (e) => {
      if (!dragging.current) return;

      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;

      // 🔥 FLIPPED + DIRECT (no inertia)
      angleRef.current -= dx * 0.004;
    };

    const handlePointerUp = () => {
      dragging.current = false;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
      {LINKS.map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          ref={(el) => (itemsRef.current[i] = el)}
          onDragStart={(e) => e.preventDefault()}
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2

            px-10 py-3
            rounded-[999px]

            bg-[rgba(200,170,255,0.15)]
            backdrop-blur-2xl
            border border-[rgba(255,255,255,0.4)]
            shadow-[0_0_30px_rgba(200,170,255,0.5)]

            text-white text-lg font-medium

            select-none
            cursor-grab
            active:cursor-grabbing

            hover:scale-110
            hover:bg-[rgba(200,170,255,0.25)]

            transition
          "
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}