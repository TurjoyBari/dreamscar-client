"use client";

import { motion } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Magnetic from "@/components/animations/Magnetic";

export default function Newsletter() {
  return (
    <section className="py-20 px-margin-mobile md:px-margin-desktop relative z-10">
      <div className="max-w-container-max mx-auto bg-gradient-to-r from-surface-container-high to-surface-container rounded-[2rem] overflow-hidden relative border border-surface-container-highest shadow-2xl">
        
        {/* Abstract shapes for background */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center p-12 md:p-20 relative z-10">
          
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg mb-6 leading-tight">
              Subscribe To Get User Friendly <br />
              <span className="text-primary-container">Mobile &amp; Web App</span>
            </h2>
            <p className="text-on-surface-variant mb-10 text-body-lg">
              Appropriately monetize one-to-one interfaces rather than cutting-edge. Competently disintermediate backward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <input
                className="bg-surface-container-lowest border border-outline/20 px-6 py-4 rounded-xl focus:ring-2 focus:ring-primary-container focus:border-primary-container flex-grow text-on-surface outline-none transition-all shadow-inner"
                placeholder="Enter Your Email Here"
                type="email"
              />
              <Magnetic strength={0.3}>
                <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold hover:scale-95 transition-transform flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,152,0,0.4)] whitespace-nowrap h-full">
                  <span>Subscribe</span>
                  <span className="material-symbols-outlined">send</span>
                </button>
              </Magnetic>
            </div>
          </FadeUp>
          
          <div className="hidden md:flex justify-center relative perspective-[1000px]">
            <motion.img
              initial={{ rotateY: -30, rotateX: 10, y: 50, opacity: 0 }}
              whileInView={{ rotateY: -15, rotateX: 5, y: 0, opacity: 1 }}
              whileHover={{ rotateY: 0, rotateX: 0, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              viewport={{ once: true, margin: "-10%" }}
              className="w-80 drop-shadow-[0_30px_30px_rgba(0,0,0,0.6)] rounded-3xl border-4 border-surface-container-highest cursor-pointer"
              alt="App Mockup"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFTgCHplC48LfUEpVuuE6317XZsMUgZFAuI2ajG4q7_nHZTf6ZN3pNGKbVlaGceSM86EBlFy36Ar6L5tn769ea7PoagtoB60-zXyhpTZWLLTjqtTtPCvP_mQq1h-G2apbgI9jpUBZnd7OgKB0mMF0nA-FaOtlHi8S-wnAOFxA3IBJ8Z-iedaBX4bMWuhyAHYMPH_8JIwhC9F9MJhtH8ZsJHhoNUm4id_O0BoeuC6rTvd4fVZfGGH9JELdjFOhNPDir6sjvwu368k"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
