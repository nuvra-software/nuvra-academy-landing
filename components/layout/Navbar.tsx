"use client";

import { AnimatePresence, motion as motionLib } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import type { Copy, Language } from "@/lib/content";

const MotionDiv = motionLib.div as React.ElementType;

export function Navbar({ text, language, onLanguageChange }: { text: Copy; language: Language; onLanguageChange: (language: Language) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [["#top", text.nav.home], ["#story", text.nav.story], ["#product", text.nav.product], ["#ai", text.nav.ai], ["#vision", text.nav.vision], ["#team", text.nav.team], ["#contact", text.nav.contact]];

  return <header className="sticky top-0 z-50 border-b border-white/[.07] bg-ink/85 backdrop-blur-xl"><nav className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between px-6 lg:px-10"><a href="#top" className="focus-ring inline-flex items-center" aria-label="Nuvra Academy home"><Logo variant="full" className="h-9" priority /></a><div className="hidden items-center gap-6 text-[11px] text-white/50 xl:flex">{links.map(([href, label]) => <a key={href} href={href} className="focus-ring transition-colors hover:text-white">{label}</a>)}</div><div className="flex items-center gap-2"><div className="flex rounded-full border border-white/10 bg-white/[.04] p-1 text-[10px] font-bold tracking-[.12em]">{(["en", "es"] as Language[]).map((option) => <button key={option} onClick={() => onLanguageChange(option)} className={`focus-ring rounded-full px-2.5 py-1.5 uppercase transition-colors ${language === option ? "bg-white text-black" : "text-white/40 hover:text-white"}`} aria-pressed={language === option}>{option}</button>)}</div><a href="#contact" className="button-primary hidden rounded-full px-4 py-2 text-[11px] font-semibold sm:inline-flex">{text.nav.cta}</a><button onClick={() => setMenuOpen((open) => !open)} className="focus-ring rounded-full border border-white/10 p-2 text-white/70 xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></nav><AnimatePresence>{menuOpen && <MotionDiv initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/[.07] xl:hidden"><div className="mx-auto flex max-w-7xl flex-col px-6 py-3">{links.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/[.06] py-3 text-sm text-white/65">{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-black">{text.nav.cta}</a></div></MotionDiv>}</AnimatePresence></header>;
}
