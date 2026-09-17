import {
  ApproachStep,
  ExperienceItem,
  NavLink,
  SkillCategory,
  Stat,
} from '../models/content.model';

export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_TECH: string[] = ['PHP', 'Laravel', 'Angular', 'MySQL', 'REST APIs'];

export const ABOUT_STATS: Stat[] = [
  { value: '3+', label: 'Years Experience' },
  { value: '2K+', label: 'Commits Across Projects' },
  { value: '190+', label: 'Merged Backend PRs' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend',
    icon: '⌘',
    description: 'Server-side architecture, clean APIs and reliable business logic.',
    tags: [
      'PHP',
      'Laravel',
      'REST APIs',
      'MVC',
      'Authentication',
      'Authorization',
      'API Resources',
      'Business Logic',
      'Repository / Service Patterns',
    ],
  },
  {
    title: 'Frontend',
    icon: '◇',
    description: 'Responsive, accessible interfaces built with Angular and TypeScript.',
    tags: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'Bootstrap',
      'Angular Material',
      'Responsive Design',
    ],
  },
  {
    title: 'Database',
    icon: '▦',
    description: 'Relational data modelling, reporting and query optimization.',
    tags: [
      'MySQL',
      'Database Design',
      'Relationships',
      'Migrations',
      'Query Optimization',
      'Reporting',
    ],
  },
  {
    title: 'Production',
    icon: '↗',
    description: 'Shipping, integrating and maintaining live production systems.',
    tags: [
      'Git',
      'GitHub',
      'cPanel',
      'Firebase',
      'Paymob',
      'API Integrations',
      'Deployment',
      'Troubleshooting',
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    label: 'FULL-STACK DEVELOPMENT',
    title: 'Laravel + Angular',
    description:
      'Design and develop production applications across backend APIs, databases, frontend interfaces, authentication, integrations and deployment.',
  },
  {
    label: 'ENGINEERING PRACTICE',
    title: 'Build · Debug · Improve',
    description:
      'Work with Git workflows, troubleshoot production issues, optimize database queries and continuously improve existing features.',
  },
  {
    label: 'END-TO-END OWNERSHIP',
    title: 'Architecture → Deployment',
    description:
      'Translate business requirements into technical solutions, implement them, configure production environments and support releases.',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand business requirements, users and workflows.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Design the database, architecture, APIs and application structure.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop Laravel APIs, Angular interfaces, authentication, business logic and integrations.',
  },
  {
    number: '04',
    title: 'Deploy & Improve',
    description:
      'Deploy to production, troubleshoot issues, optimize performance and continuously improve the system.',
  },
];
