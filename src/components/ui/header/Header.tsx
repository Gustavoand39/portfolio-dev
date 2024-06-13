"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import MenuMobile from "@/components/header/MenuMobile";
import MenuDesktop from "@/components/header/MenuDesktop";
import ThemeSelector from "@/components/header/ThemeSelector";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollDirection from "@/hooks/useScrollDirection";

export const Header = () => {
  const { isScrolled, isVisible } = useScrollDirection();
  const { activeSection } = useActiveSection([
    "home",
    "projects",
    "skills",
    "experience",
  ]);

  return (
    <header
      className={`backdrop-blur-md dark:text-white duration-300 fixed flex items-center navbar py-1 px-2 md:px-20 shadow-sm transition-all w-full z-50 ${
        isScrolled
          ? "bg-white/80 dark:bg-base-300/80 dark:shadow-base-300 shadow-md"
          : "bg-base-100/90"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <MenuMobile activeSection={activeSection} />

      <MenuDesktop activeSection={activeSection} />

      {/* Icons */}
      <div className="navbar-end flex">
        <Link
          className="text-black/90 dark:text-white p-4"
          href="https://github.com/Gustavoand39"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub"
        >
          <FaGithub size={24} />
        </Link>

        <ThemeSelector />
      </div>
    </header>
  );
};
