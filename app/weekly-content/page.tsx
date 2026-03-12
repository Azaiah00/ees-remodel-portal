"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import WeeklyContentSection from "@/components/sections/WeeklyContentSection";
import week1Data from "@/data/content/week1.json";
import type { WeekData } from "@/components/sections/WeeklyContentSection";

export default function WeeklyContentPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem("weeklyContentUnlocked") === "true") {
      setUnlocked(true);
    }
  }, []);

  const verifyPin = () => {
    if (pin === "5017") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("weeklyContentUnlocked", "true");
      }
      setUnlocked(true);
      setError("");
      return;
    }
    setError("Incorrect PIN. Please try again.");
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[var(--color-bng-red)] selection:text-white">
      <Navbar />
      <div className="pt-20">
        {unlocked ? (
          <WeeklyContentSection weekData={week1Data as WeekData} />
        ) : (
          <div className="max-w-md mx-auto mt-24 px-4 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest mb-4">
              Content Access
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base mb-4">
              Weekly content is pinned for EES only. Enter the 4‑digit access code to view this section.
            </p>
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.replace(/[^0-9]/g, ""));
                if (error) setError("");
              }}
              className="w-full bg-black border border-zinc-700 text-white px-3 py-2 text-center tracking-[0.5em] text-lg mb-3 outline-none focus:border-[var(--color-bng-red)]"
              placeholder="••••"
              autoFocus
            />
            {error && <p className="text-xs text-red-500 mb-2">{error}</p>}
            <button
              type="button"
              className="mt-1 px-6 py-2 text-xs font-bold uppercase tracking-widest bg-[var(--color-bng-red)] text-white hover:opacity-90"
              onClick={verifyPin}
            >
              Unlock Content
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
