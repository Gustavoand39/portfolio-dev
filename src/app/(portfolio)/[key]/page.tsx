import { projectsList } from "@/consts";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    key: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const key = params.key;

  // Find the project by key
  const project = projectsList.find((project) => project.key === key);

  // Redirect to 404 if the project is not found
  if (!project) {
    redirect(notFound());
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p>Hola uwu</p>
    </div>
  );
}
