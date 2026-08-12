import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroBento } from './components/HeroBento';
import { SkillsBento } from './components/SkillsBento';
import { ExperienceBento } from './components/ExperienceBento';
import { ProjectsBento } from './components/ProjectsBento';
import { LeadershipBento } from './components/LeadershipBento';
import { ContactBento } from './components/ContactBento';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const PortfolioApp: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-black light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Sticky Navigation Header */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="space-y-4">
        <HeroBento />
        <SkillsBento />
        <ExperienceBento />
        <ProjectsBento />
        <LeadershipBento />
        <ContactBento />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Resume View & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}
