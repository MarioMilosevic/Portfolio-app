import { scrollToSection } from "@/lib/utils";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal text-neutral-content p-10 flex justify-between">
      <nav>
        <h6 className="footer-title">Useful links</h6>
        <a className="link link-hover" onClick={() => scrollToSection('home')}>Home</a>
        <a className="link link-hover" onClick={() => scrollToSection('about')} >About</a>
        <a className="link link-hover" onClick={() => scrollToSection('experience')} >Experience</a>
        <a className="link link-hover" onClick={() => scrollToSection('projects')} >Freetime projects</a>
        <a className="link link-hover" onClick={() => scrollToSection('explore')} >Explore</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">Email me</a>
        <a className="link link-hover">Linkedin</a>
        <a className="link link-hover">GitHub</a>
        <a className="link link-hover">Resume</a>
      </nav>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link link-hover">GameVerse</a>
        <a className="link link-hover">X-shoppers</a>
        <a className="link link-hover">Back to top</a>
      </nav>
    </footer>
  );
};

export default Footer;
