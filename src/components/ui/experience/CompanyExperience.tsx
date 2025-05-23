import { FaMapMarkerAlt } from "react-icons/fa";

const CompanyExperience = () => {
  return (
    <div className="border h-[200px]">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <a className="uppercase font-semibold text-slate-50">Emasys</a>
          <p>Aug 2023 - Present</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-500">FRONTEND ENGINEER</h2>
          <div className="flex items-center gap-2 border justify-end">
            <FaMapMarkerAlt />
            <p>Zagreb, Croatia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyExperience;
