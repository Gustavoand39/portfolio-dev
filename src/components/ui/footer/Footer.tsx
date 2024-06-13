import Link from "next/link";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center px-6 py-8 bg-neutral text-neutral-content">
      <nav className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
        <div className="w-full">
          <h3 className="footer-title text-white">Gustavo Andrade</h3>
          <p className="text-sm text-center md:text-start text-balance">
            Puedes contactarme en cualquier momento, estaré encantado de
            responderte.
          </p>
        </div>

        <div className="w-full grid grid-cols-2">
          <div>
            <h3 className="footer-title text-white">Contacto</h3>
            <Link
              href="mailto:gustavoand39@gmail.com"
              aria-label="Enviar un correo a Gustavo Andrade"
              rel="noopener noreferrer"
              className="inline-block mt-2"
            >
              <FaEnvelope size={24} />
            </Link>
          </div>

          <div>
            <h3 className="footer-title text-white">Social</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <Link
                href="https://www.linkedin.com/in/gustavo-alonso-p-66776a286/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn"
                className="transition-transform transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </Link>

              <Link
                href="https://github.com/Gustavoand39"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de GitHub"
                className="transition-transform transform hover:scale-110"
              >
                <FaGithub size={24} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
