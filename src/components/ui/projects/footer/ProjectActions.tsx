import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectAction from "@/components/ui/projects/footer/ProjectAction";
const ProjectActions = () => {
  return (
    <div className="flex gap-4 items-center">
      <ProjectAction>
        <span>Code</span>
        <FaGithub />
      </ProjectAction>
      <ProjectAction>
        <span>Live demo</span>
        <FaExternalLinkAlt />
      </ProjectAction>
    </div>
  );
};

export default ProjectActions;
