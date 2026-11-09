'use client';

import React, { useState } from 'react';
import { Cloud, Server, Database, Shield, Cpu, Terminal, ArrowRight, Download, Camera } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

const profileImagePath = process.env.NEXT_PUBLIC_REPO_NAME
  ? `/${process.env.NEXT_PUBLIC_REPO_NAME}/images/profile.jpg`
  : '/images/profile.jpg';

export const Hero = () => {
  const [profileImage, setProfileImage] = useState<string>(profileImagePath);

  const handleCustomPhoto = () => {
    const url = prompt("Enter the URL of your profile photo or leave blank to keep current:", profileImage);
    if (url && url.trim() !== "") {
      setProfileImage(url.trim());
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 md:px-8 cyber-grid overflow-hidden border-b border-[#38BDF8]/10">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none pulse-ambient" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none pulse-ambient" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Command Intro & Avatar */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            {/* Cyber Profile Frame */}
            <div className="relative group cursor-pointer" onClick={handleCustomPhoto} title="Click to update photo">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl p-1 bg-gradient-to-tr from-[#38BDF8] via-[#8B5CF6] to-[#10B981] shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all group-hover:scale-105">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#111E30] relative">
                  <img
                    src={profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-[10px] font-mono text-[#38BDF8] font-bold">
                    <Camera className="w-4 h-4 mr-1" /> EDIT
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#10B981] border-2 border-[#080D18] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111E30] border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                SYSTEM ONLINE: 10+ YEARS EXP
              </div>
              <h2 className="text-sm font-mono text-[#94A3B8] tracking-wider uppercase mt-1">
                Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}
              </h2>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {PERSONAL_INFO.name}
          </h1>

          <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#38BDF8] via-[#22D3EE] to-[#8B5CF6] bg-clip-text text-transparent">
            {PERSONAL_INFO.title}
          </div>

          <p className="text-base md:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            {PERSONAL_INFO.tagline} Experienced in multi-cloud governance (AWS, Azure, GCP), GitOps, Terraform, and AI-accelerated platform engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#38BDF8] text-[#080D18] font-semibold text-sm hover:bg-[#22D3EE] transition-all shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            >
              Explore Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111E30] border border-[#38BDF8]/40 text-[#38BDF8] font-mono text-sm hover:bg-[#38BDF8]/10 transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#101827] border border-slate-700 text-slate-300 font-medium text-sm hover:border-[#38BDF8]/40 hover:text-white transition-all"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right Column: Isometric Multi-Cloud Architecture Cockpit */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-6 relative shadow-2xl border border-[#38BDF8]/30">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5 text-xs font-mono text-[#94A3B8]">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <Cpu className="w-4 h-4" /> MULTI-CLOUD TOPOLOGY MAP
              </div>
              <span className="text-[#10B981]">ACTIVE RECONCILIATION</span>
            </div>

            {/* Simulated Cloud Topology */}
            <div className="space-y-4">
              {/* Cloud Layer */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#080D18]/80 border border-amber-500/30">
                  <Cloud className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">AWS</div>
                  <div className="text-[10px] font-mono text-slate-400">ECS • Bedrock</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080D18]/80 border border-[#38BDF8]/30">
                  <Cloud className="w-5 h-5 text-[#38BDF8] mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Azure</div>
                  <div className="text-[10px] font-mono text-slate-400">AKS • OpenAI</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080D18]/80 border border-rose-500/30">
                  <Cloud className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">GCP</div>
                  <div className="text-[10px] font-mono text-slate-400">GKE • Vertex AI</div>
                </div>
              </div>

              {/* Central Controller Box */}
              <div className="p-4 rounded-xl bg-[#101827] border border-[#22D3EE]/40 relative overflow-hidden text-center">
                <div className="text-xs font-mono text-[#22D3EE] uppercase tracking-wider mb-1">
                  Central GitOps & Governance Core
                </div>
                <div className="text-sm font-bold text-white">
                  Argo CD • Helm • Terraform • MCP AI Agents
                </div>
                <div className="text-[11px] text-[#94A3B8] mt-1">
                  Automated validation • Zero-drift policy engine
                </div>
              </div>

              {/* Data & Security Layer */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-[#080D18]/80 border border-purple-500/30">
                  <Database className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Data Platforms</div>
                  <div className="text-[10px] font-mono text-slate-400">Databricks • Dataiku</div>
                </div>
                <div className="p-3 rounded-xl bg-[#080D18]/80 border border-emerald-500/30">
                  <Shield className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">DevSecOps</div>
                  <div className="text-[10px] font-mono text-slate-400">Sonar • Snyk • Vault</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Telemetry: 100% Validated</span>
              <span className="text-[#38BDF8]">Drift: 0.00%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
