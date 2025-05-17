const ProjectImage = ({ path }: { path: string }) => {
  return (
    <div className="w-1/2">
      <img src={path} alt="Project image path" className="w-full" />
    </div>
  );
};

export default ProjectImage;
