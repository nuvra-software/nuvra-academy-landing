"use client";

import { motion as motionLib, useReducedMotion } from "framer-motion";

const MotionDiv = motionLib.div as React.ElementType;

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <MotionDiv className={className} initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.14 }} transition={{ delay, duration: .65, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionDiv>;
}
