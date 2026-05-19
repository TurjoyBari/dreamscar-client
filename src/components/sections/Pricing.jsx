"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Magnetic from "@/components/animations/Magnetic";

const plans = [
  {
    name: "Starter",
    price: "$299",
    features: [
      { text: "50% Downpayment", included: true },
      { text: "Insurance Included", included: false },
      { text: "Roadside Assistance", included: false },
    ],
    recommended: false,
  },
  {
    name: "Premium",
    price: "$1299",
    features: [
      { text: "25% Downpayment", included: true },
      { text: "Insurance Included", included: true },
      { text: "Roadside Assistance", included: true },
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: "$1599",
    features: [
      { text: "0% Downpayment", included: true },
      { text: "Full Insurance Cover", included: true },
      { text: "24/7 Roadside VIP", included: true },
    ],
    recommended: false,
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="max-w-container-max mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary-container">sell</span>
            Best Pricing in Rental
          </h2>
          <p className="text-on-surface-variant">Choose the Right Plan For Your Business</p>
        </FadeUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div
                className={`bg-surface-container p-10 rounded-3xl transition-all duration-500 relative group overflow-hidden ${
                  plan.recommended
                    ? "border-2 border-primary-container scale-105 z-10 shadow-[0_0_40px_rgba(255,152,0,0.15)] hover:shadow-[0_0_60px_rgba(255,152,0,0.3)]"
                    : "border border-surface-container-highest hover:border-primary-container hover:shadow-2xl"
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-on-primary-container px-4 py-1 rounded-full font-bold text-label-md shadow-lg">
                    Recommended
                  </div>
                )}
                
                <p className="font-bold text-on-surface mb-4">{plan.name}</p>
                <div className="flex items-baseline space-x-2 mb-8 relative z-10">
                  <span className="text-headline-lg font-display-lg group-hover:text-primary transition-colors">{plan.price}</span>
                  <span className="text-on-surface-variant">/ Per Month</span>
                </div>
                
                <ul className="space-y-4 mb-10 relative z-10">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center space-x-3 text-on-surface-variant">
                      {feature.included ? (
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.5 + j * 0.1 }}
                          viewport={{ once: true }}
                          className="material-symbols-outlined text-green-500"
                        >
                          check_circle
                        </motion.span>
                      ) : (
                        <span className="material-symbols-outlined text-error opacity-50">cancel</span>
                      )}
                      <span className={feature.included ? "text-on-surface" : "opacity-50"}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <Magnetic strength={0.1}>
                  <button
                    className={`w-full py-4 rounded-xl font-bold transition-all relative z-10 ${
                      plan.recommended
                        ? "bg-primary-container text-on-primary-container hover:shadow-[0_0_20px_rgba(255,152,0,0.4)]"
                        : "border border-outline text-on-surface hover:bg-surface-container-high hover:border-primary-container hover:text-primary"
                    }`}
                  >
                    Choose Plan
                  </button>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
