// import marioImage from "/images/Mario.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img src={marioImage} className="max-w-sm rounded-lg shadow-2xl" /> */}
        <div>
          <h1 className="text-5xl font-bold">Mario Milošević</h1>
          <p className="py-6 text-lg">FRONTEND DEVELOPER</p>
          <div className="flex gap-4 items-center">
            <a href="https://github.com/MarioMilosevic" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/mario-milosevic/"
              target="_blank"
              className=" hover:scale-110 hover:-translate-y-1 transition-all duration-300 "
            >
              <FaLinkedin size={30} />
            </a>
            <button className="btn btn-outline btn-primary">Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
