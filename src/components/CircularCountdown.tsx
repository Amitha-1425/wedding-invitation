"use client";

import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CircularCountdown() {
  const targetDate = new Date("2026-08-31T07:00:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // SVG Circle Progress calculations
  const radius = 42;
  const stroke = 3.5;
  const circ = 2 * Math.PI * radius;

  const renderRing = (val: number, max: number, label: string) => {
    const pct = ((max - val) / max) * circ;
    
    return (
      <div className="flex flex-col items-center select-none shrink-0">
        <div className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
          
          {/* Rotating Dashed Outer Golden Ring */}
          <div 
            className="absolute inset-0 border border-dashed border-gold/40 rounded-full animate-spin"
            style={{ animationDuration: label === "SEC" ? "12s" : "30s" }}
          />

          {/* SVG Progress Ring */}
          <svg className="w-[90%] h-[90%] -rotate-90">
            {/* Background Ring */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke="#EADCB9"
              strokeWidth={stroke}
              className="opacity-40"
            />
            {/* Progress Ring */}
            <circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke="url(#goldGrad)"
              strokeWidth={stroke}
              strokeDasharray={circ}
              strokeDashoffset={pct}
              strokeLinecap="round"
              className="transition-all duration-1000"
              style={{ filter: "drop-shadow(0 0 5px #C8A24C)" }}
            />
          </svg>

          {/* Text Value inside */}
          <div className="absolute text-center flex flex-col items-center justify-center">
            <span className="text-xl md:text-2xl font-cinzel text-maroon font-bold tabular-nums">
              {val.toString().padStart(2, "0")}
            </span>
            <span className="text-[8px] md:text-[9px] font-poppins tracking-widest text-gold-deep mt-0.5 font-bold uppercase">
              {label}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="countdown" className="relative w-full py-6 overflow-hidden text-center text-brown">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,162,76,0.02)_0%,rgba(0,0,0,0)_75%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Title */}
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.35em] text-gold-deep font-cinzel block mb-2 font-bold">
            The Auspicious Hour Approaches
          </span>
          <h3 className="text-2xl font-cinzel text-maroon tracking-wide font-medium">
            Muhurtham Countdown
          </h3>
        </div>

        {/* Rings Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {renderRing(timeLeft.days, 365, "DAYS")}
          {renderRing(timeLeft.hours, 24, "HOURS")}
          {renderRing(timeLeft.minutes, 60, "MIN")}
          {renderRing(timeLeft.seconds, 60, "SEC")}
        </div>

        {/* Auspicious Muhurtham Note */}
        <p className="mt-12 font-cormorant italic text-xs md:text-sm text-brown/70 tracking-wider font-semibold">
          31.08.2026 &middot; VKT Mahal, Karur, Tamil Nadu
        </p>
      </div>

      {/* SVG Gradient definitions */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF3D0" />
            <stop offset="35%" stopColor="#E8CD8A" />
            <stop offset="100%" stopColor="#9C7A2E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
