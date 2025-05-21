import Subtitle from "@/components/ui/others/Subtitle";
import Section from "@/components/ui/others/Section";
import { memo, forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";
import dejan from "/images/dejan.jpeg"

const Experience = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (_, ref) => {
    useIntersecting(ref as RefObject<HTMLDivElement>);
    return (
      <Section id="experience" ref={ref} className="invisible">
        <Subtitle>Experience</Subtitle>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={dejan} alt={dejan} className="object-cover" />
          </div>
          {/* Lead Software Engineer-Java */}
        </div>
      </Section>
    );
  }
);

Experience.displayName = "Experience";

export default memo(Experience);
