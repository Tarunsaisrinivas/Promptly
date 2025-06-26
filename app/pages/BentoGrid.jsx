// Fixed and responsive BentoGrid component
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  ImageIcon,
  GitBranch,
  Code,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const aiTools = [
  {
    id: "video-generation",
    title: "Video Generation Suite",
    icon: Play,
    description: "Create professional videos with our advanced AI models.",
    features: [
      { label: "Promptly 1:", detail: "Text-to-video with synchronized audio" },
      { label: "Promptly 2:", detail: "Image-to-video with audio matching" },
    ],
    enhancement: "Enhanced prompt optimization included",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-cyan-50/80",
    borderColor: "border-cyan-200/50",
    hasImage: true,
    mockupImage: "/assets/bento1.png",
    colSpan: "lg:col-span-2",
  },
  {
    id: "image-generation",
    title: "Image Generation Studio",
    icon: ImageIcon,
    description: "Generate high-quality images with multiple AI models.",
    features: [
      { label: "Promptly Gen 1:", detail: "Premium quality generation" },
      {
        label: "5 Additional Models:",
        detail: "Specialized for different needs",
      },
    ],
    enhancement: "Smart prompt enhancement included",
    color: "from-purple-400 to-blue-500",
    bgColor: "bg-blue-50/80",
    borderColor: "border-blue-200/50",
    hasImage: false,
  },
  {
    id: "diagram-generator",
    title: "Diagram Generator Pro",
    icon: GitBranch,
    description: "Create professional diagrams instantly.",
    features: [
      { label: "Supports 12+ diagram types:" },
      { label: "• ER Diagrams", detail: "• Flowcharts" },
      { label: "• Mind Maps", detail: "• User Journeys" },
      { label: "• Pie Charts", detail: "• Network Diagrams" },
    ],
    enhancement: "Generate from simple descriptions",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-emerald-50/80",
    borderColor: "border-emerald-200/50",
    hasImage: false,
  },
  {
    id: "coding-assistant",
    title: "Ananya - AI Coding Assistant",
    icon: Code,
    description:
      "Advanced coding assistant that outperforms industry benchmarks.",
    features: [
      { label: "• Dual-model architecture for optimal performance" },
      { label: "• Superior code quality at competitive pricing" },
      { label: "• Supports multiple programming languages" },
    ],
    enhancement: "Benchmark-beating performance",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50/80",
    borderColor: "border-indigo-200/50",
    hasImage: true,
    mockupImage: "/assets/bento2.png",
    colSpan: "lg:col-span-4",
  },
];

export default function BentoGrid() {
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            4 Must-Try AI Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked favorites that showcase the incredible potential of AI
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {aiTools.map((tool) => {
            const Icon = tool.icon;
            const isHovered = hoveredTool === tool.id;

            return (
              <div
                key={tool.id}
                onMouseEnter={() => setHoveredTool(tool.id)}
                onMouseLeave={() => setHoveredTool(null)}
                className={`relative group p-6 rounded-3xl border-2 shadow-lg overflow-hidden transition-all duration-300 ${
                  tool.bgColor
                } ${tool.borderColor} backdrop-blur-sm ${
                  tool.colSpan || "lg:col-span-2"
                }`}
              >
                {/* Image */}
                {tool.hasImage && (
                  <div className="absolute top-4 right-4 z-0 opacity-50 group-hover:opacity-80 transition duration-300">
                    <Image
                      src={tool.mockupImage}
                      alt="Mockup"
                      width={tool.id === "video-generation" ? 280 : 240}
                      height={140}
                      className="rounded-xl hidden md:block border-2 border-white/30 shadow-lg"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${tool.color} text-white shadow-md`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    {tool.features.map((f, idx) => (
                      <div key={idx} className="text-gray-700">
                        <strong>{f.label}</strong> {f.detail}
                      </div>
                    ))}
                  </div>

                  <div className="mb-4 inline-flex items-center gap-2 text-xs bg-white/60 border border-white/40 p-2 rounded-lg text-gray-700">
                    <Sparkles className="w-3 h-3 text-yellow-500" />
                    {tool.enhancement}
                  </div>

                  <button
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-white font-semibold text-sm rounded-xl shadow-lg bg-gradient-to-r ${tool.color}`}
                  >
                    Try Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
