export interface Project {
  id: string;
  title: string;
  category: string;
  size: string;
  year: string;
  image: string;
  location: string;
  style: string;
  clientGoal: string;
  conceptText: string;
  primaryMaterials: string[];
  gallery: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // references lucide icon
  longDetail: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  rating: number;
  text: string;
  image: string;
  projectAssociated: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  longDescription: string;
  keyOutputs: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    style: string; // classical, contemporary, minimalist, art-deco
    image: string;
  }[];
}

export interface StyleResult {
  title: string;
  description: string;
  materials: string[];
  features: string[];
  colors: string[];
  matchingProject: string;
}
