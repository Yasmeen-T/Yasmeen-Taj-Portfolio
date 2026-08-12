export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'AI/ML' | 'Cloud' | 'Backend';
  githubUrl: string;
  demoUrl?: string;
  demoLabel: string; // "Live Demo" or "View Architecture"
  architectureDetails: {
    overview: string;
    highlights: string[];
    endpoints?: string[];
    techStack: { name: string; role: string }[];
  };
}

export interface SkillGroup {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface Experience {
  title: string;
  organization: string;
  subTitle?: string;
  period: string;
  type: string;
  points: string[];
  techTags: string[];
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period?: string;
  description: string;
  icon: string;
}
