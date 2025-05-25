import Icon from "@/components/ui/others/Icon";
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
    <div className="relative border-l-4 md:pl-12 px-8 md:pr-8 py-4 mb-12 flex flex-col md:gap-8 gap-4">
      <span className="absolute top-0 left-2 text-5xl">“</span>
      <p className="text-justify text-sm">{text}</p>
      <div className="flex justify-between items-end">
        <div className="avatar flex items-center gap-4">
          <div className="w-16 rounded-full">
            <img src={image} alt={image} />
          </div>
          <span className="flex flex-col gap-1">
            <p className="font-semibold md:text-base text-sm">{fullName}</p>
            <p className="font-semibold md:text-base text-sm">{role}</p>
          </span>
        </div>
        <div className="flex md:gap-4 gap-2">
          {github && (
            <Icon size="small" path={github}>
              <FaGithub size={iconSize} />
            </Icon>
          )}
          {linkedin && (
            <Icon size="small" path={linkedin}>
              <FaLinkedin size={iconSize} />
            </Icon>
          )}
          {instagram && (
            <Icon size="small" path={instagram}>
              <FaInstagram size={iconSize} />
            </Icon>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
