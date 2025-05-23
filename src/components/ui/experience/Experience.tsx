import Subtitle from "@/components/ui/others/Subtitle";
import Section from "@/components/ui/others/Section";
import CompanyExperience from "@/components/ui/experience/CompanyExperience";
import { memo, forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";

const Experience = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    useIntersecting(ref as RefObject<HTMLDivElement>);
    return (
      <Section id="experience" ref={ref} className="invisible">
        <Subtitle>Experience</Subtitle>
        <CompanyExperience/>
      </Section>
    );
  }
);

Experience.displayName = "Experience";

export default memo(Experience);
