"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Magnetic from "@/components/animations/Magnetic";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-surface-container-highest pt-20 pb-10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-container/50 to-transparent"></div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-gutter mb-20"
        >
          <motion.div variants={itemVariants}>
            <div className="text-headline-md font-headline-md font-black text-on-surface uppercase tracking-tighter mb-6">
              DREAMS RENT
            </div>
            <p className="text-on-surface-variant mb-6 text-label-md leading-relaxed">
              Providing the best car rental experience globally with a premium selection of vehicles and professional service.
            </p>
            <div className="flex space-x-4">
              <Magnetic strength={0.3}>
                <a
                  className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all hover:shadow-[0_0_15px_rgba(255,152,0,0.4)]"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">public</span>
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a
                  className="w-10 h-10 bg-surface-container-high rounded-lg flex items-center justify-center hover:bg-primary-container hover:text-on-primary-container transition-all hover:shadow-[0_0_15px_rgba(255,152,0,0.4)]"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">alternate_email</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-on-surface mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["My Account", "Campaigns", "Dreams rent Dealers", "Deals and Incentive", "Financial Services"].map((link) => (
                <li key={link} className="group flex items-center">
                  <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  <a className="text-on-surface-variant group-hover:text-primary transition-all duration-300 text-label-md" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-on-surface mb-6">Pages</h4>
            <ul className="space-y-4">
              {["About Us", "Become a Partner", "FAQ's", "Testimonials", "Contact Us"].map((link) => (
                <li key={link} className="group flex items-center">
                  <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  <a className="text-on-surface-variant group-hover:text-primary transition-all duration-300 text-label-md" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-on-surface mb-6">Useful Links</h4>
            <ul className="space-y-4">
              {["Privacy", "Terms & Condition", "Refund Policy"].map((link) => (
                <li key={link} className="group flex items-center">
                  <span className="w-0 h-px bg-primary mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                  <a className="text-on-surface-variant group-hover:text-primary transition-all duration-300 text-label-md" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <FadeUp delay={0.4}>
          <div className="pt-8 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-label-md text-on-surface-variant">Copyright © 2025 Dreams Rent. All Rights Reserved.</p>
            <div className="flex space-x-6 text-label-md text-on-surface-variant">
              <a className="hover:text-primary-container transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary-container transition-colors" href="#">
                Terms &amp; Conditions
              </a>
              <a className="hover:text-primary-container transition-colors" href="#">
                Sitemap
              </a>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* FAB for Support */}
      <Magnetic strength={0.5}>
        <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 hover:shadow-[0_0_20px_rgba(255,152,0,0.5)]">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            chat_bubble
          </span>
        </button>
      </Magnetic>
    </footer>
  );
}
