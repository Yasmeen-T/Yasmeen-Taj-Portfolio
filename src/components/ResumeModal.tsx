import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GMAIL_COMPOSE_URL, PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Download, 
  FileText, 
  CheckCircle2, 
  Building2, 
  GraduationCap, 
  Briefcase, 
  Award,
  Mail,
  ExternalLink
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a clean text version or trigger PDF download simulation
    const content = `YASMEEN TAJ
Software Engineer | Backend, Cloud & AI Practitioner
Location: Mysuru, India
Portfolio: https://github.com/Yasmeen-T

EDUCATION
Final-year Computer Science & Engineering Student

TECHNICAL SKILLS
Languages: Java, Python, C, SQL, JavaScript, HTML5, CSS3
Backend: REST APIs, FastAPI, Microservices, CRUD, Express, Node.js
Cloud & Infra: AWS EC2, AWS S3, AWS IAM, Amazon VPC, AWS Cloud
AI & ML: Machine Learning, Generative AI, Prompt Engineering, LLMs, RAG, LangChain
Databases: MySQL, Firebase, MongoDB

INTERNSHIPS & EXPERIENCE
- Android Development Intern | Oasis Infobyte (AICTE)
- Web Development Intern | Oasis Infobyte
- Machine Learning Track | July 2026 Cohort
- MERN Stack Developer Intern | Codec Technology
- Python Programming Intern | Codsoft

LEADERSHIP & RECOGNITION
- Director of Events | AWS Student Builder Group
- 2025 Google Student Ambassador | Google Developer Community
- DevOps Bootcamp Graduate | April 2026 Cohort
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Yasmeen_Taj_Software_Engineer_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-300 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 dark:bg-zinc-800 light:bg-slate-100 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-100 dark:text-white light:text-slate-900">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                Yasmeen Taj • Software Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Resume Preview Box */}
        <div className="bg-slate-950 dark:bg-black light:bg-slate-50 p-6 rounded-2xl border border-slate-800 dark:border-zinc-800 light:border-slate-200 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 space-y-6 max-h-[450px] overflow-y-auto custom-scrollbar font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 dark:border-zinc-800 light:border-slate-200 pb-4">
            <h3 className="text-lg font-bold text-slate-100 dark:text-white light:text-slate-900">
              YASMEEN TAJ
            </h3>
            <p className="text-xs font-semibold text-cyan-400 mt-0.5">
              Software Engineer | Backend, Cloud & AI Practitioner
            </p>
            <p className="text-[11px] text-slate-400 mt-1">
              Mysuru, Karnataka, India • Available for Full-Time Roles
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
            </h4>
            <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
              <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                Bachelor of Engineering in Computer Science & Engineering
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Final Year Student • Mysuru, India
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-cyan-400" /> Core Technical Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <span className="font-bold text-cyan-400">Languages:</span> Java, Python, C, SQL, JavaScript
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <span className="font-bold text-blue-400">Backend:</span> REST APIs, FastAPI, Microservices, Express
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <span className="font-bold text-sky-400">Cloud:</span> AWS VPC, S3, IAM, EC2
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <span className="font-bold text-indigo-400">AI / ML:</span> LLMs, RAG, LangChain, Vector Search
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-cyan-400" /> Key Internships
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                  Android Development Intern — Oasis Infobyte (AICTE)
                </div>
                <div className="text-[11px] text-slate-400">Aug 2026 - Sep 2026</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 dark:bg-zinc-900 light:bg-white border border-slate-800 dark:border-zinc-800 light:border-slate-200">
                <div className="font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                  MERN Stack Developer Intern — Codec Technology
                </div>
                <div className="text-[11px] text-slate-400">Feb 2026 - Apr 2026</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 dark:border-zinc-800 light:border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 flex items-center gap-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (.txt)</span>
            </button>

            <a
              href={GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold border border-slate-700 dark:border-zinc-700 light:border-slate-300 bg-slate-800 dark:bg-zinc-800 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:border-cyan-500 hover:text-cyan-400 flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Inquire via Gmail</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-zinc-800 text-slate-300 hover:bg-slate-700 transition-all"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
