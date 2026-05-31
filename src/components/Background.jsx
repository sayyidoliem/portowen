// Background for video and profile, coded with AI (for styling)

export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">

      {/* 🌌 BASE */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* 🌌 COLOR GLOW */}
      <div className="absolute inset-0 opacity-80 blur-3xl
        bg-[radial-gradient(circle_at_25%_30%,rgba(96,165,250,0.7),transparent_50%),
             radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.7),transparent_50%),
             radial-gradient(circle_at_60%_80%,rgba(236,72,153,0.6),transparent_60%)]"
      />

      {/* 🌌 LIGHT BLOOM */}
      <div className="absolute inset-0 opacity-40 blur-2xl
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]"
      />

      <div
        className="fixed inset-0 opacity-60"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.9) 1.2px, transparent 2px),
            radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 2px)
          `,
          backgroundSize: "60px 60px, 120px 120px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      />

      {/* ✨ SHINE BOOST */}
      <div className="absolute inset-0 mix-blend-screen opacity-40
        bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_60%)]"
      />

      {/* 🌑 DEPTH */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />

    </div>
  );
}