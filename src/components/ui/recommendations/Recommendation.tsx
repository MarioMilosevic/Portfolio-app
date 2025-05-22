import { RecommendationType } from "@/lib/globalTypes";
import Icon from "@/components/ui/others/Icon";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

type RecommendationProps = {
  recommendation: RecommendationType;
};

const Recommendation = ({ recommendation }: RecommendationProps) => {
  const { image, fullName, role, github, text, instagram, linkedin } =
    recommendation;

  const iconSize = 22;

  return (
    <div className="relative border-l-4 pl-12 pr-8 py-4 min-h-[200px] flex flex-col gap-8">
      <span className="absolute top-0 left-2 text-5xl">“</span>
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
