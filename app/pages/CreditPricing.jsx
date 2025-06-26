"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Sparkles,
  Shield,
  Zap,
  Clock,
  Star,
  ArrowRight,
} from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    credits: 100,
    price: 249,
    pricePerCredit: 2.49,
    popular: false,
    badge: null,
    color: "from-cyan-400 to-blue-500",
    icon: Sparkles,
  },
  {
    id: "popular",
    credits: 500,
    price: 1245,
    pricePerCredit: 2.49,
    popular: true,
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500",
    icon: Star,
  },
  {
    id: "value",
    credits: 1000,
    price: 2490,
    pricePerCredit: 2.49,
    popular: false,
    badge: "Best Value",
    color: "from-blue-600 to-teal-500",
    icon: Zap,
  },
];

const features = [
  { icon: Shield, text: "Secure Payment", color: "text-cyan-400" },
  { icon: Zap, text: "Instant Delivery", color: "text-blue-400" },
  { icon: Clock, text: "Never Expires", color: "text-teal-400" },
];

export default function CreditPricing() {
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[1]);
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 relative overflow-hidden">

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
       <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <Sparkles className="h-12 w-12 text-blue-500 mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Simple Credit System
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 max-w-md rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 font-light">
            <span className="text-red-500 line-through mr-2">
              No Subscription Tricks
            </span>
            <span className="text-blue-600">
              Pay only for what you use, when you use it
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setIsHovered(plan.id)}
                onHoverEnd={() => setIsHovered(null)}
                onClick={() => setSelectedPlan(plan)}
                className={`relative cursor-pointer group ${
                  selectedPlan.id === plan.id ? "ring-2 ring-blue-400/50" : ""
                }`}
              >
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-xl"></div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`}
                ></motion.div>

                <div className="relative p-8 text-center">
                  {plan.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r ${plan.color} text-white text-sm font-semibold rounded-full shadow-lg`}
                    >
                      {plan.badge}
                    </motion.div>
                  )}

                  <motion.div
                    animate={{
                      rotate: isHovered === plan.id ? 360 : 0,
                      scale: isHovered === plan.id ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl mb-6 shadow-lg`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ scale: selectedPlan.id === plan.id ? 1.1 : 1 }}
                    className="mb-4"
                  >
                    <span
                      className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                    >
                      {plan.credits}
                    </span>
                    <span className="text-gray-600 ml-2">credits</span>
                  </motion.div>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-800">
                      ₹{plan.price}
                    </span>
                    <div className="text-gray-500 text-sm mt-1">
                      ₹{plan.pricePerCredit} per credit
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedPlan.id === plan.id && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute top-4 right-4"
                      >
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 to-cyan-100/60 backdrop-blur-xl rounded-3xl border border-blue-200/50 shadow-xl"></div>
          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
              Complete Your Purchase
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-blue-200/50">
                  <span className="text-gray-600">Package:</span>
                  <motion.span
                    key={selectedPlan.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-gray-800 font-semibold"
                  >
                    {selectedPlan.credits} Credits
                  </motion.span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-blue-200/50">
                  <span className="text-gray-600">Price per credit:</span>
                  <span className="text-gray-800">
                    ₹{selectedPlan.pricePerCredit}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 text-xl font-bold">
                  <span className="text-gray-800">Total:</span>
                  <motion.span
                    key={selectedPlan.price}
                    initial={{ scale: 1.2, color: "#0ea5e9" }}
                    animate={{ scale: 1, color: "#1f2937" }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-800"
                  >
                    ₹{selectedPlan.price}
                  </motion.span>
                </div>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div
                        className={`p-2 rounded-lg bg-blue-100/50 ${feature.color}`}
                      >
                        <FeatureIcon className="h-5 w-5" />
                      </div>
                      <span className="text-gray-600">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-8 bg-gradient-to-r ${selectedPlan.color} text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group`}
            >
              <span>Complete Purchase</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center justify-center space-x-2 mt-6 p-4 bg-blue-500/10 rounded-2xl border border-blue-300/30"
            >
              <div className="w-auto h-auto bg-blue-500 rounded-full flex items-center justify-center">
                <Check className="h-auto w-auto text-2xl text-white" />
              </div>
              <span className="text-blue-600 font-semibold">
                Average user saves 70% vs individual AI subscriptions
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="text-center text-gray-600 mt-6 leading-relaxed"
            >
              No monthly commitments, no hidden fees. Pay only for what you use
              with our flexible credit system.
              <br />
              Most users find this more cost-effective than multiple AI tool
              subscriptions.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
