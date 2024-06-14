import Link from "next/link";

interface MenuDesktopProps {
  activeSection: string;
}

const MenuDesktop: React.FC<MenuDesktopProps> = ({
  activeSection,
}): JSX.Element => {
  return (
    <nav className="flex-1 hidden justify-start lg:flex">
      <ul className="flex gap-4 menu menu-horizontal px-1">
        <li>
          <Link
            href="/#home"
            className={`text-lg active:bg-transparent focus:bg-transparent ${
              activeSection === "home"
                ? "text-info font-semibold focus:text-info"
                : "font-normal"
            }`}
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            href="/#projects"
            className={`text-lg active:bg-transparent focus:bg-transparent ${
              activeSection === "projects"
                ? "text-info font-semibold focus:text-info"
                : "font-normal"
            }`}
          >
            Proyectos
          </Link>
        </li>

        <li>
          <Link
            href="/#experience"
            className={`text-lg active:bg-transparent focus:bg-transparent ${
              activeSection === "experience"
                ? "text-info font-semibold focus:text-info"
                : "font-normal"
            }`}
          >
            Experiencia
          </Link>
        </li>

        <li>
          <Link
            href="/#skills"
            className={`text-lg active:bg-transparent focus:bg-transparent ${
              activeSection === "skills"
                ? "text-info font-semibold focus:text-info"
                : "font-normal"
            }`}
          >
            Habilidades
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
