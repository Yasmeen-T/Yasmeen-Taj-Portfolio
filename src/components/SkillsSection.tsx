import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Server, Cloud, BrainCircuit, Database, Wrench, Cpu, Search, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-sky-400" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5 text-violet-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-teal-400" />,
};

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const filteredGroups = SKILL_GROUPS.map((group) => {
    if (selectedCategory !== 'All' && group.category !== selectedCategory) {
      return null;
    }

    const matchingSkills = group.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }

    return {
      ...group,
      skillsToDisplay: searchQuery ? matchingSkills : group.skills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Skills & Capabilities
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized technical badges spanning backend systems, AWS cloud infrastructure, applied AI/ML pipelines, databases, and computer science foundations.
          </p>
        </div>

        {/* Controls: Search & Category Filter Pills */}
        <div className="mb-10 space-y-4">
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. FastAPI, AWS, RAG, Java)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Skill Cards Grid */}
        {filteredGroups.length === 0 ? (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-cyan-400 hover:underline font-medium"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => {
              if (!group) return null;
              const displaySkills = group.skillsToDisplay || group.skills;

              return (
                <div
                  key={group.category}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-700 transition-colors">
                          {iconMap[group.iconName] || <Code2 className="w-5 h-5 text-cyan-400" />}
                        </div>
                        <h3 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {group.category}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {displaySkills.length} items
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-2">
                      {displaySkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-medium hover:border-cyan-500/50 hover:text-cyan-300 hover:scale-105 transition-all cursor-default group/pill shadow-sm"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-400 group-hover/pill:text-cyan-300" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
