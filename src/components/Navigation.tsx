'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Terminal, Menu, X, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Architecture Lab", href: "#lab" },
    { label: "Skills", href: "#skills" },
    { label: "Terminal", href: "#terminal" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080D18]/90 backdrop-blur-md border-b border-[#38BDF8]/20 px-4 md:px-8 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link href="#" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#111E30] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] font-mono font-bold text-lg shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:border-[#38BDF8] transition-all">
            PR
          </div>
          <div>
            <div className="font-bold text-white text-sm md:text-base tracking-wide flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
            <div className="text-[10px] md:text-xs font-mono text-[#38BDF8]/80 uppercase tracking-widest">
              Cloud Engineer • Command Center
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#94A3B8]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#38BDF8] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={PERSONAL_INFO.resumePath}
            download
            className="px-3.5 py-1.5 text-xs font-mono rounded bg-[#111E30] border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all"
          >
            RESUME.PDF
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-semibold rounded bg-[#38BDF8] text-[#080D18] hover:bg-[#22D3EE] transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#94A3B8] hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col space-y-2 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm px-2 py-1.5 text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download
              className="text-center px-4 py-2 text-xs font-mono rounded bg-[#111E30] border border-[#38BDF8]/40 text-[#38BDF8]"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
