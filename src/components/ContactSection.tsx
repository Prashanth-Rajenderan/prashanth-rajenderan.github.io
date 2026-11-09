import React from 'react';
import { Mail, Linkedin, MapPin, Download, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="glass-card rounded-2xl p-8 md:p-12 border border-[#38BDF8]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
            INITIATE ENGAGEMENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Reliable.
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base mt-2">
            Interested in multi-cloud architecture, DevOps automation, enterprise data platforms, or AI agent integrations? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-5 rounded-xl bg-[#080D18]/80 border border-slate-800 hover:border-[#38BDF8]/50 transition-all text-center group"
          >
            <Mail className="w-6 h-6 text-[#38BDF8] mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-slate-400">EMAIL</div>
            <div className="text-sm font-semibold text-white truncate mt-1">{PERSONAL_INFO.email}</div>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-[#080D18]/80 border border-slate-800 hover:border-[#38BDF8]/50 transition-all text-center group"
          >
            <Linkedin className="w-6 h-6 text-[#22D3EE] mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-mono text-slate-400">LINKEDIN</div>
            <div className="text-sm font-semibold text-white mt-1">prashanth-rajenderan</div>
          </a>

          <div className="p-5 rounded-xl bg-[#080D18]/80 border border-slate-800 text-center">
            <MapPin className="w-6 h-6 text-[#8B5CF6] mx-auto mb-3" />
            <div className="text-xs font-mono text-slate-400">LOCATION</div>
            <div className="text-sm font-semibold text-white mt-1">{PERSONAL_INFO.location}</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={PERSONAL_INFO.resumePath}
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#38BDF8] text-[#080D18] font-bold text-sm hover:bg-[#22D3EE] transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)]"
          >
            <Download className="w-4 h-4" /> Download Official Resume
          </a>
        </div>
      </div>
    </section>
  );
};
