'use client';

import React, { useState } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const TerminalSimulator = () => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: "whoami", output: `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\n10+ years experience | AWS • Azure • GCP` },
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    let output = "";
    switch (cleanCmd) {
      case "help":
        output = "Available commands: whoami, about, experience, projects, skills, cloud, certs, clear";
        break;
      case "whoami":
        output = `${PERSONAL_INFO.name}\n${PERSONAL_INFO.title}\nLocation: ${PERSONAL_INFO.location}`;
        break;
      case "about":
        output = `${PERSONAL_INFO.tagline}\n10+ years multi-cloud enterprise experience across AWS, Azure, GCP.`;
        break;
      case "skills":
        output = "IaC: Terraform | GitOps: Argo CD, Helm | Cloud: AWS, Azure, GCP | Containers: K8s, AKS, GKE | AI: MCP, Agents";
        break;
      case "cloud":
        output = "[AWS]: ECS, Bedrock, ALB, S3, RDS, CloudWatch\n[Azure]: AKS, OpenAI, Data Factory, Databricks, ADLS Gen2\n[GCP]: GKE, Vertex AI, Cloud SQL, Apigee";
        break;
      case "projects":
        output = "01. AI-Powered GKE Application Onboarding (MCP & Agents)\n02. Cloud Cost Optimization Automation (~7.5% AWS cost cut)\n03. Enterprise Dataiku Fleet Migration\n04. Multi-Cloud GitOps Delivery Platform\n05. Azure Data & AI Platform Infrastructure";
        break;
      case "certs":
        output = "- Certified SAFe 5 Practitioner\n- Associate – Information Storage and Management Version 3.0";
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        output = `Command not recognized: '${cleanCmd}'. Type 'help' for valid options.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output }]);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-20 bg-[#080D18] px-4 md:px-8 border-t border-[#38BDF8]/15">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-widest mb-2">
            SIMULATED INTERACTIVE CLI
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            DevOps Command Line
          </h2>
          <p className="text-[#94A3B8] text-sm mt-1">
            Type <code className="text-[#38BDF8] font-mono">help</code> to inspect verified engineer telemetry.
          </p>
        </div>

        <div className="rounded-xl border border-[#38BDF8]/30 bg-[#060A12] shadow-2xl overflow-hidden font-mono text-sm">
          {/* Header */}
          <div className="bg-[#101827] px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2">prashanth@cloud-control-plane: ~</span>
            </div>
            <TerminalIcon className="w-4 h-4 text-[#38BDF8]" />
          </div>

          {/* Terminal Body */}
          <div className="p-5 space-y-4 max-h-96 overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center text-[#38BDF8]">
                  <span className="text-[#10B981] mr-2">root@telemetry:~$</span>
                  <span>{item.cmd}</span>
                </div>
                <div className="text-slate-300 whitespace-pre-line pl-4 border-l border-slate-800 text-xs md:text-sm">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Input Form */}
            <form onSubmit={handleCommand} className="flex items-center text-[#38BDF8] pt-2">
              <span className="text-[#10B981] mr-2">root@telemetry:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'skills', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-slate-600"
                autoComplete="off"
              />
              <CornerDownLeft className="w-4 h-4 text-slate-500" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
