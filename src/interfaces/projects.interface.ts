export type Tech =
  | "html5"
  | "css3"
  | "sass"
  | "bootstrap"
  | "tailwind"
  | "javascript"
  | "typescript"
  | "react"
  | "node"
  | "mysql"
  | "firebase"
  | "express"
  | "socket"
  | "git"
  | "github";

export interface IProject {
  key: string;
  title: string;
  description: string;
  image: string;
  technologies: Tech[];
}
