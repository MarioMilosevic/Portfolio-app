import { useEffect } from "react";
import { RefObject } from "react";

export const useIntersecting = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting && ref.current) {
            console.log("intersektuje");
            ref.current.classList.remove("invisible");
            ref.current.classList.add("visible");
            observer.unobserve(entry.target);
          }
        },
        {
          rootMargin: "-200px",
        }
      );
      observer.observe(ref.current);
    }
  }, [ref]);
};
