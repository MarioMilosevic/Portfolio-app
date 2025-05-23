import marioImage from "/images/me/mario.jpg";
import Contact from "@/components/ui/about/Contact";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-2 border-r border-r-white pr-8">
      <img
        src={marioImage}
        alt="Contact image"
        className="rounded-full w-50 h-50 object-cover mb-10"
      />
      <Contact path="https://www.google.com/maps/place/%D0%9D%D0%BE%D0%B2%D0%B8+%D0%A1%D0%B0%D0%B4/@45.2715044,19.8082418,13z/data=!3m1!4b1!4m6!3m5!1s0x475b10613de93455:0xb6f7d683724fe28!8m2!3d45.2396085!4d19.8227056!16zL20vMHN3d24?hl=sr&entry=ttu&g_ep=EgoyMDI1MDUxMS4wIKXMDSoASAFQAw%3D%3D">
        <FaMapMarkerAlt />
        <p>Serbia, Novi Sad</p>
      </Contact>
      <Contact path="mailto:mariomilosevic887@gmail.com" target={false}>
        <FaEnvelope />
        <p>mariomilosevic887@gmail.com</p>
      </Contact>
      <Contact path="tel:+381658887995" target={false}>
        <FaPhone />
        <p>+381 65 888 799 5</p>
      </Contact>
      <Contact path="https://github.com/MarioMilosevic">
        <FaGithub />
        <p>@mariomilosevic</p>
      </Contact>
      <Contact path="https://www.linkedin.com/in/mario-milosevic/">
        <FaLinkedin />
        <p>@mariomilosevic</p>
      </Contact>
    </div>
  );
};

export default ContactInformation;
