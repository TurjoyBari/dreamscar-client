"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`docked full-width top-0 sticky z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-surface-container-highest shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        className={`flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto transition-all duration-300 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <div className="text-headline-md font-headline-md font-black text-on-surface uppercase tracking-tighter">
          DREAMS RENT
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-label-md text-label-md relative group transition-colors duration-200 text-primary font-bold">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/cars" className="font-label-md text-label-md relative group transition-colors duration-200 text-on-surface hover:text-primary">
            Explore Car
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div className="relative group cursor-pointer">
            <span className="font-label-md text-label-md transition-colors duration-200 text-on-surface hover:text-primary flex items-center gap-1 py-4">
              Pages
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
            <div className="absolute top-full left-0 mt-0 w-48 bg-surface-container-high rounded-xl border border-surface-container-highest shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
              <Link href="/about-us" className="block px-4 py-3 text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors text-label-md">
                About Us
              </Link>
              <Link href="/contact-us" className="block px-4 py-3 text-on-surface hover:bg-primary-container/20 hover:text-primary transition-colors text-label-md">
                Contact Us
              </Link>
            </div>
          </div>
          <Link href="/blog" className="font-label-md text-label-md relative group transition-colors duration-200 text-on-surface hover:text-primary">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/dashboard" className="font-label-md text-label-md relative group transition-colors duration-200 text-on-surface hover:text-primary">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-on-surface font-label-md text-label-md hover:text-primary px-4 py-2 transition-colors">
            Sign In
          </button>
          <Magnetic strength={0.3}>
            <Link href="/signup" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold text-label-md hover:scale-95 transition-transform shadow-[0_0_15px_rgba(255,152,0,0.2)] hover:shadow-[0_0_25px_rgba(255,152,0,0.5)] block">
              Sign Up
            </Link>
          </Magnetic>
        </div>
      </nav>
    </motion.header>
  );
}
