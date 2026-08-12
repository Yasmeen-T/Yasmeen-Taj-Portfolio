import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GMAIL_COMPOSE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ArrowUp, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 dark:bg-black light:bg-slate-900 border-t border-slate-800/80 dark:border-zinc-800 light:border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center gap-2.5 mb-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 dark:bg-black rounded-[7px] flex items-center justify-center">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-xs font-mono">
                  YT
                </span>
              </div>
            </div>
            <span className="text-lg font-extrabold text-slate-100 dark:text-white group-hover:text-cyan-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          <p className="text-xs text-slate-400 max-w-md">
            {t("footer.brandSubtitle")}
          </p>
        </div>

        {/* Links & Direct Gmail Compose CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 text-cyan-400 hover:border-cyan-500/50 transition-all"
            title={t("hero.secureContactTooltip")}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t("footer.composeLink")}</span>
          </a>

          <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t("footer.location")}</span>
          </div>
        </div>

        {/* Social Icons & Back to top button */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 dark:bg-zinc-900 border border-slate-800 dark:border-zinc-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 dark:border-zinc-900 text-center text-[11px] font-mono text-slate-500">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};
