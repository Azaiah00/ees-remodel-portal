"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Layers, Refrigerator, Flame, LayoutTemplate, Sparkles, X } from "lucide-react";

/**
 * ProductPlacement section: demonstrates how Couture House Co. can visualize
 * a kitchen remodel progression—from raw space to fully staged with cabinets,
 * fridge, stove, and countertops. Uses EES/product-placement assets.
 */
// Images shifted up one: raw canvas uses the image that was in Cabinets; each step uses the image from the step below.
const steps = [
  {
    id: "raw",
    step: 1,
    icon: Layers,
    title: "The Raw Canvas",
    copy: "Every stunning remodel starts somewhere. We take your client's existing space—the dated cabinetry, worn counters, outdated appliances—and turn it into the starting point of a compelling visual story.",
    image: "/assets/product-placement-staging-1.jpg",
    label: "Original Kitchen",
  },
  {
    id: "cabinets",
    step: 2,
    icon: LayoutTemplate,
    title: "Cabinets Installed",
    copy: "New cabinetry transforms the entire feel of a room. We showcase that moment—the clean lines, the modern hardware—so homeowners can instantly envision their own upgrade.",
    image: "/assets/product-placements/cabnets-installed.png",
    label: "Cabinets In",
  },
  {
    id: "fridge",
    step: 3,
    icon: Refrigerator,
    title: "Fridge In Place",
    copy: "A premium refrigerator isn't just an appliance—it's a statement. We highlight that installation moment, making your clients' finished spaces feel real and achievable.",
    image: "/assets/product-placement-fridge-installed.png",
    label: "Fridge Installed",
  },
  {
    id: "stove",
    step: 4,
    icon: Flame,
    title: "Stove & Cooktop",
    copy: "The heart of the kitchen. We capture that sleek new range—the cooktop, the oven, the finish—so your prospects see exactly what EES Remodeling delivers.",
    image: "/assets/product-placement-stove-installed.png",
    label: "Stove Installed",
  },
  {
    id: "counters",
    step: 5,
    icon: Sparkles,
    title: "Countertops & Finish",
    copy: "The final layer. Quartz, marble, or solid surface—we show the complete transformation, from rough to ready. This is the money shot that closes deals.",
    image: "/assets/product-placement-countertop-finish.png",
    label: "Countertops In",
  },
];

// Raw product thumbnails: individual items we place
const rawProducts = [
  { id: "fridge", src: "/assets/product-photo-fridge.png", label: "Fridge", description: "Stainless steel refrigerator" },
  { id: "stove", src: "/assets/product-photo-stove.png", label: "Stove", description: "White stove with black cooktop" },
  { id: "cabinets", src: "/assets/product-placement-cabinets-shot.png", label: "Cabinets", description: "Black shaker cabinets with marble countertops" },
  { id: "countertop", src: "/assets/counter-tops.webp", label: "Countertop", description: "Countertops" },
];

export default function ProductPlacement() {
  const [expandedProduct, setExpandedProduct] = useState<typeof rawProducts[0] | null>(null);

  return (
    <section
      id="product-placement"
      className="py-24 bg-black relative border-t border-zinc-900 overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--color-bng-red)] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[var(--color-bng-blue)] opacity-[0.06] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24 text-center max-w-3xl mx-auto"
        >
          <span className="text-[var(--color-bng-red)] font-mono text-sm uppercase tracking-widest mb-4 block">
            Visualize the Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-6 relative inline-block">
            Product Placement That Sells
            <div className="absolute bottom-1 left-0 right-0 h-1 bg-[var(--color-bng-red)]/30 -z-10" />
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed">
            We don&apos;t just photograph remodels—we stage each phase. From raw space to cabinets, 
            fridge, stove, and countertops, we show homeowners exactly what their investment looks like. 
            <strong className="text-white"> This is how EES Remodeling wins trust before the first call.</strong>
          </p>
        </motion.div>

        {/* Raw product shots at top—click to expand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6 text-center">
            Raw Product Shots—Individual Items We Place
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {rawProducts.map((product) => (
              <motion.button
                key={product.id}
                type="button"
                className="flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bng-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
                onClick={() => setExpandedProduct(product)}
                aria-label={`View ${product.description} full size`}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 flex items-center justify-center p-1 cursor-pointer hover:border-zinc-600 transition-colors">
                  <Image
                    src={product.src}
                    alt={product.description}
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="mt-2 text-zinc-500 text-xs font-mono uppercase tracking-widest">{product.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Step-by-step timeline */}
        <div className="space-y-20 sm:space-y-28">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image block */}
                <div className="w-full lg:w-[55%] flex-shrink-0">
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    {/* Step badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--color-bng-red)] flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {item.step}
                    </div>
                  </div>
                </div>

                {/* Copy block */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                      <Icon className="w-5 h-5 text-[var(--color-bng-red)]" />
                    </div>
                    <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                      Step {item.step} of 5
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                    {item.copy}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto">
            <span className="text-[var(--color-bng-red)] font-semibold">Couture House Co.</span> creates 
            this visual journey for your clients—so every remodel you complete has content that converts.
          </p>
        </motion.div>
      </div>

      {/* Lightbox for raw product shot */}
      <AnimatePresence>
        {expandedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setExpandedProduct(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white hover:text-zinc-400 transition-colors z-10"
              onClick={() => setExpandedProduct(null)}
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
                  src={expandedProduct.src}
                  alt={expandedProduct.description}
                  width={800}
                  height={800}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
                />
              </div>
              <p className="mt-4 text-white font-mono text-sm uppercase tracking-widest">{expandedProduct.label}</p>
              <p className="mt-1 text-zinc-500 text-sm">{expandedProduct.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
