import React, { useState } from 'react';
import { Project } from '../types';
import { X, Github, ExternalLink, Terminal, Layers, Server, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  if (!project) return null;

  const copyEndpoint = (endpoint: string) => {
    navigator.clipboard.writeText(endpoint);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-slate-950/90 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
              {project.category}
            </span>
            <h3 className="text-xl font-extrabold text-white">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Subtitle & Long Description */}
          <div>
            <h4 className="text-sm font-semibold text-cyan-300 mb-1">{project.subtitle}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Action CTAs inside modal as well */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-400 hover:bg-slate-800 transition-all"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>GitHub Repository</span>
            </a>

            {project.demoUrl && project.demoUrl !== '#architecture-modal' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold hover:brightness-110 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{project.demoLabel}</span>
              </a>
            )}
          </div>

          {/* Architecture Overview */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>System Topology & Architecture</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">
              {project.architectureDetails.overview}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Engineering Benchmarks & Features
            </h5>
            <ul className="space-y-2">
              {project.architectureDetails.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* API Endpoints List if available */}
          {project.architectureDetails.endpoints && (
            <div>
              <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                REST API Specifications
              </h5>
              <div className="space-y-2">
                {project.architectureDetails.endpoints.map((ep, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between font-mono text-xs text-slate-300"
                  >
                    <span className="text-cyan-300 font-semibold">{ep}</span>
                    <button
                      onClick={() => copyEndpoint(ep)}
                      className="text-[10px] text-slate-400 hover:text-white flex items-center gap-1 bg-slate-900 px-2 py-1 rounded border border-slate-800"
                    >
                      {copiedEndpoint === ep ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedEndpoint === ep ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Breakdown Table */}
          <div>
            <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technology Stack Roles
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.architectureDetails.techStack.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-xs font-bold text-slate-200 block">{item.name}</span>
                  <span className="text-[11px] text-slate-400">{item.role}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
          >
            Close System View
          </button>
        </div>

      </div>

    </div>
  );
};
