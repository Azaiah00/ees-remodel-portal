"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface SliderProps {
  beforeImg: string;
  afterImg: string;
  label: string;
}

const ImageSlider = ({ beforeImg, afterImg, label }: SliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    const percent = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(percent, 0), 100));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-zinc-400 font-mono text-sm uppercase tracking-widest">
        <span>{label}</span>
        <span>Slide to Compare</span>
      </div>
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-sm cursor-ew-resize group select-none border border-zinc-800"
        onMouseMove={(e) => {
          if (e.buttons === 1) handleDrag(e);
        }}
        onTouchMove={handleDrag}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 bg-zinc-900">
          <Image
            src={afterImg}
            alt={`${label} After`}
            fill
            className="object-contain"
          />
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-zinc-700">
            AFTER
          </div>
        </div>

        {/* Before Image (Foreground, Clipped) */}
        <div
          className="absolute inset-0 z-10 bg-zinc-900"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImg}
            alt={`${label} Before`}
            fill
            className="object-contain"
          />
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white border border-zinc-700">
            BEFORE
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[var(--color-bng-red)] cursor-ew-resize z-20 flex items-center justify-center transition-transform"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-8 h-8 bg-[var(--color-bng-red)] border-2 border-black rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(196,30,58,0.5)] group-hover:scale-110 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l6-6-6-6" />
              <path d="M9 18l-6-6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BeforeAfterGallery() {
  const comparisons = [
    {
      label: "Kitchen Counter & Stove Update",
      beforeImg: "/stove-counter-2-before.webp",
      afterImg: "/stove-counter-2-after.webp",
    },
    {
      label: "Complete Shower Remodel",
      beforeImg: "/shower before.webp",
      afterImg: "/shower after.jpg",
    },
    {
      label: "Modern Kitchen Refresh",
      beforeImg: "/stove -counter-before.webp",
      afterImg: "/stove-counter-after.webp",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-bng-red)] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-bng-red)] opacity-5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
            Stunning Transformations
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Before & After
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed">
            See the exact remodeling results we use to generate high-quality leads.
            These visuals prove your craftsmanship and instantly capture the attention of Nashville homeowners.
          </p>
        </motion.div>

        <div className="space-y-24">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ImageSlider
                beforeImg={item.beforeImg}
                afterImg={item.afterImg}
                label={item.label}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
