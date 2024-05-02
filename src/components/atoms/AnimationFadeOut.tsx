"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimationFadeOutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimationFadeOut({
  children,
  ...props
}: AnimationFadeOutProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end center", "end start"],
  });

  const t = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const scale = useSpring(t);

  const ot = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const opacity = useSpring(ot);

  return (
    <motion.div ref={ref} style={{ scale, opacity }} {...props}>
      {children}
    </motion.div>
  );
}
