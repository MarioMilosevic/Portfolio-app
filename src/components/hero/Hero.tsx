import Icon from "@/components/others/Icon";
import Section from "@/components/others/Section";
import ScrollDownIndicator from "@/components/others/ScrollDownIndicator";
import resume from "@/resume/MarioMilosevicCV.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";
import { memo, forwardRef } from "react";

const Hero = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    const iconSize = 25;
    return (
      <Section id="home" className="max-w-full pt-0 md:pt-0 px-0" ref={ref}>
        <div
          className="hero min-h-screen relative"
          style={{
            backgroundImage: `url(/images/background/background1.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay absolute w-full h-full backdrop-blur-sm z-10"></div>
          <div className="hero-content text-neutral-content flex flex-col z-20">
            <div className=" flex-col md:flex-row absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 md:max-w-[666px] w-full">
              <div className="flex flex-col gap-6 items-center md:items-start">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-5xl md:text-7xl font-bold text-slate-50"
                >
                  Mario Milošević
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-lg md:text-2xl text-slate-50"
                >
                  FRONTEND DEVELOPER
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex gap-4 items-center"
                >
                  <Icon path="https://github.com/MarioMilosevic">
                    <FaGithub size={iconSize} color="white" />
                  </Icon>
                  <Icon path="https://www.linkedin.com/in/mario-milosevic/">
                    <FaLinkedin size={iconSize} color="white" />
                  </Icon>
                  <Icon path={resume}>
                    <p className="text-white text-lg">Resume</p>
                  </Icon>
                </motion.div>
              </div>
            </div>
          </div>
          <ScrollDownIndicator onScroll={() => scrollToSection("about")} />
        </div>
      </Section>
    );
  }
);

Hero.displayName = "Hero";

export default memo(Hero);
