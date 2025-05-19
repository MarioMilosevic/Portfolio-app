import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import { mySkills } from "@/lib/constants";
import ProjectTechnologyIcon from "../projects/footer/ProjectTechnologyIcon";
import { forwardRef } from "react";

const Explore = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="explore" ref={ref}>
        <Subtitle>My Skills</Subtitle>
        <div className="flex items-center justify-between">
          {mySkills.map((skill) => (
            <ProjectTechnologyIcon key={skill.text} iconObj={skill} />
          ))}
        </div>
      </Section>
    );
  }
);

export default Explore;
