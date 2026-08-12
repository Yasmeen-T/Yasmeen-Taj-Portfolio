import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PERSONAL_INFO, GMAIL_COMPOSE_URL } from '../data/portfolioData';
import { 
  MapPin, 
  Terminal, 
  Mail, 
  Github, 
  Linkedin, 
  ArrowUpRight, 
  Sparkles, 
  Server, 
  Cloud, 
  BrainCircuit, 
  CheckCircle2, 
  Play,
  Cpu,
  ShieldCheck,
  Zap,
  Code
} from 'lucide-react';

export const HeroBento: React.FC = () => {
  const { t } = useLanguage();
  const [terminalTab, setTerminalTab] = useState<'console' | 'stack'>('console');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Initialized Yasmeen OS v2026.1",
    "Running health checks: AWS VPC [OK] | FastAPI [OK] | RAG [OK]",
    "Type 'help' or 'stack' to query developer profile..."
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === 'help') {
      response = "Available commands: whoami, stack, location, contact, clear";
    } else if (cmd === 'whoami') {
      response = "Yasmeen Taj - Final-year CS Student | Backend, Cloud & AI Specialist";
    } else if (cmd === 'stack') {
      response = "Core Stack: Java, Python, FastAPI, AWS VPC/S3/IAM, LangChain, RAG, MySQL, Firebase";
    } else if (cmd === 'location') {
      response = "Mysuru, Karnataka, India (Available for Remote / On-site roles globally)";
    } else if (cmd === 'contact') {
      response = "Opening direct Gmail compose window: yasmeentaj0114@gmail.com";
      window.open(GMAIL_COMPOSE_URL, '_blank');
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalLogs((prev) => [...prev, `$ ${terminalInput}`, response]);
    setTerminalInput('');
  };

  return (
    <section id="about" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Main Hero Card (Lg: 7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          
          {/* Glowing Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 dark:bg-cyan-500/15 light:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700" />
          
          <div>
            {/* Top Bar: Location & Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              
              {/* Location Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.locationText}</span>
              </div>

              {/* Status Badge with Pulsing Green Light */}
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-sm shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t(PERSONAL_INFO.statusBadgeKey)}</span>
              </div>
            </div>

            {/* Profile Avatar & Name Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
              
              {/* Avatar Container with Glowing Accent Ring */}
              <div className="relative group/avatar shrink-0">
                <div className="w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[3px] shadow-2xl shadow-cyan-500/25 group-hover/avatar:shadow-cyan-500/50 transition-all duration-300">
                  <div className="w-full h-full bg-slate-950 dark:bg-black light:bg-slate-100 rounded-[21px] flex flex-col items-center justify-center relative overflow-hidden group-hover/avatar:scale-[0.99] transition-transform">
                    <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono tracking-tighter">
                      YT
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-slate-400 mt-2 uppercase tracking-widest">
                      Yasmeen Taj
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-cyan-500 text-slate-950 p-2 rounded-xl shadow-lg border border-slate-900">
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
              </div>

              <div className="pt-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight font-sans">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 mt-1.5">
                  {t(PERSONAL_INFO.headlineKey)}
                </p>
              </div>
            </div>


            {/* Subheadline Summary */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              {t(PERSONAL_INFO.subheadlineKey)}
            </p>
          </div>

          {/* Action Call To Actions & Social Links */}
          <div className="pt-4 border-t border-slate-800/80 dark:border-zinc-800/80 light:border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Primary Action Button: View Projects */}
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>{t("hero.viewProjects")}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secure Gmail Compose Button */}
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/60 hover:text-cyan-400 transition-all flex items-center gap-2"
                title={t("hero.secureContactTooltip")}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{t("hero.contactMe")}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Interactive Terminal / Console Bento Card (Lg: 5 cols) */}
        <div className="lg:col-span-5 bg-slate-950 dark:bg-black light:bg-slate-900 border border-slate-800 dark:border-zinc-800 light:border-slate-700 rounded-3xl p-5 flex flex-col justify-between shadow-2xl font-mono text-xs">
          
          {/* Terminal Window Header */}
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800/90 text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] font-semibold text-slate-300 ml-2">
                  {t("hero.terminalTitle")}
                </span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
                <button
                  onClick={() => setTerminalTab('console')}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    terminalTab === 'console'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t("hero.terminalTabConsole")}
                </button>
                <button
                  onClick={() => setTerminalTab('stack')}
                  className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                    terminalTab === 'stack'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {t("hero.terminalTabStack")}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {terminalTab === 'console' ? (
              <div className="py-3 space-y-2 min-h-[190px] max-h-[220px] overflow-y-auto custom-scrollbar">
                {terminalLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`${
                      log.startsWith('$')
                        ? 'text-cyan-400 font-bold'
                        : 'text-slate-300/90 leading-relaxed'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-3 space-y-2.5 min-h-[190px]">
                <div className="text-slate-400 text-[11px]">System Capabilities Breakdown:</div>
                
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-cyan-400 font-semibold">FastAPI & Microservices</span>
                  <span className="text-emerald-400 text-[10px]">Active [Sub-50ms]</span>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">AWS VPC / S3 / IAM</span>
                  <span className="text-emerald-400 text-[10px]">Cloud Provisioned</span>
                </div>

                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-indigo-400 font-semibold">LangChain & RAG AI</span>
                  <span className="text-emerald-400 text-[10px]">Vector Search Ready</span>
                </div>
              </div>
            )}
          </div>

          {/* Terminal Command Input */}
          <form onSubmit={handleTerminalSubmit} className="pt-3 border-t border-slate-800/90 flex items-center gap-2">
            <span className="text-cyan-400 font-bold">$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help', 'stack' or 'contact'..."
              className="flex-1 bg-transparent text-slate-200 placeholder-slate-600 focus:outline-none text-xs"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all text-[11px] font-bold"
            >
              {t("hero.terminalRun")}
            </button>
          </form>

        </div>

      </div>

      {/* Specialization Cards (3 Column Bento Row) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        
        {/* Card 1: Backend Engineering */}
        <div className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-2xl p-5 hover:border-cyan-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
            <Server className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
            {t("hero.specBackend")}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            {t("hero.specBackendDesc")}
          </p>
        </div>

        {/* Card 2: Cloud Infrastructure */}
        <div className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-2xl p-5 hover:border-blue-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-110 transition-transform">
            <Cloud className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
            {t("hero.specCloud")}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            {t("hero.specCloudDesc")}
          </p>
        </div>

        {/* Card 3: AI & Machine Learning */}
        <div className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-2xl p-5 hover:border-indigo-500/50 transition-all duration-300 group shadow-lg">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900 mb-1">
            {t("hero.specAI")}
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
            {t("hero.specAIDesc")}
          </p>
        </div>

      </div>

    </section>
  );
};
