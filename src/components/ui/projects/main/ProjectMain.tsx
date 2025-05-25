import { cn } from "@/lib/utils";

type ProjectMainProps = {
  children: React.ReactNode;
  isEven: boolean;
};

const ProjectMain = ({ children, isEven }: ProjectMainProps) => {
  return (
    <div
      className={cn(
        "flex md:flex-row flex-col gap-6 items-center",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {children}
    </div>
  );
};

export default ProjectMain;
