"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

const benefits = [
  {
    icon: "payments",
    title: "Best Deal",
    desc: "Dreams Rent offers a fleet of high-quality",
  },
  {
    icon: "local_shipping",
    title: "Doorstep Delivery",
    desc: "Dreams Rent offers a fleet of high-quality",
  },
  {
    icon: "security",
    title: "Low Security Deposit",
    desc: "Dreams Rent offers a fleet of high-quality",
  },
  {
    icon: "support_agent",
    title: "Customer Support",
    desc: "Dreams Rent offers a fleet of high-quality",
  },
];

export default function BestPlatform() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the image container
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  // Rotate the 15+ years badge slightly
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section ref={containerRef} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Parallax Image */}
        <div className="relative order-2 lg:order-1">
          <motion.div style={{ y }} className="relative h-[600px] rounded-2xl overflow-hidden group">
            <motion.img
              initial={{ scale: 1.2, filter: "grayscale(100%)" }}
              whileInView={{ scale: 1, filter: "grayscale(0%)" }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full object-cover"
              alt="Premium Car"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCScNZFmIjttxNJLgkeEf691OlgAAJ3Wu9u3I6IM7EF92uhZE1fG1zcmp0URAJ7C6V1Sx8xZAZVmfw9hGOsbdp137RL8Vmut731CaSZ_Jn-p6XxTcnCPuDLZmTD030FbPrn8bZ4oopmSRIMJwYqoqNgWy31BDlYj-QgDxN6CCc97GVkWPJ5whClbKrrhSB-On2T72YOJOuocBY7EQbHAA1zkxjDwMbaAESM1LA7CAwcgWj8hZRVI5gEUTPsSfk72OQ4dqRgkmyCP3I"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-60"></div>
          </motion.div>
          
          <motion.div
            style={{ rotate }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="absolute -bottom-10 -right-10 bg-primary-container text-on-primary-container p-8 rounded-2xl hidden md:block shadow-2xl backdrop-blur-md"
          >
            <p className="text-display-lg font-display-lg">15+</p>
            <p className="font-bold">Years of Trust</p>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">verified</span>
              Best Platform for Car Rental
            </h2>
            <p className="text-on-surface-variant mb-12">
              Why do we choose relax rent bikes generally if we travel in a unknown cities with a bike in our hand we feel
              which is like a home town.
            </p>
          </FadeUp>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div key={i} variants={itemVariants} className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-container transition-colors">
                    {benefit.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h4>
                  <p className="text-label-md text-on-surface-variant">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
