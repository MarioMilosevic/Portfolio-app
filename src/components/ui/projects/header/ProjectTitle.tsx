const ProjectTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="flex items-center justify-between md:justify-start md:gap-2 uppercase font-semibold tracking-wide md:text-base text-sm gap-8 ">
      {children}
    </h2>
  );
};

export default ProjectTitle;
