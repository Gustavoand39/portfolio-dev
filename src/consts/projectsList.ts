import { IProject } from "@/interfaces";

export const projectsList: IProject[] = [
  {
    key: "syschat",
    title: "SysChat",
    description:
      "Aplicación web para gestión de clientes y personal de una empresa. Incluye chat en tiempo real.",
    image: "/images/login-syschat.webp",
    technologies: ["react", "bootstrap", "javascript", "socket"],
  },
  {
    key: "inventory",
    title: "Inventory App",
    description:
      "Aplicación web para gestión de inventario de productos. Incluye autenticación de usuarios.",
    image: "/images/login-inventory.webp",
    technologies: ["react", "tailwind", "typescript", "mysql", "express"],
  },
];
