"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Blessings() {
  const parentGroups = [
    {
      title: "Groom's Family",
      names: "N. Elangovan & E. Selvamani",
      relation: "Father & Mother of Groom",
      familyInfo: "With Love: Ms. E. Vijayapriya B.C.A.",
      blessing: "We welcome you all with warm hearts to celebrate the joining of our children in love, trust, and family values.",
      role: "MUTHUKUMAR'S FAMILY",
      image: "/assets/images/groomfams.jpeg",
      imageAspect: "aspect-[3/4]",
      imageWidth: "w-44",
      imagePosition: "object-center"
    },
    {
      title: "Bride's Family",
      names: "K. Anbalagan & M. Maheswari",
      relation: "Father & Mother of Bride",
      familyInfo: "With Love: Midhuna, Sathish & nephew M.S. Vikram",
      blessing: "May Lord Murugan shower his infinite grace upon our children Naveen & Amitha as they begin this sacred journey of companionship.",
      role: "AMITHA'S FAMILY",
      image: "/assets/images/bridefam.png",
      imageAspect: "aspect-[3/4]",
      imageWidth: "w-44",
      imagePosition: "object-center",
      objectFit: "object-cover"
    },
    {
      title: "Sister of Groom",
      names: "Ms. E. Vijayapriya B.C.A.",
      relation: "Younger Sister of Groom",
      familyInfo: "",
      blessing: "Wishing my dearest brother Naveen and sister-in-law Amitha a lifetime of joy, endless love, and beautiful new beginnings together!",
      role: "SISTER'S BLESSINGS",
      image: "/assets/images/groomsister.jpeg",
      imageAspect: "aspect-[3/4]",
      imageWidth: "w-44",
      imagePosition: "object-center"
    },
    {
      title: "Sister & Brother-in-Law",
      names: "A. Midhuna & R. Sathish",
      relation: "Sister & Brother-in-Law of Bride",
      familyInfo: "With Love: Nephew M.S. Vikram",
      blessing: "Wishing our dearest sister Amitha and brother-in-law Naveen a lifetime of happiness, shared laughter, and beautiful memories. So happy for you both!",
      role: "SISTER & BROTHER-IN-LAW'S BLESSINGS",
      image: "/assets/images/sister.png",
      imageAspect: "aspect-[3/4]",
      imageWidth: "w-44",
      imagePosition: "object-center"
    }
  ];

  return (
    <section id="blessings" className="relative w-full py-24 px-4 bg-transparent overflow-hidden text-center text-brown">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.03)_0%,rgba(0,0,0,0)_75%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <div className="mb-16 select-none">
          <span className="text-[10px] tracking-[0.4em] text-gold-deep font-cinzel opacity-95 uppercase block mb-2 font-bold">
            Elders &amp; Ancestors
          </span>
          <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
            Family Blessings
          </h2>
          <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
        </div>

        {/* Blessings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 w-full px-4 justify-items-center relative z-10">
          {parentGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="w-full max-w-[340px] bg-gradient-to-b from-[#FFFDF9]/25 to-[#FAF6ED]/12 backdrop-blur-[4px] border border-gold-deep/30 rounded-t-full p-6 relative flex flex-col justify-between items-center shadow-md group text-brown"
            >
              {/* Inner Double Dashed Gold Border */}
              <div className="absolute inset-2 border border-gold-deep/20 rounded-t-full pointer-events-none" />
              <div className="absolute inset-3.5 border border-dashed border-gold-deep/10 rounded-t-full pointer-events-none" />

              {/* Top Carved Mandala Element */}
              <div className="w-10 h-10 text-gold-deep/40 font-cinzel text-2xl select-none mb-6">
                ❁
              </div>

              <div className="z-10 w-full flex flex-col items-center">
                <span className="text-[9px] text-gold-deep font-cinzel tracking-[0.2em] font-bold block mb-1">
                  {group.role}
                </span>
                
                <h4 className="font-cinzel text-sm md:text-base text-maroon font-bold tracking-wider mb-1 max-w-[280px]">
                  {group.names}
                </h4>
                
                <span className="text-[9px] text-gold-deep/70 font-poppins uppercase tracking-widest block mb-3 font-semibold">
                  {group.relation}
                </span>

                {/* Parent Image Frame */}
                {group.image ? (
                  <div className={`rounded-md overflow-hidden border border-gold-deep/40 p-1 bg-[#FFFDF9] relative shadow-md mb-4 mt-2 ${group.imageAspect || "aspect-[3/4]"} ${group.imageWidth || "w-44"}`}>
                    <div className="absolute inset-0.5 border border-gold-deep/10 pointer-events-none" />
                    <img 
                      src={group.image} 
                      alt={group.names} 
                      className={`w-full h-full ${group.objectFit || "object-cover"} rounded-sm ${group.imagePosition || "object-center"}`} 
                    />
                  </div>
                ) : (
                  <div className="w-44 aspect-[3/4] rounded-md overflow-hidden border border-gold-deep/30 p-1 bg-[#F5EAD4]/10 relative shadow-sm mb-4 mt-2 flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0.5 border border-dashed border-gold-deep/10 pointer-events-none" />
                    <span className="text-gold-deep/20 text-5xl select-none">❁</span>
                    <span className="text-[8px] text-gold-deep/50 font-cinzel mt-2 tracking-widest uppercase font-semibold">blessings</span>
                  </div>
                )}

                {group.familyInfo && (
                  <p className="text-[10px] text-brown/70 font-poppins mb-6 italic leading-relaxed max-w-[280px]">
                    {group.familyInfo}
                  </p>
                )}

                <div className="h-[1px] w-16 bg-gold-deep/20 mb-6" />

                <p className="font-cormorant italic text-xs md:text-sm text-maroon/90 font-semibold leading-relaxed max-w-[280px]">
                  &ldquo;{group.blessing}&rdquo;
                </p>
              </div>

              {/* Bottom Blooming Lotus SVG */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.6 }}
                whileInView={{ scale: [0.8, 1, 0.8] }}
                viewport={{ once: false }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mt-8 text-gold-deep pointer-events-none"
              >
                <svg viewBox="0 0 64 40" className="w-10 h-auto fill-current opacity-80 filter drop-shadow-[0_1px_3px_rgba(200,162,76,0.15)]">
                  <path d="M10 26 Q32 40 54 26 Q54 34 32 36 Q10 34 10 26Z" />
                  <path d="M32 4c4 6 5 10 2 14-2 2-4 2-4 2s-2 0-4-2c-3-4-2-8 2-14 1 3 2 4 4 0z" opacity="0.9" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
