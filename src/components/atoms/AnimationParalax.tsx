"use client";

import { cn } from "@/utils/cn";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  className?: string;
  children: string;
  baseVelocity: number;
}

export default function AnimationParalax({
  className,
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const ref = useRef(null);
  const x = useTransform(baseX, (v) => `${wrap(5, -5, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex flex-nowrap relative items-center justify-center">
      <motion.div
        ref={ref}
        style={{ x }}
        className={cn(
          "flex items-center justify-center flex-nowrap whitespace-nowrap whitespace-pre",
          className
        )}
      >
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </div>
  );
}
