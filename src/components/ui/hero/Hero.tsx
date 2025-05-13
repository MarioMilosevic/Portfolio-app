import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroIcon from "@/components/ui/hero/HeroIcon";
import Section from "@/components/ui/others/Section";

const Hero = () => {
  const iconSize = 25;
  return (
    <Section className="max-w-full bg-slate-700 pt-0">
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(/images/background1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute w-full h-full backdrop-blur-sm z-10"></div>

        <div className="hero-content text-neutral-content flex flex-col absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-20">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">Mario Milošević</h1>
              <p className="py-6 text-lg">FRONTEND DEVELOPER</p>
              <div className="flex gap-4 items-center">
                <HeroIcon path="https://github.com/MarioMilosevic">
                  <FaGithub size={iconSize} />
                </HeroIcon>
                <HeroIcon path="https://www.linkedin.com/in/mario-milosevic/">
                  <FaLinkedin size={iconSize} />
                </HeroIcon>
                <HeroIcon path="/">Resume</HeroIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
