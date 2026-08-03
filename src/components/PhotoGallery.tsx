"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/assets/images/groom.webp",
    title: "Er. E. Muthukumar (Naveen)",
  },
  {
    src: "/assets/images/engagement-3.webp",
    title: "Eternal Companionship",
  },
  {
    src: "/assets/images/bride.webp",
    title: "Er. A. Amitha",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.31 PM.jpeg",
    title: "Family Celebrations",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.31 PM (1).jpeg",
    title: "Joyful Gathering",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.32 PM.jpeg",
    title: "Cherished Moments",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.32 PM (1).jpeg",
    title: "Warm Blessings",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.32 PM (2).jpeg",
    title: "Smiling Hearts",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.33 PM.jpeg",
    title: "Loving Togetherness",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.33 PM (1).jpeg",
    title: "Family Bonding",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.33 PM (2).jpeg",
    title: "Happy Memories",
  },
  {
    src: "/assets/images/Family/WhatsApp Image 2026-08-03 at 2.17.34 PM.jpeg",
    title: "Ties of Love",
  },
  {
    src: "/assets/images/Family/sister.png",
    title: "Sisterly Affection",
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);
  
  // Interaction states for pausing autoplay
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Zoom state for Lightbox
  const [zoomScale, setZoomScale] = useState(1);
  const touchStartRef = useRef<{ dist: number; scale: number } | null>(null);

  // Autoplay Effect
  useEffect(() => {
    const isAutoplay = !isHovered && !isDragging && !isModalOpen && activeLightboxIdx === null;
    if (!isAutoplay) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [currentIndex, isHovered, isDragging, isModalOpen, activeLightboxIdx]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const nextLightbox = () => {
    setActiveLightboxIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
    resetZoom();
  };

  const prevLightbox = () => {
    setActiveLightboxIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
    resetZoom();
  };

  const resetZoom = () => {
    setZoomScale(1);
  };

  // Pinch to Zoom handlers for Lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = {
        dist,
        scale: zoomScale,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartRef.current) {
      e.preventDefault(); // prevent native scroll
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const scaleFactor = dist / touchStartRef.current.dist;
      const newScale = Math.max(1, Math.min(4, touchStartRef.current.scale * scaleFactor));
      setZoomScale(newScale);
    }
  };

  const handleTouchEnd = () => {
    touchStartRef.current = null;
  };

  const handleDoubleClick = () => {
    if (zoomScale > 1) {
      resetZoom();
    } else {
      setZoomScale(2.2);
    }
  };

  const openLightbox = (index: number) => {
    setActiveLightboxIdx(index);
    resetZoom();
  };

  const len = GALLERY_ITEMS.length;

  return (
    <section id="gallery" className="relative w-full py-24 px-4 bg-transparent overflow-hidden">
      {/* Background Watermark/Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.03)_0%,rgba(0,0,0,0)_75%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 select-none">
          <span className="text-[10px] tracking-[0.4em] text-gold-deep font-cinzel opacity-95 uppercase block mb-2 font-bold">
            Beautiful Moments
          </span>
          <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
            Photo Gallery
          </h2>
          <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
        </div>

        {/* 3D Coverflow stage for Carousel */}
        <div 
          className="relative w-full h-[460px] flex items-center justify-center overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {GALLERY_ITEMS.map((item, idx) => {
            const diff = (idx - currentIndex + len) % len;
            let offset = diff;
            if (diff > len / 2) {
              offset = diff - len;
            }

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            return (
              <motion.div
                key={idx}
                animate={{
                  scale: isActive ? 1 : isLeft || isRight ? 0.83 : 0.6,
                  x: isActive
                    ? 0
                    : isLeft
                    ? "-55%"
                    : isRight
                    ? "55%"
                    : offset > 0
                    ? "110%"
                    : "-110%",
                  opacity: isActive ? 1 : isLeft || isRight ? 0.45 : 0,
                  zIndex: isActive ? 30 : isLeft || isRight ? 10 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 28,
                }}
                drag={isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(e, info) => {
                  setIsDragging(false);
                  const threshold = 60;
                  if (info.offset.x < -threshold) {
                    nextSlide();
                  } else if (info.offset.x > threshold) {
                    prevSlide();
                  }
                }}
                onClick={() => {
                  if (isLeft) prevSlide();
                  else if (isRight) nextSlide();
                  else if (isActive) openLightbox(idx);
                }}
                className={`absolute w-[86vw] sm:w-[330px] md:w-[380px] aspect-[4/5] rounded-3xl cursor-pointer select-none border-2 border-gold bg-cream-deep/60 p-2.5 shadow-xl transition-shadow hover:shadow-2xl ${
                  isActive ? "block" : "hidden md:block"
                }`}
              >
                {/* Temple Inspired Card Content */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-maroon/20 bg-cream flex flex-col justify-between">
                  {/* Decorative inner gold outline */}
                  <div className="absolute inset-2 border border-gold/30 rounded-xl pointer-events-none z-10" />

                  {/* Stories Indicator style progress bar (Top overlay) */}
                  <div className="absolute top-4 left-4 right-4 flex gap-1 z-20">
                    {GALLERY_ITEMS.map((_, i) => (
                      <div
                        key={i}
                        className="h-[2px] flex-1 bg-white/20 rounded-full overflow-hidden"
                      >
                        <div
                          className={`h-full bg-gold transition-all duration-300 ${
                            i === idx
                              ? "w-full"
                              : (i < idx && idx - i < len / 2) || (i > idx && i - idx > len / 2)
                              ? "w-full"
                              : "w-0"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Main Image Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-xl bg-ivory">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover pointer-events-none select-none"
                      loading="lazy"
                    />

                    {/* Dark gradient shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
                  </div>

                  {/* Caption & Title (Bottom Overlay) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-maroon-deep/90 backdrop-blur-sm py-2.5 px-3 rounded-lg border border-gold/30 text-center z-20 shadow-md">
                    <p className="font-cinzel text-[10px] md:text-[11px] text-gold-light tracking-widest font-semibold uppercase">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Pagination */}
        <div className="text-center mt-3 select-none">
          <p className="font-cinzel text-[10px] text-gold-deep tracking-widest font-semibold uppercase">
            {currentIndex + 1} / {len}
          </p>
        </div>

        {/* Fullscreen Modal Trigger Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer font-cinzel text-[11px] text-gold hover:text-gold-light tracking-[0.25em] font-medium transition-colors duration-300 uppercase inline-flex items-center gap-1.5 group"
          >
            View All Photos
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>
      </div>

      {/* Fullscreen Grid Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-maroon-deep/97 backdrop-blur-md overflow-y-auto px-4 py-8 md:p-12"
          >
            {/* Header */}
            <div className="max-w-6xl mx-auto flex justify-between items-center mb-8 border-b border-gold/25 pb-4">
              <div>
                <span className="text-[10px] tracking-[0.3em] text-gold-light font-cinzel uppercase block mb-1">
                  Wedding Album
                </span>
                <h3 className="text-xl font-cinzel text-cream tracking-wider font-semibold">
                  All Memories
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-12">
              {GALLERY_ITEMS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  onClick={() => openLightbox(idx)}
                  className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden border border-gold/30 bg-cream-deep/10 p-1.5 transition-all hover:scale-[1.03] duration-300"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 250px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 text-center">
                      <p className="font-cinzel text-[10px] text-cream tracking-wider font-semibold">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {activeLightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setActiveLightboxIdx(null);
              resetZoom();
            }}
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          >
            {/* Close */}
            <button
              onClick={() => {
                setActiveLightboxIdx(null);
                resetZoom();
              }}
              className="absolute top-6 right-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-2.5 rounded-full transition-all z-[220]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Prev Nav */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="absolute left-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all z-[220] hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Central Media Viewer */}
            <motion.div
              key={activeLightboxIdx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onDoubleClick={handleDoubleClick}
              className="relative max-w-4xl max-h-[82vh] flex flex-col justify-center items-center overflow-hidden cursor-zoom-in"
            >
              <motion.div
                animate={{ scale: zoomScale }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                drag={zoomScale > 1}
                dragConstraints={{
                  left: -350 * (zoomScale - 1),
                  right: 350 * (zoomScale - 1),
                  top: -350 * (zoomScale - 1),
                  bottom: 350 * (zoomScale - 1),
                }}
                dragElastic={0.2}
                className="relative w-full h-[65vh] aspect-[4/5] sm:h-[70vh] sm:w-[480px] md:w-[600px] lg:w-[700px] flex items-center justify-center"
              >
                {/* Horizontal Swipe for navigation when NOT zoomed */}
                <motion.div
                  className="w-full h-full relative"
                  drag={zoomScale === 1 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(e, info) => {
                    if (zoomScale === 1) {
                      const threshold = 60;
                      if (info.offset.x < -threshold) {
                        nextLightbox();
                      } else if (info.offset.x > threshold) {
                        prevLightbox();
                      }
                    }
                  }}
                >
                  <Image
                    src={GALLERY_ITEMS[activeLightboxIdx].src}
                    alt={GALLERY_ITEMS[activeLightboxIdx].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-contain pointer-events-none select-none"
                    loading="eager"
                  />
                </motion.div>
              </motion.div>

              {/* Caption Overlay */}
              <div className="text-center mt-4 px-4 pointer-events-none">
                <p className="font-cinzel text-xs md:text-sm tracking-widest text-gold-light">
                  {GALLERY_ITEMS[activeLightboxIdx].title}
                </p>
                {zoomScale > 1 && (
                  <span className="text-[9px] text-cream/40 uppercase tracking-[0.2em] block mt-1">
                    Double click to fit
                  </span>
                )}
              </div>
            </motion.div>

            {/* Right Next Nav */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="absolute right-6 cursor-pointer text-cream/70 hover:text-cream bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all z-[220] hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
