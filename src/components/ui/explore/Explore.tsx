import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Skills from "@/components/ui/explore/skills/Skills";
import GetInTouch from "@/components/ui/explore/getInTouch/GetInTouch";
import { forwardRef } from "react";

const Explore = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    return (
      <Section id="explore" ref={ref}>
        <Subtitle>My Skills</Subtitle>
        <Skills />
        <Subtitle>Get in touch</Subtitle>
        <GetInTouch/>
      </Section>
    );
  }
);

export default Explore;
