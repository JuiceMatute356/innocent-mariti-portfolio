"use client";

import { useScrollY } from "@/hooks/useScrollY";
import { cn } from "@/lib/cn";
import Link from "next/link";

const navLinks = [
  { label: "Experience", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function PortfolioNav() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 60;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#1a1a1a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/portfolio"
          className="text-[#f5f0e8] font-black text-xl tracking-tight"
        >
          IM.
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#f5f0e8]/50 hover:text-[#f5f0e8] text-sm transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block text-sm border border-[#f59e0b]/40 text-[#f59e0b] px-4 py-1.5 rounded-full hover:bg-[#f59e0b] hover:text-[#1a1a1a] transition-all duration-200"
        >
          Get in touch
        </a>

        {/* Mobile menu icon */}
        <button className="md:hidden text-[#f5f0e8]/60 hover:text-[#f5f0e8]">
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
