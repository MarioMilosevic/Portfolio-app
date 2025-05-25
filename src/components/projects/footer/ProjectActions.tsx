import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectAction from "@/components/projects/footer/ProjectAction";

type ProjectActionsType = {
  code: string;
  liveDemo: string;
};

const ProjectActions = ({ code, liveDemo }: ProjectActionsType) => {
  return (
    <div className="flex gap-4 items-center text-sm md:text-base">
      <ProjectAction path={code}>
        <span>Code</span>
        <FaGithub />
      </ProjectAction>
      <ProjectAction path={liveDemo}>
        <span>Live demo</span>
        <FaExternalLinkAlt />
      </ProjectAction>
    </div>
  );
};

export default ProjectActions;
