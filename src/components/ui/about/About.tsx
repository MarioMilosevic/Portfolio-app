import Section from "@/components/ui/Section";
import Subtitle from "@/components/ui/Subtitle";
import ContactInformation from "@/components/ui/about/ContactInformation";

const About = () => {
  return (
    <Section>
      <Subtitle>About me</Subtitle>
          <div className="grid grid-cols-8 border py-4 gap-4">
              <ContactInformation className="col-start-1 col-end-3" />

        {/* <div className="col-start-3 col-end-9 border">mario</div> */}
      </div>
    </Section>
  );
};

export default About;
