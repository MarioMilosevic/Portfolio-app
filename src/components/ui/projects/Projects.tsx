import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Project from "@/components/ui/projects/Project";
import ProjectHeader from "@/components/ui/projects/header/ProjectHeader";
import ProjectDateCreated from "@/components/ui/projects/header/ProjectDateCreated";
import ProjectTitle from "@/components/ui/projects/header/ProjectTitle";
import ProjectTitleWrapper from "@/components/ui/projects/header/ProjectTitleWrapper";
import ProjectMain from "@/components/ui/projects/main/ProjectMain";
import ProjectDescription from "@/components/ui/projects/main/ProjectDescription";
import ProjectImage from "@/components/ui/projects/main/ProjectImage";
import ProjectFooter from "@/components/ui/projects/footer/ProjectFooter";
import ProjectTechnologies from "@/components/ui/projects/footer/ProjectTechnologies";
import ProjectActions from "@/components/ui/projects/footer/ProjectActions";

import { forwardRef } from "react";
import { personalProjects } from "@/lib/constants";

const Projects = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="projects" ref={ref} className="flex flex-col gap-2">
        <Subtitle>Freetime Projects</Subtitle>
        {personalProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <Project key={index}>
              <ProjectHeader isEven={isEven}>
                <ProjectTitleWrapper>
                  {<project.mainIcon />}
                  <ProjectTitle>{project.title}</ProjectTitle>
                </ProjectTitleWrapper>
                <ProjectDateCreated>{project.createdAt}</ProjectDateCreated>
              </ProjectHeader>
              <ProjectMain isEven={isEven}>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectImage path={project.imagePath} />
              </ProjectMain>
              <ProjectFooter isEven={isEven}>
                <ProjectTechnologies iconObj={project.projectIcons} />
                <ProjectActions
                  code={project.code}
                  liveDemo={project.liveDemo}
                />
              </ProjectFooter>
            </Project>
          );
        })}
      </Section>
    );
  }
);

export default Projects;
