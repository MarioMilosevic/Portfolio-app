import { useEffect, useState } from "react";

type ScrollSpyConfig = {
  sectionRefs: React.RefObject<HTMLElement | null>[];
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
        const sectionTop = rect.top + offset;
        const sectionHeight = rect.height;

        const triggerPoint = sectionTop + Math.min(sectionHeight * 0.5, 600);

        if (triggerPoint > 0 && triggerPoint < screenHeight) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs, offset]);

  return { activeIndex, setActiveIndex };
}
