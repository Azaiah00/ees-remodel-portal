"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, Quote, Megaphone, Share2, X } from "lucide-react";

/**
 * ReviewAds section: showcases how Real Advancement transforms EES's real
 * client reviews (including Google reviews) into scroll-stopping visual ads
 * across every channel—IG, FB, Google, print, and beyond.
 */
const ads = [
  {
    id: "ad-1",
    image: "/assets/review-ad-1.png",
    format: "Social & Feed",
  },
  {
    id: "ad-2",
    image: "/assets/review-ad-2.png",
    format: "Google Review Creative",
  },
  {
    id: "ad-3",
    image: "/assets/review-ad-3.png",
    format: "Digital Ad Format",
  },
  {
    id: "ad-4",
    image: "/assets/review-ad-4.png",
    format: "Flyer & Print",
  },
];

export default function ReviewAds() {
  const [expandedImage, setExpandedImage] = useState<{ src: string; format: string } | null>(null);

  return (
    <section
      id="review-ads"
      className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[var(--color-bng-blue)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-bng-red)] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
            Social Proof, Reimagined
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Your Reviews. Our Ads.
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed mb-3">
            That 5-star Google review isn&apos;t just a badge—it&apos;s a headline. We take real
            client testimonials and turn them into scroll-stopping creative. Same words.
            <span className="text-white font-medium"> Ten times the impact.</span>
          </p>
          <p className="text-zinc-500 text-xs sm:text-sm max-w-2xl mx-auto">
            The ad examples below are from another remodeling client we work with. For EES, we&apos;ll use 
            <span className="text-zinc-300 font-medium"> your own reviews and project photos</span> to build the same style of campaigns.
          </p>

          {/* Value props row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 sm:gap-10 text-sm"
          >
            <div className="flex items-center gap-2 text-zinc-400">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
              <span>Google reviews → ad creatives</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Share2 className="w-4 h-4 text-[var(--color-bng-red)] flex-shrink-0" />
              <span>IG, FB, stories, reels</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Megaphone className="w-4 h-4 text-[var(--color-bng-blue)] flex-shrink-0" />
              <span>Paid ads + organic</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 max-w-2xl mx-auto"
        >
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--color-bng-red)]">
            <Quote className="absolute -left-1 top-0 w-8 h-8 text-[var(--color-bng-red)]/30" />
            <p className="text-xl sm:text-2xl text-zinc-300 font-light italic leading-relaxed">
              &ldquo;We mine every angle—Google, Yelp, Facebook, word of mouth—and turn what your 
              clients already say into ads that prove why EES Remodeling is the choice. 
              <strong className="text-white not-italic"> Zero regrets</strong> isn&apos;t just a quote. 
              It&apos;s the hook.&rdquo;
            </p>
            <p className="mt-4 text-zinc-500 text-sm font-mono uppercase tracking-widest">
              — Real Advancement approach
            </p>
          </div>
        </motion.div>

        {/* Ad showcase grid - click to expand */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {ads.map((ad, index) => (
            <motion.button
              key={ad.id}
              type="button"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bng-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
              onClick={() => setExpandedImage({ src: ad.image, format: ad.format })}
              aria-label={`View ${ad.format} full size`}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group-hover:border-zinc-700 transition-colors cursor-pointer">
                <Image
                  src={ad.image}
                  alt={`BNG Remodel review ad - ${ad.format}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Format label overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-4 py-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    {ad.format}
                  </span>
                </div>
                {/* Click hint on hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none">
                  <span className="text-white text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox - expanded image for viewing */}
        <AnimatePresence>
          {expandedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
              onClick={() => setExpandedImage(null)}
            >
              <button
                type="button"
                className="absolute top-4 right-4 p-2 text-white hover:text-zinc-400 transition-colors z-10"
                onClick={() => setExpandedImage(null)}
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <div
                className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full flex-1 min-h-0 flex items-center justify-center">
                  <Image
                    src={expandedImage.src}
                    alt={`EES Remodeling review ad - ${expandedImage.format}`}
                    width={800}
                    height={1067}
                    className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                  />
                </div>
                <p className="mt-4 text-zinc-500 text-sm font-mono uppercase tracking-widest">
                  {expandedImage.format}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm sm:text-base max-w-2xl mx-auto">
            Real reviews. Real photos. Real trust. We don&apos;t invent testimonials—we 
            <span className="text-white font-medium"> design them into ads that convert.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
