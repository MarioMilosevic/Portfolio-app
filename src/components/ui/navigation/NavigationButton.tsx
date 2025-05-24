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
          "btn md:btn-md md:uppercase md:text-base text-xs capitalize btn-xs btn-outline md:btn-soft btn-primary",
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
