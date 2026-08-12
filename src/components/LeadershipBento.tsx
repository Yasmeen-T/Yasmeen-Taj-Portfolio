import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LEADERSHIP, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Users, 
  CloudLightning, 
  Award, 
  Terminal, 
  ExternalLink,
  ShieldCheck,
  BadgeCheck
} from 'lucide-react';

export const LeadershipBento: React.FC = () => {
  const { t } = useLanguage();

  const getLeadershipIcon = (iconName: string) => {
    switch (iconName) {
      case 'CloudLightning': return <CloudLightning className="w-5 h-5 text-cyan-400" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-400" />;
      default: return <Users className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="leadership" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 uppercase tracking-wider">
          <Users className="w-3.5 h-3.5" />
          <span>{t("leadership.badge")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
          {t("leadership.title")}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {t("leadership.subtitle")}
        </p>
      </div>

      {/* Minimalist Title List */}
      <div className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 divide-y divide-slate-800/80 dark:divide-zinc-800/80 light:divide-slate-200 shadow-xl mb-8">
        {LEADERSHIP.map((role) => {
          const roleTitle = t(role.roleKey);

          return (
            <div
              key={role.id}
              className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-slate-800/30 dark:hover:bg-zinc-800/30 p-3 rounded-2xl transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 flex items-center justify-center shrink-0">
                  {getLeadershipIcon(role.icon)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                  {roleTitle}
                </h3>
              </div>

              {/* Credential URL Button */}
              {role.credentialUrl && (
                <div className="shrink-0">
                  <a
                    href={role.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-slate-700/80 dark:border-zinc-700/80 light:border-slate-300 bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 text-cyan-400 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all shadow-sm"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Credential / Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Verified Credly Profiles Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-zinc-900 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <BadgeCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100">Verified Credly Portfolios</h4>
            <p className="text-xs text-slate-400">Explore official AWS, Google, and DevOps badges on Credly</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={PERSONAL_INFO.credly1}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all flex items-center gap-1.5"
          >
            <span>Credly Profile #1</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.credly2}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all flex items-center gap-1.5"
          >
            <span>Credly Profile #2</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </section>
  );
};

