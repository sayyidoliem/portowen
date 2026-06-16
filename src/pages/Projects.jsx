import { useEffect, useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

import cauImg from "../assets/CAU.jpeg";
import sreImg from "../assets/SRE.jpeg";
import manufImg from "../assets/manuf.png";
import visoraImg from "../assets/visora.jpeg";
import mh26 from "../assets/mh2026.jpeg";
import gemastik from "../assets/gemastik.jpeg";
import aiopen from "../assets/aiopen.jpeg";
import wicaraImg from "../assets/wicara.jpeg";
import stegoImg from "../assets/stego.jpeg";
import srifoImg from "../assets/srifo.jpeg";
import dataImg from "../assets/data.jpeg";
import aisImg from "../assets/ais.jpeg";
import cvImg from "../assets/cv.jpeg";
import nlpImg from "../assets/nlp.jpeg";
import ksfImg from "../assets/ksf.jpeg";
import kslImg from "../assets/ksl.jpeg";
import fpImg from "../assets/fp.jpeg";
import flImg from "../assets/fl.jpeg";
import wefestImg from "../assets/wefest.jpeg";
import fosterImg from "../assets/fostering.jpeg";

// some links
import mh2026 from "../assets/MiniHackathon.pdf";
import wicara from "../assets/WICARA.pdf";
import aispdf from "../assets/ais.pdf";
import cvpdf from "../assets/cv.pdf";
import nlppdf from "../assets/nlp.pdf";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeType, setActiveType] = useState("All");
  const [activeRole, setActiveRole] = useState("All");

  const projects = [
    {
      year: "2026",
      title: "AI International Hackathon",
      subtitle: "Representative of BINUS University in Global Hackathon, AI in Healthcare",
      type: "Hackathon",
      role: "Project Manager", 
      description:
        "(Technical details in GitHub README) Represented BINUS University Kemanggisan in an international AI in Healthcare hackathon at Central Asian University, which became a major learning curve in understanding international AI competition standards.",

      context:
        "Built an AI model for skin cancer classification and segmentation using prepared resources, while dealing with poor data quality that made preprocessing and model selection challenging.",

      takeaway:
        "Learned that strong AI solutions depend not only on the model, but also on data quality, preprocessing, and a well-planned pipeline.",
      image: cauImg,
      url: "https://github.com/Expanics/HACKATON_CAU2026/tree/main",
    },
    {
      year: "2026",
      title: "Mini Hackathon Alibaba",
      subtitle: "Learning the use of AI in transaction monitoring, attending as a finalist",
      type: "Hackathon",
      role: "Project Manager",
      description:
        "(Detailed in pdf file) Our idea was to support the growth of digital payment adoption by using AI to detect fraud and money laundering, helping increase trust in online transactions. Because real transaction data was not available, we used a synthetic dataset as a baseline to demonstrate the technical approach.",

      context:
        "Built an AI solution for detecting fraud and money laundering patterns in online transactions. Used a synthetic transaction dataset and explored a time-series model as the technical baseline.",

      takeaway:
        "Learned that judges may expect more than just a model. They also look for reliable data, clear deployment plans, and a more complete solution. Even though I did not win, I am still proud to have been a finalist because it helped me understand how real competition standards work.",

      image: mh26,
      url:mh2026,
    },
    {
      year: "2026",
      title: "SRE ITB Hackathon",
      subtitle: "Plastic Waste Low Energy Density-based Separation - Best Theme Ideas",
      type: "Hackathon",
      role: "Project Manager",
      description:
        "(Detailed in YouTube video) Led the project as Project Manager and won Best Theme Ideas with an IoT-based waste management concept using density comparison.",

      context:
        "Built a practical and low-energy plastic waste sorting idea using density comparison. The project focused on making waste separation simpler, more affordable, and easier to apply in real environments.",

      takeaway:
        "Learned how to lead an innovation project from idea framing to presentation, while making sure the solution stayed practical, understandable, and relevant to real waste management problems.",
      image: sreImg,
      url: "https://youtube.com/watch?v=-4cWVfCKgqw&feature=youtu.be",
    },
        {
      year: "2026",
      title: "GEMASTIK Smart City",
      subtitle: "V2X Emergency Vehicle Alert System, Inventing New Solution in Indonesia",
      type: "IT Competition",
      role: "Member",
      description:
        "(Ongoing) Developed a V2X-based emergency vehicle alert system because traditional sirens have many limitations. This project helped me understand what it takes to build a solution for large-scale real-world deployment, especially in a field that is still rarely implemented in Indonesia and mostly mastered by large companies.",
      image: gemastik,
    },
    {
      year: "2026",
      title: "AI Open President University Challenge",
      subtitle: "Developing AI Legal Assistant Equipped with auto update BPOM Regulation",
      type: "IT Competition",
      role: "Project Manager",
      description:
      "(Ongoing) Task based on a real case from TUV NORD Indonesia, where the challenge was to build an AI assistant that could help answer customer questions related to BPOM regulations.",

      context:
      "The project used updated BPOM regulation chunks by section, allowing the system to retrieve regulation-based information, support violation checks, and assist customer service in creating reports.",

      takeaway:
      "Learned how AI can be designed for regulatory support, where accuracy, updated knowledge, and clear information retrieval are more important than simply generating answers.",

      image: aiopen,
    },
    {
      year: "2026",
      title: "Manufacturing Anomaly Detection",
      subtitle: "Competition by SKK Migas, detecting equipment malfunction before explosions or unplanned shutdown",
      type: "IT Competition",
      role: "Member",
      description:
        "(Detailed in medium) Built a manufacturing anomaly detection solution using 1D-CNN and LSTM in a short competition timeline.",

      context:
        "The task was challenging because information about the real manufacturing workflow was limited, scattered, and difficult to filter. Available datasets were also mostly from overseas companies, making them less aligned with Indonesian manufacturing conditions.",

      takeaway:
        "Learned that solving industrial AI problems requires more than model selection. Understanding the real workflow and validating assumptions with domain experts is just as important.",

      image: manufImg,
      url: "https://medium.com/@owenputraha166/an-exploration-of-the-usage-of-convolutional-layers-1d-cnn-lstm-for-detecting-multiple-anomalies-f15024727a4a",
    },
    {
      year: "2025",
      title: "Healthkaton",
      subtitle: "Wicara — Agentic AI for BPOM Elder User",
      type: "Hackathon",
      role: "Member",
      description:
        "Created an agentic AI concept to help elderly users access and understand BPOM-related application features more easily.",

      context:
        "The competition was open to the public, and I was trusted to join a team with my lecturer, Stefanus Benhard. The task focused on adapting AI into a real user scenario, especially for elderly users who may struggle with complex application flows.",

      takeaway:
        "Learned how to design AI based on real user needs, not only technical features. This experience also helped me understand stakeholder problems and later became one of the reasons my lecturer became my mentor.",

      image: wicaraImg,
      url: wicara,
    },
    {
      year: "2025",
      title: "Datathon by RISTEK UI",
      subtitle: "First hackathon competition, I made a lot of mistake here",
      type: "Hackathon",
      role: "Project Manager",
      description:
        "Worked on a sepsis prediction task using medical data near the end of my second semester, where my limited AI knowledge at the time led to mistakes in preprocessing and model selection.",

      context:
        "The goal was to identify patient risk patterns from clinical features. I initially treated the task like a regular prediction problem, but later realized that the data needed a more suitable medical time-series approach with better missing-value handling.",

      takeaway:
        "Learned that poor preprocessing and wrong problem framing can make a model fail, even when the model itself seems good. This project became an important reminder to understand the data before choosing the method.",

      image: dataImg,
    },
    {
      year: "2025",
      title: "VISORA",
      subtitle: "My First AI System - AI Assistant for Blind People (v3 coming soon)",
      type: "Academic Assignment",
      role: "Project Manager",
      pinned: true,
      description:
        "(Detailed in README) VISORA was my first AI system and the first project I built when I still did not know much. It was created for visually impaired users using object detection and voice-based interaction. Although it was previously stuck because of computation limitations, VISORA V3 will be rebuilt using more modern training methods and cloud computing.",
      context:
        "VISORA is an important project to me because it grew together with my AI knowledge. V1 was built randomly with limited understanding, V2 became more structured and real-time but still faced technical limitations, and V3 is prepared for a major upgrade with more complete features.",
      takeaway:
        "Learned how difficult it is to turn an AI model into a usable system. VISORA became my starting point for understanding real AI products, accessibility, and the need for better training resources.",
      image: visoraImg,
      url: "https://github.com/owenputra6/VISORA",
    },
    {
      year: "2025",
      title: "SRIFOTON by Universitas Sriwijaya",
      subtitle: "First Data Science Competition",
      type: "IT Competition",
      role: "Project Manager",
      description:
        "Detailed in project 3 (old portolio). Joined my first data science competition and successfully reached the final stage.",

      context:
        "The project pushed me to explore the data science workflow more seriously, from understanding the dataset, analyzing patterns, selecting suitable approaches, and comparing state-of-the-art models.",

      takeaway:
        "Learned that data science is not only about using advanced models, but also about understanding the data, building strong reasoning, and knowing why a method fits the problem.",
      image: srifoImg,
      url: "https://drive.google.com/file/d/1u8G4W4RSILsQ5k80Nd-n5EeSaGaZeuZa/view?usp=sharing",
    },
    {
      year: "2025",
      title: "ACTION by UNESA",
      subtitle: "First Data Mining Competition",
      type: "IT Competition",
      role: "Project Manager",
      description:
        "Detailed in project 2 (old portolio). Worked on a data mining competition focused on classifying Indonesian food images with highly similar visual features.",

      context:
        "The task involved food classes such as sate padang, rendang, chicken dishes, and different types of soto. I experimented with self-supervised learning models like DINO to explore feature separation in the embedding space.",

      takeaway:
        "Learned that visually similar classes can still overlap even when the overall feature distribution looks separable. This helped me understand the importance of fine-grained feature analysis in image-based data mining.",

      image: stegoImg,
      url: "https://drive.google.com/file/d/1u8G4W4RSILsQ5k80Nd-n5EeSaGaZeuZa/view?usp=sharing",
    },
    {
      year: "2026",
      title: "Pre-Agentic NLP Retrieval System",
      subtitle: "NLP Course — Reducing Model Hallucination",
      type: "Academic Assignment",
      role: "Project Manager",
      description:
        "Built a pre-agentic NLP system to reduce hallucination by using retrieval instead of relying fully on a non-fine-tuned API model.",
      context:
        "The project focused on creating a more grounded NLP pipeline by retrieving relevant information before generating answers. Since API fine-tuning required much larger resources, retrieval became a more realistic middle-ground approach.",
      takeaway:
        "Learned that reducing hallucination is not only about using a stronger model, but also about giving the model better context through retrieval and a more controlled pipeline.",
      image: nlpImg,
      url: nlppdf,
    },
    {
      year: "2026",
      title: "Bus Stop Head Counting Dataset",
      subtitle: "AI Solution Course — Density-Based Decision Support",
      type: "Academic Assignment",
      role: "Member",
      description:
        "Worked on a data mining project to build a bus stop head counting dataset for density-based decision support.",
      context:
        "The project explored how halte density data can support public transportation decisions. By estimating crowd levels, the system could help identify crowded stops and support better planning.",
      takeaway:
        "Learned how AI solution design is not only about modeling, but also about preparing useful data that can support real decision-making in public infrastructure.",
      image: aisImg,
      url: aispdf,
    },
    {
      year: "2026",
      title: "Wrong-Way Vehicle Detection",
      subtitle: "Computer Vision Course — Vehicle Detection + Rule-Based Logic",
      type: "Academic Assignment",
      role: "Member",
      description:
        "Developed a computer vision system to detect vehicles moving in the wrong direction using detection and rule-based logic.",
      context:
        "The vehicle detection model was used to identify vehicles, while the wrong-way decision was handled using a non-AI algorithm. This was done to reduce prediction errors and make the movement logic more reliable.",
      takeaway:
        "Learned that combining AI with rule-based logic can make a system more stable, especially when the final decision requires consistency and safety.",
      image: cvImg,
      url: cvpdf,
    },
    {
      year: "2025",
      title: "First MLOps Deployment",
      subtitle: "MLOps Course — Deploying My First Trained Model",
      type: "Academic Assignment",
      role: "Project Manager",
      description:
        "Detailed in project 3 (old portfolio). Learned the deployment process for a trained model for the first time through an MLOps course project.",
      context:
        "I used the same model from my SRIFOTON competition experience and brought it into a deployment workflow. This helped me understand the gap between model experimentation and an actual usable system.",
      takeaway:
        "Learned that machine learning work does not stop at training. Deployment, environment setup, and system reliability are also important parts of building an AI solution.",
      image: srifoImg,
      url: "https://drive.google.com/file/d/1u8G4W4RSILsQ5k80Nd-n5EeSaGaZeuZa/view?usp=sharing",
    },
    {
      year: "2026",
      title: "Student LED",
      subtitle: "Teaching Data Structures and Python to First Year Student",
      type: "Non-Academic",
      role: "Member",
      description:
        "Helped BINUS in a program that teaches first-year students about Data Structures, while also preparing them to teach high school students for community service.",
      context:
        "The program was designed because first-year students were currently facing Data Structures, so they needed stronger understanding before teaching others. Unexpectedly, some non-IT students also joined, so we adapted by also teaching Python basics to make the program useful for them.",
      takeaway:
        "Learned how to teach future instructors, simplify technical concepts, and adjust the learning flow based on the participants' backgrounds. This experience helped me improve my teaching, communication, and mentoring skills.",
      image: fosterImg,
      url:  "https://youtu.be/QEbeojHIGIc?si=i5qTzeZXA4lEB04O",
    },
    {
      year: "2026",
      title: "Kemanggisan Sport League Medical Team",
      subtitle: "Member — FARCO Training Division",
      type: "Non-Academic",
      role: "Member",
      description:
        "Served again as part of the medical team for Kemanggisan Sport League with more experience and responsibility.",
      context:
        "By this point, I was calmer in handling patients, had started to be trusted more by the team, and had joined the FARCO training division.",
      takeaway:
        "Learned how experience builds confidence, especially in medical volunteer work where calmness, procedure, and teamwork are important.",
      image: kslImg,
    },
     {
      year: "2025",
      title: "Freshmen Partner",
      subtitle: "Project Manager — Full-Year Freshmen Guidance",
      type: "Non-Academic",
      role: "Project Manager",
      description:
        "Served as a Freshmen Partner with full-year responsibility to guide freshmen through their first year at BINUS.",
      context:
        "Unlike a short orientation role, Freshmen Partner required continuous responsibility throughout the year. I helped freshmen adapt, introduced them to the campus community, and also handled activities such as mangrove planting and its administration.",
      takeaway:
        "Learned that mentoring is not only about helping at the beginning, but also about consistently being responsible for freshmen as they grow through their first year.",
      image: fpImg,
    },
    {
      year: "2025",
      title: "WEFEST BINUS Medical Team",
      subtitle: "Member — FARCO Pre-Organization Medical Volunteer",
      type: "Non-Academic",
      role: "Member",
      description:
        "Served as part of the FARCO medical team during WEFEST BINUS, a large event involving BINUSIANs from Greater Jakarta.",
      context:
        "The situation was more intense because the team handled more than 20 people who fainted during the event. We followed medical response procedures and assisted the doctor assigned by BINUS.",
      takeaway:
        "Learned the importance of coordination, procedural response, and staying calm when handling many patients in a crowded event environment.",
      image: wefestImg,
    },
    {
      year: "2025",
      title: "Kemanggisan Sport Festival Medical Team",
      subtitle: "Member — FARCO Pre-Organization Medical Volunteer",
      type: "Non-Academic",
      role: "Member",
      description:
        "Joined the medical team for Kemanggisan Sport Festival as one of my first FARCO medical volunteer experiences.",
      context:
        "At first, I was truly a beginner and felt nervous on the first day because I had to adapt to an existing medical response flow, equipment usage, and patient handling procedures. After that, I became more responsive and started adapting better, although I was still not fully fluent yet.",
      takeaway:
        "Learned how to adapt quickly under pressure, especially in a real event setting where medical volunteers need to stay alert and follow procedures.",
      image: ksfImg,
    },
    {
      year: "2025",
      title: "Freshmen Leader",
      subtitle: "Project Manager — Supporting New BINUS Freshmen",
      type: "Non-Academic",
      role: "Project Manager",
      description:
        "Served as a Freshmen Leader to support BINUS in guiding new freshmen during their early transition into university life.",
      context:
        "I helped new students adapt to campus life, understand the university environment, and feel more comfortable entering BINUS as freshmen.",
      takeaway:
        "Learned how to communicate with new students, guide them through unfamiliar situations, and contribute to a smoother campus orientation experience.",
      image: flImg,
    },
  ];

  const types = [
    "All",
    "Hackathon",
    "IT Competition",
    "Academic Assignment",
    "Non-Academic",
  ];

  const roles = ["All", "Project Manager", "Member"];

  const filteredProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const typeMatch = activeType === "All" || project.type === activeType;
      const roleMatch = activeRole === "All" || project.role === activeRole;

      return typeMatch && roleMatch;
    });

    return [...filtered].sort((a, b) => {
      if (a.pinned === b.pinned) return 0;
      return a.pinned ? -1 : 1;
    });
  }, [activeType, activeRole]);

  const showHackathonPinned =
    (activeType === "All" || activeType === "Hackathon") &&
    (activeRole === "All" || activeRole === "Project Manager");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 space-y-12">
      <style>
        {`
          @keyframes tangerineShine {
            0% {
              transform: translateX(-130%) skewX(-18deg);
              opacity: 0;
            }

            35% {
              opacity: 0.55;
            }

            70% {
              opacity: 0.25;
            }

            100% {
              transform: translateX(165%) skewX(-18deg);
              opacity: 0;
            }
          }

          @keyframes softPulseGlow {
            0%, 100% {
              box-shadow:
                0 0 32px rgba(251, 146, 60, 0.16),
                inset 0 0 20px rgba(255, 255, 255, 0.03);
            }

            50% {
              box-shadow:
                0 0 58px rgba(251, 146, 60, 0.32),
                inset 0 0 28px rgba(255, 255, 255, 0.06);
            }
          }

          .tangerine-shine::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 42%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.22),
              transparent
            );
            animation: tangerineShine 4.2s ease-in-out infinite;
            pointer-events: none;
          }

          .hide-scrollbar {
            scrollbar-width: none;
          }

          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      <Reveal>
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.45em] text-orange-200/50">
            Selected Works
          </p>

          <h1
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            className="
              text-5xl font-semibold tracking-[-0.08em] text-white
              md:text-7xl
            "
          >
            Projects
          </h1>

          <p className="mx-auto max-w-2xl text-white/60">
            Selected AI systems, competitions, and product ideas I have built,
            joined, or developed. <br/> <b>You can directly see my improvements from year 2025 to year 2026</b>
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div
          className="
            tangerine-shine relative overflow-hidden rounded-full
            border border-orange-200/20
            bg-[linear-gradient(135deg,rgba(255,172,82,0.26),rgba(249,115,22,0.16),rgba(91,38,10,0.34))]
            px-4 py-4 backdrop-blur-md
            shadow-[0_0_42px_rgba(251,146,60,0.18)]
          "
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,220,150,0.22),transparent_38%)]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1a0b04]/70 to-transparent" />

          <div
            className="
              hide-scrollbar relative flex items-center gap-3 overflow-x-auto
              whitespace-nowrap
            "
          >
            <span className="shrink-0 text-sm font-semibold tracking-wide text-orange-100/85">
              Type:
            </span>

            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`
                  shrink-0 rounded-full border px-4 py-2 text-sm font-medium
                  transition duration-300
                  ${
                    activeType === type
                      ? "border-orange-100/70 bg-orange-200/25 text-white shadow-[0_0_24px_rgba(251,191,36,0.36)]"
                      : "border-orange-100/15 bg-white/[0.04] text-orange-50/55 hover:border-orange-100/35 hover:bg-orange-200/10 hover:text-white"
                  }
                `}
              >
                {type}
              </button>
            ))}

            <div className="mx-2 h-7 w-px shrink-0 bg-orange-100/20" />

            <span className="shrink-0 text-sm font-semibold tracking-wide text-orange-100/85">
              Role:
            </span>

            {roles.map((role) => (
              <button
                key={role}
                type="button"
                onClick={() => setActiveRole(role)}
                className={`
                  shrink-0 rounded-full border px-4 py-2 text-sm font-medium
                  transition duration-300
                  ${
                    activeRole === role
                      ? "border-amber-100/70 bg-amber-200/25 text-white shadow-[0_0_24px_rgba(251,191,36,0.36)]"
                      : "border-orange-100/15 bg-white/[0.04] text-orange-50/55 hover:border-orange-100/35 hover:bg-orange-200/10 hover:text-white"
                  }
                `}
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {showHackathonPinned && (
        <Reveal>
          <div
            className="
              tangerine-shine relative block w-full overflow-hidden rounded-3xl
              border border-orange-200/25
              bg-[radial-gradient(circle_at_top_left,rgba(255,204,128,0.34),rgba(249,115,22,0.20)_38%,rgba(67,20,7,0.38)_100%)]
              p-6 text-left backdrop-blur-md
              shadow-[0_0_38px_rgba(251,146,60,0.20)]
              md:p-8
            "
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-amber-200/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_260px] md:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-yellow-100/30 bg-yellow-200/20 px-3 py-1 text-sm text-yellow-50">
                    Pinned
                  </span>

                  <span className="rounded-full border border-orange-100/25 bg-orange-300/15 px-3 py-1 text-sm text-orange-50">
                    Hackathon
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Hackathon
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-orange-50/75 md:text-base">
                  Solve problems with limited time, limited rest, and teammates with different ways of thinking. Because of that, I learned how to stay calm, adapt quickly, and help the team move forward together.
                </p>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-9xl md:text-[11rem]">💻</span>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      <div className="grid gap-8">
        {filteredProjects.map((project, index) => (
          <Reveal key={`${project.title}-${index}`}>
            <ProjectCard project={project} onSelect={setSelectedProject} />
          </Reveal>
        ))}
      </div>

      {filteredProjects.length === 0 && !showHackathonPinned && (
        <Reveal>
          <div className="rounded-3xl border border-orange-100/15 bg-orange-100/5 p-10 text-center text-orange-50/60">
            No project found for this tag combination.
          </div>
        </Reveal>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}