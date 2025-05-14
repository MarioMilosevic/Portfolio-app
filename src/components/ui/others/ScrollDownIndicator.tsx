import { motion } from "motion/react";

const ScrollDownIndicator = () => {
  return (
    <button className="w-8 h-16 border-2 border-white rounded-3xl z-40 flex justify-center items-start absolute bottom-8 right-1/2 translate-x-1/2 cursor-pointer">
      <motion.div
        className="w-2 h-2 rounded-full bg-[#99aab5] absolute"
        initial={{ bottom: "80%", opacity: 1 }}
        animate={{ bottom: "20%", opacity: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </button>
  );
};

export default ScrollDownIndicator;
