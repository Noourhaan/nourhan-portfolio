/** A category of skills shown in the Skills section. */
export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  tags: string[];
}

/** An entry in the Experience timeline. */
export interface ExperienceItem {
  label: string;
  title: string;
  description: string;
}

/** A step in the Development Approach section. */
export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

/** A statistic shown in the About section. */
export interface Stat {
  value: string;
  label: string;
}

/** A navigation link. */
export interface NavLink {
  id: string;
  label: string;
}
