"use client";

import { motion } from "framer-motion";

// Neural network layers: input (4) -> hidden (5) -> hidden (4) -> output (2)
const layers = [
  { nodes: [{ y: 60 }, { y: 140 }, { y: 220 }, { y: 300 }], x: 40 },
  { nodes: [{ y: 40 }, { y: 110 }, { y: 180 }, { y: 250 }, { y: 320 }], x: 160 },
  { nodes: [{ y: 60 }, { y: 140 }, { y: 220 }, { y: 300 }], x: 280 },
  { nodes: [{ y: 130 }, { y: 230 }], x: 400 },
];

// Generate connections between consecutive layers
function getConnections() {
  const conns: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
  let idx = 0;
  for (let l = 0; l < layers.length - 1; l++) {
    for (const from of layers[l].nodes) {
      for (const to of layers[l + 1].nodes) {
        conns.push({
          x1: layers[l].x,
          y1: from.y,
          x2: layers[l + 1].x,
          y2: to.y,
          delay: (idx * 0.05) % 3,
        });
        idx++;
      }
    }
  }
  return conns;
}

const connections = getConnections();

export default function HeroAnimation() {
  return (
    <div className="relative w-[340px] h-[380px] lg:w-[440px] lg:h-[380px]">
      <svg
        viewBox="0 0 440 380"
        fill="none"
        className="w-full h-full"
      >
        {/* Connections */}
        {connections.map((c, i) => (
          <motion.line
            key={i}
            x1={c.x1}
            y1={c.y1}
            x2={c.x2}
            y2={c.y2}
            stroke="#d5d4d0"
            strokeWidth="1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: c.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Signal pulses traveling along connections */}
        {connections
          .filter((_, i) => i % 5 === 0)
          .map((c, i) => (
            <motion.circle
              key={`pulse-${i}`}
              r="3"
              fill="#00c781"
              initial={{ cx: c.x1, cy: c.y1, opacity: 0 }}
              animate={{
                cx: [c.x1, c.x2],
                cy: [c.y1, c.y2],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            />
          ))}

        {/* Nodes */}
        {layers.map((layer, li) =>
          layer.nodes.map((node, ni) => (
            <motion.g key={`${li}-${ni}`}>
              {/* Glow */}
              <motion.circle
                cx={layer.x}
                cy={node.y}
                r="14"
                fill="#00c781"
                opacity="0"
                animate={{ opacity: [0, 0.12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (li + ni) * 0.3,
                  ease: "easeInOut",
                }}
              />
              {/* Node body */}
              <motion.circle
                cx={layer.x}
                cy={node.y}
                r="7"
                fill="white"
                stroke="#1a1a1a"
                strokeWidth="2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: (li + ni) * 0.2,
                  ease: "easeInOut",
                }}
              />
              {/* Inner dot */}
              <motion.circle
                cx={layer.x}
                cy={node.y}
                r="3"
                fill="#1a1a1a"
                animate={{ fill: ["#1a1a1a", "#00c781", "#1a1a1a"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: (li * 1.2 + ni * 0.4) % 4,
                  ease: "easeInOut",
                }}
              />
            </motion.g>
          ))
        )}

        {/* Title */}
        <text x="220" y="20" textAnchor="middle" className="fill-[#999] text-[11px] font-mono uppercase" letterSpacing="3">
          Neural Networks
        </text>

        {/* Layer labels */}
        <text x="40" y="355" textAnchor="middle" className="fill-[#bbb] text-[10px] font-mono">
          input
        </text>
        <text x="160" y="355" textAnchor="middle" className="fill-[#bbb] text-[10px] font-mono">
          hidden
        </text>
        <text x="280" y="355" textAnchor="middle" className="fill-[#bbb] text-[10px] font-mono">
          hidden
        </text>
        <text x="400" y="355" textAnchor="middle" className="fill-[#bbb] text-[10px] font-mono">
          output
        </text>
      </svg>
    </div>
  );
}
