"use client";
import { signOut, useSession } from "@/lib/auth-client";

import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import Image from "next/image";


export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { data: session, isPending } = useSession()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const handleLogOut = async () => {
    await signOut();
    router.push("/")

  }

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
          <Link href="/add-car" className="font-label-md text-label-md relative group transition-colors duration-200 text-on-surface hover:text-primary">
            Add Car
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/dashboard" className="font-label-md text-label-md relative group transition-colors duration-200 text-on-surface hover:text-primary">
            Dashboard
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>






        <div className="hidden md:flex items-center gap-4">

            {
              !isPending && !session ?  
        <div className="flex items-center space-x-4">
          <Link href= "/signin" className="hidden md:block text-on-surface font-label-md text-label-md hover:text-primary px-4 py-2 transition-colors">
            Sign In
          </Link>
          <Magnetic strength={0.3}>
            <Link href="/signup" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-lg font-bold text-label-md hover:scale-95 transition-transform shadow-[0_0_15px_rgba(255,152,0,0.2)] hover:shadow-[0_0_25px_rgba(255,152,0,0.5)] block">
              Sign Up
            </Link>
          </Magnetic>
        </div>
              
              :
                <div className="relative group">
  <button className="flex items-center gap-3 p-1 rounded-full hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
    <Image
      width={40}
      height={40}
      src={
        session?.user?.image ||
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
      }
      alt="avatar"
      className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/20"
    />

    <div className="text-left hidden lg:block">
      <p className="text-sm font-bold truncate max-w-25 text-white">
        {session?.user?.name}
      </p>
      <p className="text-[10px] text-gray-400">Client</p>
    </div>
  </button>

  {/* DROPDOWN */}
  <div className="absolute right-0 top-12 w-56 bg-[#1c1b1b] border border-white/10 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">

    <div className="px-4 py-3 border-b border-white/10">
      <p className="font-bold text-sm text-white">Welcome back!</p>
      <p className="text-xs truncate text-gray-400">
        {session?.user?.email}
      </p>
    </div>

    <Link
      href="/dashboard"
      className="px-4 py-2 text-sm text-gray-200 hover:bg-white/5 flex items-center gap-3 transition-colors"
    >
      <LayoutDashboard className="w-4 h-4" />
      Dashboard
    </Link>

    <Link
      href="/listing"
      className="px-4 py-2 text-sm text-gray-200 hover:bg-white/5 flex items-center gap-3 transition-colors"
    >
      <User className="w-4 h-4" />
      Listing
    </Link>

    <button
      onClick={handleLogOut}
      className="px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-3 transition-colors text-left"
    >
      <LogOut className="w-4 h-4" />
      Log Out
    </button>
  </div>
</div>
            }



          </div>

      </nav>
    </motion.header>
  );
}
