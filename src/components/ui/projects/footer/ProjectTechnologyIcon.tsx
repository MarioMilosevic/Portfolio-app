import { IconObjType } from "@/lib/globalTypes";

const ProjectTechnologyIcon = ({ iconObj }: { iconObj: IconObjType }) => {
  const { text, icon: Icon } = iconObj;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 text-xs rounded-lg">
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default ProjectTechnologyIcon;
