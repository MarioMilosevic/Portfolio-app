import { cn } from "@/lib/utils";

type ProjectTitleProps = {
  children: React.ReactNode;
  isEven: boolean;
};

const ProjectTitle = ({ children, isEven }: ProjectTitleProps) => {
  return (
    <header
      className={cn(
        "flex flex-col md:gap-1 gap-2",
        isEven ? "md:items-start items-center" : "md:items-end items-center"
      )}
    >
      {children}
    </header>
  );
};

export default ProjectTitle;
