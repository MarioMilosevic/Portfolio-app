import { motion } from "framer-motion";

type ScrollDownIndicatorProps = {
  onScroll: () => void;
};

const ScrollDownIndicator = ({ onScroll }: ScrollDownIndicatorProps) => {
  return (
    <button
      className="z-20 absolute bottom-8 right-1/2 translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 hover:-translate-y-1 duration-200 transition-all"
      onClick={onScroll}
      aria-label="Scroll down"
    >
      <span>SCROLL</span>
      {[0, 0.2, 0.4].map((delay, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 6, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <div className="w-3 h-3 border-b border-r border-white rotate-45" />
        </motion.div>
      ))}
    </button>
  );
};

export default ScrollDownIndicator;
