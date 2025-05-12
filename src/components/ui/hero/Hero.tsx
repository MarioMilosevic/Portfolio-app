// import marioImage from "/images/Mario.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroIcon from "@/components/ui/hero/HeroIcon";
import Section from "@/components/ui/Section";

const Hero = () => {
  return (
    <Section className="">
      <div className="hero h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {/* <img src={marioImage} className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-5xl font-bold">Mario Milošević</h1>
            <p className="py-6 text-lg">FRONTEND DEVELOPER</p>
            <div className="flex gap-4 items-center">
              <HeroIcon path="https://github.com/MarioMilosevic">
                <FaGithub size={30} />
              </HeroIcon>
              <HeroIcon path="https://www.linkedin.com/in/mario-milosevic/">
                <FaLinkedin size={30} />
              </HeroIcon>
              <button className="btn btn-outline btn-primary">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
