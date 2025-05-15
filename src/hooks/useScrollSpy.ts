import { useEffect, useState } from "react";

type ScrollSpyConfig = {
  sectionRefs: React.RefObject<HTMLElement>[];
  offset?: number;
};

export function useScrollSpy({ sectionRefs, offset = 0 }: ScrollSpyConfig) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;

      for (let i = 0; i < sectionRefs.length; i++) {
        const ref = sectionRefs[i];
        const el = ref.current;
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const top = rect.top + offset;
        const height = rect.height;

        const sectionMiddle = top + height / 2;

        if (sectionMiddle > 0 && sectionMiddle < screenHeight) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, offset]);

    return { activeIndex, setActiveIndex };
}
