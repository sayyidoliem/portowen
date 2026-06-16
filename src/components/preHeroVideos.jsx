export default function PreHeroVideos() {
  const videos = [
    {
      id: "k316J7NGCnw",
      title: "Self-Intro Video",
    },
    {
      id: "YOUR_REAL_VIDEO_2_ID",
      title: "Portfolio Creation Documentation",
    },
  ];

  return (
    <div className="relative w-full min-h-[72vh] flex items-center justify-center px-6 pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      
      {/* ONE STABLE DARK FADE ONLY */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-0
          bg-gradient-to-b
          from-black/75
          via-black/55
          to-transparent
        "
      />

      <div className="relative z-10 w-full max-w-6xl">
        <div
          className="
            grid grid-cols-1 md:grid-cols-2
            gap-12 md:gap-16 lg:gap-20
            items-center justify-items-center
          "
        >
          {videos.map((video) => (
            <div key={video.id} className="w-full max-w-[580px]">
              <h2
                className="
                  mb-6
                  text-center
                  text-lg md:text-2xl lg:text-3xl
                  font
                  tracking-[0.08em]
                  text-white/90
                "
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {video.title}
              </h2>

              <iframe
                className="
                  w-full
                  aspect-video
                  rounded-2xl
                  border border-white/10
                  shadow-[0_0_60px_rgba(200,170,255,0.22)]
                "
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=1&loop=1&playlist=${video.id}&rel=0&modestbranding=1&playsinline=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}