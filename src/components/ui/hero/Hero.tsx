import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";
import HeroIcon from "@/components/ui/hero/HeroIcon";
import Section from "@/components/ui/others/Section";
import ScrollDownIndicator from "@/components/ui/others/ScrollDownIndicator";

const Hero = () => {
  const iconSize = 25;
  return (
    <Section id="home" className="max-w-full pt-0">
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: `url(/images/background1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute w-full h-full backdrop-blur-sm z-10"></div>
        <div className="hero-content text-neutral-content flex flex-col z-20">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-7xl font-bold text-slate-50"
              >
                Mario Milošević
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-2xl text-slate-50"
              >
                FRONTEND DEVELOPER
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex gap-4 items-center"
              >
                <HeroIcon path="https://github.com/MarioMilosevic">
                  <FaGithub size={iconSize} color="white" />
                </HeroIcon>
                <HeroIcon path="https://www.linkedin.com/in/mario-milosevic/">
                  <FaLinkedin size={iconSize} color="white" />
                </HeroIcon>
                <HeroIcon path="/">
                  <p className="text-white text-lg">Resume</p>
                </HeroIcon>
              </motion.div>
            </div>
          </div>
        </div>
        <ScrollDownIndicator />
      </div>
    </Section>
  );
};

export default Hero;
