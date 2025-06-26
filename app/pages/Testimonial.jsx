"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialCard() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-tr from-sky-200 to-blue-300 rounded-2xl p-6 shadow-lg border border-blue-100 max-w-md mx-auto"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-gray-500 to-gray-800 rounded-full w-16 h-16 text-center flex justify-center items-center font-bold text-2xl">
            SM
          </div>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 text-center">
          Sarah Mitchell
        </h4>
        <p className="text-sm text-gray-500 mb-3 text-center">
          Marketing Director
        </p>
        <p className="text-gray-600 mb-4 text-center">
          "We consolidated 8 AI subscriptions and saved ₹14,940 monthly while
          getting access to tools we didn't know existed."
        </p>
        <div className="flex justify-center space-x-1">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <Star
                key={idx}
                className="w-5 h-5 text-yellow-400 shadow-2xl shadow-white fill-yellow-400"
              />
            ))}
        </div>
      </motion.div>
    </div>
  );
}
