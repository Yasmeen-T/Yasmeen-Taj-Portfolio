import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Language } from '../types';
import { GMAIL_COMPOSE_URL } from '../data/portfolioData';
import { 
  Code2, 
  Sun, 
  Moon, 
  Globe, 
  Mail, 
  FileText, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#leadership", label: t("nav.leadership") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
  ];


  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 dark:bg-black/80 light:bg-white/90 border-b border-slate-800/80 dark:border-zinc-800/80 light:border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 dark:bg-black light:bg-white rounded-[11px] flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-sm tracking-tight">
                YT
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 dark:text-white light:text-slate-900 tracking-tight text-base group-hover:text-cyan-400 transition-colors">
              Yasmeen Taj
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono tracking-wider -mt-1 uppercase">
              Backend & Cloud
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-zinc-900/60 light:bg-slate-100/80 px-3 py-1.5 rounded-full border border-slate-800/80 dark:border-zinc-800/80 light:border-slate-200/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 rounded-full transition-all hover:bg-slate-800/50 dark:hover:bg-zinc-800/50 light:hover:bg-white/80"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language, Theme Toggle, Resume, Contact) */}
        <div className="hidden lg:flex items-center gap-2.5">
          
          {/* Language Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 dark:bg-zinc-900 light:bg-slate-100 border border-slate-800 dark:border-zinc-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-cyan-500/50 transition-all"
              title={t("header.language")}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase font-semibold">{language}</span>
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-slate-900 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-xl shadow-xl py-1 z-50 backdrop-blur-xl">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => {
                      setLanguage(item.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left ${
                      language === item.code
                        ? 'text-cyan-400 font-semibold bg-cyan-500/10'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800 dark:hover:bg-zinc-800 light:hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-sm">{item.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Switcher Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900/80 dark:bg-zinc-900 light:bg-slate-100 border border-slate-800 dark:border-zinc-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 hover:border-cyan-500/50 transition-all"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Resume Modal Trigger Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-900/60 dark:bg-zinc-900 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500/80 hover:text-cyan-400 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t("header.resume")}</span>
          </button>

          {/* Direct Gmail Compose CTA Link */}
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5"
            title={t("hero.secureContactTooltip")}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{t("header.hireMe")}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-900 dark:bg-zinc-900 light:bg-slate-100 border border-slate-800 dark:border-zinc-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 dark:bg-zinc-900 light:bg-slate-100 border border-slate-800 dark:border-zinc-800 light:border-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 dark:bg-black light:bg-white border-b border-slate-800 dark:border-zinc-800 light:border-slate-200 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 bg-slate-900/60 dark:bg-zinc-900 light:bg-slate-100 rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 dark:border-zinc-800 light:border-slate-200 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{t("header.language")}:</span>
              <div className="flex gap-1">
                {languages.map((item) => (
                  <button
                    key={item.code}
                    onClick={() => setLanguage(item.code)}
                    className={`px-2 py-1 text-xs rounded ${
                      language === item.code
                        ? 'bg-cyan-500 text-white font-bold'
                        : 'bg-slate-900 dark:bg-zinc-900 text-slate-300'
                    }`}
                  >
                    {item.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 py-2 rounded-lg text-xs font-semibold border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-900 dark:bg-zinc-900 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center justify-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("header.resume")}</span>
              </button>

              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{t("header.hireMe")}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
