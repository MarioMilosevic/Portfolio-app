import TechnologyIcon from "@/components/ui/others/TechnologyIcon";
import { mySkills } from "@/lib/constants";

const Skills = () => {
  return (
    <div className="grid grid-cols-8 gap-4 pb-12">
      {mySkills.map((skill) => (
        <TechnologyIcon key={skill.text} iconObj={skill} size="medium" />
      ))}
    </div>
  );
};

export default Skills;
