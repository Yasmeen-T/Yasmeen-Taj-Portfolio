import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SKILL_GROUPS } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Cloud, 
  BrainCircuit, 
  Database, 
  Wrench, 
  Cpu, 
  Search,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const SkillsBento: React.FC = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
      case 'Database': return <Database className="w-5 h-5 text-teal-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-violet-400" />;
      default: return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredGroups = SKILL_GROUPS.filter((group) => {
    const matchesCategory = selectedCategory === 'all' || group.id === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      t(group.categoryKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t("skills.badge")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
          {t("skills.title")}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {t("skills.subtitle")}
        </p>

        {/* Search Input & Filter Pills */}
        <div className="mt-8 w-full max-w-xl flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("skills.searchPlaceholder")}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-900/80 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredGroups.map((group) => {
          const categoryName = t(group.categoryKey);
          const description = t(group.descriptionKey);

          return (
            <div
              key={group.id}
              className="bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 hover:border-cyan-500/50 hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Top header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 dark:text-white light:text-slate-900">
                        {categoryName}
                      </h3>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {group.skills.length} skills
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-5 leading-relaxed">
                  {description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isMatched = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all border ${
                          isMatched
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md font-bold scale-105'
                            : 'bg-slate-800/60 dark:bg-zinc-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800 border-slate-700/60 dark:border-zinc-700/60 light:border-slate-200 hover:border-cyan-500/50 hover:text-cyan-400'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Status */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 dark:border-zinc-800/80 light:border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1 font-mono text-cyan-400/90">
                  <CheckCircle2 className="w-3 h-3" /> Production Verified
                </span>
                <span className="font-mono uppercase text-[10px] tracking-wider">
                  {group.id}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
