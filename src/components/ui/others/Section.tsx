import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("pt-12 pb-12 max-w-[1280px] mx-auto", className)}
    >
      {children}
    </section>
  );
};

export default Section;
