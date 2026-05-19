"use client";

import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import FadeUp from "@/components/animations/FadeUp";

export default function SearchFilter() {
  return (
    <div className="max-w-container-max mx-auto mt-20 relative z-30 px-margin-mobile md:px-margin-desktop">
      <FadeUp delay={0.4} yOffset={80}>
        <div className="bg-surface-container-high p-4 rounded-2xl border border-surface-container-highest shadow-2xl backdrop-blur-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center relative z-10">
            
            {/* Location */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-surface-container-highest group/input">
              <label className="block text-label-md text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Pickup Location
              </label>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
                <select className="bg-transparent border-none text-on-surface font-bold focus:ring-0 w-full cursor-pointer outline-none">
                  <option className="bg-surface-container-high">Choose Location</option>
                  <option className="bg-surface-container-high">New York, USA</option>
                  <option className="bg-surface-container-high">Los Angeles, USA</option>
                </select>
              </div>
            </div>

            {/* Pickup Date */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-surface-container-highest group/input">
              <label className="block text-label-md text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Pickup Date &amp; Time
              </label>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">calendar_today</span>
                <input
                  className="bg-transparent border-none text-on-surface font-bold focus:ring-0 w-full cursor-pointer outline-none"
                  type="datetime-local"
                  defaultValue="2025-03-14T12:00"
                />
              </div>
            </div>

            {/* Drop-off Date */}
            <div className="px-6 py-3 border-b md:border-b-0 md:border-r border-surface-container-highest group/input">
              <label className="block text-label-md text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Drop-off Date &amp; Time
              </label>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-primary-container">calendar_today</span>
                <input
                  className="bg-transparent border-none text-on-surface font-bold focus:ring-0 w-full cursor-pointer outline-none"
                  type="datetime-local"
                  defaultValue="2025-03-15T12:00"
                />
              </div>
            </div>

            {/* Button */}
            <div className="px-4">
              <Magnetic strength={0.3}>
                <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-orange-500 transition-colors hover:shadow-[0_0_20px_rgba(255,152,0,0.4)]">
                  <span className="material-symbols-outlined">search</span>
                  <span>Find Your Car</span>
                </button>
              </Magnetic>
            </div>
            
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
