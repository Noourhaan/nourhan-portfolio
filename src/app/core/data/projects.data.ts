import { Project } from '../models/project.model';

/**
 * Project data. Screenshots, GitHub and live URLs are intentionally left
 * undefined until real, authorized values are available — no invented repos
 * or demo links. Add an `image` path (under src/assets) or a `github`/`live`
 * URL when you have them, and the card will render the link automatically.
 */
export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Easy Deal',
    category: 'Real Estate Marketplace & CRM',
    description:
      'A bilingual Arabic/English real-estate marketplace and CRM platform connecting brokers, developers and clients across the Egyptian market.',
    role: 'Full-Stack Developer',
    stack: ['Laravel', 'Angular', 'MySQL', 'Paymob', 'Firebase', 'Spatie Permissions'],
    features: [
      'OTP-based authentication',
      'Role-based access control (admin, broker, developer, client, sales)',
      'Sub-account system',
      'Property CRM with 10+ unit types',
      'Client request & lifecycle management',
      'Broker matching engine',
      'Developer / project management',
      'Excel bulk import & export',
      'Arabic / English localization',
      'Subscription packages & promo codes',
      'Paymob payments',
      'Firebase push notifications',
      'Analytics dashboards & Arabic-localized reporting',
      'Production deployment',
    ],
    stats: [
      { value: '2,000+', label: 'Commits across two repositories' },
      { value: '190+', label: 'Merged backend pull requests' },
    ],
    private: true,
    note: 'Production project — selected implementation details shown for portfolio purposes.',
  },
  {
    index: '02',
    title: 'E-Invoice & VAT Management System',
    category: 'Business / Financial System',
    description:
      'A full-stack business application for invoice management, VAT calculations, financial data processing and reporting.',
    role:
      'Full-Stack Developer responsible for backend APIs, business logic, database queries, VAT calculations, reporting and Angular integration.',
    stack: ['Laravel', 'Angular', 'MySQL', 'REST APIs'],
    features: [
      'Invoice & invoice-line processing',
      'Customer & supplier management',
      'Credit & debit invoices',
      'VAT calculations & tax categories',
      'VAT tracking, audit & returns reports',
      'VAT on sales reports',
      'Date-range filtering',
      'Financial reporting',
      'Angular reporting dashboards',
      'Laravel REST APIs',
    ],
  },
  {
    index: '03',
    title: 'E-Commerce / Marketplace Platform',
    category: 'E-Commerce',
    description:
      'A full-stack e-commerce / marketplace platform developed from business requirements through production deployment.',
    role: 'Full-Stack Developer',
    stack: ['Laravel', 'Angular', 'MySQL', 'REST APIs'],
    features: [
      'Backend architecture',
      'REST APIs',
      'Database design',
      'Business logic',
      'Authentication',
      'Angular frontend',
      'API integration',
      'Production deployment',
      'Server configuration',
      'Troubleshooting',
      'Ongoing improvements',
    ],
  },
  {
    index: '04',
    title: 'Healthcare Management System',
    category: 'Healthcare / Business Application',
    description:
      'A Laravel-based management system with authentication, an admin approval workflow and role-based data management.',
    role: 'Laravel / Full-Stack Developer',
    stack: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap'],
    features: [
      'User registration',
      'Authentication',
      'Admin approval workflow',
      'User status management',
      'Role-based functionality',
      'CRUD operations',
      'Data management',
      'Responsive Blade interfaces',
    ],
  },
];
