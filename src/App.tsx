import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";
import Recommendations from "@/components/recommendations/Recommendations";
import Explore from "@/components/explore/Explore";
import { useRef } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";

function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const recommendationsRef = useRef<HTMLElement | null>(null);
  const exploreRef = useRef<HTMLElement | null>(null);

  const { activeIndex, setActiveIndex } = useScrollSpy({
    sectionRefs: [
      heroRef,
      aboutRef,
      experienceRef,
      projectsRef,
      recommendationsRef,
      exploreRef,
    ],
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
      <Explore ref={exploreRef } />
    </>
  );
}

export default App;
