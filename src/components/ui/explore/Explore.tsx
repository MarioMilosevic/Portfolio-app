import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Skills from "@/components/ui/explore/skills/Skills";
import GetInTouch from "@/components/ui/explore/getInTouch/GetInTouch";
import Footer from "@/components/ui/explore/footer/Footer";
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
