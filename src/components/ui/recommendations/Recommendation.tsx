import { RecommendationType } from "@/lib/globalTypes";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type RecommendationProps = {
  recommendation: RecommendationType;
};

const Recommendation = ({ recommendation }: RecommendationProps) => {
  const { image, fullName, role, github, text, instagram, linkedin } =
    recommendation;

  const iconSize = 22;

  return (
    <div className="border pl-12 pr-8 py-4 min-h-[200px] flex flex-col gap-8">
      <p className="text-justify text-sm">{text}</p>
      <div className="flex justify-between items-end">
        <div className="avatar flex items-center gap-4">
          <div className="w-16 rounded-full">
            <img src={image} alt={image} />
          </div>
          <span className="flex flex-col gap-1">
            <p className="font-semibold">{fullName}</p>
            <p className="font-semibold">{role}</p>
          </span>
        </div>
        <div className="flex gap-4">
          {github && <FaGithub size={iconSize} />}
          {linkedin && <FaLinkedin size={iconSize} />}
          {instagram && <FaInstagram size={iconSize} />}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
