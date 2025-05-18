import { cn } from "@/lib/utils";

type ProjectMainProps = {
  children: React.ReactNode;
  isEven: boolean;
};

const ProjectMain = ({ children, isEven }: ProjectMainProps) => {
  return (
    <div
      className={cn(
        "flex gap-6 items-center",
        isEven ? "flex-row" : "flex-row-reverse"
      )}
    >
      {children}
    </div>
  );
};

export default ProjectMain;
