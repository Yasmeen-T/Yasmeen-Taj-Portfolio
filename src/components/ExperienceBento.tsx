import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES } from '../data/portfolioData';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  Github,
  ExternalLink
} from 'lucide-react';

export const ExperienceBento: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>{t("experience.badge")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
          {t("experience.title")}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {t("experience.subtitle")}
        </p>
      </div>

      {/* Minimalist List Layout */}
      <div className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 divide-y divide-slate-800/80 dark:divide-zinc-800/80 light:divide-slate-200 shadow-xl">
        {EXPERIENCES.map((exp) => {
          const title = t(exp.titleKey);
          const org = t(exp.organizationKey);
          const period = t(exp.periodKey);

          return (
            <div
              key={exp.id}
              className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-800/30 dark:hover:bg-zinc-800/30 p-3 rounded-2xl transition-all"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {title}
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                    {exp.typeKey}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  <span className="flex items-center gap-1 font-semibold text-slate-300 dark:text-slate-300 light:text-slate-800">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    {org}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {period}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1.5">
                  {exp.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 border border-slate-700/50 dark:border-zinc-700/50 light:border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link if available */}
              {exp.githubRepo && (
                <div className="shrink-0 pt-2 sm:pt-0">
                  <a
                    href={exp.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-700/80 dark:border-zinc-700/80 light:border-slate-300 bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 transition-all shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>GitHub Repo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

