import { ReactNode } from "react";
import clsx from "clsx";

type NavigationButtonProps = {
  children: ReactNode;
  isActive: boolean;
  setActiveLink: (index: number) => void;
  index: number;
};

const NavigationButton = ({
  children,
  isActive,
  setActiveLink,
  index,
}: NavigationButtonProps) => {
  return (
    <button
      className={clsx("btn btn-soft btn-primary", { "btn-active": isActive })}
      onClick={() => setActiveLink(index)}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
