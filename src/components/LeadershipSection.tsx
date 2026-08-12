import React from 'react';
import { LEADERSHIP } from '../data/portfolioData';
import { CloudLightning, Award, Terminal, Users, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  CloudLightning: <CloudLightning className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-cyan-400" />,
  Terminal: <Terminal className="w-6 h-6 text-emerald-400" />,
};

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Community Roles
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Empowering technical developer communities, hosting cloud architecture workshops, and advocating Google and AWS developer ecosystems.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 group-hover:scale-110 transition-transform">
                    {iconMap[item.icon] || <Users className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                    Verified Role
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                  {item.role}
                </h3>

                {/* Organization */}
                <p className="text-xs font-semibold text-cyan-400 font-mono mb-4">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer indicator */}
              <div className="pt-5 mt-5 border-t border-slate-800/60 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Active Community Builder</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
