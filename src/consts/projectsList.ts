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
    image: [
      "/images/syschat/sys-login.webp",
      "/images/syschat/sys-dash.webp",
      "/images/syschat/sys-chat.webp",
      "/images/syschat/sys-config.webp",
    ],
    technologies: ["React", "Bootstrap", "JavaScript", "Socket"],
  },
  {
    key: "inventory",
    title: "Inventory App",
    description:
      "Aplicación web para gestión de inventario de productos. Incluye autenticación de usuarios.",
    details:
      "Esta aplicación web fue desarrollada con el objetivo de aprender y practicar el uso de TypeScript y TailwindCSS. " +
      "Además de comenzar a trabajar con bases de datos, en este caso MySQL, usando Express y NodeJs como backend.\n\n" +
      "La aplicación permite a los usuarios autenticarse, ver el inventario de productos, agregar, editar y eliminar productos, " +
      "así como ver los detalles de cada producto. Se implementó un sistema de autenticación de usuarios con JWT.",
    image: [
      "/images/inventory/inv-login.webp",
      "/images/inventory/inv-dash.webp",
      "/images/inventory/inv-products.webp",
    ],
    technologies: ["React", "Tailwind", "TypeScript", "MySQL", "Express"],
  },
  {
    key: "TesloShop",
    title: "Teslo Shop",
    description: "Aplicación web que simula la E-commerce de Tesla.",
    details:
      "Esta aplicación web fue desarrollada con el objetivo de aprender y practicar el uso de NextJs. " +
      "La aplicación simula la E-commerce de Tesla, mostrando los productos, el carrito de compras y las órdenes de compra.\n\n" +
      "Solo es el diseño de la aplicación, no se realizan compras reales. Se utilizaron datos estáticos para los productos y las órdenes.",
    image: [
      "/images/teslo/teslo-home.webp",
      "/images/teslo/teslo-product.webp",
      "/images/teslo/teslo-cart.webp",
      "/images/teslo/teslo-orders.webp",
    ],
    technologies: ["NextJs", "Tailwind", "TypeScript"],
    repo: "https://github.com/Gustavoand39/teslo-shop",
  },
  {
    key: "spotifyClone",
    title: "Spotify Clone",
    description:
      "Aplicación web que simula la interfaz de Spotify. Incluye reproducción de música.",
    details:
      "Esta aplicación web fue desarrollada con el objetivo de aprender y practicar el uso de Astro. " +
      "La aplicación simula la interfaz de Spotify, mostrando las listas de reproducción y reproduciendo música de manera básica. " +
      "Se utilizó una librería local para la reproducción de música, la cual permite reproducir y pausar la música.",
    image: [
      "/images/spotify/spotify-home.webp",
      "/images/spotify/spotify-playlist.webp",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind"],
    repo: "https://github.com/Gustavoand39/spotify-clone",
  },
  {
    key: "NasaApp",
    title: "Nasa App",
    description:
      "Aplicación móvil para visualización de imágenes de la NASA. Muestra la imagen del día y las últimas 5 imágenes.",
    details:
      "Esta aplicación móvil fue desarrollada con fines de aprendizaje de React Native. " +
      "Muestra la imagen del día y las últimas 5 imágenes de la NASA, obtenidas de la API de la NASA.\n\n" +
      "Puedes ir al repositorio para observar mejor el proyecto.",

    image: [
      "/images/nasa/nasa-home.webp",
      "/images/nasa/nasa-card.webp",
      "/images/nasa/nasa-details.webp",
    ],
    technologies: ["React Native", "TypeScript"],
    repo: "https://github.com/Gustavoand39/nasa-app",
  },
];
