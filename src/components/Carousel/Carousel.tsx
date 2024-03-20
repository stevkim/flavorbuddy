import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  children: ReactNode
}

const Carousel = ({ children }:CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [maxPos, setMaxPos] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const offset = 500;

  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
			const carouselWidth = carouselRef.current.getBoundingClientRect().width;
      const { width, x } = containerRef.current.getBoundingClientRect();
			setMaxPos(carouselWidth - (width - x));
		}
  }, [children]);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const direction = e.currentTarget.dataset.direction;
    if (direction === 'left') {
      if (position - offset <= 0) {
        setPosition(0);
      } else {
        setPosition(position - offset);
      }
    }
    if (direction === 'right') {
      if (position + offset >= maxPos) {
        setPosition(maxPos);
      } else {
        setPosition(position + offset);
      }
    }
  }

  return (
		<div
			className="w-[90%] overflow-hidden mx-auto p-4 flex flex-nowrap relative"
			ref={containerRef}
		>
			<button
				data-direction="left"
				onClick={(e) => handleMove(e)}
				className="h-full absolute left-0 z-[5]"
			>
				{'<'}
			</button>
			<motion.div
				className="flex gap-2 w-fit"
				animate={{ x: `-${position}px` }}
				ref={carouselRef}
			>
				{children}
			</motion.div>
			<button
				data-direction="right"
				onClick={(e) => handleMove(e)}
				className="h-full absolute right-0 z-[5]"
			>
				{'>'}
			</button>
		</div>
	);
};

export default Carousel;