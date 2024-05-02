"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimationFadeInProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimationFadeIn({
  children,
  ...props
}: AnimationFadeInProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "start end"],
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
