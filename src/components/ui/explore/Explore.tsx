import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import TechnologyIcon from "@/components/ui/others/TechnologyIcon";
import { mySkills } from "@/lib/constants";
import { forwardRef } from "react";

const Explore = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="explore" ref={ref}>
        <Subtitle>My Skills</Subtitle>
        <div className="grid grid-cols-8 gap-4">
          {mySkills.map((skill) => (
            <TechnologyIcon
              key={skill.text}
              iconObj={skill}
              size="medium"
            />
          ))}
        </div>
      </Section>
    );
  }
);

export default Explore;
