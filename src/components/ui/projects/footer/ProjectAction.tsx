type ProjectActionProps = {
  children: React.ReactNode;
  path: string;
};

const ProjectAction = ({ children, path }: ProjectActionProps) => {
  return (
    <a
      className="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-lg  hover:bg-slate-800"
      href={path}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ProjectAction;
