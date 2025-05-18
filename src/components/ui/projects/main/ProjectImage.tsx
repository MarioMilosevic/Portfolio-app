const ProjectImage = ({ path }: { path: string }) => {
  return (
    <div className="w-1/2">
      <img
        src={path}
        alt="Project image path"
        className="w-full rounded-lg border border-slate-800"
      />
    </div>
  );
};

export default ProjectImage;
