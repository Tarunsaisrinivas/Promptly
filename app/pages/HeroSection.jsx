"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fullPrompt =
  "I need help finding the perfect Report Generator for my workspace";

function TypingPrompt() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullPrompt[index]);
      index++;
      if (index >= fullPrompt.length) clearInterval(interval);
    }, 40); 
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
      {displayedText.split(/(Report|Generator)/gi).map((part, idx) =>
        part === "Report" || part === "Generator" ? (
          <span key={idx} className="text-sky-600 underline">
            {part}
          </span>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
      <span className="animate-pulse inline-block w-1 h-6 bg-gray-600 ml-1 align-middle"></span>
    </p>
  );
}

export default function HeroSection() {
  const [showPromptInput, setShowPromptInput] = useState(false);

  return (
    <section className=" flex items-center justify-center min-h-screen bg-[#e6fcff] px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text"
        >
          Find Your Perfect AI Tool in Seconds
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 mt-4"
        >
          Just describe what you need – our AI finds the right tool instantly
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-[#d2f5fa]/60 backdrop-blur-lg mt-10 px-6 py-10 rounded-xl shadow-xl border border-white/20"
        >
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <button
              className={`bg-white/70 text-gray-800 px-5 py-2 rounded-full border border-gray-300 hover:bg-white transition ${
                !showPromptInput ? "ring-2 ring-blue-400" : ""
              }`}
              onClick={() => setShowPromptInput(false)}
            >
              ✨ Get suggestions
            </button>
            <button
              className={`bg-white/70 text-gray-800 px-5 py-2 rounded-full border border-gray-300 hover:bg-white transition ${
                showPromptInput ? "ring-2 ring-blue-400" : ""
              }`}
              onClick={() => setShowPromptInput(true)}
            >
              ✍️ Write a prompt
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!showPromptInput ? (
              <motion.div
                key="typedPrompt"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <TypingPrompt />
              </motion.div>
            ) : (
              <motion.div
                key="inputPrompt"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <textarea
                  rows="3"
                  type="text"
                  placeholder="Describe your need (e.g., AI video editor for YouTube)"
                  className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>

         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
          >
            Find My AI Tool 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
