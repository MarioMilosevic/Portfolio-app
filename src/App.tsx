import Navigation from "@/components/ui/navigation/Navigation";
import Hero from "@/components/ui/hero/Hero";
import About from "@/components/ui/about/About";
import Experience from "@/components/ui/experience/Experience";
import { useEffect, useState } from "react";

function App() {
    const [activeLink, setActiveLink] = useState<number>(0);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('skrol')
      /**
       * za svaku sekciju if(window.scrollY >= sectionEL.offsetTop){
       * curretnSection = sectionEl.id
       * }
       */
    })
  }, [])
  return (
    <>
      <Navigation activeLink={activeLink} setActiveLink={setActiveLink } />
      <Hero />
      <About />
      <Experience />
    </>
  );
}

export default App;
