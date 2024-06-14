import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiSocketdotio,
  SiAstro,
} from "react-icons/si";
import { RiJavascriptFill, RiNextjsFill  } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Tech } from "@/interfaces";

interface IconProps {
  iconName: Tech;
}

export const IconElement: React.FC<IconProps> = ({ iconName }) => {
  const iconList: Record<Tech, JSX.Element> = {
    Html5: <FaHtml5 className="text-red-500" size={40} />,
    Css3: <FaCss3Alt className="text-blue-400" size={40} />,
    Sass: <FaSass className="text-pink-500" size={40} />,
    Bootstrap: <FaBootstrap className="text-purple-500" size={40} />,
    Tailwind: <SiTailwindcss className="text-sky-400" size={40} />,
    JavaScript: <RiJavascriptFill className="text-yellow-400" size={40} />,
    TypeScript: <BiLogoTypescript className="text-blue-500" size={40} />,
    "Node JS": <FaNode className="text-green-500" size={40} />,
    React: <FaReact className="text-blue-500" size={40} />,
    "React Native": <FaReact className="text-blue-500" size={40} />,
    NextJs: <RiNextjsFill className="text-black dark:text-white/90" size={40} />,
    Git: <FaGitAlt className="text-red-500" size={40} />,
    GitHub: <FaGithub className="text-black dark:text-white/90" size={40} />,
    MySQL: <SiMysql className="text-blue-500 dark:text-sky-400" size={40} />,
    Express: <SiExpress className="text-black dark:text-white/90" size={40} />,
    Socket: (
      <SiSocketdotio className="text-black dark:text-white/90" size={40} />
    ),
    Astro: <SiAstro className="text-black dark:text-white/90" size={40} />,
  };

  return iconList[iconName];
};
