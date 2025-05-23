import { ExperienceType } from "@/lib/globalTypes";
import { FaMapMarkerAlt } from "react-icons/fa";

type CompanyExperienceProps = {
  exp: ExperienceType;
};

const CompanyExperience = ({ exp }: CompanyExperienceProps) => {
  const {
    companyName,
    startDate,
    endDate,
    job,
    destination,
    type,
    about,
    accomplishments,
  } = exp;
  return (
    <div className="mb-12 flex flex-col gap-4 pl-12 border-l-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h2 className="uppercase font-semibold text-slate-50">
            {companyName}
          </h2>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <h2 className="text-slate-500 uppercase">{job}</h2>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt />
            <p>
              {destination}, {type}
            </p>
          </div>
        </div>
      </div>
      <p>{about}</p>
      <ul className="list list-disc list-inside">
        <p className="text-lg mb-2">Key accomplishments</p>
        {accomplishments.map((acc, index) => (
          <li key={index} className="text-sm">
            {acc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyExperience;
