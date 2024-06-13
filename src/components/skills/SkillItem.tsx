import { iconList } from "@/conts";
import { ISkill } from "@/interfaces";

interface Props {
  skill: ISkill;
}

export const SkillItem = ({ skill }: Props) => {
  return (
    <div
      key={skill.key}
      className="w-full flex flex-col items-center gap-2 bg-base-200 dark:bg-base-300 rounded-lg p-6 cursor-pointer hover:scale-105 transition-all duration-300"
    >
      {iconList[skill.key]}
      <p className="text-center text-black/70 font-semibold dark:text-white/90">
        {skill.name}
      </p>
    </div>
  );
};
