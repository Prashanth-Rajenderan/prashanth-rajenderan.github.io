import React from 'react';
import { METRICS } from '@/data/portfolioData';

export const ImpactDashboard = () => {
  return (
    <section className="py-12 bg-[#0c1424] border-y border-[#38BDF8]/15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest text-center mb-6">
          VERIFIED PRODUCTION METRICS & IMPACT
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 border border-[#38BDF8]/20 flex flex-col justify-between hover:border-[#38BDF8]/50 transition-all group"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono group-hover:text-[#38BDF8] transition-colors">
                {metric.value}
              </div>
              <div className="mt-2">
                <div className="text-xs font-mono text-[#22D3EE] font-semibold">
                  {metric.suffix}
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {metric.label}
                </div>
                <div className="text-xs text-[#94A3B8] mt-1">
                  {metric.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
