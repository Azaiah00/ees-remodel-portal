"use client";

import { motion } from "framer-motion";
import { FileImage, Video, PenLine, LayoutGrid } from "lucide-react";

const deliverables = [
  {
    icon: FileImage,
    title: "Social Posts",
    desc: "Instagram and Facebook feed posts with before/after imagery and project highlights.",
  },
  {
    icon: Video,
    title: "Reels & Video Ads",
    desc: "Short-form video content and paid ad creatives for Meta platforms.",
  },
  {
    icon: PenLine,
    title: "Captions & Copy",
    desc: "AI-assisted captions, hashtags, and CTAs like 'Get a free quote' for Boca Raton / South Florida.",
  },
  {
    icon: LayoutGrid,
    title: "Ad Creatives",
    desc: "Thumbnails, static ads, and visual assets for campaigns.",
  },
];

export default function Scope() {
  return (
    <section
      id="scope"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-black border-t border-zinc-900"
    >
      <div className="mb-12 sm:mb-16">
        <span
          className="font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          style={{ color: "var(--color-bng-red)" }}
        >
          What We Deliver
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">
          Scope & Strategy
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {deliverables.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 hover:border-[var(--color-bng-red)]/50 transition-colors group"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-6 border border-zinc-800 bg-[#1e3b8a] transition-colors group-hover:border-[var(--color-bng-red)]">
              <item.icon
                className="w-6 h-6 text-white group-hover:text-[var(--color-bng-red)] transition-colors"
              />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-3">
              {item.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
