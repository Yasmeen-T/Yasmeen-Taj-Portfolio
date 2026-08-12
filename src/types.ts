export type Language = 'en' | 'kn' | 'hi' | 'tr' | 'es' | 'fr' | 'de' | 'ar' | 'ja';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  tags: string[];
  category: 'AI/ML' | 'Cloud' | 'Backend';
  githubUrl: string;
  demoUrl?: string;
  demoLabelKey: string;
  architectureDetails: {
    overviewKey: string;
    highlightsKeys: string[];
    endpoints?: string[];
    techStack: { name: string; roleKey: string }[];
  };
}

export interface SkillGroup {
  id: string;
  categoryKey: string;
  iconName: string;
  descriptionKey: string;
  skills: string[];
}

export interface Experience {
  id: string;
  titleKey: string;
  organizationKey: string;
  periodKey: string;
  typeKey: string;
  githubRepo?: string;
  techTags?: string[];
}

export interface LeadershipRole {
  id: string;
  roleKey: string;
  credentialUrl: string;
  icon: string;
}

