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
            href="#home"
            className={`text-lg ${
              activeSection === "home"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Inicio
          </Link>
        </li>

        <li>
          <Link
            href="#projects"
            className={`text-lg ${
              activeSection === "projects"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Proyectos
          </Link>
        </li>

        <li>
          <Link
            href="#experience"
            className={`text-lg ${
              activeSection === "experience"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Experiencia
          </Link>
        </li>

        <li>
          <Link
            href="#skills"
            className={`text-lg ${
              activeSection === "skills"
                ? "text-info font-semibold"
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
