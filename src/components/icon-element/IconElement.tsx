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
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { Tech } from "@/interfaces";

interface IconProps {
  iconName: Tech;
}

export const IconElement: React.FC<IconProps> = ({ iconName }) => {
  const iconList: Record<Tech, JSX.Element> = {
    html5: <FaHtml5 className="text-red-500" size={40} />,
    css3: <FaCss3Alt className="text-blue-500" size={40} />,
    sass: <FaSass className="text-pink-500" size={40} />,
    bootstrap: <FaBootstrap className="text-purple-600" size={40} />,
    tailwind: <SiTailwindcss className="text-blue-500" size={40} />,
    javascript: <RiJavascriptFill className="text-yellow-400" size={40} />,
    typescript: <BiLogoTypescript className="text-blue-500" size={40} />,
    node: <FaNode className="text-green-500" size={40} />,
    react: <FaReact className="text-blue-500" size={40} />,
    git: <FaGitAlt className="text-red-500" size={40} />,
    github: <FaGithub className="text-black dark:text-white/90" size={40} />,
    mysql: <SiMysql className="text-blue-600" size={40} />,
    express: <SiExpress className="text-black dark:text-white/90" size={40} />,
    socket: (
      <SiSocketdotio className="text-black dark:text-white/90" size={40} />
    ),
  };

  return iconList[iconName];
};
