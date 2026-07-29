"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CinematicLoaderProps {
  onComplete: () => void;
  onPlayMusic: () => void;
}

export default function CinematicLoader({ onComplete, onPlayMusic }: CinematicLoaderProps) {
  const [stage, setStage] = useState<"loading" | "ready" | "opening" | "completed">("loading");
  const [diyasLit, setDiyasLit] = useState<boolean[]>([false, false, false, false, false]);

  // Handle loading steps and deepams lighting (sped up for better UX)
  useEffect(() => {
    // Light deepams one by one (faster sequence)
    const timers = diyasLit.map((_, index) => {
      return setTimeout(() => {
        setDiyasLit((prev) => {
          const next = [...prev];
          next[index] = true;
          return next;
        });
      }, 300 + index * 220);
    });

    // Mark as ready after loading animations complete (approx 1.5s)
    const readyTimer = setTimeout(() => {
      setStage("ready");
    }, 1500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(readyTimer);
    };
  }, []);

  // Web Audio API Temple Bell Sound Synthesis
  const playBellChime = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    try {
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      
      // Inharmonic bell partials
      const partials = [
        { f: 160, g: 0.5, d: 3.5 },
        { f: 240, g: 0.4, d: 3.0 },
        { f: 310, g: 0.3, d: 2.5 },
        { f: 415, g: 0.25, d: 2.0 },
        { f: 555, g: 0.2, d: 1.5 },
        { f: 670, g: 0.15, d: 1.2 },
        { f: 830, g: 0.1, d: 0.8 },
      ];

      partials.forEach((p) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(p.f, now);
        
        // Bell envelope
        gainNode.gain.setValueAtTime(0.0001, now);
        gainNode.gain.linearRampToValueAtTime(p.g, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + p.d);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + p.d);
      });
    } catch (e) {
      console.warn("AudioContext failed: ", e);
    }
  };

  const handleOpenInvitation = () => {
    setStage("opening");
    playBellChime();
    onPlayMusic(); // Fade in Nadaswaram

    // Delay calling onComplete until curtain slides fully open (1.2s)
    setTimeout(() => {
      setStage("completed");
      onComplete();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {stage !== "completed" && (
        <motion.div
          className="fixed inset-0 z-[999] overflow-hidden bg-[#2E080C] flex items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Incense Smoke Effects (Drifting canvas particles) */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute bottom-0 left-[10%] w-32 h-[80vh] bg-gradient-to-t from-transparent via-white/10 to-transparent blur-2xl animate-pulse" style={{ animationDuration: "8s" }} />
            <div className="absolute bottom-0 right-[15%] w-40 h-[70vh] bg-gradient-to-t from-transparent via-white/10 to-transparent blur-2xl animate-pulse" style={{ animationDuration: "12s" }} />
          </div>

          {/* Golden Sunrays in Courtyard Backdrop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[100vh] bg-[radial-gradient(circle_at_50%_0%,rgba(232,205,138,0.06)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

          {/* Falling Lotus Petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-gradient-to-tr from-pink-lotus/40 to-pink-lotus/80 rounded-tr-[50%] rounded-bl-[50%]"
                style={{
                  width: `${10 + Math.random() * 14}px`,
                  height: `${10 + Math.random() * 14}px`,
                  left: `${Math.random() * 100}vw`,
                  top: `-5%`,
                }}
                animate={{
                  top: "105%",
                  x: [0, Math.random() * 80 - 40, Math.random() * 160 - 80],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6 + Math.random() * 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>

          {/* Hanging marigold garlands at the top of the curtains */}
          <div className="absolute top-0 left-0 right-0 h-10 overflow-hidden flex justify-around pointer-events-none z-20">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center origin-top"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-[1.5px] h-8 bg-gold-light/35" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#FF8C00] shadow-[0_1px_4px_#FF8C00]" />
                <div className="w-2.5 h-2.5 rounded-full bg-pink-lotus/80 mt-[-2px]" />
              </motion.div>
            ))}
          </div>

          {/* The Sliding Silk Curtains (opening duration optimized to 1.2s) */}
          {/* The Sliding Silk Gates (opening vertically, duration 1.4s) */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[50.5%] shadow-[inset_0_-20px_40px_rgba(0,0,0,0.65)] z-10 flex flex-col justify-between p-6 overflow-hidden bg-[radial-gradient(circle_at_bottom,#4A0E17_0%,#1B0205_100%)]"
            animate={stage === "opening" ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.3, 1] }}
          >
            {/* Top Gate Background Pattern Overlay */}
            <div 
              className="absolute top-0 left-0 w-screen h-[100vh] bg-cover bg-center opacity-[0.18] pointer-events-none"
              style={{ backgroundImage: "url('/assets/images/bg-opening.webp')" }}
            />
            
            {/* Split Mandala Top Half */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 overflow-hidden pointer-events-none opacity-30">
              <div className="w-48 h-48 rounded-full border border-gold-deep/70 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-dashed border-gold-deep/50 flex items-center justify-center">
                  <span className="text-gold-deep text-2xl font-cinzel pb-24">❁</span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-start items-start opacity-40 z-20">
              <span className="text-gold-light text-2xl font-cinzel">✧</span>
            </div>
            <div className="w-full flex justify-between items-center opacity-40 border-b border-gold-light/20 pb-4 z-20">
              <div className="h-[2px] w-20 bg-gold-light/20" />
              <span className="text-gold-light font-cinzel text-xs tracking-[0.2em] font-bold">WELCOME</span>
              <div className="h-[2px] w-20 bg-gold-light/20" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[50.5%] shadow-[inset_0_20px_40px_rgba(0,0,0,0.65)] z-10 flex flex-col justify-end p-6 overflow-hidden bg-[radial-gradient(circle_at_top,#4A0E17_0%,#1B0205_100%)]"
            animate={stage === "opening" ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.3, 1] }}
          >
            {/* Bottom Gate Background Pattern Overlay */}
            <div 
              className="absolute bottom-0 left-0 w-screen h-[100vh] bg-cover bg-center opacity-[0.18] pointer-events-none"
              style={{ backgroundImage: "url('/assets/images/bg-opening.webp')" }}
            />

            {/* Split Mandala Bottom Half */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 overflow-hidden pointer-events-none opacity-30">
              <div className="w-48 h-48 rounded-full border border-gold-deep/70 flex items-center justify-center -translate-y-24">
                <div className="w-40 h-40 rounded-full border border-dashed border-gold-deep/50 flex items-center justify-center">
                  <span className="text-gold-deep text-2xl font-cinzel pt-24">❁</span>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-end items-end opacity-40 z-20">
              <span className="text-gold-light text-2xl font-cinzel">✧</span>
            </div>
            <div className="w-full flex justify-between items-center opacity-40 border-t border-gold-light/20 pt-4 z-20">
              <div className="h-[2px] w-20 bg-gold-light/20" />
              <span className="text-gold-light font-cinzel text-xs tracking-[0.2em] font-bold">AUSPICIOUS</span>
              <div className="h-[2px] w-20 bg-gold-light/20" />
            </div>
          </motion.div>

          {/* Celebratory Circle Particle Burst & Golden Flash when opening */}
          {stage === "opening" && (
            <>
              {/* Golden Lens Flare/Glow Flash */}
              <motion.div 
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,150,0.95)_0%,rgba(200,162,76,0.35)_30%,rgba(0,0,0,0)_70%)] z-30 pointer-events-none"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: [0, 1, 0], scale: [0.3, 1.8, 3.5] }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              />
              
              {/* Circular Particle Burst */}
              <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                {[...Array(32)].map((_, i) => {
                  const angle = (i * 360) / 32 + (Math.random() * 12 - 6);
                  const distance = 80 + Math.random() * 120; // travel distance in pixels/vh
                  const radians = (angle * Math.PI) / 180;
                  const targetX = Math.cos(radians) * distance;
                  const targetY = Math.sin(radians) * distance;
                  const isLotus = i % 2 === 0;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        x: "-50%",
                        y: "-50%",
                      }}
                      initial={{ opacity: 1, scale: 0 }}
                      animate={{
                        x: [`-50%`, `calc(-50% + ${targetX}px)`],
                        y: [`-50%`, `calc(-50% + ${targetY}px)`],
                        opacity: [1, 1, 0],
                        scale: [0.4, isLotus ? 1.4 : 0.8, 0],
                        rotate: [0, Math.random() * 360],
                      }}
                      transition={{
                        duration: 1.1,
                        ease: [0.25, 1, 0.3, 1],
                      }}
                    >
                      {isLotus ? (
                        <div className="w-5 h-5 bg-gradient-to-tr from-pink-lotus/50 to-pink-lotus rounded-tr-[50%] rounded-bl-[50%] transform rotate-45" />
                      ) : (
                        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-gold-deep via-gold-light to-gold-deep shadow-[0_0_6px_#E8CD8A]" />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}

          {/* Loader Middle UI Elements with elegant fade-out and scale-down transition */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 select-none"
            animate={stage === "opening" ? { opacity: 0, scale: 0.85, y: -30 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.3, 1] }}
          >
            {/* Cinematic Headings */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-center z-30"
            >
              <span className="text-[11px] md:text-[12px] tracking-[0.4em] text-gold-light font-cinzel font-bold block mb-1.5 md:mb-3 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                Wedding Invitation
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-cinzel text-gold-light tracking-wider md:tracking-widest font-bold leading-normal drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
                MUTHUKUMAR
                <span className="block text-lg md:text-2xl font-cormorant italic text-cream my-1 md:my-2">&amp;</span>
                AMITHA
              </h1>
            </motion.div>

            {/* Glowing Diyas lighting sequentially */}
            <div className="flex gap-4 mt-5 md:mt-8 justify-center items-center h-12">
              {diyasLit.map((isLit, i) => (
                <motion.div
                  key={i}
                  className="relative w-8 h-8 flex justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isLit ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg viewBox="0 0 64 40" className={`w-8 h-auto transition-all duration-700 ${isLit ? 'text-gold-light' : 'text-gold-light/20'}`}>
                    {/* Diya body */}
                    <path d="M10 26 Q32 40 54 26 Q54 34 32 36 Q10 34 10 26Z" fill="currentColor" />
                    <ellipse cx="32" cy="27" rx="22" ry="6" fill="currentColor" opacity="0.8" />
                    {/* Flame */}
                    {isLit && (
                      <motion.path
                        d="M32 4c4 6 5 10 2 14-2 2-4 2-4 2s-2 0-4-2c-3-4-2-8 2-14 1 3 2 4 4 0z"
                        fill="#FFB25E"
                        animate={{ scaleY: [1, 1.15, 1], rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="origin-bottom filter drop-shadow-[0_0_8px_#FFB25E]"
                      />
                    )}
                  </svg>
                </motion.div>
              ))}
            </div>

            {/* Call To Action - Enter Button */}
            <div className="h-16 mt-12 flex items-center justify-center">
              {stage === "ready" && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenInvitation}
                  className="cursor-pointer relative overflow-hidden group bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-maroon font-cinzel font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_25px_rgba(200,162,76,0.35)] flex items-center gap-2 border border-cream/20 tracking-wider text-sm"
                >
                  {/* Glowing hover backdrop */}
                  <span className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:translate-y-0 transition-transform duration-500" />
                  <Sparkles className="w-4 h-4 text-maroon animate-pulse" />
                  <span>Open Invitation</span>
                </motion.button>
              )}

              {stage === "opening" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  className="text-gold-light/80 font-cinzel text-xs tracking-[0.25em] animate-pulse font-bold"
                >
                  Opening Temple Gates...
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
