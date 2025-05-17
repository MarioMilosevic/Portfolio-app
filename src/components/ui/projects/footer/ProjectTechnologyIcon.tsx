import { IconObjType } from "@/lib/globalTypes";

const ProjectTechnologyIcon = ({ iconObj }: { iconObj: IconObjType }) => {
  const { text, icon: Icon } = iconObj; 

  return (
    <div className="flex items-center gap-2">
      <Icon /> 
      <span>{text}</span>
    </div>
  );
};

export default ProjectTechnologyIcon;
