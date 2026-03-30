"use client";

import { useScrollY } from "@/hooks/useScrollY";
import { cn } from "@/lib/cn";
import Link from "next/link";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
];

export function CorporateNav() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 10;

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white transition-all duration-300",
        scrolled ? "shadow-sm border-b border-slate-100" : ""
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/corporate" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-black">N</span>
          </div>
          <span className="font-bold text-slate-900 text-lg">Nexus</span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden md:block text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            Sign in
          </a>
          <a
            href="#pricing"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
