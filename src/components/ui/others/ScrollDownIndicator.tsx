import { motion } from "motion/react";

const ScrollDownIndicator = () => {
  const arrowVariants = {
    initial: { opacity: 0, x: -20, y: -20 },
    animate: {
      opacity: [0, 1, 0],
      x: [-20, 0, 20],
      y: [-20, 0, 20],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <button className="absolute bottom-20 right-1/2 translate-x-1/2 z-40 cursor-pointer flex flex-col items-center gap-3">
      <span className="text-white text-sm tracking-widest">SCROLL</span>
      <div className="flex flex-col items-center gap-1">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span
            key={i}
            className="block w-5 h-5 border-b border-r border-white rotate-45"
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 2, repeat: Infinity, delay }}
          />
        ))}
      </div>
    </button>
  );
};

export default ScrollDownIndicator;
