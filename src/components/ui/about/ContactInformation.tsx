import marioImage from "/images/Mario.jpg";
import Contact from "@/components/ui/about/Contact";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-2 border-r border-r-white pr-8">
      <img
        src={marioImage}
        alt="Contact image"
        className="rounded-full w-50 h-50 object-cover mb-10"
      />
      <Contact>
        <FaMapMarkerAlt />
        <p>Serbia, Novi Sad</p>
      </Contact>
      <Contact>
        <FaEnvelope />
        <p>mariomilosevic887@gmail.com</p>
      </Contact>
      <Contact>
        <FaPhone />
        <p>+381658887995</p>
      </Contact>
      <Contact>
        <FaGithub />
        <p>@mariomilosevic</p>
      </Contact>
      <Contact>
        <FaLinkedin />
        <p>@mariomilosevic</p>
      </Contact>
      <Contact>
        <FaInstagram />
        <p>@buffbrain</p>
      </Contact>
    </div>
  );
};

export default ContactInformation;
