import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import ContactInformation from "@/components/ui/about/ContactInformation";
import Description from "@/components/ui/about/Description";
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
