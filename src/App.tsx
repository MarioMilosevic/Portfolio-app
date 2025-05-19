import Navigation from "@/components/ui/navigation/Navigation";
import Hero from "@/components/ui/hero/Hero";
import About from "@/components/ui/about/About";
import Experience from "@/components/ui/experience/Experience";
import Projects from "@/components/ui/projects/Projects";
import Recommendations from "@/components/ui/recommendations/Recommendations";

import { useRef } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const recommendationsRef = useRef<HTMLElement | null>(null);

  const { activeIndex, setActiveIndex } = useScrollSpy({
    sectionRefs: [heroRef, aboutRef, experienceRef, projectsRef],
    offset: 0,
  });

  return (
    <>
      <Navigation activeLink={activeIndex} setActiveLink={setActiveIndex} />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Recommendations ref={recommendationsRef} />
    </>
  );
}

export default App;
