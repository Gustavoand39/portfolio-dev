import Image from "next/image";

import { IProject } from "@/interfaces";
import { ToolTip, IconElement } from "@/components/";
import Link from "next/link";

interface Props {
  project: IProject;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <Link
      href={`/${project.key}`}
      className="w-full md:h-full card bg-base-100 shadow-xl dark:shadow-neutral-800 scale-95 hover:scale-100 transition-all duration-300 cursor-pointer"
    >
      <figure className="w-full h-full rounded-lg absolute">
        <Image
          className="h-full rounded-lg object-cover object-center"
          src={project.image[0]}
          alt={project.title}
          height={1200}
          width={1200}
        />
      </figure>

      <div className="flex-1 flex md:hidden flex-col justify-between gap-8 rounded-lg bg-slate-500/50 dark:bg-slate-800/50 opacity-0 hover:opacity-100 p-8 z-10 backdrop-blur-lg transition-all duration-300">
        <h2 className="card-title text-white opacity-100">{project.title}</h2>
        <p className="text-white">{project.description}</p>

        <div className="card-actions flex gap-3 justify-end">
          {project.technologies.map((tech) => (
            <ToolTip key={tech} dataTip={tech}>
              <IconElement iconName={tech} />
            </ToolTip>
          ))}
        </div>
      </div>
    </Link>
  );
};
