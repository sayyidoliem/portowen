export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 px-4 backdrop-blur-md
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="
          tangerine-shine relative h-[82vh] w-[88vw] max-w-7xl
          overflow-hidden rounded-[2rem]
          border border-orange-100/25
          bg-[radial-gradient(circle_at_top_left,rgba(180,83,9,0.94),rgba(120,53,15,0.96)_44%,rgba(41,18,7,0.99)_100%)]
          p-6 backdrop-blur-xl
          shadow-[0_0_80px_rgba(251,146,60,0.36)]
          md:p-10
        "
        style={{ animation: "softPulseGlow 4s ease-in-out infinite" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-yellow-200/10 blur-3xl" />

        <button
          type="button"
          onClick={onClose}
          className="
            absolute right-6 top-6 z-20 rounded-full
            border border-white/15 bg-white/10 px-4 py-2
            text-sm text-white/70 transition
            hover:bg-white/20 hover:text-white
          "
        >
          Close
        </button>

        <div className="relative h-full">
          <div className="grid h-full gap-8 lg:grid-cols-[1fr_460px]">
            <div className="flex h-full min-h-0 flex-col justify-between">
              <div className="min-h-0 overflow-y-auto pr-2">
                <div className="mb-5 flex flex-wrap gap-3 pr-20">
                  {project.pinned && (
                    <span className="rounded-full border border-yellow-100/30 bg-yellow-200/20 px-3 py-1 text-sm text-yellow-50">
                      Pinned
                    </span>
                  )}

                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/70">
                    {project.year}
                  </span>

                  <span className="rounded-full border border-orange-100/25 bg-orange-200/15 px-3 py-1 text-sm text-orange-50">
                    Type: {project.type}
                  </span>

                  <span className="rounded-full border border-orange-100/25 bg-orange-200/15 px-3 py-1 text-sm text-orange-50">
                    Role: {project.role}
                  </span>
                </div>

                <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-2xl text-xl font-medium text-orange-50/70">
                  {project.subtitle}
                </p>

                <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.07] p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Description
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-orange-50/75 md:text-base">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.context && (
                    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <h3 className="text-base font-semibold text-white">
                        Project Context
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-orange-50/70">
                        {project.context}
                    </p>
                    </div>
                )}

                {project.takeaway && (
                    <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                    <h3 className="text-base font-semibold text-white">
                        Key Takeaway
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-orange-50/70">
                        {project.takeaway}
                    </p>
                    </div>
                )}
                </div>
              </div>

              <div className="mt-6 shrink-0 border-t border-white/10 pt-6">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex rounded-full
                      border border-orange-100/25
                      bg-orange-300/20 px-6 py-3
                      text-sm font-medium text-white
                      shadow-[0_0_28px_rgba(251,146,60,0.22)]
                      transition hover:bg-orange-200/30
                    "
                  >
                    Open Project →
                  </a>
                ) : (
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm text-white/45">
                    No external link available
                  </span>
                )}
              </div>
            </div>

            <div className="hidden h-full min-h-0 overflow-hidden rounded-3xl border border-orange-100/20 bg-white/10 shadow-[0_0_36px_rgba(251,146,60,0.18)] lg:block">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-3xl border border-orange-100/20 bg-white/10 lg:hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}