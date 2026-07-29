"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { shareInvitationCard } from "@/utils/shareUtils";

export default function Footer() {
  return (
    <footer className="relative w-full py-20 px-4 bg-[#FAF8F2]/35 text-brown text-center overflow-hidden border-t border-gold-deep/20">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.02)_0%,rgba(0,0,0,0)_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center select-none relative z-10">
        
        {/* Animated Lotus SVG at the top of Footer */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold-deep mb-8 filter drop-shadow-[0_1px_3px_rgba(200,162,76,0.15)] pointer-events-none"
        >
          <svg viewBox="0 0 64 64" width="44" height="44" className="fill-current">
            <path d="M32 58c-10-6-16-16-16-26 6 4 11 10 16 10s10-6 16-10c0 10-6 20-16 26z" />
            <path d="M32 40c-4-10-4-20 0-32 4 12 4 22 0 32z" opacity="0.85" />
            <path d="M14 30c6-2 12 0 18 6-8 2-14 0-18-6z" opacity="0.7" />
            <path d="M50 30c-6-2-12 0-18 6 8 2 14 0 18-6z" opacity="0.7" />
          </svg>
        </motion.div>

        {/* Traditional Tamil Quote */}
        <div className="max-w-lg mb-8 px-4">
          <p className="font-noto-tamil text-maroon text-base md:text-lg font-semibold leading-relaxed mb-3">
            &ldquo;அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை <br className="hidden sm:inline" /> பண்பும் பயனும் அது.&rdquo;
          </p>
          <span className="text-[9px] font-cinzel tracking-[0.25em] text-brown/50 uppercase font-bold">
            Thirukkural &middot; Verse 45
          </span>
        </div>

        {/* Decorative divider line with gold symbols */}
        <div className="flex items-center gap-4 w-48 mb-8 opacity-65">
          <div className="h-[1px] flex-1 bg-gold-deep/30" />
          <span className="text-gold-deep text-lg">❁</span>
          <div className="h-[1px] flex-1 bg-gold-deep/30" />
        </div>

        {/* Footer Names */}
        <h4 className="font-cinzel text-xl text-maroon tracking-[0.15em] font-bold mb-2">
          MUTHUKUMAR <span className="text-gold-deep font-cormorant italic font-normal mx-1">&amp;</span> AMITHA
        </h4>
        <p className="text-[10px] tracking-[0.3em] font-poppins text-gold-deep/70 uppercase mb-8 font-semibold">
          31 August 2026 &middot; Karur, Tamil Nadu
        </p>

        {/* Share Button Group (WhatsApp Share Only) */}
        <div className="flex justify-center mb-12">
          {/* WhatsApp Share */}
          <motion.button
            onClick={shareInvitationCard}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer flex items-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/50 text-[#128C7E] px-8 py-3.5 rounded-full font-poppins text-xs font-bold tracking-wider transition-all select-none shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Share Invitation Card</span>
          </motion.button>
        </div>

        {/* Copyright info */}
        <p className="text-[9px] text-brown/40 tracking-widest font-poppins uppercase">
          Made with love &middot; Muthukumar &amp; Amitha Wedding &middot; &copy; 2026 All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
