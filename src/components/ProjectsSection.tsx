import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, Cpu, Layers, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Backend, Cloud & AI Systems
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Architected backend solutions, real-time ML pipelines, and production-ready AWS cloud infrastructure with actionable code bases.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
            >
              
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill & ID badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-cyan-400 text-[11px] font-mono font-bold">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      SYS_ID // {project.id}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-medium text-cyan-400/90 font-mono mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Highly Visible Actionable CTAs (CRITICAL REQUIREMENT) */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-auto bg-slate-950/40">
                <div className="flex flex-col gap-2.5 pt-4">
                  
                  {/* Primary Action Button Row */}
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* GitHub Repo Button (Outline Style + GitHub Icon) */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-semibold hover:border-cyan-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer shadow-sm group/btn"
                    >
                      <Github className="w-4 h-4 text-slate-300 group-hover/btn:text-white transition-colors" />
                      <span>GitHub Repo</span>
                    </a>

                    {/* Live Demo / View Architecture Button (Solid Accent Background + External Icon) */}
                    {project.demoUrl === '#architecture-modal' ? (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-cyan-500/20"
                      >
                        <Cpu className="w-4 h-4" />
                        <span>{project.demoLabel}</span>
                      </button>
                    ) : (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-md shadow-cyan-500/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>{project.demoLabel}</span>
                      </a>
                    )}

                  </div>

                  {/* Secondary Inspector Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-mono text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Inspect System Architecture & APIs</span>
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Architecture Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
