import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 bg-[#0a1120] border-t border-[#38BDF8]/10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
            CAREER TRAJECTORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base mt-2">
            10+ years spanning enterprise cloud migrations, platform automation, and multi-cloud operations.
          </p>
        </div>

        <div className="relative border-l-2 border-[#38BDF8]/25 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080D18] border-2 border-[#38BDF8] group-hover:scale-125 group-hover:bg-[#38BDF8] transition-all" />

              <div className="glass-card rounded-xl p-6 border border-[#38BDF8]/20 group-hover:border-[#38BDF8]/50 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {exp.company}
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#101827] text-[#38BDF8] border border-[#38BDF8]/30">
                      {exp.role}
                    </span>
                  </h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#94A3B8]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" /> {exp.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs font-mono text-[#22D3EE] mb-2 uppercase">Key Responsibilities:</div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-[#94A3B8]">
                    {exp.responsibilities.map((r, ridx) => (
                      <li key={ridx} className="flex items-start gap-2">
                        <span className="text-[#38BDF8] mt-1">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.achievements.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-800">
                    <div className="text-xs font-mono text-[#10B981] mb-2 uppercase">Verified Accomplishments:</div>
                    <ul className="space-y-1.5 text-xs md:text-sm text-slate-200">
                      {exp.achievements.map((ach, aidx) => (
                        <li key={aidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
