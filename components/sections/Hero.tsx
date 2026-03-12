"use client";

import { motion } from "framer-motion";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8 } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-zinc-950">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

      {/* Cinematic Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full blur-[150px] opacity-20 pointer-events-none mix-blend-screen bg-gradient-to-tr from-[var(--color-bng-red)] via-black to-zinc-800" />
      
      {/* Accent Orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[var(--color-bng-red)] rounded-full blur-[100px] pointer-events-none opacity-30" 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center mt-12 md:mt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-800/80 bg-black/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-bng-red)]/20">
                <span className="w-2 h-2 rounded-full bg-[var(--color-bng-red)] animate-pulse shadow-[0_0_10px_rgba(196,30,58,0.8)]" />
              </div>
              <span className="text-zinc-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                Prepared for EES Remodeling · Couture House Co.
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 leading-[0.9] tracking-tighter uppercase">
            Marketing That
            <br />
            <span className="relative inline-block text-[var(--color-bng-red)] drop-shadow-[0_0_30px_rgba(196,30,58,0.4)] px-2">
              Builds Trust
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1, ease: "circOut" }}
                className="absolute top-[100%] left-0 right-0 mt-1 h-2 md:h-4 md:mt-2 bg-[var(--color-bng-red)] -z-10 origin-left opacity-40 mix-blend-plus-lighter"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-base sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light">
            We transform your stunning remodels into engaging social media content that stops scrolling and drives <strong className="text-white font-semibold">high-quality leads</strong> directly to EES Remodeling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link
              href="/weekly-content"
              className="group relative px-8 py-4 sm:px-12 sm:py-5 font-bold text-sm sm:text-base uppercase tracking-widest text-white overflow-hidden bg-[var(--color-bng-red)] flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" />
                View Weekly Content
              </span>
            </Link>
            
            <a
              href="#gallery"
              className="group relative px-8 py-4 sm:px-12 sm:py-5 font-bold text-sm sm:text-base uppercase tracking-widest text-white border border-zinc-700 bg-zinc-900/30 backdrop-blur-md flex items-center justify-center gap-3 transition-all hover:bg-zinc-800 hover:border-zinc-500"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                See the Impact
              </span>
            </a>
          </motion.div>

          {/* Sample Video - EES Remodeling in action (9:16 vertical / Reels style) */}
          <motion.div variants={itemVariants} className="mt-16 sm:mt-20 w-full max-w-[280px] sm:max-w-[320px] mx-auto">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">Sample video</p>
            <div className="relative rounded-lg overflow-hidden border border-zinc-800 bg-black shadow-2xl shadow-black/50 group aspect-[9/16]">
              <video
                src="/0308-bng-remodel-sample-vid.mp4"
                className="w-full h-full aspect-[9/16] object-cover"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--color-bng-red)] to-transparent opacity-50" />
        <ArrowDown
          className="w-5 h-5 animate-bounce text-zinc-500"
        />
      </motion.div>
    </section>
  );
}

