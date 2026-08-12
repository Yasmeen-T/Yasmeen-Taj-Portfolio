import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, Building2, CheckCircle, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER PATHWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internships & Cohorts
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on technical engineering experience in Android native development, web microservices, ML model training, and MERN stack architectures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-12 space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-400 group-hover:scale-110 flex items-center justify-center transition-all shadow-md">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Experience Card (NO CTA BUTTONS!) */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 shadow-xl">
                
                {/* Header Row: Title & Organization & Period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 mb-4 border-b border-slate-800/60">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mt-1 font-medium">
                      <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{exp.organization}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs font-mono">{exp.type}</span>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Impact Bullet Points */}
                <ul className="space-y-2.5 mb-5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400/80 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags Row */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* NOTE: Strictly NO CTA buttons per prompt constraints */}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
