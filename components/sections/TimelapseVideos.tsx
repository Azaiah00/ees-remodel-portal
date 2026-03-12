"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Play } from "lucide-react";

/**
 * TimelapseVideos section: showcases viral timelapse renovation content—
 * 9:16 Reels/Stories format—for social media boost and engagement.
 * Videos live in public/assets/timelapse videos/
 */
const videos = [
  {
    id: "timelapse-1",
    src: "/assets/timelapse%20videos/timelapse-1.mp4",
    label: "Remodel in Motion",
  },
  {
    id: "timelapse-2",
    src: "/assets/timelapse%20videos/timelapse-2.mp4",
    label: "Transform Before Their Eyes",
  },
];

export default function TimelapseVideos() {
  return (
    <section
      id="timelapse"
      className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-bng-red)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block flex items-center justify-center gap-2">
            <TrendingUp className="w-4 h-4" />
            What&apos;s Trending
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Timelapse That Goes Viral
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed mb-4">
            Hours of work. Seconds of scroll. We turn full remodel journeys into
            <span className="text-white font-medium"> timelapse content that stops thumbs</span>— 
            the kind Reels and TikTok push to the For You page. No fluff. Just transformation.
          </p>
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto mb-2">
            The examples below are from another remodeling client we work with, BNG Remodel. For EES, we&apos;ll apply
            the same approach using <span className="text-zinc-300 font-medium">your own projects and footage</span>.
          </p>
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Perfect 9:16 format. Built for saves, shares, and that sweet algorithm boost.
          </p>
        </motion.div>

        {/* Video grid - 9:16 side by side on larger screens */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col items-center group"
            >
              {/* 9:16 video container - max width keeps it phone-sized and tidy */}
              <div className="relative w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] mx-auto">
                <div className="relative aspect-[9/16] rounded-xl overflow-hidden border-2 border-zinc-800 bg-black shadow-2xl group-hover:border-zinc-600 transition-colors">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    muted
                    loop
                    preload="metadata"
                  />
                  {/* Play icon overlay on hover/pause - subtle */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
                {/* Label */}
                <p className="mt-4 text-center text-zinc-500 text-xs font-mono uppercase tracking-widest">
                  {video.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats / value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          <div className="flex items-center gap-3 text-zinc-400">
            <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-sm sm:text-base">Built for Reels & Stories</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <TrendingUp className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0" />
            <span className="text-sm sm:text-base">Algorithm-friendly format</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400">
            <Play className="w-5 h-5 text-[var(--color-bng-blue)] flex-shrink-0" />
            <span className="text-sm sm:text-base">Saves, shares, follows</span>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-zinc-500 text-sm max-w-xl mx-auto"
        >
          Your remodels deserve content that performs. 
          <span className="text-white font-medium"> We make it.</span>
        </motion.p>
      </div>
    </section>
  );
}
