"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How many AI tools do you actually have?",
    answer:
      "We currently have 300+ specialized AI tools across 12 major categories, with new tools added weekly based on user requests and market trends.",
  },
  {
    question: "How does the credit system work?",
    answer:
      "Each AI task costs different credits depending on complexity. Simple tasks like text summarization cost 1 credit, while complex tasks like image generation cost 4-7 credits.",
  },
  {
    question: "Can I use this for both personal and business purposes?",
    answer:
      "Absolutely! Our platform serves individual users, teams, and enterprises. You can switch between personal and business workspaces within the same account.",
  },
  {
    question: "What kind of custom AI solutions do you build?",
    answer:
      "We develop custom AI models for specific business needs - from chatbots and recommendation engines to predictive analytics and automation systems.",
  },
  {
    question: "How long does custom development take?",
    answer:
      "Typically 4-12 weeks depending on complexity. We provide detailed timelines during the discovery phase.",
  },
  {
    question: "Do you offer API access?",
    answer:
      "Yes, our Enterprise plans include full API access so you can integrate our AI tools into your existing workflows and applications.",
  },
  {
    question: "What about data security?",
    answer:
      "We're SOC 2 Type II certified with enterprise-grade security. Your data is encrypted in transit and at rest, and we never use customer data to train our models.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes, no contracts or cancellation fees. You can cancel or change plans anytime from your billing.",
  },
  {
    question: "Do you offer discounts for annual payments?",
    answer: "Yes, annual plans receive 20% discount over 10k credits.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-300">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 text-left"
    >
      <span className="text-lg text-black font-medium">{question}</span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronDown className="text-black" />
      </motion.div>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden pb-4"
        >
          <p className="text-black">{answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-blue-100">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.h2
          className="text-3xl md:text-4xl text-blue-600 font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          className="text-center text-black mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Got questions? We’ve got answers. Here are some of the most common
          queries our users have.
        </motion.p>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              {...item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
