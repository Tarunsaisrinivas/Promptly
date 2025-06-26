"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Users = ({ autoplay = false, className = "" }) => {
  const testimonials = [
    {
      quote:
        "I can't believe how much time Promptly has saved me! From creating quick summaries with Book Summarizer to optimizing Instagram content with InstaOptimizer, it's an essential toolkit for any entrepreneur ",
      name: "Jake Miles",
      designation: "Social Media Manager",
      src: "/assets/boy1.png",
    },
    {
      quote:
        "The sheer variety of tools in Promptly is impressive. I used the PlaylistFormation AI to create YouTube playlists and the InstaGrowth tool to boost my social media engagement. My business has grown rapidly ever since! ",
      name: "Ronald Cooper",
      designation: "Small Business Owner",
      src: "/assets/boy2.jpg",
    },
    {
      quote:
        "As a content creator, Promptly's PDF Reader and Form Builder are game-changers. I can easily convert ideas into well-structured forms and documents. It has saved me so much time and effort! ",
      name: "Ama Richards",
      designation: "Digital Marketer",
      src: "/assets/girl2.jpg",
    },
    {
      quote:
        "Promptly has revolutionized how I work. The Resume Builder is incredibly intuitive and helped me create a professional resume in minutes. It's my go-to tool for AI-driven productivity! ",
      name: "Devon Lane",
      designation: "Job Seeker",
      src: "/assets/boy2.jpg",
    },
    {
      quote:
        "The accuracy and versatility of Promptly's AI tools are outstanding. Whether I'm preparing a report, generating cold email templates, or summarizing books, the results are always spot-on. Highly recommend! ",
      name: "Theresa Webb",
      designation: "Freelance Writer",
      src: "/assets/girl3.jpg",
    },
    {
      quote:
        "Promptly's AI collection is perfect for startups. The Elevator Pitch and CallScriptMaster tools helped me nail my investor pitches and customer calls. It's like having a personal assistant 24/7! , generating cold email templates, or summarizing books, the results are always spot-on. Highly recommend! ",
      name: "Cristiana Robertson",
      designation: "Startup Founder",
      src: "/assets/girl1.png",
    },
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div
      className={`relative z-10 py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-3xl shadow-xl ${className}`}
    >
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 999
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover "
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-700 mt-8 leading-relaxed">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.015 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-10 w-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={handleNext}
              className="h-10 w-10 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <ArrowRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
