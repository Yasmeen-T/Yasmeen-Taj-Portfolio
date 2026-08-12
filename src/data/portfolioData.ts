import { Project, SkillGroup, Experience, LeadershipRole } from '../types';

export const PERSONAL_INFO = {
  name: "Yasmeen Taj",
  title: "Backend Engineer | Cloud & AI Practitioner",
  subheadline: "Final-year CS student specialized in building robust backend systems, deploying scalable cloud infrastructure, and integrating AI/ML solutions.",
  email: "yasmeentaj0114@gmail.com",
  github: "https://github.com/yasmeentaj",
  linkedin: "https://linkedin.com/in/yasmeentaj",
  location: "Bengaluru, India",
  status: "Available for Full-time Roles (2026 Batch)",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Languages",
    iconName: "Code2",
    description: "Core programming languages for algorithmic backend logic & systems programming.",
    skills: ["Java", "Python", "C", "SQL", "JavaScript", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Web",
    iconName: "Server",
    description: "High-performance microservices, RESTful interfaces & data orchestration.",
    skills: ["REST APIs", "FastAPI", "CRUD", "JSON", "API Integration"]
  },
  {
    category: "Cloud Infrastructure",
    iconName: "Cloud",
    description: "Scalable cloud services, virtual private clouds, IAM security & cloud computing.",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "Amazon VPC", "AWS Cloud", "AWS PartyRock"]
  },
  {
    category: "AI & Machine Learning",
    iconName: "BrainCircuit",
    description: "Generative AI, retrieval augmented generation, embeddings & ML pipelines.",
    skills: ["Machine Learning", "Generative AI", "Prompt Engineering", "LLMs", "RAG", "LangChain", "Vector Search"]
  },
  {
    category: "Databases",
    iconName: "Database",
    description: "Relational schema design, index optimization & real-time document stores.",
    skills: ["MySQL", "Firebase"]
  },
  {
    category: "Developer Tools",
    iconName: "Wrench",
    description: "Version control, Linux environments, API testing & cloud deployment pipelines.",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Postman", "Render", "Vercel"]
  },
  {
    category: "Core Computer Science",
    iconName: "Cpu",
    description: "Foundational CS principles, object-oriented architecture & system design.",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks", "System Design"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Android Development Intern",
    organization: "Oasis Infobyte (AICTE Program)",
    period: "Aug 2026 - Sep 2026",
    type: "Internship",
    points: [
      "Engineered high-performance native Android application components adhering to AICTE technical standards.",
      "Optimized client-server API communication protocols for low-latency state synchronization.",
      "Implemented background threading routines and local storage caching to improve application responsiveness by 30%."
    ],
    techTags: ["Java", "Android SDK", "REST APIs", "JSON", "Git"]
  },
  {
    title: "Web Development Intern",
    organization: "Oasis Infobyte",
    period: "May 2026 - Jul 2026",
    type: "Internship",
    points: [
      "Designed and deployed responsive web interfaces with modular frontend components and backend integrations.",
      "Developed secure client-side form validation and seamless RESTful API ingestion layers.",
      "Collaborated on database query optimization and cross-browser testing to ensure fast load times."
    ],
    techTags: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Postman"]
  },
  {
    title: "Machine Learning Track",
    organization: "July 2026 Cohort",
    period: "July 2026",
    type: "Cohort Program",
    points: [
      "Developed and evaluated supervised ML classification and regression models using Python libraries.",
      "Explored Generative AI capabilities, prompt engineering techniques, and RAG architectures with vector embeddings.",
      "Built end-to-end data processing pipelines for feature engineering and performance benchmarking."
    ],
    techTags: ["Python", "Machine Learning", "LLMs", "LangChain", "RAG", "Vector Search"]
  },
  {
    title: "MERN Stack Developer Intern",
    organization: "Codec Technology",
    period: "Feb 2026 - Apr 2026",
    type: "Internship",
    points: [
      "Architected backend microservices with Express and Node.js for RESTful CRUD endpoint management.",
      "Integrated MongoDB/Firebase database layers with strict schema validations and indexed relational queries.",
      "Implemented JWT authentication and CORS security headers for robust client-server communications."
    ],
    techTags: ["Node.js", "Express", "Firebase", "REST APIs", "JavaScript", "JSON"]
  },
  {
    title: "Python Programming Intern",
    organization: "Codsoft",
    period: "Nov 2025 - Dec 2025",
    type: "Internship",
    points: [
      "Constructed modular Python automation scripts and object-oriented software utilities.",
      "Applied key data structures (hash maps, trees, queues) to solve complex computational problems cleanly.",
      "Maintained strict version control practices using Git and structured unit test suites."
    ],
    techTags: ["Python", "Data Structures", "Algorithms", "OOP", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "bitebot",
    title: "BiteBot",
    subtitle: "AI-Powered Food Delivery Assistant",
    category: "AI/ML",
    description: "An intelligent AI assistant for food delivery workflows, powered by Python/FastAPI, LangChain, and RAG for contextual order recommendations and instant query handling.",
    longDescription: "BiteBot bridges the gap between conversational AI and food ordering logistics. Built with a FastAPI backend server, it leverages retrieval-augmented generation (RAG) to understand dietary preferences, parse menu items intelligently, and execute simulated checkout APIs in real time.",
    tags: ["FastAPI", "Python", "LangChain", "RAG", "Generative AI", "Firebase", "AWS"],
    githubUrl: "https://github.com/yasmeentaj/BiteBot",
    demoUrl: "https://bitebot-demo.render.com",
    demoLabel: "Live Demo",
    architectureDetails: {
      overview: "Async FastAPI backend connecting LangChain agent workflows with a Firebase vector store and real-time order processing pipeline.",
      highlights: [
        "Sub-150ms semantic search across 5,000+ restaurant items using vector embeddings.",
        "Custom prompt routing pipeline for handling order modifications, allergies, and price filtering.",
        "Asynchronous webhook handlers for order lifecycle events and status updates."
      ],
      endpoints: [
        "POST /api/v1/bot/chat - Conversational order intent parser",
        "GET /api/v1/recommendations - Vector search based food matching",
        "POST /api/v1/orders/checkout - Real-time order dispatch service"
      ],
      techStack: [
        { name: "FastAPI", role: "High-concurrency Python ASGI Web Framework" },
        { name: "LangChain & RAG", role: "Orchestration & Vector Query Processing" },
        { name: "Firebase Firestore", role: "Persistent Order & User Preference Storage" },
        { name: "AWS EC2 / Render", role: "Containerized Cloud Deployment" }
      ]
    }
  },
  {
    id: "realtime-detection",
    title: "AI-Driven Real-Time Detection System",
    subtitle: "High-Throughput Computer Vision & ML Pipeline",
    category: "AI/ML",
    description: "Major academic project focusing on applied machine learning and scalable system architecture for low-latency real-time detection and automated anomaly alerting.",
    longDescription: "Designed to process streaming visual and telemetry data feeds with minimal latency. Built on a modular Python architecture deployed on AWS EC2, featuring automated feature extraction, model inference optimization, and containerized microservice execution.",
    tags: ["Python", "Machine Learning", "System Design", "AWS EC2", "FastAPI", "OpenCV"],
    githubUrl: "https://github.com/yasmeentaj/AI-RealTime-Detection",
    demoUrl: "#architecture-modal",
    demoLabel: "View Architecture",
    architectureDetails: {
      overview: "Modular real-time processing pipeline using optimized inference loops, shared memory buffers, and REST push notifications.",
      highlights: [
        "Low latency frame processing pipeline (<45ms per frame throughput).",
        "Deployed inside isolated Amazon VPC subnets with AWS IAM role-based security.",
        "Automated alerting webhooks triggered upon threshold anomaly detection."
      ],
      endpoints: [
        "WS /ws/stream - Real-time telemetry feed consumer",
        "POST /api/v1/detect - Frame inference payload pipeline",
        "GET /api/v1/metrics/health - System load and latency health check"
      ],
      techStack: [
        { name: "Python / OpenCV", role: "Real-time stream frame processing" },
        { name: "PyTorch / ML Models", role: "Optimized Inference Engine" },
        { name: "AWS EC2 & VPC", role: "Cloud Infrastructure Hosting" },
        { name: "FastAPI", role: "API Gateway & WebSockets server" }
      ]
    }
  },
  {
    id: "business-infrastructure",
    title: "Small Business Infrastructure",
    subtitle: "Cloud VPC, Resource & Operations Architecture",
    category: "Cloud",
    description: "Managed operations, vendor technology stack, and resource distribution infrastructure for a collaborative business venture using AWS Cloud tools.",
    longDescription: "A comprehensive cloud infrastructure blueprint and management framework designed for small business reliability. Configured isolated Amazon VPC networks, S3 storage buckets with strict IAM access policies, MySQL relational databases, and automated backup routines.",
    tags: ["AWS Cloud", "Amazon VPC", "AWS S3", "AWS IAM", "MySQL", "Linux", "REST APIs"],
    githubUrl: "https://github.com/yasmeentaj/SmallBusiness-CloudInfra",
    demoUrl: "https://biz-infra.vercel.app",
    demoLabel: "Live Demo",
    architectureDetails: {
      overview: "Multi-AZ Amazon VPC setup with public/private subnets, NAT Gateways, and secure IAM user access roles.",
      highlights: [
        "Zero-trust IAM policy design with least-privilege resource access.",
        "Automated MySQL database backup scripts syncing to encryption-at-rest AWS S3.",
        "Optimized resource distribution lowering cloud operation overhead by 40%."
      ],
      endpoints: [
        "GET /api/v1/inventory - Resource allocation ledger",
        "POST /api/v1/vendors - Operational endpoint ingestion",
        "GET /api/v1/infra/status - Cloud resource monitor"
      ],
      techStack: [
        { name: "Amazon VPC", role: "Isolated Network Topography" },
        { name: "AWS S3 & IAM", role: "Secure Encrypted Object Storage & Auth" },
        { name: "MySQL", role: "Relational Ledger Database" },
        { name: "Linux Shell", role: "Automated Operational Scripting" }
      ]
    }
  }
];

export const LEADERSHIP: LeadershipRole[] = [
  {
    role: "Director of Events",
    organization: "AWS Student Builder Group",
    description: "Spearheaded technical workshops, hands-on AWS cloud labs, and architecture hackathons for 300+ university students. Guided peers on AWS EC2, S3, IAM, and serverless concepts.",
    icon: "CloudLightning"
  },
  {
    role: "2026 Google Student Ambassador",
    organization: "Google Developer Community",
    description: "Selected to represent Google developer technologies on campus. Organized technical workshops on Generative AI, Google Cloud, and Android app development fundamentals.",
    icon: "Award"
  },
  {
    role: "DevOps Bootcamp Graduate",
    organization: "April 2026 Cohort",
    description: "Completed intensive training in Linux administration, Docker containerization, CI/CD pipeline automation, infrastructure provisioning, and cloud deployment practices.",
    icon: "Terminal"
  }
];
