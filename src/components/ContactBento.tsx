import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GMAIL_COMPOSE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Github, 
  Linkedin, 
  ExternalLink,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export const ContactBento: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-3 uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>{t("contact.badge")}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-white light:text-slate-900 tracking-tight">
          {t("contact.title")}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Direct Gmail Compose Channel (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-100 dark:text-white light:text-slate-900">
                {t("contact.directTitle")}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-6">
              {t("contact.directDesc")}
            </p>

            {/* Direct Gmail Compose Button */}
            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 mb-8"
              title={t("hero.secureContactTooltip")}
            >
              <Mail className="w-4 h-4" />
              <span>{t("contact.gmailComposeCTA")}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>

            {/* Base Location Info */}
            <div className="p-4 rounded-2xl bg-slate-800/60 dark:bg-zinc-800/80 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    {t("contact.locationLabel")}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    {PERSONAL_INFO.locationText}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase mb-2">
                Professional Networks
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/60 dark:bg-zinc-800 light:bg-slate-100 border border-slate-700/60 dark:border-zinc-700 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 mt-6 border-t border-slate-800/80 dark:border-zinc-800 light:border-slate-200 text-[11px] font-mono text-slate-500">
            Protected against automated scraper bots
          </div>

        </div>

        {/* Right Column: Interactive Direct Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/80 dark:bg-zinc-900/90 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xl font-bold text-slate-100 dark:text-white light:text-slate-900">
              {t("contact.formTitle")}
            </h3>
          </div>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
            {t("contact.formDesc")}
          </p>

          {status === 'success' ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-emerald-400">
                {t("contact.formSuccessTitle")}
              </h4>
              <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-sm mx-auto">
                {t("contact.formSuccessDesc")}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-zinc-800 text-slate-200 hover:bg-slate-700 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    {t("contact.formName")}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-950/80 dark:bg-black light:bg-slate-50 border border-slate-800 dark:border-zinc-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                    {t("contact.formEmail")}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@techcorp.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-950/80 dark:bg-black light:bg-slate-50 border border-slate-800 dark:border-zinc-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  {t("contact.formSubject")}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Software Engineering Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-950/80 dark:bg-black light:bg-slate-50 border border-slate-800 dark:border-zinc-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5">
                  {t("contact.formMessage")}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your team or project..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-950/80 dark:bg-black light:bg-slate-50 border border-slate-800 dark:border-zinc-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>{t("contact.formSending")}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{t("contact.formSubmit")}</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

    </section>
  );
};
