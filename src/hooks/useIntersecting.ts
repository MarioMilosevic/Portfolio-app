import { useEffect } from "react";
import { RefObject } from "react";

export const useIntersecting = (ref: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting && ref.current) {
            
            ref.current.classList.remove("invisible");
            ref.current.classList.add("visible");
            observer.unobserve(entry.target);
          }
        },
        {
          rootMargin: "-100px",
        }
      );
      observer.observe(ref.current);
    }
  }, [ref]);
};
