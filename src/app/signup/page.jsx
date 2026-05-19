"use client";

import { useState } from "react";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between items-center py-8 px-4 text-white selection:bg-primary selection:text-black">
      {/* BrandingHeader */}
      <header className="w-full flex justify-center mb-8">
        <FadeUp>
          <div className="flex items-center gap-2">
            <img 
              alt="Dreams Rent Logo" 
              className="h-10 w-auto rounded-[8px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7NTetYZHZELaM97Iy_CPe401ojuCFbJY-MBmBvgh4llTA2lP_bZyEypg-PfHWGKVEqnRr4gGq6FkkR1ccWH8URUqhUR4lUgADxNarR1M3bxfxEcKEETMhphYoW6o_mt2z4zpy_MLXiYhM5AS96q_wgdFEuvOEbFiO54wB4B6GNOLllOYE3AHQgw79uJXx4qUz_8d1WCd1Ta0pqYkVr8GY6pMqBitrdKg1ujVulhfva7CqIDFM3Z5013oDYL-SDs4qvf4kTp-q8kM"
            />
            <span className="text-2xl font-bold tracking-tight text-white uppercase font-headline-md">
              Dreams <span className="text-primary">Rent</span>
            </span>
          </div>
        </FadeUp>
      </header>

      {/* SignUpContainer */}
      <main className="w-full max-w-lg flex-grow flex items-center">
        <FadeUp delay={0.1} className="w-full">
          <div className="bg-[#1c1b1b] p-8 md:p-12 rounded-[8px] shadow-2xl border border-white/5 w-full">
            {/* Back Link */}
            <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mb-8 group">
              <svg className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back To Home
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2 font-headline-md">Sign Up</h1>
              <p className="text-gray-400">We'll send a confirmation code to your email.</p>
            </div>

            {/* RegistrationForm */}
            <form className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
              {/* Username Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200" htmlFor="username">
                  Username <span className="text-red-500">*</span>
                </label>
                <input 
                  className="w-full px-4 py-3 bg-[#0e0e0e] border border-white/10 rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-500" 
                  id="username" 
                  name="username" 
                  placeholder="Enter username" 
                  required 
                  type="text" 
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200" htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  className="w-full px-4 py-3 bg-[#0e0e0e] border border-white/10 rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-500" 
                  id="email" 
                  name="email" 
                  placeholder="Enter email address" 
                  required 
                  type="email" 
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200" htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input 
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-white/10 rounded-[8px] text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-gray-500" 
                    id="password" 
                    name="password" 
                    placeholder="Enter password" 
                    required 
                    type={showPassword ? "text" : "password"} 
                  />
                  <button 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                className="w-full py-4 bg-primary hover:bg-[#e68900] text-[#0e0e0e] font-bold rounded-[8px] transition-all transform active:scale-[0.98] uppercase tracking-wider" 
                type="submit"
              >
                Sign Up
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#1c1b1b] text-gray-500 uppercase tracking-widest text-[10px]">
                  Or, Create an account with your email
                </span>
              </div>
            </div>

            {/* SocialAuth */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-900 rounded-[8px] font-semibold hover:bg-gray-100 transition-colors">
                <img 
                  alt="Google" 
                  className="w-5 h-5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2PEWMrYxTJVc0TbknIRe_WBuH2uRdwMwoFGUPl0heXzYwJEmEvQSwtO1r4KJksU5iqM1uG0cQIvv_vKRoAQi9HlIivcE1CYEMZqe-9vuUXJJV__bSDylBRHCYuGPW-KMuHBcYa2vWIBjXjThU2CD0CnCLMq7n9gn30Y9MSNp8f8ee6SWGd2_hFYLY-C9VUVJ8URBN3sVRjdIxRCzjEscWkf5YSAaGf76pdf3hNPP9S7QjGpSIeLI97WKENJIzoqeAZ_oQA6Cqqy8" 
                />
                Log in with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#1877F2] text-white rounded-[8px] font-semibold hover:bg-[#166fe5] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
                Log in with Facebook
              </button>
            </div>

            {/* Footer Links */}
            <p className="mt-8 text-center text-gray-400">
              Already have an Account? <Link className="text-primary font-semibold hover:underline" href="/login">Sign In</Link>
            </p>
          </div>
        </FadeUp>
      </main>

      {/* SiteFooter */}
      <footer className="w-full text-center py-6 border-t border-white/5 mt-8">
        <p className="text-gray-500 text-sm">© 2024 Dreams Rent. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
