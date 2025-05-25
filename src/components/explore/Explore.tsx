import Section from "@/components/others/Section";
import Subtitle from "@/components/others/Subtitle";
import Skills from "@/components/explore/skills/Skills";
import GetInTouch from "@/components/explore/getInTouch/GetInTouch";
import Footer from "@/components/explore/footer/Footer";
import { useIntersecting } from "@/hooks/useIntersecting";
import { forwardRef, RefObject } from "react";

const Explore = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    useIntersecting(ref as RefObject<HTMLDivElement>);
    return (
      <Section id="explore" ref={ref} className="invisible">
        <Subtitle>My Skills</Subtitle>
        <Skills />
        <Subtitle>Get in touch</Subtitle>
        <GetInTouch />
        <Footer />
      </Section>
    );
  }
);

export default Explore;
