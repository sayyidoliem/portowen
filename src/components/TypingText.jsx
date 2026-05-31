import { useState, useEffect } from "react";

export default function TypingText() {
  const texts = [
    "Hello, I'm Owen",
    "Responsible Vibe Coder"
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <div className="text-center">
      <h1
        className="
            text-4xl md:text-5xl lg:text-6xl
            font-light
            tracking-[0.08em]
            text-white/90
        "
        style={{ fontFamily: "Playfair Display, serif" }}
        >
        {displayText}
        <span className="ml-1 opacity-70 animate-pulse">|</span>
        </h1>
    </div>
  );
}