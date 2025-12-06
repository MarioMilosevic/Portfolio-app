import Section from "@/components/others/Section";
import Subtitle from "@/components/others/Subtitle";
import Recommendation from "@/components/recommendations/Recommendation";
import { forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";
import { RECOMMENDATIONS } from "@/lib/constants";

const Recommendations = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
  useIntersecting(ref as RefObject<HTMLDivElement>);
  return (
    <Section id="recommendations" ref={ref} className="invisible">
      <Subtitle>Recommendations</Subtitle>
      {RECOMMENDATIONS.map((recommendation, index) => (
        <Recommendation key={index} recommendation={recommendation} />
      ))}
    </Section>
  );
});

export default Recommendations;
