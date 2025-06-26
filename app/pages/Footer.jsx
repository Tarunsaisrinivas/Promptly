"use client";

import { motion } from "framer-motion";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <footer className="bg-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/logo.png"
              alt="Promptly AI"
              width={32}
              height={32}
            />
            <span className="text-2xl font-bold text-pink-600">
              Promptly AI
            </span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">
            AI tools for everyone — personalized, powerful, and built for every
            industry.
          </p>
          <div className="flex gap-4 mt-6 text-gray-600">
            <Facebook className="hover:text-pink-500 transition duration-300" />
            <Youtube className="hover:text-pink-500 transition duration-300" />
            <Linkedin className="hover:text-pink-500 transition duration-300" />
            <Instagram className="hover:text-pink-500 transition duration-300" />
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">
            Company
            <span className="block h-1 w-6 bg-blue-500 mt-1" />
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">About company</a>
            </li>
            <li>
              <a href="#">Company services</a>
            </li>
            <li>
              <a href="#">Job opportunities</a>
            </li>
            <li>
              <a href="#">Creative people</a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">
            Customer
            <span className="block h-1 w-6 bg-blue-500 mt-1" />
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Client support</a>
            </li>
            <li>
              <a href="#">Custom AI Solution</a>
            </li>
            <li>
              <a href="#">Company story</a>
            </li>
            <li>
              <a href="#">Pricing packages</a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">
            Additional
            <span className="block h-1 w-6 bg-blue-500 mt-1" />
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <a href="#">Milestones</a>
            </li>
            <li>
              <a href="#">Latest news</a>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="border-t border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2">
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Terms of service
            </a>
          </div>
          <div className="text-center md:text-right">
            © 2025 Promptly AI. Crafted with passion.
          </div>
        </div>
      </div>
    </footer>
  );
};
