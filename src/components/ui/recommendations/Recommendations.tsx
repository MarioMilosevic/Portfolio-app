import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import Recommendation from "@/components/ui/recommendations/Recommendation";
import { forwardRef, RefObject } from "react";
import { useIntersecting } from "@/hooks/useIntersecting";
import { recommendations } from "@/lib/constants";

const Recommendations = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
  useIntersecting(ref as RefObject<HTMLDivElement>);
  return (
    <Section id="recommendations" ref={ref} className="invisible">
      <Subtitle>Recommendations</Subtitle>
      <div className="flex flex-col gap-8 ">
      {recommendations.map((recommendation) => (
        <Recommendation recommendation={recommendation} />
      ))}
      </div>
    </Section>
  );
});

export default Recommendations;
