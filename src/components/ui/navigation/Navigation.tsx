import { navigationLinks } from "@/lib/constants";
// import { useState } from "react";
import NavigationButton from "@/components/ui/navigation/NavigationButton";
import { scrollToSection } from "@/lib/utils";

type NavigationProps = {
  activeLink: number;
  setActiveLink: (id: number) => void;
};

const Navigation = ({ activeLink, setActiveLink }: NavigationProps) => {
  const navigationButtonHandler = (index: number, id: string) => {
    setActiveLink(index);
    scrollToSection(id.toLowerCase());
  };

  return (
    <nav className="navbar bg-neutral text-primary-content flex justify-center fixed z-30 top-0 left-0 w-full">
      <ul className="flex gap-1">
        {navigationLinks.map((link, index) => (
          <NavigationButton
            key={index}
            isActive={activeLink === index ? true : false}
            onNavigationClick={() => navigationButtonHandler(index, link)}
          >
            {link}
          </NavigationButton>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
