import { cn } from "@/lib/utils";
type ProjectFooterProps = {
  children: React.ReactNode;
  isEven: boolean;
};

const ProjectFooter = ({ children, isEven }: ProjectFooterProps) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        isEven ? "flex-row" : "flex-row-reverse"
      )}
    >
      {children}
    </div>
  );
};

export default ProjectFooter;
