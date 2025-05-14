import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("pt-12 pb-12 max-w-[1280px] mx-auto", className)}>
      {children}
    </section>
  );
};

export default Section;
