import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const phases = [
  {
    id: "beginner",
    label: "Beginner",
    labelColor: "#6ee7b7",
    bgFrom: [16, 40, 30],
    items: [
      { name: "Algorithmic Thinking", sub: "Logic & problem solving", state: "done" },
      { name: "ML Fundamentals", sub: "Basic models & datasets", state: "done" },
      { name: "Neural Net Intro", sub: "Layers, weights, training", state: "done" },
      { name: "How AI Works", sub: "Modern AI mechanisms", state: "done" },
    ],
  },
  {
    id: "intermediate",
    label: "Intermediate",
    labelColor: "#c4b5fd",
    bgFrom: [30, 20, 60],
    items: [
      { name: "Transfer Learning", sub: "Pretrained models", state: "done" },
      { name: "Time Series", sub: "Sequential forecasting", state: "done" },
      { name: "AI Awareness", sub: "Drift & limitations", state: "done" },
      { name: "Transformer Basics", sub: "Contextual sequences", state: "done" },
      { name: "AI Systems Design", sub: "Data to deployment", state: "done" },
      { name: "Model Performance", sub: "Accuracy vs cost", state: "done" },
      { name: "Mini AI Agent", sub: "Autonomous workflows", state: "current" },
    ],
  },
  {
    id: "future",
    label: "Future Vision",
    labelColor: "#fbb86c",
    bgFrom: [8, 12, 50],
    milestone: { name: "Apple Academy", sub: "Next milestone" },
    items: [
      { name: "Advanced Transformer", sub: "Scalable architectures", state: "future" },
      { name: "Autonomous Agents", sub: "Reason & decide", state: "future" },
      { name: "AI Research", sub: "New methods & boundaries", state: "future" },
      { name: "AI Business", sub: "Strategy & impact", state: "future" },
      { name: "AGI Systems", sub: "Human-like intelligence", state: "future" },
      { name: "AI Engineering", sub: "Production-grade AI", state: "future" },
      { name: "Superintelligence", sub: "Beyond human cognition", state: "future" },
    ],
  },
];

const bgColors = [
  [16, 40, 30],
  [30, 20, 60],
  [8, 12, 50],
  [4, 8, 38],
];

const DOT_SPACING = 128;
const SIDE_PAD = 56;
const LINE_Y = 88;
const MILESTONE_GAP = 80;

function lerp(a, b, t) {
  const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  return Math.round(a + (b - a) * ease);
}

