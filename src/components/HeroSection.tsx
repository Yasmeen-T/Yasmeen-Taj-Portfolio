import React, { useState } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Copy, Check, Terminal as TerminalIcon, ShieldCheck, Cpu, Cloud, BrainCircuit, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'terminal' | 'stack'>('terminal');
  const [commandInput, setCommandInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Initializing Yasmeen_Taj_Environment v2026.8...',
    'AWS VPC Topology: Multi-AZ Subnets [HEALTHY]',
    'FastAPI ASGI Server: Running on port 8000',
    'Generative AI / LangChain RAG pipeline: READY',
    'Type "help" or "skills" in prompt below...'
  ]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim().toLowerCase();
    const newLogs = [...terminalLogs, `$ ${commandInput}`];

    if (cmd === 'help') {
      newLogs.push('Available commands: skills, projects, contact, aws, status, clear');
    } else if (cmd === 'skills') {
      newLogs.push('Skills: Java, Python, REST APIs, FastAPI, AWS EC2/S3/VPC, RAG, LangChain, MySQL, Firebase, System Design');
    } else if (cmd === 'projects') {
      newLogs.push('Featured: BiteBot (AI Food Delivery), Real-Time ML Detection, Small Biz Cloud Infra');
    } else if (cmd === 'contact' || cmd === 'email') {
      newLogs.push(`Direct Email: ${PERSONAL_INFO.email}`);
    } else if (cmd === 'aws') {
      newLogs.push('AWS Competencies: EC2, S3, IAM Roles, VPC Networking, PartyRock, Cloud Architecture');
    } else if (cmd === 'status') {
      newLogs.push('Status: Final-year CS Student | Open to Full-Time Backend / Cloud / AI Engineering Roles (2026 Batch)');
    } else if (cmd === 'clear') {
      setTerminalLogs(['Terminal cleared. Type "help" for options.']);
      setCommandInput('');
      return;
    } else {
      newLogs.push(`Command not recognized: "${commandInput}". Try "help" or "skills".`);
    }

    setTerminalLogs(newLogs);
    setCommandInput('');
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-cyan-300 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono font-medium">Final-Year CS Student</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300">Available for 2026 Backend/Cloud/AI Roles</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 mb-6">
              {PERSONAL_INFO.title}
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.subheadline}
            </p>

            {/* Actionable CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-cyan-500/25 group cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 font-semibold text-sm hover:bg-slate-800 hover:border-slate-500 active:scale-[0.98] transition-all cursor-pointer shadow-sm"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Email Copy Row */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Connect:</span>
              
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-all text-xs font-mono cursor-pointer"
                  title="Click to copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{PERSONAL_INFO.email}</span>
                  {copied && <span className="text-[10px] text-emerald-400 font-sans font-medium">(Copied!)</span>}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Terminal & Architecture Widget */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
              
              {/* Terminal Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 font-medium">yasmeen@backend-aws:~</span>
                </div>

                <div className="flex items-center bg-slate-900 rounded-lg p-0.5 text-[11px] font-mono border border-slate-800">
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'terminal' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Console
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      activeTab === 'stack' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Core Stack
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              {activeTab === 'terminal' ? (
                <div className="p-4 font-mono text-xs text-slate-300 min-h-[260px] flex flex-col justify-between">
                  <div className="space-y-1.5 overflow-y-auto max-h-[220px] pr-1">
                    {terminalLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.startsWith('$')
                            ? 'text-cyan-300 font-bold'
                            : log.includes('HEALTHY') || log.includes('READY')
                            ? 'text-emerald-400'
                            : 'text-slate-400'
                        }
                      >
                        {log}
                      </div>
                    ))}
                  </div>

                  {/* Interactive Terminal Prompt */}
                  <form onSubmit={handleCommandSubmit} className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">$</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      placeholder='type "skills", "projects", "contact"'
                      className="bg-transparent border-none outline-none text-slate-100 placeholder:text-slate-600 text-xs w-full font-mono"
                    />
                    <button type="submit" className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded hover:bg-cyan-900/50">
                      Run
                    </button>
                  </form>
                </div>
              ) : (
                /* Stack Overview Tab */
                <div className="p-5 text-xs text-slate-300 min-h-[260px] space-y-4">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold pb-2 border-b border-slate-800">
                    <Cpu className="w-4 h-4" />
                    <span>Specialization Matrix</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-200 font-medium mb-1">
                        <span className="flex items-center gap-1.5 text-cyan-300">
                          <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                          Backend Engineering
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400">REST / FastAPI / Java</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Microservices, CRUD APIs, JSON serialization & database integrations.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-200 font-medium mb-1">
                        <span className="flex items-center gap-1.5 text-sky-300">
                          <Cloud className="w-3.5 h-3.5 text-sky-400" />
                          Cloud Infrastructure
                        </span>
                        <span className="text-[10px] font-mono text-sky-400">AWS EC2 / S3 / VPC</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Amazon VPC subnets, IAM security policies, EC2 hosting & S3 storage.</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center justify-between text-slate-200 font-medium mb-1">
                        <span className="flex items-center gap-1.5 text-violet-300">
                          <BrainCircuit className="w-3.5 h-3.5 text-violet-400" />
                          AI / Machine Learning
                        </span>
                        <span className="text-[10px] font-mono text-violet-400">LLMs / RAG / LangChain</span>
                      </div>
                      <p className="text-[11px] text-slate-400">Prompt engineering, vector search, predictive ML pipelines & GenAI.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal Footer Info */}
              <div className="bg-slate-950/80 px-4 py-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Credentials</span>
                </span>
                <span className="font-mono text-slate-500">AWS Builder & Google Ambassador</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
