import { cn } from "@/lib/utils";

type ProjectTitleProps = {
  children: React.ReactNode;
  isEven:boolean
}

const ProjectTitle = ({ children, isEven }: ProjectTitleProps) => {

  return <header className={cn("flex flex-col gap-1", isEven ? "items-start" : "items-end")}>{children}</header>;
};

export default ProjectTitle;
