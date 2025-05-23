import NavigationButton from "@/components/ui/navigation/NavigationButton";
import { navigationLinks } from "@/lib/constants";
import { scrollToSection } from "@/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";

type NavigationProps = {
  activeLink: number;
  setActiveLink: (id: number) => void;
};

const Navigation = ({ activeLink, setActiveLink }: NavigationProps) => {
  const navigationButtonHandler = (index: number, id: string) => {
    setActiveLink(index);
    scrollToSection(id);
  };

  return (
    <nav className="navbar bg-neutral text-primary-content flex absolute md:fixed z-30 top-0 left-0">
      <GiHamburgerMenu
        size={20}
        color="white"
        className="block md:hidden absolute right-4 bottom-1/2 translate-y-1/2 cursor-pointer"
      />
      <ul className="hidden md:flex absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2">
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
