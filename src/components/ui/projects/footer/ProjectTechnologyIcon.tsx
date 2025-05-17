import { IconObjType } from "@/lib/globalTypes";

const ProjectTechnologyIcon = ({ iconObj }: { iconObj: IconObjType }) => {
  const { text, icon: Icon } = iconObj;

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-sm rounded-full">
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default ProjectTechnologyIcon;
