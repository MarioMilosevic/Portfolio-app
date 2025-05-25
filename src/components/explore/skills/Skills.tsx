import TechnologyIcon from "@/components/others/TechnologyIcon";
import { mySkills } from "@/lib/constants";

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-24">
      {mySkills.map((skill) => (
        <TechnologyIcon key={skill.text} iconObj={skill} size="medium" />
      ))}
    </div>
  );
};

export default Skills;
