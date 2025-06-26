"use client";

import { motion } from "framer-motion";

const aiToolsRow1 = [
  {
    id: 1,
    name: "MediAdvisor",
    description:
      "Empowering healthcare professionals with accurate medication insights 💊.",
  },
  {
    id: 2,
    name: "Equation Solver",
    description: "Solve equations effortlessly with AI! 🧮 ✨",
  },
  {
    id: 3,
    name: "Career Path Finder",
    description: "✨ Dream career? We've got your career insights! 💼",
  },
  {
    id: 4,
    name: "LawBot",
    description: "Effortless Legal Clarity: IPC & Enforcement ⚖️",
  },
  {
    id: 5,
    name: "ExploreTheCity",
    description: "Plan your trip ✈️ with this AI travel guide!",
  },
];

const aiToolsRow2 = [
  {
    id: 6,
    name: "Study Placement Prep",
    description:
      "Level up your coding game 🎮 with targeted practice sessions!",
  },
  {
    id: 7,
    name: "Grammatical",
    description: "Write like a pro, with AI by your side. 📝 📚",
  },
  {
    id: 8,
    name: "Competitive Exam Questions Generator",
    description: "Ace your exams 📚 with 🔥 targeted questions!",
  },
  {
    id: 9,
    name: "Course Link Provider",
    description:
      "Find your perfect course! 🎯 Udemy, Coursera, YouTube & more!",
  },
  {
    id: 10,
    name: "WriteGenius",
    description: "✨ Effortless, plagiarism-free writing. Get it done! 🚀",
  },
];

const ToolCard = ({ tool, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 },
    }}
    className="flex-shrink-0 w-80 mx-4 cursor-pointer group "
  >
    <motion.div
      className="h-32 bg-gradient-to-br from-blue-100/80 to-cyan-100/80 rounded-2xl p-6 border border-blue-200/50 shadow-sm hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
      whileHover={{
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
        borderColor: "rgba(59, 130, 246, 0.3)",
      }}
    >
      <div className="h-full flex flex-col">
        <motion.h3
          className="text-md font-bold text-gray-800 mb-1 group-hover:text-blue-700 transition-colors duration-200"
          whileHover={{ color: "#1d4ed8" }}
        >
          {tool.name}
        </motion.h3>
        <motion.p
          className="text-gray-600 text-sm leading-relaxed flex-1 group-hover:text-gray-700 transition-colors duration-200 "
          whileHover={{ color: "#374151" }}
        >
          {tool.description}
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
);

const MarqueeRow = ({
  tools,
  direction = "left",
  speed = 50,
}) => {
  
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <ToolCard key={`${tool.id}-${index}`} tool={tool} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Marquee() {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 overflow-hidden">
      <div className="max-w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            300+ AI Tools and Growing Weekly
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            From content creation to data analysis – find your next productivity
            breakthrough
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <MarqueeRow tools={aiToolsRow1} direction="left" speed={40} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <MarqueeRow tools={aiToolsRow2} direction="right" speed={45} />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
