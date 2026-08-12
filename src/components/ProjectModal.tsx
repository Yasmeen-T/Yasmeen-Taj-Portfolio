import React from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Server, 
  Cpu,
  ArrowUpRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  if (!project) return null;

  const title = t(project.titleKey);
  const subtitle = t(project.subtitleKey);
  const longDescription = t(project.longDescriptionKey);
  const overview = t(project.architectureDetails.overviewKey);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-300 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 dark:bg-zinc-800 light:bg-slate-100 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM ARCHITECTURE & API SPEC</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-white light:text-slate-900">
            {title}
          </h2>
          <p className="text-sm font-medium text-cyan-400 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700 dark:border-zinc-700 light:border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview & Architecture Details */}
        <div className="space-y-6">
          <div className="bg-slate-950/60 dark:bg-black/60 light:bg-slate-50 p-4 rounded-2xl border border-slate-800/80 dark:border-zinc-800 light:border-slate-200">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" /> Executive Overview
            </h3>
            <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
              {longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Key Engineering Highlights
            </h3>
            <div className="space-y-2">
              {project.architectureDetails.highlightsKeys.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints */}
          {project.architectureDetails.endpoints && (
            <div>
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Core REST API Endpoints
              </h3>
              <div className="bg-slate-950 dark:bg-black p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 space-y-1.5">
                {project.architectureDetails.endpoints.map((ep, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-slate-500">→</span>
                    <span>{ep}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Breakdown */}
          <div>
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-400" /> Technology Roles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architectureDetails.techStack.map((tech, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-800/60 dark:bg-zinc-800/80 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200">
                  <div className="text-xs font-bold text-slate-100 dark:text-white light:text-slate-900">{tech.name}</div>
                  <div className="text-[11px] text-slate-400">{tech.roleKey}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 dark:border-zinc-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* GitHub Repo Button (Outline) */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>{t("projects.githubBtn")}</span>
            </a>

            {/* Live Demo or External Action */}
            {project.demoUrl && project.demoUrl !== '#architecture-modal' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t(project.demoLabelKey)}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-zinc-800 text-slate-300 hover:bg-slate-700 transition-all"
          >
            Close Spec
          </button>
        </div>

      </div>
    </div>
  );
};
