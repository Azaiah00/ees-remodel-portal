"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2 } from "lucide-react";

/**
 * Proposal section: highlights Couture House Co.'s formal proposal for EES Remodeling.
 * Links to the ees_proposal_final.pdf so the client can review the full scope,
 * pricing, and deliverables.
 */
export default function Proposal() {
  return (
    <section
      id="proposal"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="mb-12 sm:mb-16">
        <span
          className="font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          style={{ color: "var(--color-bng-red)" }}
        >
          Your Custom Proposal
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white uppercase tracking-tight">
          How We&apos;ll Grow EES Remodeling
        </h2>
      </div>

      {/* Proposal card with PDF download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-zinc-900/50 border border-zinc-800 p-8 sm:p-12 hover:border-[var(--color-bng-red)]/30 transition-colors group relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
          <FileText className="w-32 h-32 text-[var(--color-bng-red)]" />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="flex-shrink-0">
            <div className="w-20 h-20 flex items-center justify-center border border-zinc-700 bg-[#1e3b8a] mb-6 group-hover:border-[var(--color-bng-red)] transition-colors">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-2">
              Full Proposal
            </h3>
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-mono">
              Prepared for EES Remodeling
            </p>
          </div>

          <div className="flex-1">
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Our formal proposal outlines exactly how Couture House Co. will help EES Remodeling
              dominate South Florida&apos;s social feeds. From Boca Raton to Miami Dade, we&apos;ll turn your
              stunning bathroom remodels, kitchen renovations, and full-home projects into content
              that drives leads and builds trust.
            </p>

            <ul className="space-y-3 mb-8 text-zinc-300 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Scope of work tailored to Palm Beach, Broward & Miami Dade
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Social content strategy: Reels, feed posts, video ads
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Investment options and timelines
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Next steps to get started
              </li>
            </ul>

            <a
              href="/ees_proposal_final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 bg-[var(--color-bng-red)] hover:opacity-90 text-white font-bold uppercase tracking-widest transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Full Proposal (PDF)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
