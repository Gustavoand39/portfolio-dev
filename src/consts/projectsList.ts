import { IProject } from "@/interfaces";

export const projectsList: IProject[] = [
  {
    key: "syschat",
    title: "SysChat",
    description:
      "Aplicación web para gestión de clientes y personal de una empresa. Incluye chat en tiempo real.",
    image: "/images/login-syschat.webp",
    technologies: ["React", "Bootstrap", "JavaScript", "Socket"],
  },
  {
    key: "inventory",
    title: "Inventory App",
    description:
      "Aplicación web para gestión de inventario de productos. Incluye autenticación de usuarios.",
    image: "/images/login-inventory.webp",
    technologies: ["React", "Tailwind", "TypeScript", "MySQL", "Express"],
  },
  {
    key: "Teslo Shop",
    title: "Teslo Shop",
    description: "Aplicación web que simula la E-commerce de Tesla.",
    image: "",
    technologies: ["NextJs", "Tailwind", "TypeScript"],
  },
  {
    key: "spotify-clone",
    title: "Spotify Clone",
    description:
      "Aplicación web que simula la interfaz de Spotify. Incluye reproducción de música.",
    image: "",
    technologies: ["Astro", "TypeScript", "Tailwind"],
  },
  {
    key: "Nasa App",
    title: "Nasa App",
    description:
      "Aplicación móvil para visualización de imágenes de la NASA. Muestra la imagen del día y las últimas 5 imágenes.",
    image: "",
    technologies: ["React Native", "TypeScript"],
  },
];
