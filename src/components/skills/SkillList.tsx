import { IconElement } from "@/components";
import { skillsList } from "@/consts";

export const SkillList = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center gap-4 overflow-hidden my-12 md:m-12"
    >
      <h2 className="text-4xl text-center">Habilidades</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center items-center gap-6 p-8">
        {skillsList.map((skill) => {
          return (
            <div
              key={skill.key}
              className="w-full flex flex-col items-center gap-2 bg-base-200 dark:bg-base-300 rounded-lg p-6 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <IconElement iconName={skill.name} />

              <p className="text-center text-black/70 font-semibold dark:text-white/90">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
