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
    <li>
      <a
        className={clsx(
          "btn md:uppercase capitalize btn-outline md:btn-soft btn-primary",
          { "btn-active": isActive }
        )}
        onClick={onNavigationClick}
      >
        {children}
      </a>
    </li>
  );
};

export default NavigationButton;
