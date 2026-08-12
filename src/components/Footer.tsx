import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <span className="font-bold text-slate-200 text-sm block">Yasmeen Taj</span>
              <span className="text-[11px] text-slate-400 font-mono">Backend Engineer | Cloud & AI Practitioner</span>
            </div>
          </div>

          {/* Explicitly Displayed Email & Links (CRITICAL REQUIREMENT) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            
            {/* Explicit email link */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors font-mono font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>yasmeentaj0114@gmail.com</span>
            </a>

            <span className="text-slate-800 hidden sm:inline">•</span>

            {/* GitHub link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <span className="text-slate-800 hidden sm:inline">•</span>

            {/* LinkedIn link */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer flex items-center gap-1 text-[11px] font-mono"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-400">
          <p>© 2026 Yasmeen Taj. All rights reserved.</p>
          <p className="font-mono text-slate-400">
            Engineered with React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
