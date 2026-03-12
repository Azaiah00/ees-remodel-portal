"use client";

import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection from "@/components/sections/WeeklyContentSection";
import week1Data from "@/data/content/week1.json";
import type { WeekData } from "@/components/sections/WeeklyContentSection";

// Only Week 1; date range starts today 3/9/2026 (see week1.json dates)
export default function WeeklyContentPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <div className="pt-20">
        <WeeklyContentSection weekData={week1Data as WeekData} />
      </div>
    </main>
  );
}
