import { scrollToSection } from "@/lib/utils";
import resume from "../../../../resume/MarioMilosevicCV.pdf"

const Footer = () => {
  return (
    <footer className="py-10 flex flex-col gap-8 items-center">
      <div className="footer sm:footer-horizontal text-neutral-content flex justify-between">
        <nav>
          <h6 className="footer-title">Useful links</h6>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("home")}
          >
            Home
          </a>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("about")}
          >
            About
          </a>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </a>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("projects")}
          >
            Freetime projects
          </a>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("explore")}
          >
            Explore
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a
            className="link link-hover"
            href="mailto:mariomilosevic887@gmail.com"
          >
            Email me
          </a>
          <a
            className="link link-hover"
            href="https://www.linkedin.com/in/mario-milosevic/"
            target="_blank"
          >
            Linkedin
          </a>
          <a
            className="link link-hover"
            href="https://github.com/MarioMilosevic"
            target="_blank"
          >
            GitHub
          </a>
          <a className="link link-hover" href={resume} target="_blank">
            Resume
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a
            className="link link-hover"
            href="https://game-verse-sigma.vercel.app/"
            target="_blank"
          >
            GameVerse
          </a>
          <a
            className="link link-hover"
            href="https://x-shoppers-dream-e-commerce.vercel.app/"
            target="_blank"
          >
            X-shoppers
          </a>
          <a
            className="link link-hover"
            onClick={() => scrollToSection("home")}
          >
            Back to top
          </a>
        </nav>
      </div>
      <p className="text-sm">
        Copyright © {new Date().getFullYear()} - Designed and developed by me
      </p>
    </footer>
  );
};

export default Footer;
