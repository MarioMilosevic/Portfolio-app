import { cn } from "@/lib/utils";

const Section = ({ children, className }: { children: React.ReactNode, className?:string }) => {
    return <section className={cn("pb-24", className)}>{children}</section>;
};

export default Section;
