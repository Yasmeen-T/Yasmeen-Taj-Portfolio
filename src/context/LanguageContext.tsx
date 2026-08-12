import React, { createContext, useContext, useState } from 'react';
import { Language } from '../types';
import { en } from '../i18n/translations/en';
import { kn } from '../i18n/translations/kn';
import { hi } from '../i18n/translations/hi';
import { tr } from '../i18n/translations/tr';

const dictionaries: Record<string, Record<string, string>> = {
  en,
  kn,
  hi,
  tr,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang') as Language;
      if (saved && ['en', 'kn', 'hi', 'tr', 'es', 'fr', 'de', 'ar', 'ja'].includes(saved)) {
        return saved;
      }
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  const t = (key: string): string => {
    const dict = dictionaries[language] || dictionaries.en;
    return dict[key] || dictionaries.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

