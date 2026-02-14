
export interface Project {
  id: string;
  name: string;
  tech: string;
  liveUrl: string;
  codeUrl: string;
  images: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export interface ContactItem {
  id: string;
  label: string;
  value: string;
  type: 'link' | 'copy' | 'file';
  href?: string;
}

export type PreviewContent = 
  | { type: 'project'; data: Project }
  | { type: 'experience'; data: Experience }
  | { type: 'profile'; data: { name: string; image: string } }
  | null;
