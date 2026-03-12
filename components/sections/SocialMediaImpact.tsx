"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle, TrendingUp, Users, X } from "lucide-react";

export default function SocialMediaImpact() {
  const [expandedFlyer, setExpandedFlyer] = useState<null | "flyer1" | "flyer2">(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(88deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Content Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bng-red)]/10 border border-[var(--color-bng-red)]/20 text-[var(--color-bng-red)] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-bng-red)] animate-pulse" />
              Digital Impact Engine
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6">
              Marketing That <br />
              <span className="text-[var(--color-bng-red)]">Prints Money</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-zinc-400 text-lg font-light leading-relaxed mb-8 max-w-xl">
              We design stunning, high-converting flyers, social media carousels, and targeted ad campaigns. Stop relying solely on word of mouth—let your past projects do the selling.
            </motion.p>

            <motion.div variants={containerVariants} className="space-y-6">
              {[
                {
                  icon: Users,
                  title: "Hyper-Targeted Ads",
                  desc: "We put your remodeling services directly in front of Nashville homeowners actively looking to upgrade.",
                },
                {
                  icon: TrendingUp,
                  title: "High-Converting Creatives",
                  desc: "Premium flyers and graphics that elevate your brand perception from 'just a contractor' to a luxury design-build firm.",
                },
                {
                  icon: CheckCircle,
                  title: "Consistent Lead Flow",
                  desc: "Turn a single project transformation into a continuous marketing asset that generates endless leads.",
                },
              ].map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-black border border-zinc-800 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[var(--color-bng-red)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">{feature.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Images Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative w-full"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[260px] h-[260px] bg-[var(--color-bng-red)] rounded-full blur-[120px] opacity-20" />
            </div>

            {/* Side-by-side flyers so EES can clearly see both */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10">
              {/* Flyer Image - left */}
              <motion.button
                type="button"
                onClick={() => setExpandedFlyer("flyer1")}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[70%] sm:w-1/2 max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800 bg-black flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bng-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <Image
                  src="/assets/flyer.webp"
                  alt="EES Remodeling kitchen transformation flyer"
                  fill
                  className="object-contain"
                />
              </motion.button>

              {/* Ad Image - right */}
              <motion.button
                type="button"
                onClick={() => setExpandedFlyer("flyer2")}
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-[70%] sm:w-1/2 max-w-xs aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-zinc-800 bg-black flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bng-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                <Image
                  src="/assets/flyer-2.webp"
                  alt="EES Remodeling social media ad flyer"
                  fill
                  className="object-contain"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox for larger flyer view */}
      <AnimatePresence>
        {expandedFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setExpandedFlyer(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white hover:text-zinc-300 transition-colors"
              aria-label="Close flyer preview"
              onClick={() => setExpandedFlyer(null)}
            >
              <X className="w-7 h-7" />
            </button>
            <div
              className="relative max-w-3xl w-full max-h-[90vh] aspect-[3/4] bg-black border border-zinc-800 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={expandedFlyer === "flyer1" ? "/assets/flyer.webp" : "/assets/flyer-2.webp"}
                alt="Expanded EES Remodeling flyer"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
