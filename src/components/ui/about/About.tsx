import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import ContactInformation from "@/components/ui/about/ContactInformation";
import Description from "@/components/ui/about/Description";
import { memo, forwardRef } from "react";

const About = forwardRef(({_}, ref) => {
  
  return (
    <Section id="about" ref={ref}>
      <Subtitle>About me</Subtitle>
      <div className="flex py-4">
        <ContactInformation />
        <Description />
      </div>
    </Section>
  );
}
)

export default memo(About);
