import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Project from "@/components/ui/projects/Project";
import ProjectHeader from "@/components/ui/projects/ProjectHeader";
import ProjectDateCreated from "@/components/ui/projects/ProjectDateCreated";
import ProjectTitle from "@/components/ui/projects/ProjectTitle";
import ProjectTitleWrapper from "@/components/ui/projects/ProjectTitleWrapper";
import { forwardRef } from "react";
import { FaGamepad } from "react-icons/fa";

const Projects = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="projects" ref={ref} className="flex flex-col gap-2">
        <Subtitle>Freetime Projects</Subtitle>
        <Project>
          <ProjectHeader>
            <ProjectTitleWrapper>
              <FaGamepad size={25} />
              <ProjectTitle>
                GameVerse - game store for some of my favorite video games
              </ProjectTitle>
            </ProjectTitleWrapper>
            <ProjectDateCreated>April 2025</ProjectDateCreated>
          </ProjectHeader>
        </Project>
      </Section>
    );
  }
);

export default Projects;
