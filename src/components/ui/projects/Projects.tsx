import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Project from "@/components/ui/projects/Project";
import { forwardRef } from "react";

const Projects = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="projects" ref={ref} className="flex flex-col gap-2">
        <Subtitle>Freetime Projects</Subtitle>
        <Project>mario</Project>
        <Project>mario</Project>
        <Project>mario</Project>
        <Project>mario</Project>
      </Section>
    );
  }
);

export default Projects;
