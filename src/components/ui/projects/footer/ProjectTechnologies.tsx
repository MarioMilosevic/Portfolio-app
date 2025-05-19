import { IconObjType } from "@/lib/globalTypes";
import TechnologyIcon from "@/components/ui/others/TechnologyIcon";

type ProjectTechnologiesProps = {
  iconObj: IconObjType[];
};

const ProjectTechnologies = ({ iconObj }: ProjectTechnologiesProps) => {
  return (
    <div className="flex items-center gap-4">
      {iconObj.map((iconObj) => (
        <TechnologyIcon key={iconObj.text} iconObj={iconObj} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
