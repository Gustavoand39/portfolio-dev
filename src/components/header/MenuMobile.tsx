// import { FiMenu } from "react-icons/fi";

interface MenuMobileProps {
  activeSection: string;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  activeSection,
}): JSX.Element => {
  return (
    <nav className="flex-1 flex items-center lg:hidden">
      <div className="dropdown">
        <button
          tabIndex={0}
          className="btn btn-ghost lg:hidden"
          aria-label="Menú"
        >
          {/* <FiMenu size={20} /> */}
        </button>

        <ul
          tabIndex={0}
          className="bg-base-100 dropdown-content menu menu-sm mt-3 p-2 rounded-box shadow w-52 z-[1]"
        >
          <li>
            <a
              href="#home"
              className={`btn btn-ghost ${
                activeSection === "home" ? "text-info" : ""
              }`}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`btn btn-ghost ${
                activeSection === "projects" ? "text-info" : ""
              }`}
            >
              Proyectos
            </a>
          </li>

          <li>
            <a
              href="#experience"
              className={`btn btn-ghost ${
                activeSection === "experience" ? "text-info" : ""
              }`}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`btn btn-ghost ${
                activeSection === "skills" ? "text-info" : ""
              }`}
            >
              Habilidades
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuMobile;
