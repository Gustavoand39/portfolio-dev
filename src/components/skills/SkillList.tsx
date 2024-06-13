import { skillsList } from "@/conts";
import { SkillItem } from "./SkillItem";

export const SkillList = () => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-center items-center gap-4 overflow-hidden my-12 md:m-12"
    >
      <h2 className="text-4xl text-center">Habilidades</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 justify-items-center items-center gap-6 p-8">
        {skillsList.map((skill) => {
          return <SkillItem key={skill.key} skill={skill} />;
        })}
      </div>
    </div>
  );
};
