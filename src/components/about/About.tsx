import Image from "next/image";
import Link from "next/link";
import { MdRemoveRedEye } from "react-icons/md";

export const About = () => {
  return (
    <article id="home" className="hero w-full min-h-screen p-10 bg-base-200">
      <div className="hero-content items-center justify-center flex-col md:flex-row-reverse">
        <Image
          src="/images/profile.webp"
          alt="Gustavo Andrade"
          width={1000}
          height={1000}
          className="w-96 h-auto rounded-lg mask-gradient"
          priority
        />

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-5xl font-bold text-center md:text-start text-balance leading-normal">
            ¡Hey! Soy Gustavo Andrade
          </h3>

          <p className="w-full md:w-[80%] py-6 text-xl text-center md:text-start">
            Actualmente estoy por concluir mi carrera en{" "}
            <span className="font-bold text-orange-500 dark:text-green-300">
              Ingeniería en Sistemas Computacionales
            </span>
            . Mi enfoque principal es el{" "}
            <span className="font-bold text-orange-500 dark:text-green-300">
              desarrollo web
            </span>
            . Me apasiona aprender nuevas tecnologías y mejorar mis habilidades
            constantemente.
          </p>

          <Link
            className="w-36 btn font-semibold text-white text-lg bg-orange-500 dark:btn dark:btn-primary"
            href="/files/Gustavo Alonso - CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdRemoveRedEye className="mr-2" size={20} />
            Ver CV
          </Link>
        </div>
      </div>
    </article>
  );
};
