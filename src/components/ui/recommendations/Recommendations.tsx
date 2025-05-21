import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import { forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";

const Recommendations = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
  useIntersecting(ref as RefObject<HTMLDivElement>);
  return (
    <Section id="recommendations" ref={ref} className="invisible">
      <Subtitle>Recommendations</Subtitle>
    </Section>
  );
});

export default Recommendations;
