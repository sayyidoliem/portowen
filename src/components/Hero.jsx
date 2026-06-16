import { useRef, useState, useEffect } from "react";
import Background from "./Background";
import OrbitLinks from "./OrbitLinks";
import PreHeroVideos from "./PreHeroVideos";
import TypingText from "./TypingText";

export default function Hero() {
  // Scroll handling, especially animation is made by AI
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  // const bgRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  const start = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const scroll = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const lastScrollTop = useRef(0);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    let timeout;

    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const vh = window.innerHeight;

      const currentScrollTop = container.scrollTop;
      const direction =
        currentScrollTop > lastScrollTop.current ? 1 : -1;
      lastScrollTop.current = currentScrollTop;

      const progress = 1 - rect.top / vh;
      const clamped = Math.max(0, Math.min(1, progress));

      const isVisible = rect.top < vh && rect.bottom > 0;

      if (isVisible) {
        const curve = Math.sin(clamped * Math.PI * 0.8);

        scroll.current.y = curve * 6 * direction;
        scroll.current.x = curve * 2;
      } else {
        scroll.current.x *= 0.9;
        scroll.current.y *= 0.9;
      }

      // if (bgRef.current) {
      //   bgRef.current.style.transform = `translateY(${container.scrollTop * 0.3}px)`;
      // }

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        scroll.current.x = 0;
        scroll.current.y = 0;
      }, 120);
    };

    container.addEventListener("scroll", handleScroll);

    let raf;
    const animate = () => {
      const targetX = mouse.current.x + scroll.current.x;
      const targetY = mouse.current.y + scroll.current.y;

      current.current.x += (targetX - current.current.x) * 0.1;
      current.current.y += (targetY - current.current.y) * 0.1;

      if (Math.abs(current.current.x) < 0.01) current.current.x = 0;
      if (Math.abs(current.current.y) < 0.01) current.current.y = 0;

      if (cardRef.current) {
        cardRef.current.style.transform = `
          perspective(1200px)
          rotateX(${-current.current.y}deg)
          rotateY(${current.current.x}deg)
        `;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const handleMove = (e) => {
    if (isDragging) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const dx = (x - midX) / midX;
    const dy = (y - midY) / midY;

    mouse.current.x = dx * 10;
    mouse.current.y = dy * 10;
  };

  const handleDown = (e) => {
    setIsDragging(true);
    start.current = { x: e.clientX, y: e.clientY };
  };

  const handleDrag = (e) => {
    if (!isDragging) return;

    mouse.current.x = (e.clientX - start.current.x) / 6;
    mouse.current.y = (e.clientY - start.current.y) / 6;
  };

  const handleUp = () => {
    setIsDragging(false);
    mouse.current.x = 0;
    mouse.current.y = 0;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[172vh] overflow-hidden bg-black isolate"
    >
      {/* BACKGROUND - locked, no transform */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Background />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-[172vh] flex-col items-center text-white">
        {/* Typing text above videos */}
        <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <TypingText />
        </div>

        <PreHeroVideos />

        <div className="h-24" />

        {/* Profile Hero Area */}
        <div className="relative min-h-screen w-full flex items-center justify-center">
          <div className="relative z-10">
            <h2
              className="
                absolute
                -top-28
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-center
                text-3xl md:text-3xl lg:text-4xl
                font-light
                tracking-[0.08em]
                text-white/90
              "
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              My Photo and Hyperlinks
            </h2>
            <div
              className="w-[320px] h-[400px]"
              onMouseMove={(e) => {
                handleMove(e);
                handleDrag(e);
              }}
              onMouseDown={handleDown}
              onMouseUp={handleUp}
              onMouseLeave={handleUp}
            >
              <div ref={cardRef} className="w-full h-full">
                <img
                  src="/photo.jpeg"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                  draggable={false}
                />
              </div>
            </div>

            <OrbitLinks />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-b from-transparent to-black z-20" />
    </section>
  );
}