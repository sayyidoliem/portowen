function getShortDescription(text, limit = 10) {
  if (!text) return "";

  const words = text.trim().split(/\s+/);
  const shortText = words.slice(0, limit).join(" ");

  return words.length > limit ? `${shortText}...` : shortText;
}

export default function ProjectCard({ project, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="
        group tangerine-shine relative block w-full overflow-hidden rounded-3xl
        border border-orange-200/25
        bg-[radial-gradient(circle_at_top_left,rgba(255,204,128,0.34),rgba(249,115,22,0.20)_38%,rgba(67,20,7,0.38)_100%)]
        p-6 text-left backdrop-blur-md
        shadow-[0_0_38px_rgba(251,146,60,0.20)]
        transition duration-300
        hover:-translate-y-1 hover:border-orange-200/45
        hover:shadow-[0_0_60px_rgba(251,146,60,0.34)]
        md:p-8
      "
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-amber-200/10 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1fr_360px] md:items-center">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            {project.pinned && (
              <span className="rounded-full border border-yellow-100/30 bg-yellow-200/20 px-3 py-1 text-sm text-yellow-50">
                Pinned
              </span>
            )}

            <span className="rounded-full border border-orange-100/20 bg-orange-100/10 px-3 py-1 text-sm text-orange-50/70">
              {project.year}
            </span>

            <span className="rounded-full border border-orange-100/25 bg-orange-300/15 px-3 py-1 text-sm text-orange-50">
              {project.type}
            </span>

            <span className="rounded-full border border-orange-100/25 bg-orange-300/15 px-3 py-1 text-sm text-orange-50">
              {project.role}
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {project.title}
          </h2>

          <p className="mt-3 text-base font-medium text-orange-50/75 md:text-lg">
            {project.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-orange-50/75 md:text-base">
            {getShortDescription(project.description, 15)}
          </p>

          <p className="mt-8 text-sm font-medium text-orange-50/60 transition group-hover:text-white">
            View details →
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-orange-100/20 bg-orange-100/10 shadow-[0_0_24px_rgba(251,146,60,0.18)]">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-56 w-full object-cover
              transition duration-500
              group-hover:scale-105
              md:h-64
            "
          />
        </div>
      </div>
    </button>
  );
}