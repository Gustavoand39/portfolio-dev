import { IProject } from "@/interfaces";

export const projectsList: IProject[] = [
  {
    key: "syschat",
    title: "SysChat",
    description:
      "Aplicación web para gestión de clientes y personal de una empresa. Incluye chat en tiempo real.",
    details:
      "Esta aplicación web fue desarrollada para la empresa Runtime WiFi como parte de mis residencias profesionales. " +
      "El objetivo era renovar el sistema interno usado para la gestión de clientes y personal de la empresa, mejorando y añadiendo nuevas funcionalidades.\n\n" +
      "La característica principal de esta aplicación es el chat en tiempo real con Socket.io, el cual permite a los empleados comunicarse con los clientes de manera más eficiente y rápida " +
      "entre las distintas redes sociales de la empresa. Cuenta con módulos de gestión de personal, chat y de la propia aplicación.",
    image: ["/images/login-syschat.webp"],
    technologies: ["React", "Bootstrap", "JavaScript", "Socket"],
  },
  {
    key: "inventory",
    title: "Inventory App",
    description:
      "Aplicación web para gestión de inventario de productos. Incluye autenticación de usuarios.",
    details: "",
    image: ["/images/login-inventory.webp"],
    technologies: ["React", "Tailwind", "TypeScript", "MySQL", "Express"],
  },
  {
    key: "TesloShop",
    title: "Teslo Shop",
    description: "Aplicación web que simula la E-commerce de Tesla.",
    details: "",
    image: [""],
    technologies: ["NextJs", "Tailwind", "TypeScript"],
  },
  {
    key: "spotifyClone",
    title: "Spotify Clone",
    description:
      "Aplicación web que simula la interfaz de Spotify. Incluye reproducción de música.",
    details: "",
    image: [""],
    technologies: ["Astro", "TypeScript", "Tailwind"],
  },
  {
    key: "NasaApp",
    title: "Nasa App",
    description:
      "Aplicación móvil para visualización de imágenes de la NASA. Muestra la imagen del día y las últimas 5 imágenes.",
    details: "",
    image: [""],
    technologies: ["React Native", "TypeScript"],
  },
];
