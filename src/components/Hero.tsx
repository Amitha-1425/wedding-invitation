"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  isTriggered: boolean;
}

export default function Hero({ isTriggered }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const pillarLeftX = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);
  const pillarRightX = useTransform(scrollYProgress, [0, 1], ["0px", "60px"]);

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.6, ease: "easeOut" as const }
    })
  };

  const groomName = "MUTHUKUMAR";
  const brideName = "AMITHA";

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen py-16 flex items-center justify-center bg-gradient-to-b from-transparent via-[#FAF6ED]/30 to-[#F5EAD4]/50 overflow-hidden"
    >
      {/* Background Soft Pattern Overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08] select-none pointer-events-none"
        style={{
          backgroundImage: "url('/assets/images/bg-common.webp')",
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF6ED]/30 to-[#F5EAD4]/50 pointer-events-none" />

      {/* Viewport Ornate Double Borders (Desktop only) */}
      <div className="absolute top-6 bottom-6 left-6 right-6 border border-gold-deep/15 rounded-lg pointer-events-none z-[4] hidden md:block" />
      <div className="absolute top-8 bottom-8 left-8 right-8 border border-dashed border-gold-deep/10 rounded-lg pointer-events-none z-[4] hidden md:block" />

      {/* Hanging marigold garlands at the top of the hero section */}
      <div className="absolute top-0 left-0 right-0 h-14 overflow-hidden flex justify-around pointer-events-none z-[4] select-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center origin-top"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 4.5 + i * 0.25, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-[1px] h-8 bg-gold-deep/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF8C00] shadow-[0_1px_3px_rgba(255,140,0,0.4)]" />
            <div className="w-2 h-2 rounded-full bg-pink-lotus/85 mt-[-1px]" />
          </motion.div>
        ))}
      </div>

      {/* Floating Soft Jasmine Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3] opacity-45">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4.5 h-4.5 bg-gradient-to-b from-white to-ivory rounded-full shadow-[0_2px_6px_rgba(200,162,76,0.15)] flex items-center justify-center"
            style={{
              left: `${Math.random() * 90 + 5}vw`,
              top: `-20px`,
            }}
            animate={isTriggered ? {
              top: "105vh",
              x: [0, Math.random() * 80 - 40, Math.random() * 160 - 80],
              rotate: [0, 360],
            } : {}}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          >
            {/* Soft gold dot in center */}
            <div className="w-1.5 h-1.5 rounded-full bg-gold-light" />
          </motion.div>
        ))}
      </div>

      {/* Swaying Golden Lamps on left and right (Desktop only) */}
      <div className="absolute top-0 left-16 z-[4] hidden md:block">
        <motion.div className="origin-top" animate={{ rotate: [-3, 3, -3] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-[1.5px] h-48 bg-gradient-to-b from-gold/30 to-gold" />
          <svg viewBox="0 0 40 80" className="w-9 h-auto text-gold fill-current">
            <path d="M20 0 L25 15 L20 20 L15 15 Z" fill="url(#heroLampGrad)" />
            <path d="M10 20 C10 40 30 40 30 20 Z" fill="url(#heroLampGrad)" />
            <circle cx="20" cy="50" r="11" fill="url(#heroLampGrad)" />
            <path d="M20 38c1.5 3 2.5 5 1 7-1 1-2 1-2 1s-1 0-1.5-1c-1.5-2-1-4 1-7z" fill="#FFB25E" className="filter drop-shadow-[0_0_4px_#FFB25E]" />
          </svg>
        </motion.div>
      </div>

      <div className="absolute top-0 right-16 z-[4] hidden md:block">
        <motion.div className="origin-top" animate={{ rotate: [3, -3, 3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}>
          <div className="w-[1.5px] h-60 bg-gradient-to-b from-gold/30 to-gold" />
          <svg viewBox="0 0 40 80" className="w-9 h-auto text-gold fill-current">
            <path d="M20 0 L25 15 L20 20 L15 15 Z" fill="url(#heroLampGrad)" />
            <path d="M10 20 C10 40 30 40 30 20 Z" fill="url(#heroLampGrad)" />
            <circle cx="20" cy="50" r="11" fill="url(#heroLampGrad)" />
            <path d="M20 38c1.5 3 2.5 5 1 7-1 1-2 1-2 1s-1 0-1.5-1c-1.5-2-1-4 1-7z" fill="#FFB25E" className="filter drop-shadow-[0_0_4px_#FFB25E]" />
          </svg>
        </motion.div>
      </div>

      {/* Main Content Card Container */}
      <motion.div
        style={{ y: contentY }}
        className="w-full max-w-2xl flex flex-col items-center justify-center z-[3] px-6 relative mt-6"
      >
        {/* Slow Rotating Gold Mandala in Background */}
        <motion.div
          className="absolute w-[360px] h-[360px] md:w-[500px] md:h-[500px] pointer-events-none opacity-[0.12] z-[1] select-none text-gold-deep flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="0.6">
            <circle cx="50" cy="50" r="46" strokeDasharray="3, 3" />
            <circle cx="50" cy="50" r="36" />
            <circle cx="50" cy="50" r="26" strokeDasharray="1, 1" />
            <circle cx="50" cy="50" r="16" />
            {[...Array(24)].map((_, i) => {
              const angle = (i * 360) / 24;
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={50 + 16 * Math.cos(rad)}
                  y1={50 + 16 * Math.sin(rad)}
                  x2={50 + 46 * Math.cos(rad)}
                  y2={50 + 46 * Math.sin(rad)}
                  opacity="0.4"
                />
              );
            })}
            <path d="M 50 14 A 36 36 0 1 1 49.9 14 Z" />
          </svg>
        </motion.div>

        {/* Large Premium Arch Framed Couple Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isTriggered ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full max-w-[340px] md:max-w-[420px] aspect-[2/3] bg-gradient-to-b from-cream to-cream-deep p-2 border-2 border-gold rounded-t-full shadow-2xl overflow-hidden mb-10"
        >
          {/* Inner double border */}
          <div className="absolute inset-1.5 border border-gold-deep/30 rounded-t-full pointer-events-none z-10" />
          <div className="absolute inset-3 border border-dashed border-gold-deep/15 rounded-t-full pointer-events-none z-10" />

          {/* Actual Image */}
          <div className="w-full h-full rounded-t-full overflow-hidden border border-gold-deep/40 bg-ivory">
            <motion.img
              src="/assets/images/engagement-3.webp"
              alt="Muthukumar & Amitha"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Text Details Section */}
        <div className="text-center w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isTriggered ? { opacity: 0.7 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-[11px] md:text-xs tracking-[0.4em] text-gold-deep font-cinzel block mb-3 uppercase font-bold"
          >
            இரு உள்ளங்கள், ஒரு பயணம்
          </motion.span>
          
          {/* Couple Names (Letter Reveal) */}
          <h1 className="flex flex-wrap items-center justify-center font-cinzel text-3xl md:text-5xl font-bold text-maroon tracking-wide mb-4 leading-normal select-none">
            <span className="flex">
              {groomName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isTriggered ? "visible" : "hidden"}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* Premium Ampersand */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isTriggered ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-cormorant italic text-gold-deep mx-4 text-3xl md:text-5xl font-normal"
            >
              &amp;
            </motion.span>

            <span className="flex">
              {brideName.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index + groomName.length + 2}
                  initial="hidden"
                  animate={isTriggered ? "visible" : "hidden"}
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Golden Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isTriggered ? { width: "120px" } : {}}
            transition={{ delay: 1.6, duration: 1.0 }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />

          {/* Wedding Date */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isTriggered ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="font-cinzel text-sm md:text-base text-brown tracking-[0.25em] font-semibold mb-3"
          >
            MONDAY, AUGUST 31, 2026
          </motion.p>

          {/* Invitation Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isTriggered ? { opacity: 0.8, y: 0 } : {}}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="text-xs md:text-sm font-cormorant italic text-brown leading-relaxed px-4 max-w-lg mx-auto"
          >
            With the divine blessings of Lord Murugan &amp; our beloved families, <br className="hidden sm:inline" />
            we cordially invite you to join us in celebrating our wedding.
          </motion.p>
        </div>
      </motion.div>

      {/* Parallax Stone-Gold Pillars on Left and Right borders */}
      <motion.div
        style={{ x: pillarLeftX }}
        className="absolute top-0 bottom-0 left-0 w-8 md:w-20 bg-[linear-gradient(90deg,#FAF8F5_0%,#EADCB9_40%,#FAF8F5_80%,#9C7A2E_100%)] border-r border-gold/40 shadow-xl z-[5] flex flex-col justify-around py-16 text-center select-none"
      >
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gold opacity-20" />
        
        {/* Carved Gold Rings / Bands on Pillar */}
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-24 pointer-events-none opacity-25">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-full h-[1.5px] bg-gold-deep border-b border-white/20" />
          ))}
        </div>

        {[...Array(6)].map((_, i) => (
          <div key={i} className="text-gold-deep/15 text-lg font-cinzel z-10">❁</div>
        ))}
      </motion.div>

      <motion.div
        style={{ x: pillarRightX }}
        className="absolute top-0 bottom-0 right-0 w-8 md:w-20 bg-[linear-gradient(90deg,#9C7A2E_0%,#FAF8F5_20%,#EADCB9_60%,#FAF8F5_100%)] border-l border-gold/40 shadow-xl z-[5] flex flex-col justify-around py-16 text-center select-none"
      >
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gold opacity-20" />

        {/* Carved Gold Rings / Bands on Pillar */}
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between py-24 pointer-events-none opacity-25">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-full h-[1.5px] bg-gold-deep border-b border-white/20" />
          ))}
        </div>

        {[...Array(6)].map((_, i) => (
          <div key={i} className="text-gold-deep/15 text-lg font-cinzel z-10">❁</div>
        ))}
      </motion.div>

      {/* Lamp Gradient Definitions */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="heroLampGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF3D0" />
            <stop offset="45%" stopColor="#E8CD8A" />
            <stop offset="100%" stopColor="#9C7A2E" />
          </linearGradient>
        </defs>
      </svg>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[5] pointer-events-none">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center opacity-65"
        >
          <span className="text-[8px] font-cinzel tracking-[0.25em] text-gold-deep uppercase mb-1.5 font-bold">Scroll Down</span>
          <div className="w-4 h-7 border border-gold-deep/45 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-gold-deep rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
