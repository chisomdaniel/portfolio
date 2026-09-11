"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { cn } from "@/utils/cn";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "105%" : "-105%",
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-105%" : "105%",
  }),
};

export default function InteractiveCardSlider({
  children,
  className,
  waitDuration = 4000,
}: {
  children: React.ReactNode[];
  className?: string;
  waitDuration?: number;
}) {
  // tracks [activeIndex, direction Trend  (1 for next, -1 for prev)]
  const [[index, direction], setIndex] = useState([0, 1]);
  const [isHovered, setIsHovered] = useState(false);

  // helper function to handle moving to a specific card index
  const goToCard = (nextIndex: number, customDirection?: number) => {
    // if no direction is passed, calculate it based on index comparison
    const trend = customDirection ?? (nextIndex > index ? 1 : -1);
    setIndex([nextIndex, trend]);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex(([currentIndex]) => [
        (currentIndex + 1) % children.length,
        1,
      ]); // auto-advance forward
    }, waitDuration);

    return () => clearInterval(interval);
  }, [isHovered, children.length, waitDuration]);

  const handleDragEnd = (event: TouchEvent, info: PanInfo) => {
    const swipThreshold = 50;
    if (info.offset.x < -swipThreshold) {
      // swiped left, go to next card
      const nextIndex = (index + 1) % children.length;
      goToCard(nextIndex, 1);
    } else if (info.offset.x > swipThreshold) {
      // swiped right, go to previous card
      const prevIndex = (index - 1 + children.length) % children.length;
      goToCard(prevIndex, -1);
    }
  };

  return (
    <div className={className}>
      <div
        className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ ease: "easeInOut", duration: 0.8 }}
            drag="x" // horizontal dragging only
            dragConstraints={{ left: 0, right: 0 }} // snap back if threshold not met
            dragElastic={0.7} // elasticity of drag
            onDragEnd={handleDragEnd}
          >
            {children[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* pagination dots */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToCard(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer",
              idx === index ? "bg-primary" : "bg-accent",
              idx === index ? "scale-125" : "scale-100",
            )}
          ></button>
        ))}
      </div>
    </div>
  );
}
