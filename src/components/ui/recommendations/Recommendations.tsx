import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import { forwardRef } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";

const Recommendations = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
  useIntersecting(ref);
  return (
    <Section id="recommendations invisible" ref={ref}>
      <Subtitle>Recommendations</Subtitle>
    </Section>
  );
});

export default Recommendations;
