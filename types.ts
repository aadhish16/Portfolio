
export interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    code?: string;
  };
  image: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Education {
  degree: string;
  institution: string;
  grade: string;
  description: string;
  year?: string;
}
