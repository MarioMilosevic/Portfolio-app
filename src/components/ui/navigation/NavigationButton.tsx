import { ReactNode } from "react";
import clsx from "clsx";

type NavigationButtonProps = {
  children: ReactNode;
  isActive: boolean;
  onNavigationClick: () => void;
};

const NavigationButton = ({
  children,
  isActive,
  onNavigationClick,
}: NavigationButtonProps) => {
  return (
    <button
      className={clsx("btn btn-soft btn-primary", {
        "btn-active": isActive,
      })}
      onClick={onNavigationClick}
    >
      {children}
    </button>
  );
};

export default NavigationButton;
