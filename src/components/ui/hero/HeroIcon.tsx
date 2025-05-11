import { ReactNode } from "react";

type HeroIconProps = {
  path: string;
  children: ReactNode;
};

const HeroIcon = ({ path, children }: HeroIconProps) => {
  return (
    <a
      href={path}
      target="_blank"
      className="hover:scale-110 hover:-translate-y-1 transition-all duration-300"
    >
      {children}
    </a>
  );
};

export default HeroIcon;
