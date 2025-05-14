import { navigationLinks } from "@/lib/constants";
import { useState } from "react";
import NavigationButton from "@/components/ui/navigation/NavigationButton";
import { scrollToSection } from "@/lib/utils";

const Header = () => {
  const navigationButtonHandler = (index: number, id: string) => {
    setActiveLink(index);
    scrollToSection(id.toLowerCase());
  };

  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <nav className="navbar bg-neutral  text-primary-content flex justify-center gap-1 fixed z-30 top-0 left-0 w-full">
      {navigationLinks.map((link, index) => (
        <NavigationButton
          key={index}
          isActive={activeLink === index ? true : false}
          onNavigationClick={() => navigationButtonHandler(index, link)}
        >
          {link}
        </NavigationButton>
      ))}
    </nav>
  );
};

export default Header;
