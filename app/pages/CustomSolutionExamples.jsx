"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ShoppingBag,
  GraduationCap,
  Truck,
  Target,
  FileText,
  Calendar,
} from "lucide-react";

const solutionCategories = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    title: "Healthcare ",
    subtitle: "Patient data analysis and diagnostic assistance",
    capabilities: ["AI Diagnostic", "Patient Analytics", "Predictive Care"],
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    color: "from-orange-400 to-amber-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    title: "Retail AI Solutions",
    subtitle: "Personalized recommendation engines",
    capabilities: [
      "Smart Recommendations",
      "Inventory AI",
      "Customer Insights",
    ],
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    title: "Education AI Solutions",
    subtitle: "Personalized learning and assessment platforms",
    capabilities: [
      "Adaptive Learning",
      "Performance Analytics",
      "Content Generation",
    ],
  },
  {
    id: "transportation",
    name: "Transportation",
    icon: Truck,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    title: "Transportation AI Solutions",
    subtitle: "Route optimization and fleet management",
    capabilities: [
      "Route Optimization",
      "Fleet Management",
      "Predictive Maintenance",
    ],
  },
  {
    id: "custom",
    name: "Custom Solutions",
    icon: Target,
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    title: "Custom Solutions AI Solutions",
    subtitle: "Tailored AI solutions for your unique business needs",
    capabilities: [
      "Custom Development",
      "API Integration",
      "Scalable Architecture",
    ],
  },
];

export default function CustomSolutionExamples() {
  const [selectedCategory, setSelectedCategory] = useState(
    solutionCategories[2]
  ); 
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setSelectedCategory((prev) => {
        const currentIndex = solutionCategories.findIndex(
          (cat) => cat.id === prev.id
        );
        const nextIndex = (currentIndex + 1) % solutionCategories.length;
        return solutionCategories[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const IconComponent = selectedCategory.icon;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16 px-4 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
     
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Custom Solution Examples
          </motion.h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2 space-y-4"
          >
            {solutionCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              const isSelected = selectedCategory.id === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left group relative ${
                    isSelected
                      ? `${category.bgColor} ${category.borderColor} shadow-lg`
                      : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      animate={{
                        scale: isSelected ? 1.1 : 1,
                        rotate: isSelected ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-xl ${
                        isSelected
                          ? `bg-gradient-to-r ${category.color} text-white shadow-md`
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}
                    >
                      <CategoryIcon className="h-6 w-6" />
                    </motion.div>
                    <motion.span
                      animate={{
                        color: isSelected ? "#1f2937" : "#6b7280",
                        fontWeight: isSelected ? 600 : 500,
                      }}
                      className="text-lg transition-colors duration-300"
                    >
                      {category.name}
                    </motion.span>
                  </div>

                  <motion.div
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: isSelected ? 1 : 0,
                      opacity: isSelected ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}
                    ></div>
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`relative p-8 rounded-3xl border-2 ${selectedCategory.bgColor} ${selectedCategory.borderColor} shadow-xl backdrop-blur-sm`}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${selectedCategory.color} opacity-5 rounded-3xl blur-xl`}
                  animate={{ opacity: [0.05, 0.1, 0.05] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                ></motion.div>

                <div className="relative">
                  <div className="flex items-start space-x-4 mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                      className={`p-4 rounded-2xl bg-gradient-to-r ${selectedCategory.color} text-white shadow-lg`}
                    >
                      <IconComponent className="h-8 w-8" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                      >
                        {selectedCategory.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-gray-600 text-lg"
                      >
                        {selectedCategory.subtitle}
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mb-8"
                  >
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                      Key Capabilities:
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {selectedCategory.capabilities.map(
                        (capability, index) => (
                          <motion.div
                            key={capability}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.6 + index * 0.1,
                              duration: 0.5,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-200"
                          >
                            <span className="text-gray-700 font-medium">
                              {capability}
                            </span>
                          </motion.div>
                        )
                      )}
                    </div>
                  </motion.div>

                 
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                      Ready to discuss your{" "}
                      {selectedCategory.name.toLowerCase()} AI project?
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex-1 py-3 px-6 bg-gradient-to-r ${selectedCategory.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2`}
                      >
                        <FileText className="h-5 w-5" />
                        <span>Request for Quotation</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 py-3 px-6 bg-white/80 text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-white transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <Calendar className="h-5 w-5" />
                        <span>Schedule Strategy Call</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-sm">
            <div
              className={`w-2 h-2 rounded-full ${
                isAutoPlaying ? "bg-green-500 animate-pulse" : "bg-gray-400"
              }`}
            ></div>
            <span className="text-sm text-gray-600">
              {isAutoPlaying ? "Auto-cycling solutions" : "Hover to pause"}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
