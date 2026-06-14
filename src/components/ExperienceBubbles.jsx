import visoraImg from "../assets/visora.jpeg";
import sreImg from "../assets/SRE.jpeg";
import cauImg from "../assets/CAU.jpeg";
import manufImg from "../assets/manuf.png";

export default function ExperienceBubbles() {
  const experiences = [
    {
      year: "2026",
      image: cauImg,
      title: "AI International Hackathon",
      subtitle: "as a Participant - Central Asian University",
      description:
        "Participated in an international AI hackathon and achieved as a Participant. This experience became a major shift in my learning curve and helped me understand how competitive international AI environments work.",
    },
    {
      year: "2026",
      image: sreImg,
      title: "Best Theme Ideas - SRE ITB",
      subtitle: "Institut Teknologi Bandung",
      description:
        "Won Best Theme Ideas with an IoT-based waste management concept using density comparison. This project was part of my journey participating in multiple prestigious innovation competitions in Indonesia.",
    },
    {
      year: "2026",
      image: manufImg,
      title: "Manufacturing Anomaly Detection",
      subtitle: "1D-CNN + LSTM Model",
      description:
        "Developed a manufacturing anomaly detection system using 1D-CNN and LSTM to analyze time-series sensor patterns and detect abnormal behavior in industrial production data.",
    },
    {
      year: "2025",
      image: visoraImg,
      title: "VISORA",
      subtitle: "My First AI System",
      description:
        "Built my first AI system for visually impaired users using object detection and voice-based interaction. It is currently in version 2 and will be developed into version 3 with instance relation, fine-tuned models, and distance calculation.",
    },
  ];

  return (
    <div className="w-full space-y-10">
      {experiences.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-[80px_1fr] gap-5 md:grid-cols-[120px_1fr]"
        >
          {/* Year */}
          <div className="pt-4 text-right">
            <p className="text-sm font-medium text-white/40">
              {item.year}
            </p>
          </div>

          {/* Card */}
          <div
            className="
              min-h-[300px] rounded-2xl
              border border-white/15 bg-white/[0.04]
              p-6 backdrop-blur-md
              shadow-[0_0_40px_rgba(255,255,255,0.04)]
              transition duration-300
              hover:-translate-y-1 hover:bg-white/[0.07] hover:border-white/25
            "
          >
            <div className="grid h-full gap-6 md:grid-cols-[1fr_260px] md:items-center">
              {/* Left Content */}
              <div>
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm text-white/70">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-white/45">
                  {item.subtitle}
                </p>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </div>

              {/* Right Image */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover md:h-56"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}