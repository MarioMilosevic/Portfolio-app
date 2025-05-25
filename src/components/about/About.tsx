import Section from "@/components/others/Section";
import Subtitle from "@/components/others/Subtitle";
import ContactInformation from "@/components/about/ContactInformation";
import Description from "@/components/about/Description";
import { memo, forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";


const About = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    useIntersecting(ref as RefObject<HTMLDivElement>)
    return (
      <Section id="about" ref={ref} className="invisible">
        <Subtitle>About me</Subtitle>
        <div className="flex md:flex-row flex-col">
          <ContactInformation />
          <Description />
        </div>
      </Section>
    );
  }
);

About.displayName = "About";

export default memo(About);
