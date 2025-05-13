import { ReactNode } from "react";

type HeroIconProps = {
  path: string;
  children: ReactNode;
};

const HeroIcon = ({ path, children }: HeroIconProps) => {
  return (
    <button className="btn btn-soft hover:scale-105 hover:-translate-y-1 transition-all duration-300">
      <a href={path} target="_blank">
        {children}
      </a>
    </button>
  );
};

export default HeroIcon;
