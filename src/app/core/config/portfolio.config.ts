/**
 * Central configuration for the portfolio.
 *
 * Update everything personal from THIS file only — you should never need to
 * search through components to change contact details, links or meta copy.
 *
 * Replace the placeholder values below with your real information before
 * publishing (YOUR_EMAIL, YOUR_GITHUB, YOUR_LINKEDIN).
 */
export interface PortfolioConfig {
  name: string;
  role: string;
  logo: string;
  email: string;
  github: string;
  linkedin: string;
  /** Used for <title> and social meta. */
  seo: {
    title: string;
    description: string;
  };
}

export const portfolioConfig: PortfolioConfig = {
  name: 'Nourhan Mamdouh',
  role: 'Full-Stack Developer',
  logo: 'NM',
  email: 'nourhanmamdouh267@yahoo.com',
  github: 'https://github.com/Noourhaan',
  linkedin: 'https://www.linkedin.com/in/nourhanmamdouh96/',
  seo: {
    title: 'Nourhan Mamdouh | Full-Stack Developer',
    description:
      'Portfolio of Nourhan Mamdouh, a Full-Stack Developer specializing in Laravel, Angular, PHP, MySQL and REST APIs.',
  },
};

/**
 * Convenience helpers that turn the raw placeholder values into safe,
 * clickable URLs. If a placeholder is still present, links gracefully
 * point to a harmless anchor instead of a broken URL.
 */
export const contactLinks = {
  get emailHref(): string {
    return isPlaceholder(portfolioConfig.email)
      ? '#contact'
      : `mailto:${portfolioConfig.email}`;
  },
  get emailLabel(): string {
    return portfolioConfig.email;
  },
  get githubHref(): string {
    if (isPlaceholder(portfolioConfig.github)) return '#contact';
    return portfolioConfig.github.startsWith('http')
      ? portfolioConfig.github
      : `https://github.com/${portfolioConfig.github}`;
  },
  get linkedinHref(): string {
    if (isPlaceholder(portfolioConfig.linkedin)) return '#contact';
    return portfolioConfig.linkedin.startsWith('http')
      ? portfolioConfig.linkedin
      : `https://www.linkedin.com/in/${portfolioConfig.linkedin}/`;
  },
};

function isPlaceholder(value: string): boolean {
  return !value || value.startsWith('YOUR_');
}
