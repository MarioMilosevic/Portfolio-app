import { cn } from "@/lib/utils";
type ProjectFooterProps = {
  children: React.ReactNode;
  isEven: boolean;
};

const ProjectFooter = ({ children, isEven }: ProjectFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 md:gap-0",
        isEven ? "md:flex-row flex-col" : "md:flex-row-reverse flex-col"
      )}
    >
      {children}
    </div>
  );
};

export default ProjectFooter;
