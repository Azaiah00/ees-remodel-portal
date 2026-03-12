"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Proposal", target: "proposal" },
  { name: "Scope", target: "scope" },
  { name: "Services", target: "services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.getElementById(item.target);
        if (
          section &&
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(item.target);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-zinc-800"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Go to home page"
          >
            {/* EES Remodeling Palm Beach logo - hammer/wrench house icon */}
            <div className="relative h-10 w-44 flex-shrink-0 sm:h-12 sm:w-52">
              <Image
                src="/ees-logo.png"
                alt="EES Remodeling Palm Beach"
                fill
                className="object-contain object-left group-hover:opacity-90 transition-opacity"
                priority
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const linkClass = cn(
                "text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[var(--color-bng-red)]",
                activeSection === item.target
                  ? "text-[var(--color-bng-red)]"
                  : "text-zinc-500"
              );
              if (isHome) {
                return (
                  <button
                    key={item.target}
                    onClick={() => scrollToSection(item.target)}
                    className={linkClass}
                  >
                    {item.name}
                  </button>
                );
              }
              return (
                <Link
                  key={item.target}
                  href={`/#${item.target}`}
                  onClick={() => setMobileOpen(false)}
                  className={linkClass}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/weekly-content"
              className={cn(
                "text-xs font-bold uppercase tracking-widest transition-colors duration-200 hover:text-[var(--color-bng-red)]",
                pathname === "/weekly-content" ? "text-[var(--color-bng-red)]" : "text-zinc-500"
              )}
            >
              Content
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center justify-center">
            <button
              className="text-zinc-400 hover:text-white transition-colors p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const linkClass = cn(
                  "block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors border-l-2",
                  activeSection === item.target
                    ? "text-[var(--color-bng-red)] border-[var(--color-bng-red)] bg-zinc-900/50"
                    : "text-zinc-500 border-transparent hover:text-white hover:border-zinc-600"
                );
                if (isHome) {
                  return (
                    <button
                      key={item.target}
                      onClick={() => scrollToSection(item.target)}
                      className={linkClass}
                    >
                      {item.name}
                    </button>
                  );
                }
                return (
                  <Link
                    key={item.target}
                    href={`/#${item.target}`}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/weekly-content"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors border-l-2",
                  pathname === "/weekly-content"
                    ? "text-[var(--color-bng-red)] border-[var(--color-bng-red)] bg-zinc-900/50"
                    : "text-zinc-500 border-transparent hover:text-white hover:border-zinc-600"
                )}
              >
                Content
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
