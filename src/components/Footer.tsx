import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Footer = () => {
  return (
    <footer className="py-8 bg-[#050811] border-t border-slate-800/80 px-4 md:px-8 text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span> • {PERSONAL_INFO.title}
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#38BDF8] transition-colors">Overview</a>
          <a href="#projects" className="hover:text-[#38BDF8] transition-colors">Architecture</a>
          <a href="#experience" className="hover:text-[#38BDF8] transition-colors">Timeline</a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#38BDF8] transition-colors">LinkedIn</a>
        </div>
        <div className="text-right">
          Cloud Engineering Command Center • Static GitHub Pages Export
        </div>
      </div>
    </footer>
  );
};
