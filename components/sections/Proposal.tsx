"use client";

import { motion } from "framer-motion";
import { FileText, Download, CheckCircle2 } from "lucide-react";

/**
 * Proposal section: highlights Real Advancement's formal proposal for EES Remodeling.
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

      {/* Proposal card with PDF download and on-page summary of key terms */}
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
              This partnership is built to give EES Remodeling a steady pipeline of qualified residential
              remodeling opportunities from Instagram, with low fixed overhead and shared incentives once
              real revenue is closed.
            </p>

            {/* High-level summary of what we offer EES */}
            <ul className="space-y-3 mb-8 text-zinc-300 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Daily Instagram management: posts, reels, and stories with full content planning,
                editing, scheduling, and optimization.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Audience engagement and DM management so only serious, qualified homeowners reach EES.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Lead vetting based on ideal projects: kitchens, bathrooms, additions, flooring, decks,
                and full-home renovations.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Geographic focus on Miami-Dade and Palm Beach counties to match EES&apos;s service area.
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--color-bng-red)] flex-shrink-0 mt-0.5" />
                Monthly reporting and optimization to improve lead quality and conversion over time.
              </li>
            </ul>

            {/* Clear, on-page pricing package so you can close live without opening the PDF */}
            <div className="mb-8 border border-zinc-800 bg-black/40 p-4 sm:p-6">
              <h4 className="text-lg font-semibold uppercase tracking-wide mb-3">
                Commercial Structure & Pricing
              </h4>
              <p className="text-zinc-400 text-sm mb-4">
                Low fixed retainer plus performance-based commission tied to closed project revenue.
              </p>

              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Base Management
                  </p>
                  <p className="text-xl font-bold">
                    $500<span className="text-sm font-normal text-zinc-400"> / month</span>
                  </p>
                  <p className="text-zinc-400">
                    Covers daily Instagram content, engagement, DM handling, lead vetting, and monthly
                    optimization. No on-site filming included.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Pay‑Per‑Close Commission
                  </p>
                  <ul className="space-y-1 text-zinc-300">
                    <li>
                      <span className="font-semibold">10%</span> on small projects up to $10,000.
                    </li>
                    <li>
                      <span className="font-semibold">5%</span> on medium projects from $10,000–$25,000.
                    </li>
                    <li>
                      <span className="font-semibold">3%</span> on large projects above $25,000.
                    </li>
                  </ul>
                  <p className="text-zinc-500 text-xs">
                    Commission applies only to qualified opportunities generated or materially influenced by
                    this Instagram program. Pre‑existing active deals can be identified at onboarding and
                    excluded for fairness.
                  </p>
                </div>
              </div>
            </div>

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
