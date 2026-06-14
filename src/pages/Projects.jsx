import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

import cauImg from "../assets/CAU.jpeg";
import sreImg from "../assets/SRE.jpeg";
import manufImg from "../assets/manuf.png";
import visoraImg from "../assets/visora.jpeg";

export default function Projects() {
  const projects = [
    {
      year: "2026",
      title: "AI International Hackathon",
      subtitle: "as a Participant - Central Asian University",
      description:
        "(Detailed in README) Participated in an international AI hackathon and achieved as a Participant. This experience became a major shift in my learning curve and helped me understand international AI competition standards.",
      image: cauImg,
      url: "https://github.com/Expanics/HACKATON_CAU2026/tree/main",
    },
    {
      year: "2026",
      title: "Best Theme Ideas - SRE ITB",
      subtitle: "Institut Teknologi Bandung",
      description:
        "(Detailed in youtube video) Won Best Theme Ideas with an IoT-based waste management concept using density comparison, built around practical and low-energy plastic waste sorting.",
      image: sreImg,
      url: "youtube.com/watch?v=-4cWVfCKgqw&feature=youtu.be",
    },
    {
      year: "2026",
      title: "Manufacturing Anomaly Detection",
      subtitle: "1D-CNN + LSTM Model",
      description:
        "(Detailed in Medium) Developed a manufacturing anomaly detection system using 1D-CNN and LSTM to analyze time-series sensor data and detect abnormal machine behavior.",
      image: manufImg,
      url: "https://medium.com/@owenputraha166/an-exploration-of-the-usage-of-convolutional-layers-1d-cnn-lstm-for-detecting-multiple-anomalies-f15024727a4a",
    },
    {
      year: "2025",
      title: "VISORA",
      subtitle: "My First AI System",
      description:
        "(Detailed in README) Built my first AI system for visually impaired users using object detection and voice-based interaction. Version 3 is planned with instance relation, fine-tuned models, and distance calculation.",
      image: visoraImg,
      url: "https://github.com/owenputra6/VISORA",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 space-y-12">
      <Reveal>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-white">
            Projects
          </h1>

          <p className="mx-auto max-w-2xl text-white/60">
            Selected AI systems, competitions, and product ideas I have built,
            joined, or developed.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <Link
              to={project.url}
              className="
                group block overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.04]
                p-6 md:p-8 backdrop-blur-md
                transition duration-300
                hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]
              "
            >
              <div className="grid gap-8 md:grid-cols-[1fr_360px] md:items-center">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/50">
                      {project.year}
                    </span>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/50">
                      Project {index + 1}
                    </span>
                  </div>

                  <h2 className="text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/45">
                    {project.subtitle}
                  </p>

                  <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                    {project.description}
                  </p>

                  <p className="mt-8 text-sm font-medium text-white/50 transition group-hover:text-white">
                    View project →
                  </p>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
