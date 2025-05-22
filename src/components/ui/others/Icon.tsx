import { cn } from "@/lib/utils";

type IconProps = {
  path: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "big";
};

const Icon = ({ path, children, size = "medium" }: IconProps) => {
  const iconSizes = {
    small: "btn-sm",
    medium: "btn-md",
    big: "btn-lg",
  };

  return (
    <a
      className={cn(
        "btn btn-soft hover:scale-105 hover:-translate-y-1 transition-all duration-300",
        iconSizes[size]
      )}
      href={path}
      target="_blank"
    >
      {children}
    </a>
  );
};

export default Icon;
