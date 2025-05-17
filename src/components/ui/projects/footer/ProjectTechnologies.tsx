import { IconObjType } from "@/lib/globalTypes";
import ProjectTechnologyIcon from "@/components/ui/projects/footer/ProjectTechnologyIcon";



type ProjectTechnologiesProps = {
  iconObj: IconObjType[];
};

const ProjectTechnologies = ({ iconObj }: ProjectTechnologiesProps) => {
  return (
    <div className="flex items-center gap-4">
      {iconObj.map((iconObj) => (
        <ProjectTechnologyIcon iconObj={iconObj} />
      ))}
    </div>
  );
};

export default ProjectTechnologies;
