import {
  Briefcase,
  Cloud,
  Code2,
  Crosshair,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
  Flame
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "年经验", value: "10+" },
  { label: "完成项目", value: "20+" },
  { label: "完整落地项目", value: "8" },
  { label: "客户满意度", value: "99%" },
];

export const highlights = [
  { icon: MapPin, text: "现居：武汉" },
  { icon: Briefcase, text: "接受武汉坐班或远程工作" },
  { icon: GraduationCap, text: "本科（非全日制）" },
  { icon: Crosshair, text: "全栈开发" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    description:
      "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 - 2020",
    description:
      "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export const skillCategories = [
  {
    title: "前端",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
      { name: "Vue.js", icon: Layout },
    ],
  },
  {
    title: "后端",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "Hono", icon: Flame },
      { name: "Elysia", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "工具",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "阿里云", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];

export const projects = [
  {
    title: "作品集网站",
    description:
      "使用 Next.js 开发的一个作品集网站，展示我的技能和项目。",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    demoUrl: "/",
    githubUrl: "https://github.com/JimmyLJ/portfolio",
  },
];


