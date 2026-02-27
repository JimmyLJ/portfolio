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

import { FaGithub } from "react-icons/fa6";

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

export const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "liji420@qq.com",
    href: "mailto:liji420@qq.com",
  },
  {
    icon: Phone,
    label: "电话/微信",
    value: "186 7406 0420",
    href: "tel:+8618674060420",
  },
  {
    icon: MapPin,
    label: "位置",
    value: "武汉市",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/JimmyLJ", label: "GitHub" },
];


export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/JimmyLJ", label: "GitHub" },
  { icon: Mail, href: "mailto:liji420@qq.com", label: "Email" },
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
      { name: "Claude Code", icon: Cpu },
      { name: "Cursor", icon: Palette },
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "阿里云", icon: Cloud },
      { name: "Linux", icon: Terminal },
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


export const experiences = [
  {
    type: "work",
    title: "个人接单",
    company: "自由职业",
    period: "2025 - 现在",
    description:
      "自由职业期间利用 AI 编程工具链，高效完成几个全栈产品的设计开发与落地。",
    technologies: ["React", "Vue", "Hono", "PostgreSQL", "阿里云", "AI Coding"],
  },
  {
    type: "work",
    title: "高级前端开发工程师",
    company: "武汉仙视软件信息科技有限公司(CVTE子公司)",
    period: "2021 - 2024",
    description:
      "主导连锁门店数字标牌 SaaS 系统的低代码平台研发；基于 Fabric.js 实现可视化节目编辑器，集成叫号、支付及 RBAC 权限体系，实现节目从设计到多终端发布的闭环流程。",
    technologies: [ "低代码", "Vue.js", "Fabric.js", "Canvas", "RBAC"],
  },
  {
    type: "work",
    title: "全栈开发工程师",
    company: "辅辰科技（湖北）有限公司",
    period: "2019 - 2021",
    description:
      "负责建筑 SaaS 系统前后端研发，实现核心业务闭环；主导跨端技术落地，保障复杂工程管理场景的高效交付。",
    technologies: ["React", "Next.js", "Node.js", "RESTful API"],
  },
  {
    type: "work",
    title: "前端开发工程师",
    company: "和思易科技（武汉）有限责任公司",
    period: "2017 - 2019",
    description:
      "主导官网及跨端 APP 开发，负责从 jQuery 到 React 生态的技术架构迁移，成功交付多个定制化项目。",
    technologies: ["React", "React Native", "jQuery", "HTML/CSS/JS"],
  },
  {
    type: "work",
    title: "移动端开发工程师",
    company: "泛微网络科技股份有限公司",
    period: "2014 - 2016",
    description:
      "负责泛微 OA 移动端研发与迭代，优化本地数据库性能，保障企业级应用稳定运行。",
    technologies: ["Java", "Android", "SQLite", "OA系统"],
  },
  {
    type: "education",
    title: "电子信息工程本科（非全日制）",
    company: "湖北大学",
    period: "2010 - 2014",
    description:
      "建立起从底层硬件到软件逻辑的系统性认知，培养了严谨的工程实践能力与问题分析能力。",
    technologies: ["C语言", "电路", "硬件"],
  },
];


