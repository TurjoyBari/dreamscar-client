"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import Magnetic from "@/components/animations/Magnetic";
import Link from "next/link";
import { useEffect, useState } from "react";

const fetchCars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/popularCars`);
  const data = await res.json();
  return data || [];
};


function TiltCard({ car }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-surface-container rounded-2xl border border-surface-container-highest group relative cursor-pointer shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      ></div>

      <div className="relative h-64 overflow-hidden rounded-t-2xl" style={{ transform: "translateZ(30px)" }}>
        <motion.img
          className="w-full h-full object-cover"
          alt={`${car.brand} ${car.model}`}
          src={car.img}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-lg font-bold text-label-md shadow-lg backdrop-blur-md">
          {car.brand}
        </div>
        <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-lg font-bold text-label-md shadow-lg backdrop-blur-md">
          Available
        </div>
      </div>
      
      <div className="p-6" style={{ transform: "translateZ(40px)" }}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-1 group-hover:text-primary transition-colors">{car.model}</h3>
            <div className="flex items-center space-x-1 text-primary-container">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-label-md text-on-surface-variant font-bold">4.8 (120 Reviews)</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-primary-container font-black text-xl">${car.price}</p>
            <p className="text-label-md text-on-surface-variant">/ Day</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-4 border-y border-surface-container-highest mb-6">
          <div className="flex items-center space-x-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">settings</span>
            <span className="text-label-md">Auto</span>
          </div>
          <div className="flex items-center space-x-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">speed</span>
            <span className="text-label-md">10 KM</span>
          </div>
          <div className="flex items-center space-x-1 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">local_gas_station</span>
            <span className="text-label-md">Diesel</span>
          </div>
        </div>
        <Link href={`/car-details/${car._id}`} className="w-full flex items-center justify-center py-3 rounded-xl border border-primary-container text-primary-container font-bold hover:bg-primary-container hover:text-on-primary-container transition-all group-hover:shadow-[0_0_15px_rgba(255,152,0,0.3)]">
          Rent Now
        </Link>
      </div>
    </motion.div>
  );
}




const PopularCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadCars = async () => {
      const data = await fetchCars();
      setCars(data);
    };

    loadCars();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop relative z-10 perspective-[1000px]">
      <div className="max-w-container-max mx-auto">
        <FadeUp className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary-container animate-bounce">trending_up</span>
            Explore Most Popular Cars
          </h2>
          <p className="text-on-surface-variant">Here's a list of some of the most popular cars globally</p>
        </FadeUp>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cars.map((car, i) => (
            <motion.div key={i} variants={itemVariants}>
              <TiltCard car={car} />
            </motion.div>
          ))}
        </motion.div>

        <FadeUp delay={0.4} className="mt-16 text-center">
          <Magnetic strength={0.2}>
            <button className="bg-primary-container text-on-primary-container px-10 py-4 rounded-xl font-bold hover:scale-95 transition-transform shadow-[0_0_20px_rgba(255,152,0,0.2)] hover:shadow-[0_0_30px_rgba(255,152,0,0.5)]">
              <Link href="/cars">View More Cars</Link>
            </button>
          </Magnetic>
        </FadeUp>
      </div>
    </section>
  );
}

export default PopularCars;