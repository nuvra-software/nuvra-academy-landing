"use client";

import { AnimatePresence, motion as motionLib, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { AISection } from "@/components/sections/AISection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Hero } from "@/components/sections/Hero";
import { ProductSection } from "@/components/sections/ProductSection";
import { RealSchoolSection, WhyWeStarted } from "@/components/sections/StorySection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { copy, type Language } from "@/lib/content";

const MotionDiv = motionLib.div as React.ElementType;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const text = copy[language];
  const reduceMotion = useReducedMotion();

  return <main id="top" className="relative min-h-screen bg-ink"><div className="pointer-events-none fixed inset-0 -z-20 site-grid" /><div className="pointer-events-none absolute left-1/2 top-[-25rem] -z-10 h-[56rem] w-[56rem] -translate-x-1/2 hero-glow" /><Navbar text={text} language={language} onLanguageChange={setLanguage} /><AnimatePresence mode="wait"><MotionDiv key={language} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: .22 }}><Hero text={text} /><WhyWeStarted text={text} /><RealSchoolSection text={text} /><ProductSection text={text} /><AISection text={text} /><VisionSection text={text} /><RoadmapSection text={text} /><TeamSection text={text} /><ContactSection text={text} /></MotionDiv></AnimatePresence><footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-white/[.07] px-6 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>{text.footer}</p><p>nuvraacademy.com.ar · © 2026 Nuvra Academy</p></footer></main>;
}
