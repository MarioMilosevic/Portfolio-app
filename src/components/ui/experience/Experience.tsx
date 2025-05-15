import Subtitle from "@/components/ui/others/Subtitle";
import Section from "@/components/ui/others/Section";
import { memo, forwardRef } from "react";

const Experience = forwardRef(({ _ }, ref) => {
  return (
    <Section id="experience" ref={ref}>
      <Subtitle>Experience</Subtitle>
      <div className="h-[500px]"></div>
    </Section>
  );
});

export default memo(Experience);
