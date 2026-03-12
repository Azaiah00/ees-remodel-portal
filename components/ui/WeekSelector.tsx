"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeekOption {
  id: string;
  dates: string;
  label: string;
  status: string;
}

const WEEKS: WeekOption[] = [
  { id: "week-1", dates: "Mar 02 - Mar 08, 2026", label: "Week 1", status: "Ready" },
  { id: "week-2", dates: "Mar 09 - Mar 15, 2026", label: "Week 2", status: "Ready" },
  { id: "week-3", dates: "Mar 16 - Mar 22, 2026", label: "Week 3", status: "In Progress" },
];

interface WeekSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (weekId: string) => void;
  currentWeekId: string;
}

export default function WeekSelector({
  isOpen,
  onClose,
  onSelect,
  currentWeekId,
}: WeekSelectorProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                  Select Content Week
                </h3>
                <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                  Choose a distribution week to view
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {WEEKS.map((week) => (
                <button
                  key={week.id}
                  onClick={() => {
                    onSelect(week.id);
                    onClose();
                  }}
                  className={cn(
                    "w-full text-left p-4 rounded-sm border transition-all flex items-center justify-between group",
                    currentWeekId === week.id
                      ? "bg-[var(--color-bng-red)]/10 border-[var(--color-bng-red)]"
                      : "bg-zinc-950/50 border-zinc-800 hover:border-zinc-600"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-sm font-bold text-lg skew-x-[-10deg] transition-colors",
                        currentWeekId === week.id
                          ? "bg-[var(--color-bng-red)] text-white"
                          : "bg-zinc-800 text-zinc-400 group-hover:bg-zinc-700"
                      )}
                    >
                      <span className="skew-x-[10deg]">
                        {week.label.split(" ")[1]}
                      </span>
                    </div>
                    <div>
                      <h4
                        className={cn(
                          "font-bold uppercase tracking-wide",
                          currentWeekId === week.id
                            ? "text-white"
                            : "text-zinc-300"
                        )}
                      >
                        {week.label}
                      </h4>
                      <div className="flex items-center gap-2 text-zinc-500 text-xs mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{week.dates}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {week.status === "Ready" ? (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Ready
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {week.status}
                      </span>
                    )}
                    {currentWeekId === week.id && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-widest mt-1"
                        style={{ color: "var(--color-bng-red)" }}
                      >
                        Current Selection
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 bg-zinc-950/50 border-t border-zinc-800">
              <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] leading-relaxed text-center">
                New content delivered weekly. <br />
                EES Remodeling — Boca Raton, South Florida
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
