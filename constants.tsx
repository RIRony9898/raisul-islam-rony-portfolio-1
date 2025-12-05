import {
  Code,
  Facebook,
  Github,
  Layout,
  Linkedin,
  Smartphone,
  Twitter,
} from "lucide-react";
import { ProfessionalSkill, Project, Service, Skill } from "./types";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I specialize in UI/UX design to create visually appealing and user-friendly interfaces. My focus is on designing intuitive layouts.",
    icon: Layout,
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "I develop full-stack web applications using React, Node.js, Express, and MongoDB. My goal is to write clean, efficient code.",
    icon: Code,
  },
  {
    id: 3,
    title: "Responsive Design",
    description:
      "I create fully responsive websites that look great on all devices — from mobile phones to large desktop screens.",
    icon: Smartphone,
  },
];

export const TECHNICAL_SKILLS: Skill[] = [
  { name: "HTML", percentage: 90, color: "#e34c26" },
  { name: "CSS", percentage: 85, color: "#264de4" },
  { name: "JavaScript", percentage: 80, color: "#f7df1e" },
  { name: "React", percentage: 80, color: "#61dafb" },
  { name: "Node.js", percentage: 70, color: "#339933" },
  { name: "MongoDB", percentage: 75, color: "#47a248" },
  { name: "Next.js", percentage: 75, color: "#0070F3" },
  { name: "AI", percentage: 70, color: "#61dafb" },
];

export const PROFESSIONAL_SKILLS: ProfessionalSkill[] = [
  { name: "Creativity", percentage: 90 },
  { name: "Communication", percentage: 65 },
  { name: "Problem Solving", percentage: 75 },
  { name: "Team Work", percentage: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Next Store",
    description:
      "A E-commerce project built with Next.js, MongoDB, React Router, Tailwind CSS, SweetAlert, Node.js, Express.js and Next Auth.",
    image: "https://i.ibb.co.com/ym3yggfJ/1-hero-section.png",
    tags: ["Next.js", "Next Auth", "E-commerce"],
  },
  {
    id: 2,
    title: "HomeNest",
    description:
      "HomeNest is a comprehensive real estate listing platform built with React JS, Node.js, Express, and MongoDB.",
    image: "https://i.ibb.co.com/wZGXZxPn/1-home-banner-section.png",
    tags: ["React", "MongoDB", "API"],
  },
  {
    id: 3,
    title: "GameHub",
    description:
      "A Game Library application using React JS, Firebase, JavaScript and Tailwind CSS.",
    image: "https://i.ibb.co.com/Pv7jDDJB/1-homepage-hero-section.png",
    tags: ["React", "Firebase", "Game Dev"],
  },
  {
    id: 4,
    title: "Hero Apps",
    description:
      "Hero Apps is a modern web application designed to showcase and manage a collection of applications.",
    image: "https://i.ibb.co.com/75bfqv1/1-homepage-banner-section.png",
    tags: ["E-commerce", "React Router", "React"],
  },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: "https://www.facebook.com/rirony9898/" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/md-raisul-islam-rony/" },
  { icon: Github, href: "https://github.com/RIRony9898" },
  { icon: Twitter, href: "https://x.com/rirony98" },
];
