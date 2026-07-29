"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MailOpen, MapPin, Calendar, Clock, Download, Share2 } from "lucide-react";
import { downloadInvitationCard, shareInvitationCard } from "@/utils/shareUtils";

export default function WeddingDetails() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="details" className="relative w-full py-24 px-4 bg-transparent overflow-hidden text-cream-light">
      {/* Background silk-like texture shading */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,76,0.03)_0%,rgba(0,0,0,0)_80%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <div className="text-center mb-12 select-none">
          <span className="text-[10px] tracking-[0.4em] text-gold-deep opacity-95 uppercase block mb-3 font-bold">
            Auspicious Ceremonies
          </span>
          <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
            Royal Invitation Card
          </h2>
          <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
        </div>

        {/* 3D Unfolding Invitation Container */}
        <div className="perspective-[1200px] w-full max-w-[460px] aspect-[4/5] flex items-center justify-center relative cursor-pointer select-none mb-10">
          
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* The Main Inner Card (revealed when cover opens) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8ED] to-[#F4EDE0] border-4 border-double border-gold-deep shadow-2xl p-6 md:p-8 flex flex-col justify-between rounded z-[1]">
              {/* Ornate Gold Border lines */}
              <div className="absolute inset-2 border border-gold-deep/30 rounded pointer-events-none" />
              <div className="absolute inset-3.5 border border-dashed border-gold-deep/15 rounded pointer-events-none" />

              {/* Decorative Corner Ornaments */}
              <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-gold-deep/55 rounded-tl pointer-events-none" />
              <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-gold-deep/55 rounded-tr pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-gold-deep/55 rounded-bl pointer-events-none" />
              <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-gold-deep/55 rounded-br pointer-events-none" />

              {/* Auspicious Flower/Garland Motif */}
              <div className="flex justify-center mt-2 mb-1 z-[2]">
                <span className="text-gold-deep text-2xl font-cinzel">❁</span>
              </div>

              <div className="text-center z-[2]">
                <span className="text-[7.5px] tracking-[0.3em] text-gold-deep font-cinzel block mb-1.5 font-bold">
                  OM NAMO NARAYANAYA
                </span>
                <h3 className="font-cinzel text-base md:text-lg text-maroon font-bold tracking-widest uppercase">
                  Wedding Invitation
                </h3>
              </div>

              {/* Couple Info */}
              <div className="text-center my-2 z-[2] px-2">
                <p className="font-cinzel text-xs md:text-sm font-bold text-brown tracking-wider">
                  Er. E. MUTHUKUMAR (Naveen) <span className="text-[9px] font-sans font-normal text-gold-deep">B.E., M.B.A.</span>
                </p>
                <p className="text-[9px] font-sans text-brown/70 tracking-wide mt-0.5">Infosys Limited</p>
                <p className="font-cormorant italic text-sm text-gold-deep my-1 font-semibold">&amp;</p>
                <p className="font-cinzel text-xs md:text-sm font-bold text-brown tracking-wider">
                  Er. A. AMITHA <span className="text-[9px] font-sans font-normal text-gold-deep">B.E.</span>
                </p>
              </div>

              {/* Event Details */}
              <div className="space-y-4 my-2 z-[2] px-2 text-left">
                {/* Reception & Engagement */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[8px] font-cinzel tracking-widest text-gold-deep block font-bold">ENGAGEMENT CEREMONY</span>
                    <span className="font-poppins text-[10px] md:text-xs font-semibold text-brown block">
                      Sunday, August 30, 2026
                    </span>
                    <span className="text-[9px] text-brown/80 font-poppins">
                      Evening 06:30 PM Onwards
                    </span>
                  </div>
                </div>

                {/* Muhurtham */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[8px] font-cinzel tracking-widest text-gold-deep block font-bold">WEDDING MUHURTHAM &amp; RECEPTION</span>
                    <span className="font-poppins text-[10px] md:text-xs font-semibold text-brown block">
                      Monday, August 31, 2026
                    </span>
                    <span className="text-[9px] text-brown/80 font-poppins">
                      Morning 07:00 AM - 09:00 AM
                    </span>
                  </div>
                </div>

                {/* Venue */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[8px] font-cinzel tracking-widest text-gold-deep block font-bold">VENUE</span>
                    <span className="font-poppins text-[10px] md:text-xs font-semibold text-brown">
                      VKT Mahal, Rayanoor, Karur, TN
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Motif */}
              <div className="text-center mb-1 z-[2]">
                <span className="text-[15px] text-gold-deep select-none">❁</span>
              </div>
            </div>

            {/* Left Cover Flap */}
            <motion.div
              style={{ originX: 0 }}
              animate={isOpen ? { rotateY: -140 } : { rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1] }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#8C6D3B] via-[#C8A24C] to-[#8C6D3B] border-r border-gold-light/20 shadow-2xl p-4 flex flex-col justify-between rounded-l z-[3] backface-hidden overflow-hidden"
            >
              {/* Pattern Background overlay */}
              <div className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none" style={{ backgroundImage: "url('/assets/images/bg-intro.webp')" }} />
              <div className="absolute inset-1.5 border border-white/20 rounded-l pointer-events-none" />
              
              <div className="z-10 text-white text-left font-cinzel text-xs tracking-widest p-2 opacity-65 font-bold">
                ✧ M
              </div>
              <div className="z-10 text-center flex flex-col items-center select-none">
                <span className="text-white text-4xl opacity-75">❁</span>
              </div>
              <div className="z-10 text-left text-[9px] text-white/70 p-2 font-cinzel tracking-widest uppercase font-bold">
                Wedding Card
              </div>
            </motion.div>

            {/* Right Cover Flap */}
            <motion.div
              style={{ originX: 1 }}
              animate={isOpen ? { rotateY: 140 } : { rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.3, 1] }}
              className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-[#8C6D3B] via-[#C8A24C] to-[#8C6D3B] border-l border-gold-light/20 shadow-2xl p-4 flex flex-col justify-between rounded-r z-[3] backface-hidden overflow-hidden"
            >
              {/* Pattern Background overlay */}
              <div className="absolute inset-0 bg-cover bg-center opacity-[0.12] pointer-events-none" style={{ backgroundImage: "url('/assets/images/bg-intro.webp')" }} />
              <div className="absolute inset-1.5 border border-white/20 rounded-r pointer-events-none" />
              
              <div className="z-10 text-white text-right font-cinzel text-xs tracking-widest p-2 opacity-65 font-bold">
                A ✧
              </div>
              <div className="z-10 text-center flex flex-col items-center select-none">
                <span className="text-white text-2xl font-cinzel font-bold tracking-widest">❁</span>
              </div>
              <div className="z-10 text-right text-[9px] text-white/70 p-2 font-cinzel tracking-widest uppercase font-bold">
                Invitation
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Action Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          {/* Open/Close card button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white px-6 py-3 rounded-full font-cinzel text-xs tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all border border-cream/20 flex items-center gap-2 w-52 justify-center"
          >
            <MailOpen className="w-4 h-4" />
            <span>{isOpen ? "Close Card" : "Open Card"}</span>
          </motion.button>

          {/* Download card button */}
          <motion.button
            onClick={downloadInvitationCard}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-[#FAF8F5] text-gold-deep border border-gold-deep/50 hover:bg-[#F5EAD4]/30 px-6 py-3 rounded-full font-cinzel text-xs tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 w-52 justify-center"
          >
            <Download className="w-4 h-4" />
            <span>Download Card</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
