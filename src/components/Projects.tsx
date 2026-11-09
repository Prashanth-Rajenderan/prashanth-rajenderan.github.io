import React from 'react';
import { PROJECTS } from '@/data/portfolioData';
import { Award, ArrowRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
          REAL-WORLD ARCHITECTURES
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Featured Engineering Case Studies
        </h2>
        <p className="text-[#94A3B8] text-sm md:text-base mt-2">
          Sanitized production architectures demonstrating scalable multi-cloud solutions, cost optimization, and AI automation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="glass-card glass-card-glow rounded-xl p-6 border border-[#38BDF8]/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-[#38BDF8] uppercase">Case Study #{proj.id}</span>
                {proj.award && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                    <Award className="w-3.5 h-3.5" /> {proj.award}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>

              <div className="space-y-3 text-xs md:text-sm text-[#94A3B8] mb-6">
                <div>
                  <span className="font-mono text-white text-xs block mb-0.5">CHALLENGE:</span>
                  <p>{proj.problem}</p>
                </div>
                <div>
                  <span className="font-mono text-[#38BDF8] text-xs block mb-0.5">ENGINEERED SOLUTION:</span>
                  <p>{proj.solution}</p>
                </div>
              </div>

              {/* Workflow flow visualization */}
              <div className="p-3 rounded-lg bg-[#080D18] border border-slate-800 mb-6">
                <div className="text-[10px] font-mono text-slate-400 mb-2 uppercase tracking-wide">
                  Deployment & Reconcile Workflow:
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                  {proj.workflow.map((step, sidx) => (
                    <React.Fragment key={sidx}>
                      <span className="px-2 py-0.5 rounded bg-[#101827] text-slate-200 border border-slate-700">
                        {step}
                      </span>
                      {sidx < proj.workflow.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-[#38BDF8]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <div className="text-xs font-mono text-[#10B981] font-semibold">
                OUTCOME: {proj.outcome}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {proj.tech.map((t, tidx) => (
                  <span
                    key={tidx}
                    className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#101827] text-[#38BDF8] border border-[#38BDF8]/20"
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
