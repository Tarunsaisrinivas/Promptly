"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    id: 1,
    step: "STEP 1: DISCOVERY",
    title: "Understand Your Needs",
    description:
      "We analyze your business requirements and identify AI opportunities",
    icon: Search,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    step: "STEP 2: PLANNING",
    title: "Custom Solution Design",
    description: "Our AI experts design a solution tailored to your workflows",
    icon: Lightbulb,
    color: "from-purple-400 to-blue-500",
    bgColor: "bg-purple-100",
  },
  {
    id: 3,
    step: "STEP 3: DEVELOPMENT",
    title: "Build & Integrate",
    description:
      "We develop and integrate the solution into your existing systems",
    icon: Code,
    color: "from-green-400 to-teal-500",
    bgColor: "bg-green-100",
  },
  {
    id: 4,
    step: "STEP 4: DEPLOYMENT",
    title: "Ongoing Support",
    description: "Continuous monitoring, updates, and optimization",
    icon: Rocket,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-100",
  },
 
];

export default function CustomSolutions() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentStepData = processSteps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-blue-600 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Need Something Unique? We Build It.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            From concept to deployment – custom AI solutions for your specific
            needs
          </motion.p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
            Our Custom Solutions Process
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full transform -translate-y-1/2"></div>

              <motion.div
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform -translate-y-1/2"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(currentStep / (processSteps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>

              {processSteps.map((step, index) => (
                <motion.button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`relative z-10 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index <= currentStep
                      ? "bg-blue-500 border-blue-500"
                      : "bg-white border-gray-300 hover:border-blue-400"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: index <= currentStep ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-2xl"></div>

              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${currentStepData.color} opacity-10 rounded-3xl blur-xl`}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>

              <div className="relative p-12 text-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                  className="inline-flex items-center justify-center mb-8"
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-r ${currentStepData.color} p-6 shadow-lg`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className={`inline-block px-4 py-2 bg-gradient-to-r ${currentStepData.color} text-white text-sm font-semibold rounded-full mb-6 shadow-md`}
                >
                  {currentStepData.step}
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                >
                  {currentStepData.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
                >
                  {currentStepData.description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center space-x-3 mt-12"
        >
          {processSteps.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

       
      </div>
    </div>
  );
}
