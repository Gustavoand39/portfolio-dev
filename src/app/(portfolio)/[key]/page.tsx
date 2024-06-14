import { projectsList } from "@/consts";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

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
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 min-h-screen mt-14 md:mt-0 p-8">
      <div className="col-span-1">
        <Image
          src={project.image}
          alt={project.title}
          width={1000}
          height={800}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      <div className="col-span-1">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="whitespace-pre-line">{project.details}</p>

        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Tecnologías</h2>
          <p className="text-balance">
            {project.technologies.map(
              (tech, index) =>
                tech + (index < project.technologies.length - 1 ? ", " : ".")
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
