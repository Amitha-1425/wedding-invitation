"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section id="thank-you" className="relative w-full py-24 px-4 bg-transparent overflow-hidden text-center">
      {/* Background soft circular glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      {/* Decorative floral elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[radial-gradient(circle,rgba(232,143,174,0.06)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-[radial-gradient(circle,rgba(200,162,76,0.05)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Animated Lotus Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0 }}
          className="text-pink-lotus mb-8 filter drop-shadow-[0_2px_6px_rgba(232,143,174,0.2)]"
        >
          <svg viewBox="0 0 64 64" width="48" height="48" className="fill-current">
            <path d="M32 58c-10-6-16-16-16-26 6 4 11 10 16 10s10-6 16-10c0 10-6 20-16 26z" />
            <path d="M32 40c-4-10-4-20 0-32 4 12 4 22 0 32z" opacity="0.85" />
            <path d="M14 30c6-2 12 0 18 6-8 2-14 0-18-6z" opacity="0.7" />
            <path d="M50 30c-6-2-12 0-18 6 8 2 14 0 18-6z" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] text-gold-deep font-cinzel uppercase block mb-3 font-semibold"
        >
          Heartfelt Gratitude
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-cinzel text-maroon font-medium tracking-wide mb-6"
        >
          Thank You
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[1px] w-20 bg-gold-deep mb-8"
        />

        {/* Gratitude card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="w-full bg-[#FAF8F5]/45 backdrop-blur-[2px] p-8 md:p-12 border border-gold-deep/20 rounded-2xl shadow-[0_8px_30px_rgba(200,162,76,0.06)] relative overflow-hidden"
        >
          {/* Subtle ornate inner borders */}
          <div className="absolute inset-2 border border-gold-deep/10 rounded-xl pointer-events-none" />
          
          <p className="text-base md:text-lg font-cormorant italic text-brown leading-relaxed mb-6">
            &ldquo;With hearts full of joy and gratitude, we thank you for being a part of our journey. Your love, presence, and blessings mean the world to us.&rdquo;
          </p>

          <p className="font-cinzel text-xs tracking-widest text-gold-deep font-semibold">
            MUTHUKUMAR &amp; AMITHA
          </p>
        </motion.div>

        {/* Small gold floral medallion at the end */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-gold text-lg select-none"
        >
          ❁
        </motion.div>
      </div>
    </section>
  );
}
