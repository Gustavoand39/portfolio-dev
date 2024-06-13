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
          <a
            href="#home"
            className={`hover:bg-none text-lg ${
              activeSection === "home"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`text-lg ${
              activeSection === "projects"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Proyectos
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className={`text-lg ${
              activeSection === "experience"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Experiencia
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className={`text-lg ${
              activeSection === "skills"
                ? "text-info font-semibold"
                : "font-normal"
            }`}
          >
            Habilidades
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuDesktop;
