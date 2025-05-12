import marioImage from "/images/Mario.jpg";
import Contact from "@/components/ui/about/Contact";
import Content from "@/components/ui/about/Content";
import { cn } from "@/lib/utils";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactInformation = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <img
        src={marioImage}
        alt="Contact image"
        className="rounded-full w-50 h-50 object-cover"
      />
      <Contact>
        <FaMapMarkerAlt />
        <Content>Serbia, Novi Sad</Content>
      </Contact>
      <Contact>
        <FaEnvelope />
        <Content>mariomilosevic887@gmail.com</Content>
      </Contact>
    </div>
  );
};

export default ContactInformation;
