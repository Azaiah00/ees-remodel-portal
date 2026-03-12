"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Video, FileText, ArrowRight } from "lucide-react";
import Proposal from "./Proposal";

/** EES Remodeling services: IG/FB content, video ads, AI-assisted copy for South Florida */
const services = [
  {
    id: "instagram",
    title: "Instagram Content",
    icon: Instagram,
    description: "Feed posts, Reels, and Stories designed to showcase EES Remodeling's kitchen, bathroom, and home transformations across Boca Raton, Palm Beach, Broward, and Miami-Dade.",
    features: [
      "Before/after project imagery",
      "Reels for kitchen & bathroom remodels",
      "Stories with CTAs for free quotes",
      "Captions with South Florida / Boca Raton focus",
    ],
  },
  {
    id: "facebook",
    title: "Facebook Ads & Posts",
    icon: Facebook,
    description: "Targeted ad creatives and organic posts that reach homeowners in Boca Raton, Palm Beach County, Broward County, and Miami-Dade.",
    features: [
      "Video ads for remodeling services",
      "Static ad creatives with strong CTAs",
      "Community-focused content",
      "Get a free quote campaigns",
    ],
  },
  {
    id: "video",
    title: "Video Ads",
    icon: Video,
    description: "Short-form video ads for social platforms. Showcase craftsmanship, before/after transformations, and the EES Remodeling difference.",
    features: [
      "15–30 second video ads",
      "Project highlight reels",
      "Testimonial snippets",
      "Service overview videos",
    ],
  },
  {
    id: "copy",
    title: "Assisted Copy",
    icon: FileText,
    description: "Captions, hashtags, and ad copy tailored for remodeling. CTAs like Get a free quote, Boca Raton kitchen remodel, and South Florida home improvement.",
    features: [
      "Platform-specific captions",
      "Hashtag strategy for local reach",
      "Ad copy variations",
      "SEO-friendly descriptions",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-black border-t border-zinc-900"
    >
      <div className="mb-10 sm:mb-20">
        <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-2 block">
          What We Bring to the Table
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">
          How Real Advancement Can Grow Your Brand
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 hover:border-[var(--color-bng-red)]/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <service.icon className="w-24 h-24 text-[var(--color-bng-red)]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-[var(--color-bng-red)] transition-colors">
                <service.icon className="w-6 h-6 text-white group-hover:text-[var(--color-bng-red)] transition-colors" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                    <ArrowRight className="w-4 h-4 text-[var(--color-bng-red)] mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Proposal section with pricing, placed directly above the yellow "Let's Partner" band */}
      <div className="mt-4 sm:mt-8">
        <Proposal />
      </div>

      {/* CTA — Real Advancement inviting EES to partner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden text-center py-16 sm:py-24 px-4 sm:px-6 bg-[var(--color-bng-red)]"
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Presented by Real Advancement
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 uppercase tracking-tighter">
            Let&apos;s Partner
          </h2>
          <p className="text-white/90 text-lg sm:text-xl font-light max-w-2xl mx-auto">
            We create the content that connects South Florida homeowners with EES Remodeling&apos;s trusted services. Ready to grow your social presence and fill your pipeline?
          </p>
        </div>
      </motion.div>

      {/* Footer — who presented this */}
      <footer className="py-8 sm:py-12 border-t border-zinc-900 text-center">
        <p className="text-zinc-500 text-xs sm:text-sm uppercase tracking-widest font-mono">
          This portal was prepared for EES Remodeling by{" "}
          <span className="text-zinc-400 font-semibold">Real Advancement</span>
        </p>
      </footer>
    </section>
  );
}
