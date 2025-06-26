"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const navLinks = ["Search", "Categories", "Pricing", "Featured", "FAQ"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      controls.start(scrolled ? "scrolled" : "default");
    } else {
     
      controls.set({ width: "100%" });
    }
  }, [scrolled, controls, isDesktop]);

  const variants = {
    default: {
      width: "100%",
      transition: { type: "spring", stiffness: 80 },
    },
    scrolled: {
      width: "70%",
      transition: { type: "bounce", stiffness: 80 },
    },
  };

  return (
    <motion.div
      animate={controls}
      variants={variants}
      className={`
        fixed top-0 left-0 right-0 z-50
        bg-[#d2f5fa]/30 backdrop-blur-md shadow-xl
        ring-1 ring-white/20 border border-white/10

        md:top-8 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2
        md:rounded-full md:px-8 md:py-3 md:max-w-6xl
        md:ring-1 md:ring-white/20 md:border md:border-white/10
        px-4 py-3
      `}
    >
      <div className="flex items-center justify-between flex-wrap gap-4 max-w-full">
       
        <div className="flex items-center space-x-2">
          <Image src="/assets/logo.png" alt="Logo" width={36} height={36} />
          <span className="text-lg font-bold bg-gradient-to-r from-pink-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text whitespace-nowrap">
            Promptly AI
          </span>
        </div>

        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav
          className={`
            ${isOpen ? "block" : "hidden"} 
            w-full md:flex md:w-auto md:items-center md:justify-center gap-6 text-gray-800 font-medium text-base mt-3 md:mt-0
          `}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block md:inline-block px-2 py-1 hover:text-blue-600 transition rounded-md"
              onClick={() => setIsOpen(false)} 
            >
              {link}
            </a>
          ))}
        </nav>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transition whitespace-nowrap"
        >
          Start Free Trial
        </motion.button>
      </div>

   
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-3 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg transition whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
