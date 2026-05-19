"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Magnetic from "@/components/animations/Magnetic";

const categories = [
  { name: "Sports Coupe", icon: "sports_score", count: 14 },
  { name: "Sedan", icon: "directions_car", count: 22 },
  { name: "Sports Car", icon: "speed", count: 35 },
  { name: "Pickup", icon: "airport_shuttle", count: 18 },
  { name: "Family MPV", icon: "group", count: 35 },
  { name: "Crossover", icon: "drive_eta", count: 20 },
];

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function Categories() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="max-w-container-max mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="material-symbols-outlined text-primary-container"
            >
              star
            </motion.span>
            Featured Categories
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="material-symbols-outlined text-primary-container"
            >
              star
            </motion.span>
          </h2>
          <p className="text-on-surface-variant">Know what you're looking for? Browse our extensive selection of cars</p>
        </FadeUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-surface-container p-6 rounded-2xl border border-surface-container-highest hover:border-primary-container hover:shadow-[0_10px_30px_rgba(255,152,0,0.15)] transition-all group cursor-pointer text-center relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-container transition-colors duration-300 relative z-10">
                <span className="material-symbols-outlined text-primary-container group-hover:text-on-primary-container text-3xl group-hover:scale-110 transition-transform">
                  {cat.icon || "image"}
                </span>
              </div>
              <h3 className="font-bold text-on-surface mb-1 relative z-10">{cat.name}</h3>
              <p className="text-label-md text-on-surface-variant relative z-10">{cat.count} Cars</p>
            </motion.div>
          ))}
        </motion.div>

        <FadeUp delay={0.4} className="mt-12 text-center">
          <Magnetic strength={0.2}>
            <button className="bg-surface-container-highest text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container-high transition-colors hover:shadow-lg">
              View All Categories
            </button>
          </Magnetic>
        </FadeUp>
      </div>
    </section>
  );
}
