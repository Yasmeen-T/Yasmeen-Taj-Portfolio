import React, { useState } from 'react';
import { PERSONAL_INFO, SKILL_GROUPS, EXPERIENCES, PROJECTS, LEADERSHIP } from '../data/portfolioData';
import { X, Printer, Download, Mail, Github, Linkedin, CheckCircle2, Briefcase, GraduationCap, Award, Check, Sparkles } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-slate-950/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base sm:text-lg font-extrabold text-white">Yasmeen Taj — Official Curriculum Vitae</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold hover:border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold hover:brightness-110 transition-colors"
            >
              {downloading ? (
                <span className="animate-spin text-slate-950">⏳</span>
              ) : downloaded ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{downloaded ? 'Downloaded!' : 'Download Resume'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 space-y-8 bg-slate-900 text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
            <h2 className="text-base font-semibold text-cyan-400 mt-1">{PERSONAL_INFO.title}</h2>
            
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-slate-400 mt-3">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>github.com/yasmeentaj</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>linkedin.com/in/yasmeentaj</span>
              </a>
            </div>
            
            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
              {PERSONAL_INFO.subheadline}
            </p>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-3 pb-1 border-b border-slate-800">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-white">Bachelor of Engineering / Technology in Computer Science</h3>
                <p className="text-xs text-slate-400 font-medium">Final-Year CS Student | Specialized in Backend, Cloud & AI</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded w-fit">
                Graduation: 2026 Batch
              </span>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-3 pb-1 border-b border-slate-800">
              <Award className="w-4 h-4" />
              <span>Technical Skills Overview</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_GROUPS.map((group) => (
                <div key={group.category} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-slate-200 block mb-1 text-xs">{group.category}:</span>
                  <p className="text-slate-400 font-mono text-[11px]">{group.skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-4 pb-1 border-b border-slate-800">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience & Internships</span>
            </div>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4 className="text-sm font-bold text-white">{exp.title} — <span className="text-cyan-400">{exp.organization}</span></h4>
                    <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-cyan-400">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-3 pb-1 border-b border-slate-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>Key Projects</span>
            </div>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                  <div className="flex items-center justify-between font-bold text-slate-200 mb-1">
                    <span>{proj.title} ({proj.subtitle})</span>
                    <span className="font-mono text-[10px] text-cyan-400">{proj.category}</span>
                  </div>
                  <p className="text-slate-400 text-[11px] mb-2">{proj.description}</p>
                  <p className="text-slate-500 font-mono text-[10px]">Tech: {proj.tags.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Leadership */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 tracking-wider mb-3 pb-1 border-b border-slate-800">
              <Sparkles className="w-4 h-4" />
              <span>Leadership & Honors</span>
            </div>
            <div className="space-y-2 text-xs">
              {LEADERSHIP.map((lead, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-bold text-white">{lead.role}</span> — <span className="text-cyan-400 font-medium">{lead.organization}</span>
                  <p className="text-slate-400 text-[11px] mt-1">{lead.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
