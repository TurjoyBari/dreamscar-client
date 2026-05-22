"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative pt-20 pb-32 overflow-hidden px-margin-mobile md:px-margin-desktop">
      <motion.div style={{ opacity }} className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center space-x-2 bg-primary/10 text-primary-container px-4 py-1 rounded-full text-label-md mb-6 border border-primary/20 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
              <span>Available for Rent</span>
            </span>
          </motion.div>

          <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
            <TextReveal text="Explore our" />
            <br />
            <span className="text-primary-container">
              <TextReveal text="Verified & Professional" delay={0.1} />
            </span>
            <br />
            <TextReveal text="Cars" delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mb-10"
          >
            Experience luxury and performance with our curated selection of high-end vehicles. Modern design, supreme
            comfort, and world-class reliability for your next journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic strength={0.4}>
              <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center space-x-2 hover:shadow-[0_0_30px_rgba(255,152,0,0.5)] transition-all group overflow-hidden relative">
                <Link href="/cars" ><span className="relative z-10">Rent a Car</span></Link>
                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button className="border-2 border-outline px-8 py-4 rounded-xl font-bold hover:bg-surface-container-high transition-all hover:border-primary-container">
                <Link href= "/add-car">Add Your Car</Link>
              </button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex items-center space-x-4"
          >
            <div className="flex -space-x-4">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBagcIVGs5W1GT5T4qnieMZuvBl4ZqmYElNGu818Zc4UtvggeSUStlZKd_qRHzOmkgrh4RJT129xDlrO56ILoGB-7lSKnGR17naL-hkXxIJaFoUEiqWcbKHUazfy5p_TgiQZXBs4sKOGGp3nVWgYA1QLQRnmgkWpCFxOKr-hV7HmYKATymUvRz6yPkqIfPhe9mhn5ciBqHIFSsW383-uINeU3KQ5YBhjPYmyJI3-Ou9jylWILmFwkylv1PSqCIhyqNHumzArznJAIY",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBCmbbgLXmld7-sjGsZ68DQLCQhKAeh7Wtn_PJSn406cYDVi8qWB_k20wu9YTvlK_MKZsoOfR12Wh4U9gfg2ZqqGSRikCaCbZRh6jyFRc-F71nk60A7aGizjjJu4B4uacrBdPqX3GpDKYFGFc96HuHTKEZDhnVzYEjXCWMbdqxn3KrCOqc1FE0ucE5URYLy1sdYrs1v9mq_Cj_pWKJDFouKsA6Ng5TrB-d_qPljGpN39lwOXr-SgsOzmWS7Oy4AB-Hw96B3ZfsmbO0",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBL5UpL0MYcG4AGg7qX_ijzbTAhWHdQU7698NkhGGK6pN2ww54x1xXhhvk3qlQFnOIclb-ZhDYARteGhX6sa3Ao76x0a95VGLqdLBB2jMRvyAvRvZoq3w-9ssqUC0Zc4ncVl80MG-Bd55QjygJzUAB-cbykO7kXBGDKvOJZo0e_hsRMRTlI3WFebNVZR13ZgF9ONV5NoNGes8qPvkLX9f8O3zrP-oyNI3mBig643PZNQ0iYWDK2esSxKhy6TUaH_r_EEmyrld9KzLw",
              ].map((src, idx) => (
                <img
                  key={idx}
                  className="w-12 h-12 rounded-full border-2 border-background object-cover"
                  alt={`Avatar ${idx + 1}`}
                  src={src}
                />
              ))}
            </div>
            <div>
              <p className="font-bold text-on-surface">6K+ Customers</p>
              <p className="text-label-md text-on-surface-variant">has used our renting services</p>
            </div>
          </motion.div>
        </div>

        {/* Right Content / Image Parallax */}
        <motion.div style={{ y, scale }} className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1.1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            alt="Hero Car"
            className="w-full h-auto relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwvGH6rkKNN1y2QhLsZgmVQiZtmLqfehtXCBXFFHJS4tI_2iBKXvCvHQZNJAdxNnIdUxdQHvbOKUq5KNoXNPvOIS55_SfQatBAU_QImqVaBHP3edqKXfrRcqFt8WLj-YTRdPom4oECVwO6CM1clfF9so8pxepwtDdVcX5H1Y_03Z2AjUoS25PXVQBnpM07bblZ7TURfr3rZPMDwTqYODgyl6YUsjRM5D1zI0uodAwkppSlGzb-6cfEJfhO9pMlhKZ1TXwS-hlSLAQ"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: "-50%" }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 bg-surface-container-high/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 z-20 shadow-2xl"
          >
            <p className="text-label-md text-on-surface-variant uppercase tracking-widest mb-1">Starts From</p>
            <p className="text-headline-md font-headline-md text-primary-container">
              $450 <span className="text-on-surface text-label-md">/ day</span>
            </p>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
