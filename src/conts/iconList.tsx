import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiExpress, SiSocketdotio } from "react-icons/si";

interface IIconList {
  [key: string]: JSX.Element;
}

export const iconList: IIconList = {
  html5: <FaHtml5 className="text-red-500" size={40} />,
  css3: <FaCss3Alt className="text-blue-500" size={40} />,
  sass: <FaSass className="text-pink-500" size={40} />,
  bootstrap: <FaBootstrap className="text-purple-600" size={40} />,
  tailwind: <RiTailwindCssFill className="text-blue-500" size={40} />,
  javascript: <RiJavascriptFill className="text-yellow-400" size={40} />,
  typescript: <BiLogoTypescript className="text-blue-500" size={40} />,
  node: <FaNodeJs className="text-green-500" size={40} />,
  react: <FaReact className="text-blue-500" size={40} />,
  git: <FaGitAlt className="text-red-500" size={40} />,
  github: <FaGithub className="text-black dark:text-white/90" size={40} />,
  mysql: <SiMysql className="text-blue-600" size={40} />,
  express: <SiExpress className="text-black dark:text-white/90" size={40} />,
  socket: <SiSocketdotio className="text-black dark:text-white/90" size={40} />,
};
