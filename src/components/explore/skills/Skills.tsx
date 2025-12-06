import TechnologyIcon from "@/components/others/TechnologyIcon";
import { MY_SKILLS } from "@/lib/constants";

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pb-24">
      {MY_SKILLS.map((skill) => (
        <TechnologyIcon key={skill.text} iconObj={skill} size="medium" />
      ))}
    </div>
  );
};

export default Skills;
