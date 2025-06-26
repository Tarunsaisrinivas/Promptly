"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  GraduationCap,
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";
import Image from "next/image";

const toolsData = [
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    toolCount: "65+ Tools",
    status: "Available Now",
    description:
      "Enhance learning and teaching with AI-powered educational tools for coding, assignments, and academic support.",
    featuredTools: [
      "Coding Assistant",
      "Resume Builder",
      "Assignment Creator",
      "Diagram Generator",
    ],
    image: "/assets/aitools1.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: TrendingUp,
    toolCount: "45+ Tools",
    status: "Available Now",
    description:
      "Boost your marketing campaigns with AI-driven content creation, analytics, and customer engagement tools.",
    featuredTools: [
      "Content Generator",
      "Social Media Planner",
      "Email Campaign Builder",
      "Analytics Dashboard",
    ],
    image: "/assets/aitools2.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "hr",
    title: "Human Resources",
    icon: Users,
    toolCount: "38+ Tools",
    status: "Available Now",
    description:
      "Streamline HR processes with intelligent recruitment, employee management, and performance tracking solutions.",
    featuredTools: [
      "Candidate Screener",
      "Performance Tracker",
      "Interview Scheduler",
      "Onboarding Assistant",
    ],
    image: "/assets/aitools3.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Heart,
    toolCount: "52+ Tools",
    status: "Available Now",
    description:
      "Transform healthcare delivery with AI-powered diagnostic tools, patient management, and medical research solutions.",
    featuredTools: [
      "Diagnostic Assistant",
      "Patient Monitor",
      "Medical Research Tool",
      "Treatment Planner",
    ],
    image: "/assets/aitools1.png",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "business",
    title: "Business Operations",
    icon: Briefcase,
    toolCount: "72+ Tools",
    status: "Available Now",
    description:
      "Optimize business operations with AI-driven project management, automation, and decision-making tools.",
    featuredTools: [
      "Project Manager",
      "Workflow Automation",
      "Decision Analytics",
      "Resource Optimizer",
    ],
    image: "/assets/aitools2.png",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "development",
    title: "Development",
    icon: Code,
    toolCount: "89+ Tools",
    status: "Available Now",
    description:
      "Accelerate software development with AI-powered coding assistants, testing tools, and deployment solutions.",
    featuredTools: [
      "Code Generator",
      "Bug Detector",
      "API Builder",
      "Test Automation",
    ],
    image: "/assets/aitools3.png",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function AIToolsShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % toolsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentTool = toolsData[currentIndex];
  const IconComponent = currentTool.icon;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto">
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI Tools for Every Business Need
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From marketing to HR – find the exact tools your team needs to
            succeed
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <div className="space-y-8">
            <AnimatePresence mode="wait" custom={1}>
              <motion.div
                key={currentTool.id}
                custom={1}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${currentTool.color} text-white shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8" />
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {currentTool.title}
                    </h2>
                    <p className="text-gray-600">
                      {currentTool.toolCount} •{" "}
                      <span className="text-green-600">
                        {currentTool.status}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {currentTool.description}
                </p>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-600">
                      Featured Tools
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {currentTool.featuredTools.map((tool, index) => (
                      <motion.div
                        key={tool}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(255,255,255,0.8)",
                        }}
                        className="bg-white/40 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-white/30 cursor-pointer transition-all duration-200"
                      >
                        {tool}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${currentTool.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200`}
                >
                  <span>Discover Tools</span>
                  <ChevronRight className="h-5 w-5" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-md md:max-w-full h-[250px] md:h-full">
              {toolsData.map((tool, index) => {
                const position =
                  (index - currentIndex + toolsData.length) % toolsData.length;

                return (
                  <motion.div
                    key={tool.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1 - position * 0.25,
                      scale: 1 - position * (isMobile ? 0.1 : 0.05),
                      x: position * (isMobile ? 25 : 40),
                      zIndex: 10 - position,
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  >
                    <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                      <Image
                        src={tool.image}
                        alt={tool.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-2xl"
                        priority
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${tool.color} opacity-10`}
                      ></div>
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-800">
                          {tool.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
