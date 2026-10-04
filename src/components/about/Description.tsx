import { DESCRIPTION_TEXTS } from "@/lib/constants";

const Description = () => {
  return (
    <div className="flex flex-col justify-center gap-4 md:pl-8">
      {DESCRIPTION_TEXTS.map((text, index) => (
        <p key={index} className="text-justify md:text-base text-sm">
          {text}{" "}
        </p>
      ))}
    </div>
  );
};

export default Description;
