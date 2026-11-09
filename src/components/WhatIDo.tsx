import React from 'react';
import { SERVICES } from '@/data/portfolioData';
import { Cloud, Database, GitBranch, ShieldCheck, Bot } from 'lucide-react';

export const WhatIDo = () => {
  const icons = [
    <Cloud key="1" className="w-6 h-6 text-[#38BDF8]" />,
    <Database key="2" className="w-6 h-6 text-[#8B5CF6]" />,
    <GitBranch key="3" className="w-6 h-6 text-[#22D3EE]" />,
    <ShieldCheck key="4" className="w-6 h-6 text-[#10B981]" />,
    <Bot key="5" className="w-6 h-6 text-amber-400 text-amber-400" />
  ];

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
          ENGINEERING PILLARS
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          What I Engineer & Operate
        </h2>
        <p className="text-[#94A3B8] mt-3 text-sm md:text-base">
          From multi-cloud architecture and enterprise data landing zones to GitOps automation and agentic onboarding.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv, idx) => (
          <div
            key={idx}
            className="glass-card glass-card-glow rounded-xl p-6 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#101827] border border-slate-700 flex items-center justify-center mb-5">
                {icons[idx % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{srv.title}</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">{srv.desc}</p>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex flex-wrap gap-1.5">
                {srv.tech.map((t, tidx) => (
                  <span
                    key={tidx}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#101827] text-[#38BDF8] border border-[#38BDF8]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
