"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import type { Language, SiteCopy } from "@/lib/site-content";

export function Navbar({ text, language, onLanguageChange }: { text: SiteCopy; language: Language; onLanguageChange: (language: Language) => void }) {
  const [open, setOpen] = useState(false);
  const links = [["#product", text.nav.product], ["#school", text.nav.school], ["#approach", text.nav.approach], ["#team", text.nav.team]];
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="site-header">
    <nav className="navigation page-width" aria-label={language === "en" ? "Main navigation" : "Navegación principal"}>
      <a href="#top" className="brand-link" aria-label="Nuvra Academy"><Logo className="nav-logo" tone="light" priority /></a>
      <div className="desktop-links">{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</div>
      <div className="nav-actions">
        <div className="language-switch" aria-label={language === "en" ? "Language" : "Idioma"}>{(["en", "es"] as const).map(option => <button key={option} type="button" lang={option} aria-label={option === "en" ? "English" : "Español"} aria-pressed={language === option} onClick={() => onLanguageChange(option)}>{option.toUpperCase()}</button>)}</div>
        <a className="nav-contact" href="#contact">{text.nav.contact}</a>
        <button type="button" className="menu-toggle" aria-controls="mobile-navigation" aria-expanded={open} aria-label={open ? text.nav.close : text.nav.open} onClick={() => setOpen(value => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </nav>
    {open && <div className="mobile-navigation" id="mobile-navigation">{links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>{text.nav.contact}</a></div>}
  </header>;
}
