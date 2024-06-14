import { ProjectCard } from "./ProjectCard";
import { projectsList } from "@/consts";

export const Projects = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center gap-12 my-12"
      id="projects"
    >
      <h2 className="text-4xl text-center">Proyectos Destacables</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-8">
        {projectsList.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  );
};
