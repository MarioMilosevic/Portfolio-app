import { IconObjType } from "@/lib/globalTypes";

type Size = "small" | "medium" | "big";

const TechnologyIcon = ({
  iconObj,
  size = "small" 
}: {
  iconObj: IconObjType;
  size?: Size;
}) => {
  const { text, icon: Icon } = iconObj;

  const iconSize = {
    small: "md:px-4 md:py-2 md:text-sm text-xs px-2 py-1",
    medium: "px-4 py-2 text-base",
    big: "px-6 py-3 text-lg",
  };

  return (
    <div
      className={`flex items-center gap-2 ${iconSize[size]} bg-slate-800 rounded-lg`}
    >
      <Icon />
      <span>{text}</span>
    </div>
  );
};

export default TechnologyIcon;
