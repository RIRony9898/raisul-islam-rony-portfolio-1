import { LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  percentage: number;
  icon?: string; // URL or class
  color?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ProfessionalSkill {
  name: string;
  percentage: number;
}