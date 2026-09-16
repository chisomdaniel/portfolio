"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { cn } from "@/utils/cn";
import { VerticalGreenGridBar } from "./page-grid";

const cardVariants = {
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

export default function InteractiveGridSlider({
  children,
  className,
  waitDuration = 4000,
}: {
  children: React.ReactNode[];
  className?: string;
  waitDuration?: number;
}) {
  // tracks [activeIndex, direction Trend  (1 for next, -1 for prev)]
  const [[index, direction], setIndex] = useState([[0, 1, 2], 1]);
  const [isHovered, setIsHovered] = useState(false);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const [maxCardHeight, setMaxCardHeight] = useState(0);
  const measurementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measurementElement = measurementRef.current;
    if (!measurementElement) return;

    const measureCards = () => {
      const heights = Array.from(
        measurementElement.querySelectorAll<HTMLElement>(
          "[data-review-card-measurement]",
        ),
      ).map((card) => card.getBoundingClientRect().height);

      setMaxCardHeight(Math.max(0, ...heights));
    };

    const observer = new ResizeObserver(measureCards);
    measurementElement
      .querySelectorAll<HTMLElement>("[data-review-card-measurement]")
      .forEach((card) => observer.observe(card));
    measureCards();

    return () => observer.disconnect();
  }, [children]);

  // helper function to handle moving to a specific card index
  const goToCard = (nextIndex: number, customDirection?: number) => {
    // if no direction is passed, calculate it based on index comparison
    const trend = customDirection ?? (nextIndex > index[0] ? 1 : -1);
    setIndex([
      [
        nextIndex,
        (nextIndex + 1) % children.length,
        (nextIndex + 2) % children.length,
      ],
      trend,
    ]);
    setTimerResetKey((key) => key + 1);
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex(([currentIndex]) => [
        [
          (currentIndex[0] + 1) % children.length,
          (currentIndex[1] + 1) % children.length,
          (currentIndex[2] + 1) % children.length,
        ],
        1,
      ]); // auto-advance forward
    }, waitDuration);

    return () => clearInterval(interval);
  }, [isHovered, children.length, waitDuration, timerResetKey]);

  const handleDragEnd = (event: TouchEvent, info: PanInfo) => {
    const swipeThreshold = 25; // minimum distance in pixels to consider a swipe
    if (info.offset.x < -swipeThreshold) {
      // swiped left, go to next card
      const nextIndex = (index[0] + 1) % children.length;
      goToCard(nextIndex, 1);
    } else if (info.offset.x > swipeThreshold) {
      // swiped right, go to previous card
      const prevIndex = (index[0] - 1 + children.length) % children.length;
      goToCard(prevIndex, -1);
    }
  };

  return (
    <div className={className}>
      <div className="flex">
        <VerticalGreenGridBar markerSide="left" />
        <div
          className="relative w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={measurementRef}
            aria-hidden="true"
            className="absolute inset-x-0 top-0 invisible pointer-events-none grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-1.25rem)/2)] xl:auto-cols-[calc((100%-2.5rem)/3)] gap-5"
          >
            {children.map((child, childIndex) => (
              <div key={childIndex} data-review-card-measurement>
                {child}
              </div>
            ))}
          </div>

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={handleDragEnd}
            className="grid grid-flow-col auto-cols-[100%] md:auto-cols-[calc((100%-1.25rem)/2)] xl:auto-cols-[calc((100%-2.5rem)/3)] gap-5"
            style={{ minHeight: maxCardHeight || undefined }}
          >
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              {index.map((cardIndex) => (
                <motion.div
                  key={cardIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  layout
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                >
                  {children[cardIndex]}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        <VerticalGreenGridBar markerSide="right" />
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
              idx === index[0] ? "bg-primary" : "bg-accent",
              idx === index[0] ? "scale-125" : "scale-100",
            )}
          ></button>
        ))}
      </div>
    </div>
  );
}
