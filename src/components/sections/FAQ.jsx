"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const faqs = [
  {
    q: "How old do I need to be to rent a car?",
    a: "You must be at least 21 years old to rent a car with us. Drivers under 25 may be subject to a young driver surcharge depending on the vehicle category.",
  },
  {
    q: "What documents do I need to rent a car?",
    a: "You will need a valid driver's license, a major credit card in the renter's name, and a government-issued ID or passport.",
  },
  {
    q: "What types of vehicles are available for rent?",
    a: "You can browse our selection online or contact us for assistance in choosing the right vehicle for you. We offer everything from economy sedans to luxury sports cars and SUVs.",
  },
  {
    q: "Can I rent a car with a debit card?",
    a: "Yes, we accept major debit cards for rentals, but a larger security deposit may be required compared to using a credit card.",
  },
  {
    q: "What is your fuel policy?",
    a: "We operate on a full-to-full policy. You will receive the car with a full tank of fuel and are expected to return it full to avoid additional refueling charges.",
  },
  {
    q: "Can I add additional drivers to my rental agreement?",
    a: "Yes, additional drivers can be added for a small daily fee. They must also present a valid driver's license and meet our age requirements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(2); // Default open

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest relative z-10">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary-container">quiz</span>
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant">Explore to learn more about how can empower your business</p>
        </FadeUp>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <FadeUp key={i} delay={i * 0.1} yOffset={20}>
                <div 
                  className={`bg-surface-container rounded-2xl border transition-colors duration-300 overflow-hidden ${
                    isOpen ? "border-primary-container" : "border-surface-container-highest hover:border-surface-variant"
                  }`}
                >
                  <button
                    onClick={() => toggleOpen(i)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-surface-container-high transition-colors focus:outline-none"
                  >
                    <span className={`font-bold transition-colors ${isOpen ? "text-primary" : "text-on-surface"}`}>
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`material-symbols-outlined ${isOpen ? "text-primary" : "text-primary-container"}`}
                    >
                      add_2
                    </motion.span>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 pt-0 text-on-surface-variant text-body-md border-t border-surface-container-highest mt-2 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
