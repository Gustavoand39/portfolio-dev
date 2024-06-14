export type Tech =
  | "Html5"
  | "Css3"
  | "Sass"
  | "Bootstrap"
  | "Tailwind"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "React Native"
  | "NextJs"
  | "Node JS"
  | "MySQL"
  | "Express"
  | "Socket"
  | "Git"
  | "GitHub"
  | "Astro";

export interface IProject {
  key: string;
  title: string;
  description: string;
  details: string;
  image: string[];
  technologies: Tech[];
  repo?: string;
}
