"use client";

import React, { useState, useEffect, useRef } from "react";
import CinematicLoader from "@/components/CinematicLoader";
import Hero from "@/components/Hero";
import LoveJourney from "@/components/LoveJourney";
import PhotoGallery from "@/components/PhotoGallery";
import WeddingDetails from "@/components/WeddingDetails";
import CircularCountdown from "@/components/CircularCountdown";
import Blessings from "@/components/Blessings";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";
import { Music, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThankYou from "@/components/ThankYou";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (!loaded) return;
    
    // Dynamically load Lenis to avoid Server-Side Rendering (SSR) issues
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Clean up scroller on unmount
      return () => {
        lenis.destroy();
      };
    });
  }, [loaded]);

  // Audio Playback effect
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Set background audio to play mildly
    audioRef.current.volume = 0.35;
    
    if (musicPlaying) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay block / playback error: ", err);
        setMusicPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [musicPlaying]);

  const toggleMusic = () => {
    setMusicPlaying(!musicPlaying);
  };

  const handleAudioError = () => {
    // If the local file is missing, fallback to reliable royalty-free music
    if (audioRef.current) {
      console.log("Local audio not found, falling back to backup...");
      audioRef.current.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
      audioRef.current.volume = 0.35;
      if (musicPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="/assets/audio/Kaadhal-Kadhai.mp3"
        loop
        onError={handleAudioError}
      />

      {/* Cinematic Loading Overlay */}
      <CinematicLoader
        onComplete={() => setLoaded(true)}
        onPlayMusic={() => setMusicPlaying(true)}
      />

      {/* Floating Music Control Coin */}
      {loaded && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
          onClick={toggleMusic}
          className="cursor-pointer fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-tr from-gold-deep via-gold-light to-gold-deep flex items-center justify-center shadow-[0_6px_20px_rgba(200,162,76,0.4)] border border-cream/20 animate-gold-pulse"
        >
          {musicPlaying ? (
            <Music className="w-5 h-5 text-maroon-deep animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-maroon-deep/60" />
          )}
        </motion.button>
      )}

      {/* Main Website Wrapper */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="w-full relative bg-[#FAF8F5] overflow-hidden"
          >
            {/* Highly transparent fixed temple backdrop watermark */}
            <div 
              className="fixed inset-0 pointer-events-none z-0 opacity-[0.18]"
              style={{
                backgroundImage: "url('/assets/images/bg-opening.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            />

            {/* Global Falling Jasmine & Pink Lotus Petals */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1] opacity-40">
              {[...Array(24)].map((_, i) => {
                const isLotus = i % 3 === 0;
                const size = isLotus ? 12 + (i % 5) * 2 : 9 + (i % 4) * 2;
                return (
                  <motion.div
                    key={i}
                    className={`absolute ${
                      isLotus 
                        ? "bg-gradient-to-tr from-pink-lotus/40 to-pink-lotus/85 rounded-tr-[50%] rounded-bl-[50%]" 
                        : "bg-gradient-to-b from-white to-[#FFFFF0] rounded-full shadow-[0_2px_4px_rgba(200,162,76,0.12)] flex items-center justify-center"
                    }`}
                    style={{
                      width: size,
                      height: size,
                      left: `${(i * 4.1) % 100}vw`,
                      top: `-20px`,
                    }}
                    animate={{
                      top: "105vh",
                      x: [0, ((i * 15) % 80) - 40, ((i * 25) % 120) - 60],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 9 + (i % 6) * 2.2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.6,
                    }}
                  >
                    {!isLotus && <div className="w-1 h-1 rounded-full bg-gold-light" />}
                  </motion.div>
                );
              })}
            </div>

            {/* Sections Wrapper (Stay above background elements) */}
            <div className="relative z-10 w-full">
              <Hero isTriggered={loaded} />
              <WeddingDetails />
              <Venue />
              <LoveJourney />
              <Blessings />
              <PhotoGallery />
              <ThankYou />
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
