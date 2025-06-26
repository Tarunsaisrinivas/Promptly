"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  { name: "Forbes", logo: "/assets/1.svg" },
  { name: "IIT Bombay", logo: "/assets/2.svg" },
  { name: "IIT Varanasi", logo: "/assets/3.svg" },
  { name: "MSME", logo: "/assets/4.svg" },
  { name: "Shark Tanks", logo: "/assets/5.svg" },
  { name: "StartupIndia", logo: "/assets/6.svg" },

  { name: "Forbes", logo: "/assets/1.svg" },
  { name: "IIT Bombay", logo: "/assets/2.svg" },
  { name: "IIT Varanasi", logo: "/assets/3.svg" },
  { name: "MSME", logo: "/assets/4.svg" },
  { name: "Shark Tanks", logo: "/assets/5.svg" },
  { name: "StartupIndia", logo: "/assets/6.svg" },
];

export default function TrustedBrandsSection() {
  return (
    <section className="bg-[#f2fbfd] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800"
        >
          Trusted by the most popular brands
        </motion.h2>
        <p className="text-gray-500 mt-3 text-lg">
          We’re backed by teams building the future of AI, productivity, and
          tech
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mt-12 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-3 rounded-lg transition duration-300 grayscale-0 hover:grayscale"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={100}
                  height={40}
                  className="object-contain h-10 mx-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
