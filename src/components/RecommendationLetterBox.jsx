export default function RecommendationLetterBox({
  image,
  name,
  role,
  year,
  link,
  rightBox,
  children,
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        relative
        block
        w-full
        min-h-[450px]
        overflow-hidden
        rounded-[2rem]

        bg-[linear-gradient(135deg,rgba(210,245,255,0.10),rgba(120,170,255,0.10),rgba(200,170,255,0.05),rgba(255,255,255,0.02))]
        backdrop-blur-2xl

        border border-[rgba(170,225,255,0.38)]
        shadow-[0_0_95px_rgba(120,190,255,0.18)]

        px-10 py-10 md:px-14 md:py-12
      "
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {/* soft blue glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[rgba(170,220,255,0.08)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-56 bg-[rgba(120,190,255,0.14)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.02]" />

      <div className="relative z-10 flex gap-14 items-start">
        <div
          className="
            absolute
            top-0 right-0
            text-sm md:text-base
            font-light
            tracking-[0.08em]
            text-white/45
          "
        >
          please click
        </div>

        {/* Left image */}
        <div
          className="
            shrink-0
            w-[190px] h-[265px]
            md:w-[280px] md:h-[350px]
            rounded-2xl
            border border-white/15
            shadow-lg
            bg-white/5
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Right content */}
        <div className="flex flex-1 min-w-0 min-h-[350px] text-left">
          <div className="flex w-full flex-col">
            <h3
              className="
                text-3xl md:text-4xl
                font-light
                tracking-[0.05em]
                text-white/95
              "
            >
              {name}
            </h3>

            <p
              className="
                mt-4
                text-lg md:text-xl
                font-light
                tracking-[0.04em]
                text-white/70
              "
            >
              {role} • {year}
            </p>

            <ul
              className="
                mt-8
                list-disc
                pl-5
                space-y-4
                text-base md:text-lg
                font-light
                leading-relaxed
                tracking-[0.03em]
                text-white/80
              "
            >
              {children}
            </ul>

            {/* Bottom-right pills, ikut layout jadi tidak nabrak bullet */}
            {rightBox && (
              <div className="mt-auto pt-8 w-full flex justify-end">
                <div
                  className="
                    flex
                    flex-wrap
                    justify-end
                    gap-3
                    max-w-[520px]

                    text-xs md:text-sm
                    font-light
                    tracking-[0.04em]

                    [&>p]:rounded-full
                    [&>p]:border
                    [&>p]:border-sky-300/45
                    [&>p]:bg-sky-400/18
                    [&>p]:px-4
                    [&>p]:py-1.5
                    [&>p]:text-sky-100
                    [&>p]:shadow-[0_0_20px_rgba(125,211,252,0.16)]
                    [&>p]:whitespace-nowrap
                  "
                >
                  {rightBox}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}