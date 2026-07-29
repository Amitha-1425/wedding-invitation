"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Calendar, Clock } from "lucide-react";

import CircularCountdown from "./CircularCountdown";

export default function Venue() {
  return (
    <section id="venue" className="relative w-full py-24 px-4 bg-transparent overflow-hidden text-cream-light">
      {/* Background soft lighting glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,162,76,0.03)_0%,rgba(0,0,0,0)_80%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16 select-none">
          <span className="text-[10px] tracking-[0.4em] text-gold-deep opacity-95 uppercase block mb-3 font-bold">
            Sacred Destination
          </span>
          <h2 className="text-2xl md:text-3xl font-cinzel text-maroon tracking-wide font-medium">
            The Wedding Venue
          </h2>
          <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-gold-deep to-transparent mx-auto mt-3" />
        </div>

        {/* Unified Single Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="w-full bg-[#FAF8F5]/35 backdrop-blur-md border border-gold-deep/20 rounded-2xl p-6 md:p-8 relative shadow-[0_8px_32px_rgba(200,162,76,0.06)] overflow-hidden text-brown"
        >
          {/* Inner double border accent */}
          <div className="absolute inset-2.5 border border-gold-deep/10 rounded-xl pointer-events-none" />

          {/* Centralized inner column wrapping countdown, divider, details & map */}
          <div className="relative z-10 flex flex-col items-center w-full">
            
            {/* Countdown component merged inside the card */}
            <CircularCountdown />

            {/* Elegant inner gold divider */}
            <div className="flex items-center gap-4 w-48 mx-auto my-8 opacity-45 select-none">
              <div className="h-[1px] flex-1 bg-gold-deep/30" />
              <span className="text-gold-deep text-base">❁</span>
              <div className="h-[1px] flex-1 bg-gold-deep/30" />
            </div>

            {/* Grid Layout inside the card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full text-left">
              
              {/* Left: Location & Details (lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-12 h-12 rounded-full border border-gold-deep/30 flex items-center justify-center text-gold-deep shrink-0 bg-[#F5EAD4]/20 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-lg text-maroon font-bold tracking-wide">VKT Mahal</h3>
                      <p className="text-xs text-brown/80 mt-1 font-poppins leading-relaxed">
                        Rayanoor, Karur, <br />
                        Tamil Nadu - 639005
                      </p>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-gold-deep/10 my-5" />

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-brown/95 font-medium">
                      <Calendar className="w-4 h-4 text-gold-deep shrink-0" />
                      <span className="font-poppins">Monday, August 31, 2026</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-brown/95 font-medium">
                      <Clock className="w-4 h-4 text-gold-deep shrink-0" />
                      <span className="font-poppins">Muhurtham: Morning 07:00 AM - 09:00 AM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="https://maps.google.com/?q=VKT+Mahal+Rayanoor+Karur"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-deep via-gold to-gold-deep text-white font-cinzel font-bold text-xs tracking-wider px-6 py-3.5 rounded-full hover:shadow-[0_6px_20px_rgba(200,162,76,0.3)] transition-all w-full select-none"
                  >
                    <Navigation className="w-3.5 h-3.5 fill-current" />
                    <span>Navigate on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Right: Embedded Google Map (lg:col-span-7) */}
              <div className="lg:col-span-7 w-full h-[240px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden border border-gold-deep/15 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.423984183404!2d78.05389657591605!3d10.959954757731735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2faf66ab9ecf%3A0xe5a3637e69f8c6eb!2sVKT%20MAHAL!5e0!3m2!1sen!2sin!4v1722216503927!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
