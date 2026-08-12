import { Project, SkillGroup, Experience, LeadershipRole } from '../types';

export const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=yasmeentaj0114@gmail.com&su=Inquiry%20via%20Portfolio";

export const PERSONAL_INFO = {
  name: "Yasmeen Taj",
  locationKey: "hero.location",
  locationText: "Mysuru, India",
  headlineKey: "hero.headline",
  subheadlineKey: "hero.subheadline",
  statusBadgeKey: "hero.statusBadge",
  github: "https://github.com/Yasmeen-T",
  linkedin: "https://linkedin.com/in/yasmeentaj",
  gmailComposeUrl: GMAIL_COMPOSE_URL,
  credly1: "https://www.credly.com/users/yasmeen-taj.1",
  credly2: "https://www.credly.com/users/yasmeen-taj01",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    categoryKey: "skills.catLanguages",
    iconName: "Code2",
    descriptionKey: "skills.catLanguagesDesc",
    skills: ["Java", "Python", "C", "SQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "backend",
    categoryKey: "skills.catBackend",
    iconName: "Server",
    descriptionKey: "skills.catBackendDesc",
    skills: ["REST APIs", "FastAPI", "CRUD", "JSON", "API Integration", "Node.js", "Express"]
  },
  {
    id: "cloud",
    categoryKey: "skills.catCloud",
    iconName: "Cloud",
    descriptionKey: "skills.catCloudDesc",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "Amazon VPC", "AWS Cloud", "AWS PartyRock"]
  },
  {
    id: "ai",
    categoryKey: "skills.catAI",
    iconName: "BrainCircuit",
    descriptionKey: "skills.catAIDesc",
    skills: ["Machine Learning", "Generative AI", "Prompt Engineering", "LLMs", "RAG", "LangChain", "Vector Search", "Gemini AI"]
  },
  {
    id: "databases",
    categoryKey: "skills.catDatabases",
    iconName: "Database",
    descriptionKey: "skills.catDatabasesDesc",
    skills: ["MySQL", "Firebase", "MongoDB"]
  },
  {
    id: "tools",
    categoryKey: "skills.catTools",
    iconName: "Wrench",
    descriptionKey: "skills.catToolsDesc",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman", "Render", "Vercel"]
  },
  {
    id: "cs",
    categoryKey: "skills.catCS",
    iconName: "Cpu",
    descriptionKey: "skills.catCSDesc",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "python-intern",
    titleKey: "exp.pythonTitle",
    organizationKey: "exp.pythonOrg",
    periodKey: "exp.pythonPeriod",
    typeKey: "Internship",
    githubRepo: "https://github.com/Yasmeen-T/CODSOFT",
    techTags: ["Python", "Algorithms", "Git"]
  },
  {
    id: "android-intern",
    titleKey: "exp.androidTitle",
    organizationKey: "exp.androidOrg",
    periodKey: "exp.androidPeriod",
    typeKey: "Internship",
    githubRepo: "https://github.com/Yasmeen-T/OIBSIP",
    techTags: ["Java", "Android SDK", "REST APIs"]
  },
  {
    id: "web-intern",
    titleKey: "exp.webTitle",
    organizationKey: "exp.webOrg",
    periodKey: "exp.webPeriod",
    typeKey: "Internship",
    techTags: ["JavaScript", "HTML5", "CSS3", "REST APIs"]
  },
  {
    id: "ml-track",
    titleKey: "exp.mlTitle",
    organizationKey: "exp.mlOrg",
    periodKey: "exp.mlPeriod",
    typeKey: "Cohort Program",
    techTags: ["Python", "Machine Learning", "RAG", "LLMs"]
  },
  {
    id: "mern-intern",
    titleKey: "exp.mernTitle",
    organizationKey: "exp.mernOrg",
    periodKey: "exp.mernPeriod",
    typeKey: "Internship",
    techTags: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "cognivouch",
    titleKey: "proj.cognivouchTitle",
    subtitleKey: "proj.cognivouchSubtitle",
    category: "Backend",
    descriptionKey: "proj.cognivouchDesc",
    longDescriptionKey: "proj.cognivouchLongDesc",
    tags: ["Verification Protocol", "React", "Node.js", "REST APIs", "OAuth", "Student Achievements"],
    githubUrl: "https://github.com/Yasmeen-T/CogniVouch",
    demoUrl: "#architecture-modal",
    demoLabelKey: "projects.viewArchBtn",
    architectureDetails: {
      overviewKey: "proj.cognivouchArchOverview",
      highlightsKeys: [
        "Real-time insights across student achievement proofs, faculty audit rates, departmental skill coverage, and institutional credentials.",
        "Cryptographically verifiable badge & certificate submission workflow.",
        "Role-based faculty approval gateway with automated audit trails."
      ],
      endpoints: [
        "POST /api/v1/vouch/submit - Student credential proof ingestion",
        "GET /api/v1/vouch/verify - Faculty verification status lookup",
        "GET /api/v1/badges/student - Verified achievement portfolio ledger"
      ],
      techStack: [
        { name: "Node.js / Express", roleKey: "Verification Service Backend" },
        { name: "React / Vite", roleKey: "Student & Faculty Interface" },
        { name: "MongoDB", roleKey: "Proof & Credentials Store" },
        { name: "OAuth 2.0", roleKey: "Identity & Access Control" }
      ]
    }
  },
  {
    id: "bitebot",
    titleKey: "proj.bitebotTitle",
    subtitleKey: "proj.bitebotSubtitle",
    category: "AI/ML",
    descriptionKey: "proj.bitebotDesc",
    longDescriptionKey: "proj.bitebotLongDesc",
    tags: ["React", "Firebase", "Gemini AI", "RAG", "FastAPI", "PDF Analysis", "Live Order Tracking"],
    githubUrl: "https://github.com/Yasmeen-T/BiteBot-Food-Delivery-Assistant",
    demoUrl: "https://bitebot-demo.render.com",
    demoLabelKey: "projects.liveDemoBtn",
    architectureDetails: {
      overviewKey: "proj.bitebotArchOverview",
      highlightsKeys: [
        "Strict RAG-based FAQ handling for instant menu & policy inquiries.",
        "Live database order tracking & dynamic order modification pipeline.",
        "PDF document analysis engine for automated menu & dietary parsing."
      ],
      endpoints: [
        "POST /api/v1/bot/chat - Conversational intent parser with RAG",
        "GET /api/v1/orders/track - Real-time Firebase database order status",
        "POST /api/v1/menu/pdf-analyze - Document ingestion & feature extraction"
      ],
      techStack: [
        { name: "React & Gemini AI", roleKey: "Conversational UI & LLM Synthesis" },
        { name: "Firebase", roleKey: "Real-time Database & Authentication" },
        { name: "FastAPI & RAG", roleKey: "Vector Retrieval & Backend Microservice" },
        { name: "Python / PyPDF", roleKey: "Menu PDF Analysis Engine" }
      ]
    }
  }
];

export const LEADERSHIP: LeadershipRole[] = [
  {
    id: "director",
    roleKey: "leadership.directorRole",
    credentialUrl: "https://www.credly.com/badges/5a98b63d-4548-4ff6-b438-ad9865dd168f",
    icon: "CloudLightning"
  },
  {
    id: "ambassador",
    roleKey: "leadership.ambassadorRole",
    credentialUrl: "https://drive.google.com/file/d/1QY2TshCeN9sH_avUVV2Wl8mVdSL5SB7B/view",
    icon: "Award"
  },
  {
    id: "devops",
    roleKey: "leadership.devopsRole",
    credentialUrl: "https://credsverse.com/credentials/111df5f2-f624-4240-83fb-6c33df6f5b23",
    icon: "Terminal"
  }
];

