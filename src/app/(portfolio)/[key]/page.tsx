import { ProjectSlideShow } from "@/components";
import { projectsList } from "@/consts";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { IoLogoGithub } from "react-icons/io";

interface Props {
  params: {
    key: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { key } = params;
  const project = projectsList.find((project) => project.key === key);

  if (!project) {
    redirect(notFound());
  }

  return (
    <div className="grid grid-cols-5 md:grid-cols-5 items-center gap-6 min-h-screen p-8">
      <div className="col-span-5 md:col-span-3 mt-16">
        <ProjectSlideShow images={project.image} title={project.title} />
      </div>

      <div className="col-span-5 md:col-span-2">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="whitespace-pre-line">{project.details}</p>

        <h2 className="text-2xl font-semibold my-4">Tecnologías</h2>
        <div className="flex justify-between items-center">
          <p className="text-balance">
            {project.technologies.map(
              (tech, index) =>
                tech + (index < project.technologies.length - 1 ? ", " : ".")
            )}
          </p>

          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              aria-label="Ir al repositorio"
              className="btn btn-ghost hover:bg-base-200"
            >
              <IoLogoGithub size={40} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
