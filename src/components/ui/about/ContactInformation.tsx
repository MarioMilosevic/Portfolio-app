import marioImage from "/images/Mario.jpg";
import { cn } from "@/lib/utils";

const ContactInformation = ({ className }: { className: string }) => {
  return (
    <div className={cn("bg-slate-500 flex flex-col gap-2", className)}>
      <img
        src={marioImage}
        alt="Contact image"
        className="rounded-full w-50 h-50 object-cover"
      />
    </div>
  );
};

export default ContactInformation;
