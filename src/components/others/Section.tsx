import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={cn(
          "md:pt-12 md:pb-12 pt-8 pb-8 px-4 md:px-0 max-w-[1280px] mx-auto transition-all duration-1000",
          className
        )}
      >
        {children}
      </section>
    );
  }
);

export default Section;
