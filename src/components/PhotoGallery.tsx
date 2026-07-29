"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  frameType: "stone" | "gold" | "lotus" | "brass" | "wood";
  widthClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/assets/images/groom.webp",
    title: "Er. E. Muthukumar (Naveen)",
    frameType: "brass",
    widthClass: "aspect-[2/3] sm:col-span-1",
  },
  {
    src: "/assets/images/engagement-3.webp",
    title: "Eternal Companionship",
    frameType: "gold",
    widthClass: "aspect-[2/3] sm:col-span-1",
  },
  {
    src: "/assets/images/bride.webp",
    title: "Er. A. Amitha",
    frameType: "wood",
    widthClass: "aspect-[2/3] sm:col-span-1",
  },
];

export default function PhotoGallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIdx(index);
  const closeLightbox = () => setActiveIdx(null);
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const renderFrame = (item: GalleryItem) => {
    const imgClasses = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

    switch (item.frameType) {
      case "stone":
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#FAF8F5] to-[#EADCB9] p-3 rounded-t-full border-4 border-[#C8A24C] shadow-lg group-hover:shadow-[0_12px_28px_rgba(200,162,76,0.3)] transition-all duration-500">
            <div className="absolute inset-1 border border-[#C8A24C]/20 rounded-t-full pointer-events-none" />
            <div className="w-full h-full rounded-t-full overflow-hidden border border-gold-deep/35 bg-ivory">
              <img src={item.src} alt={item.title} className={imgClasses} />
            </div>
          </div>
        );

      case "gold":
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#FFFDF9] via-gold to-gold-deep p-2 border-2 border-gold shadow-xl group-hover:shadow-[0_12px_32px_rgba(200,162,76,0.45)] transition-all duration-500 rounded-lg">
            <div className="absolute inset-1 border border-maroon/10 rounded" />
            <div className="w-full h-full overflow-hidden border border-gold-deep/60 rounded bg-cream">
              <img src={item.src} alt={item.title} className={imgClasses} />
            </div>
          </div>
        );

      case "brass":
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#EADCB9] to-[#C8A24C] p-2 border-2 border-gold-deep shadow-lg group-hover:shadow-[0_12px_28px_rgba(156,122,46,0.35)] transition-all duration-500 rounded-t-3xl">
            <div className="absolute inset-1 border border-gold-light/35 rounded-t-2xl" />
            <div className="w-full h-full overflow-hidden border border-gold-deep/50 rounded-t-2xl bg-cream">
              <img src={item.src} alt={item.title} className={imgClasses} />
            </div>
          </div>
        );

      case "wood":
        return (
          <div className="relative w-full h-full bg-gradient-to-b from-[#EADCB9] to-[#8C6D3B] p-2 rounded-t-3xl border-2 border-gold-deep shadow-lg group-hover:shadow-[0_12px_28px_rgba(140,109,59,0.35)] transition-all duration-500">
            <div className="w-full h-full rounded-t-[20px] overflow-hidden border border-gold-deep/40 bg-cream">
              <img src={item.src} alt={item.title} className={imgClasses} />
            </div>
          </div>
        );

      default:
        return <img src={item.src} alt={item.title} className={imgClasses} />;
    }
  };

  return (
    <section id="gallery" className="relative w-full py-24 px-4 bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.02)_0%,rgba(0,0,0,0)_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] tracking-[0.4em] text-gold-deep font-cinzel opacity-95 uppercase block mb-2 font-bold">
            Beautiful Moments
          </span>
          <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
            Photo Gallery
          </h2>
          <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[300px] sm:max-w-4xl mx-auto items-stretch">
          {GALLERY_ITEMS.map((item, idx) => {
            const getRoundClass = (frameType: string) => {
              switch (frameType) {
                case "stone":
                  return "rounded-t-full";
                case "brass":
                case "wood":
                  return "rounded-t-3xl";
                case "gold":
                  return "rounded-lg";
                default:
                  return "rounded-none";
              }
            };

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                onClick={() => openLightbox(idx)}
                className={`group cursor-pointer relative flex flex-col justify-between p-1 shrink-0 w-full ${item.widthClass}`}
              >
                {/* Card Frame */}
                <div className="w-full h-full relative">
                  {renderFrame(item)}
                  
                  {/* Micro Hover Reveal info - matched to frame corners */}
                  <div className={`absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center ${getRoundClass(item.frameType)}`}>
                    <Maximize2 className="w-5 h-5 text-gold mb-2 scale-75 group-hover:scale-100 transition-transform duration-300" />
                    <p className="font-cinzel text-[10px] text-cream tracking-widest leading-relaxed font-semibold">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox (Always dark for optimal photo contrast) */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[999] bg-black/98 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all z-10 hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={activeIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[82vh] flex flex-col justify-center items-center rounded"
            >
              <img
                src={GALLERY_ITEMS[activeIdx].src}
                alt={GALLERY_ITEMS[activeIdx].title}
                className="max-w-full max-h-[76vh] object-contain rounded border-2 border-gold/40 shadow-2xl"
              />
              <div className="absolute bottom-[-45px] text-center text-cream">
                <p className="font-cinzel text-sm tracking-widest text-gold-light">
                  {GALLERY_ITEMS[activeIdx].title}
                </p>
              </div>
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all z-10 hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
