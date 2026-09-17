/** Data model for a single portfolio project. */
export interface Project {
  /** Ordinal shown on the card, e.g. "01". */
  index: string;
  title: string;
  category: string;
  description: string;
  /** The role you played on the project. */
  role: string;
  /** Technology stack tags. */
  stack: string[];
  /** Key features / responsibilities. */
  features: string[];
  /** Optional headline statistics (e.g. commits, PRs). */
  stats?: ProjectStat[];
  /** Optional screenshot path under src/assets. */
  image?: string;
  /** Public GitHub repo URL. Leave undefined if none is available yet. */
  github?: string;
  /** Live demo URL. Leave undefined if none is available yet. */
  live?: string;
  /** True for client/company-owned projects whose source stays private. */
  private?: boolean;
  /** Optional note rendered under a private project. */
  note?: string;
}

export interface ProjectStat {
  value: string;
  label: string;
}
