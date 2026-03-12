"use client";

import { useEffect } from "react";

/**
 * On home page load with a hash (e.g. /#scope from header link on /weekly-content),
 * scroll to that section after a short delay so the DOM is ready.
 */
export default function ScrollToHash() {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const timer = requestAnimationFrame(() => {
        window.scrollTo({
          top: el.offsetTop - 80,
          behavior: "smooth",
        });
      });
      return () => cancelAnimationFrame(timer);
    }
  }, []);
  return null;
}
