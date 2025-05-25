import { IconObjType } from "@/lib/globalTypes";
import TechnologyIcon from "@/components/ui/others/TechnologyIcon";

type ProjectTechnologiesProps = {
  iconObj: IconObjType[];
};

const ProjectTechnologies = ({ iconObj }: ProjectTechnologiesProps) => {
  return (
    <div className="flex items-center md:justify-start justify-center gap-4 md:w-auto md:flex-nowrap flex-wrap">
      {iconObj.map((iconObj) => (
        <TechnologyIcon key={iconObj.text} iconObj={iconObj} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
