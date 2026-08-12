import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';

export const ProjectsBento: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Backend' | 'AI/ML'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{t("projects.badge")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
          {t("projects.title")}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {t("projects.subtitle")}
        </p>

        {/* Category Pills */}
        <div className="mt-6 flex items-center gap-2 bg-slate-900/80 dark:bg-zinc-900 light:bg-slate-100 p-1.5 rounded-2xl border border-slate-800 dark:border-zinc-800 light:border-slate-200">
          {(['All', 'Backend', 'AI/ML'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout for Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((proj) => {
          const title = t(proj.titleKey);
          const subtitle = t(proj.subtitleKey);
          const description = t(proj.descriptionKey);

          return (
            <div 
              key={proj.id}
              className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {proj.id === 'cognivouch' ? 'Node.js / Express / OAuth' : 'React / Gemini / FastAPI'}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 mb-1">
                  {title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mb-3">
                  {subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 dark:border-zinc-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  {/* GitHub Repo Button */}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl text-xs font-semibold border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{t("projects.githubBtn")}</span>
                  </a>

                  {/* Live Demo Button (if applicable) */}
                  {proj.demoUrl && proj.demoUrl !== '#architecture-modal' && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t("projects.liveDemoBtn")}</span>
                    </a>
                  )}
                </div>

                {/* Inspect Architecture Modal Trigger */}
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{t("projects.inspectArch")}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Architecture Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
