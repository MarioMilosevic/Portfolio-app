import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import ContactInformation from "@/components/ui/about/ContactInformation";
import Description from "@/components/ui/about/Description";

const About = () => {
  return (
    <Section>
      <Subtitle>About me</Subtitle>
      <div className="grid grid-cols-8 border py-4 gap-4">
        <ContactInformation className="col-start-1 col-end-3" />
        <Description className="col-start-3 col-end-9 " />
      </div>
    </Section>
  );
};

export default About;
