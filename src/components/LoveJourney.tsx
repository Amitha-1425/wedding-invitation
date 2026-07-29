"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function LoveJourney() {
  return (
    <section id="journey" className="relative w-full overflow-hidden bg-transparent py-12 text-brown">
      
      {/* Title */}
      <div className="text-center mb-16 select-none">
        <span className="text-[10px] tracking-[0.4em] text-gold-deep font-cinzel opacity-95 uppercase block mb-3 font-bold">
          Auspicious Celebrations
        </span>
        <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
          Wedding Ceremonies
        </h2>
        <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
      </div>

      {/* Chapter 1: Engagement Ceremony */}
      <div className="relative w-full flex items-center justify-center py-16 px-4 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(200,162,76,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        
        <div className="max-w-5xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16 relative z-10">
          
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col justify-center items-center md:items-start max-w-sm w-full bg-[#FAF8F5]/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gold-deep/15 shadow-sm relative text-brown"
          >
            <div className="absolute inset-1.5 border border-gold-deep/5 rounded-xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-2 select-none">
              <span className="text-gold-deep font-cinzel text-[10px] tracking-widest font-bold">CEREMONY I</span>
              <div className="w-6 h-[1px] bg-gold-deep/30" />
            </div>

            <h3 className="text-xl md:text-2xl font-cinzel text-maroon font-bold tracking-wide mb-1">
              Engagement Ceremony
            </h3>
            <span className="font-noto-tamil text-xs text-gold-deep tracking-wider mb-4 block">
              நிச்சயதார்த்தம்
            </span>

            {/* Structured details list */}
            <div className="space-y-3 mb-6 text-left w-full text-brown/90 border-t border-b border-gold-deep/10 py-4">
              <div className="flex items-center gap-3 text-xs">
                <Calendar className="w-4 h-4 text-gold-deep" />
                <span>Sunday, August 30, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Clock className="w-4 h-4 text-gold-deep" />
                <span>Evening 06:30 PM Onwards</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-4 h-4 text-gold-deep" />
                <span>VKT Mahal, Rayanoor, Karur</span>
              </div>
            </div>
            
            <p className="text-xs md:text-sm font-cormorant italic text-brown/75 leading-relaxed">
              We begin our wedding celebrations with the auspicious ring exchange and traditional welcoming rituals. We look forward to your arrival and warm blessings.
            </p>
          </motion.div>

          {/* Image Arch Frame (Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="w-full max-w-[260px] aspect-[2/3] p-1.5 border border-gold rounded-t-full bg-gradient-to-b from-cream to-cream-deep shadow-lg relative"
          >
            <div className="absolute inset-1.5 border border-gold-deep/20 rounded-t-full pointer-events-none" />
            <div className="w-full h-full rounded-t-full overflow-hidden border border-gold-deep/30 bg-ivory">
              <img src="/assets/images/engagement-2.webp" alt="Engagement Ceremony" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chapter 2: Wedding Muhurtham */}
      <div className="relative w-full flex items-center justify-center py-16 px-4 md:px-12 border-t border-gold-deep/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(200,162,76,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
        
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 relative z-10">
          
          {/* Image Arch Frame (Left on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="w-full max-w-[260px] aspect-[2/3] p-1.5 border border-gold rounded-t-full bg-gradient-to-b from-cream to-cream-deep shadow-lg relative order-1 md:order-2"
          >
            <div className="absolute inset-1.5 border border-gold-deep/20 rounded-t-full pointer-events-none" />
            <div className="w-full h-full rounded-t-full overflow-hidden border border-gold-deep/30 bg-ivory">
              <img src="/assets/images/engagement-3.webp" alt="Wedding Muhurtham" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col justify-center items-center md:items-start max-w-sm w-full bg-[#FAF8F5]/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gold-deep/15 shadow-sm relative order-2 md:order-1 text-brown"
          >
            <div className="absolute inset-1.5 border border-gold-deep/5 rounded-xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-2 select-none">
              <span className="text-gold-deep font-cinzel text-[10px] tracking-widest font-bold">CEREMONY II</span>
              <div className="w-6 h-[1px] bg-gold-deep/30" />
            </div>

            <h3 className="text-xl md:text-2xl font-cinzel text-maroon font-bold tracking-wide mb-1">
              Wedding Muhurtham
            </h3>
            <span className="font-noto-tamil text-xs text-gold-deep tracking-wider mb-4 block">
              திருமண முகூர்த்தம் &amp; வரவேற்பு
            </span>

            {/* Structured details list */}
            <div className="space-y-3 mb-6 text-left w-full text-brown/90 border-t border-b border-gold-deep/10 py-4">
              <div className="flex items-center gap-3 text-xs">
                <Calendar className="w-4 h-4 text-gold-deep" />
                <span>Monday, August 31, 2026</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <Clock className="w-4 h-4 text-gold-deep" />
                <span>Morning 07:00 AM - 09:00 AM</span>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <MapPin className="w-4 h-4 text-gold-deep" />
                <span>VKT Mahal, Rayanoor, Karur</span>
              </div>
            </div>

            <p className="text-xs md:text-sm font-cormorant italic text-brown/75 leading-relaxed">
              The tying of the sacred Mangalyam in the presence of families, friends, and elders under the divine blessings of Lord Murugan, followed by the wedding reception celebration.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
