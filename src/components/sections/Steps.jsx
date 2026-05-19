"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";

export default function Steps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container relative overflow-hidden">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Stats and Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary-container/5 rounded-full blur-3xl animate-pulse"></div>
          
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1 }}
            className="relative z-10 w-full drop-shadow-2xl"
            alt="Luxury SUV"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLJe3dmoLS8uEdqWrTav6Xkt0nCRkVWJN11ucLbpa7wXqiBXYnV8ej_1Lirt9yqjfBNTq3hOCgAGnQLldwiBkCK6CT45j-Vy1byKPXSnpn42hfkkw5Rv-GcrJO7TdOGysr_sIUVZDRccvzIDlU8p-4lLBGvUOK1VHhKLjdZe4_rxuKwlGAAU5xV1yPz_KCoIMjxx157itlTudeeozo_8jFgKJvXFzcJ-v8go3ZL4Ff1q7FxqaCy-zjXZG5FDhOsdWJQ3dxYolCxFE"
          />
          
          <FadeUp delay={0.4} yOffset={30}>
            <div className="mt-12 bg-background p-8 rounded-3xl grid grid-cols-2 md:grid-cols-4 gap-8 relative z-20 shadow-2xl border border-surface-container-highest">
              <div className="text-center group">
                <p className="text-headline-md font-headline-md text-primary-container group-hover:scale-110 transition-transform">1K+</p>
                <p className="text-label-md text-on-surface-variant">Happy Clients</p>
              </div>
              <div className="text-center group">
                <p className="text-headline-md font-headline-md text-primary-container group-hover:scale-110 transition-transform">305K+</p>
                <p className="text-label-md text-on-surface-variant">Cars Rented</p>
              </div>
              <div className="text-center group">
                <p className="text-headline-md font-headline-md text-primary-container group-hover:scale-110 transition-transform">75K+</p>
                <p className="text-label-md text-on-surface-variant">Locations</p>
              </div>
              <div className="text-center group">
                <p className="text-headline-md font-headline-md text-primary-container group-hover:scale-110 transition-transform">1800K+</p>
                <p className="text-label-md text-on-surface-variant">Kilometers</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Side: Steps */}
        <div className="relative">
          <FadeUp>
            <h2 className="font-headline-lg text-headline-lg mb-4">Rent Our Cars in 3 Steps</h2>
            <p className="text-on-surface-variant mb-12">
              Renting a luxury car has never been easier. Follow our simple process to get on the road today.
            </p>
          </FadeUp>

          <div className="space-y-10 relative">
            {/* Animated SVG Line connecting steps */}
            <svg
              className="absolute left-8 top-10 w-2 h-full -z-10 hidden md:block"
              viewBox="0 0 8 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.line
                x1="4"
                y1="0"
                x2="4"
                y2="300"
                stroke="var(--color-primary-container)"
                strokeWidth="2"
                strokeDasharray="4 4"
                style={{ pathLength, opacity }}
              />
            </svg>

            {[
              {
                icon: "location_on",
                title: "Choose Date & Locations",
                desc: "Determine the date & location for your car rental. Consider factors such as your travel itinerary.",
              },
              {
                icon: "verified",
                title: "Select Pick-Up & Drop Locations",
                desc: "Check the availability of your desired vehicle type for your chosen dates and location.",
              },
              {
                icon: "book",
                title: "Book your Car",
                desc: "Finalize your booking and get instant confirmation. Your vehicle will be ready as scheduled.",
              },
            ].map((step, i) => (
              <FadeUp key={i} delay={0.2 * i} yOffset={40}>
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-surface-container-highest rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-container transition-colors duration-500 shadow-lg relative overflow-hidden">
                    <span className="material-symbols-outlined text-primary-container text-3xl group-hover:text-on-primary-container transition-colors duration-500 z-10">
                      {step.icon}
                    </span>
                    <div className="absolute inset-0 bg-primary-container/20 group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
