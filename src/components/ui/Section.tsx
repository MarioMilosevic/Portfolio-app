import { cn } from "@/lib/utils";

export const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("pt-16 pb-16 max-w-[1280px] mx-auto", className)}>
      {children}
    </section>
  );
};

export default Section;
