"use client";

import { motion as motionLib, useReducedMotion } from "framer-motion";

const MotionDiv = motionLib.div as React.ElementType;

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <MotionDiv className={className} initial={{ opacity: 1, y: reduceMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ delay, duration: .42, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionDiv>;
}
