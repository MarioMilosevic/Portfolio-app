import NavigationButton from "@/components/ui/navigation/NavigationButton";
import AnimatedHamburgerButton from "@/components/ui/navigation/AnimatedHamburgerButton";
import { navigationLinks } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { useState } from "react";

type NavigationProps = {
  activeLink: number;
  setActiveLink: (id: number) => void;
};

const Navigation = ({ activeLink, setActiveLink }: NavigationProps) => {
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

  const navigationButtonHandler = (index: number, id: string) => {
    if (navigationOpen) {
      setNavigationOpen(false);
    }
    scrollToSection(id);
    setActiveLink(index);
  };

  return (
    <nav className="navbar bg-neutral text-primary-content flex fixed z-30 top-0 left-0">
      <AnimatedHamburgerButton
        open={navigationOpen}
        navigationHandler={() => setNavigationOpen((prev) => !prev)}
        className="block md:hidden absolute right-4 bottom-1/2 translate-y-1/2 cursor-pointer"
      />
      <ul
        className={`absolute origin-top bg-neutral md:origin-center w-full md:h-auto md:w-auto ${
          navigationOpen ? "scale-y-100" : "md:scale-y-100 scale-y-0"
        } transition-all duration-300 top-16 md:top-0 flex flex-col left-0 pl-2 pb-12 gap-1 md:gap-0 md:p-0 md:flex-row md:absolute md:bottom-1/2 md:translate-y-1/2 md:left-1/2 md:-translate-x-1/2`}
      >
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
