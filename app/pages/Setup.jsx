"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const tools = [
  { name: "ChatGPT Plus", price: 1722, logo: "/assets/chatgpt.svg" },
  { name: "Midjourney", price: 861, logo: "/assets/midjourney.svg" },
  { name: "Canva", price: 1118, logo: "/assets/canva.svg" },
  { name: "Claude", price: 1722, logo: "/assets/claude.svg" },
  { name: "Notion AI", price: 861, logo: "/assets/notion.svg" },
  { name: "Grammarly", price: 2583, logo: "/assets/grammarly.svg" },
];

export default function ComparisonSection() {
  const [selected, setSelected] = useState([tools[0], tools[1]]);

  const handleToggle = (tool) => {
    setSelected((prev) =>
      prev.find((t) => t.name === tool.name)
        ? prev.filter((t) => t.name !== tool.name)
        : [...prev, tool]
    );
  };

  const total = selected.reduce((sum, t) => sum + t.price, 0);
  const ourPrice = 249;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-extrabold text-blue-900 mb-4"
        >
          Replace Your Entire AI Tech Stack
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Why pay for multiple tools when you can have everything in one place?
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-4">
              Current Setup
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Select your current AI tools:
            </p>

            <div className="space-y-4">
              {tools.map((tool) => {
                const isActive = selected.find((t) => t.name === tool.name);
                return (
                  <motion.button
                    key={tool.name}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleToggle(tool)}
                    className={`w-full flex items-center justify-between px-4 py-3 border rounded-xl transition-all duration-200 ${
                      isActive
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <span className="text-gray-800 font-medium">
                        {tool.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">
                        ₹{tool.price}/month
                      </span>
                      {isActive && (
                        <CheckCircle2 className="text-green-500 w-5 h-5" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-8 border-t pt-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-1">
                Monthly Total
              </h4>
              <p className="text-2xl font-bold text-blue-900">
                ₹{total.toLocaleString()}
              </p>
              <p className="text-sm text-red-500 mt-1">
                Overpaying by ₹{(total - ourPrice).toLocaleString()}/month
              </p>
              <p className="text-xs text-red-400">
                Annual overpayment: ₹
                {((total - ourPrice) * 12).toLocaleString()}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Our Platform
            </h3>
            <p className="text-sm text-gray-500 mb-8">
              All-in-one premium solution
            </p>

            <div className="flex justify-center mb-8">
              <Image
                src="/assets/logo.png"
                alt="Our Platform Logo"
                width={120}
                height={120}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {[
                "Code Assistant",
                "Image Generator",
                "Video Generator",
                "Diagram Generator",
                "Text to Speech",
                "Voice Cloner",
                "Assignment Generator",
                "JD Generator",
                "Resume Builder",
                "Dialogue Generator",
                "Report Maker",
                "Ad Script Generator",
              ].map((tool) => (
                <div
                  key={tool}
                  className="bg-blue-50 px-3 py-2 rounded-xl flex items-center space-x-2 border border-blue-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-700">{tool}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-1">
                Our Price
              </h4>
              <p className="text-2xl font-bold text-green-600">
                ₹{ourPrice.toLocaleString()}
              </p>
              <p className="text-sm text-green-500 mt-1">
                Save ₹{(total - ourPrice).toLocaleString()}/month
              </p>
              <p className="text-xs text-green-400">
                Annual savings: ₹{((total - ourPrice) * 12).toLocaleString()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
