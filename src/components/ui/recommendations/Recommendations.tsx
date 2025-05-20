import Section from "@/components/ui/others/Section";
import Subtitle from "@/components/ui/others/Subtitle";
import { forwardRef } from "react";

const Recommendations = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((_, ref) => {
    return <Section id="recommendations" ref={ref}>
      <Subtitle>Recommendations</Subtitle>
  </Section>;
});

export default Recommendations;