export default function LearningJourney() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const layout = [];
  let x = SIDE_PAD;
  const phaseRanges = [];

  phases.forEach((phase, pi) => {
    const phaseStart = x;

    if (phase.milestone) {
      layout.push({ type: "milestone", x, phase: pi, ...phase.milestone });
      x += MILESTONE_GAP + DOT_SPACING / 2;
    }

    const itemStart = x;
    phase.items.forEach((item) => {
      layout.push({ type: "dot", x, item, phase: pi });
      x += DOT_SPACING;
    });

    phaseRanges.push({ start: phaseStart, end: x, label: phase.label, labelColor: phase.labelColor, hasMilestone: !!phase.milestone });
    if (pi < phases.length - 1) x += DOT_SPACING * 0.3;
  });

  const totalWidth = x + SIDE_PAD;

  const currentNode = layout.find((n) => n.type === "dot" && n.item?.state === "current");
  const progressWidth = currentNode ? currentNode.x + 8 : 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = totalWidth;
    canvas.height = 200;
    const ctx = canvas.getContext("2d");

    for (let px = 0; px < totalWidth; px++) {
      const t = px / totalWidth;
      const seg = t * (bgColors.length - 1);
      const idx = Math.floor(seg);
      const lt = seg - idx;
      const c1 = bgColors[Math.min(idx, bgColors.length - 1)];
      const c2 = bgColors[Math.min(idx + 1, bgColors.length - 1)];
      const r = lerp(c1[0], c2[0], lt);
      const g = lerp(c1[1], c2[1], lt);
      const b = lerp(c1[2], c2[2], lt);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(px, 0, 1, 200);
    }
  }, [totalWidth]);

  const phaseDividers = [];
  phases.forEach((phase, pi) => {
    if (pi > 0) {
      const r = phaseRanges[pi];
      phaseDividers.push(r.start - DOT_SPACING * 0.15);
    }
  });

  return (
    <div className="w-full">
      <div className="h-[60vh]" />

      <div className="w-full py-24 bg-[#070511]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-semibold text-white/90 tracking-wide"
            style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.02em" }}
          >
            My Learning Journey
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(200,170,255,0.2)" }}
          >
            <div
              className="overflow-x-auto"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(167,139,250,0.2) transparent",
              }}
            >
              <div
                ref={containerRef}
                style={{ width: totalWidth, position: "relative", height: 200 }}
              >
                {/* Background canvas */}
                <canvas
                  ref={canvasRef}
                  style={{ position: "absolute", inset: 0, zIndex: 0 }}
                />

                {/* Phase labels */}
                {phaseRanges.map((pr, pi) => (
                  <div
                    key={pi}
                    style={{
                      position: "absolute",
                      top: 14,
                      left: pr.start + (pi === 0 ? 0 : 6),
                      zIndex: 4,
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: pr.labelColor,
                      pointerEvents: "none",
                    }}
                  >
                    {pr.label}
                  </div>
                ))}

                {/* Phase dividers */}
                {phaseDividers.map((dx, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: dx,
                      borderRight: "2px dashed rgba(255,255,255,0.1)",
                      zIndex: 3,
                      pointerEvents: "none",
                    }}
                  />
                ))}

                {/* Base line */}
                <div
                  style={{
                    position: "absolute",
                    top: LINE_Y,
                    left: 0,
                    width: totalWidth,
                    height: 2,
                    background: "rgba(255,255,255,0.08)",
                    zIndex: 2,
                  }}
                />

                {/* Progress line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: progressWidth }}
                  transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
                  style={{
                    position: "absolute",
                    top: LINE_Y,
                    left: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #34d399, #818cf8)",
                    zIndex: 2,
                  }}
                />

                {/* Dots & Milestones */}
                {layout.map((node, ni) => {
                  if (node.type === "milestone") {
                    return (
                      <div
                        key={`m-${ni}`}
                        style={{
                          position: "absolute",
                          top: LINE_Y,
                          left: node.x,
                          transform: "translate(-50%, -50%)",
                          zIndex: 6,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: -26,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: 8,
                            fontWeight: 600,
                            letterSpacing: "0.07em",
                            textTransform: "uppercase",
                            background: "rgba(253,186,116,0.12)",
                            color: "rgba(253,186,116,0.9)",
                            border: "1px solid rgba(253,186,116,0.28)",
                            borderRadius: 4,
                            padding: "2px 7px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {node.name}
                        </div>
                        <div
                          style={{
                            width: 15,
                            height: 15,
                            borderRadius: "50%",
                            border: "2px solid rgba(147,197,253,0.65)",
                            background: "rgba(147,197,253,0.1)",
                            boxShadow: "0 0 0 4px rgba(147,197,253,0.07)",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: 16,
                            left: "50%",
                            transform: "translateX(-50%)",
                            whiteSpace: "nowrap",
                            fontSize: 10,
                            fontWeight: 500,
                            color: "rgba(186,230,255,0.8)",
                            textAlign: "center",
                          }}
                        >
                          {node.name}
                          <div style={{ fontSize: 9, color: "rgba(147,197,253,0.4)", marginTop: 2 }}>
                            {node.sub}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const { item } = node;
                  const isCurrent = item.state === "current";
                  const isDone = item.state === "done";

                  return (
                    <div
                      key={`d-${ni}`}
                      style={{
                        position: "absolute",
                        top: LINE_Y,
                        left: node.x,
                        transform: "translate(-50%, -50%)",
                        zIndex: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      {isCurrent && (
                        <div
                          style={{
                            position: "absolute",
                            top: -26,
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: 8,
                            fontWeight: 500,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            background: "rgba(196,181,253,0.14)",
                            color: "rgba(220,210,255,0.9)",
                            border: "1px solid rgba(196,181,253,0.28)",
                            borderRadius: 4,
                            padding: "2px 6px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          you are here
                        </div>
                      )}
                      <div
                        style={{
                          width: isCurrent ? 15 : 11,
                          height: isCurrent ? 15 : 11,
                          borderRadius: "50%",
                          border: `2px solid ${
                            isCurrent
                              ? "#c4b5fd"
                              : isDone
                              ? "rgba(255,255,255,0.45)"
                              : "rgba(255,255,255,0.15)"
                          }`,
                          background: isCurrent
                            ? "rgba(196,181,253,0.2)"
                            : isDone
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                          boxShadow: isCurrent
                            ? "0 0 0 5px rgba(196,181,253,0.1)"
                            : "none",
                          transition: "transform 0.15s",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 16,
                          left: "50%",
                          transform: "translateX(-50%)",
                          whiteSpace: "nowrap",
                          fontSize: 10,
                          fontWeight: 500,
                          color: isCurrent
                            ? "rgba(220,210,255,0.92)"
                            : isDone
                            ? "rgba(255,255,255,0.5)"
                            : "rgba(255,255,255,0.22)",
                          textAlign: "center",
                        }}
                      >
                        {item.name}
                        <div
                          style={{
                            fontSize: 9,
                            color: isCurrent
                              ? "rgba(196,181,253,0.45)"
                              : "rgba(255,255,255,0.18)",
                            marginTop: 2,
                          }}
                        >
                          {item.sub}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
