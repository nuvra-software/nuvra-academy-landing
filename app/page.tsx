"use client";

import { useState } from "react";

type Language = "en" | "es";

const content = {
  en: {
    tagline: "Building NUVRA for educational institutions.",
    description: "We are preparing a modern, AI-assisted school management platform for real educational workflows.",
    status: "Coming soon.",
    contact: "Contact",
    emailLabel: "Contact:",
  },
  es: {
    tagline: "Construyendo NUVRA para instituciones educativas.",
    description: "Estamos preparando una plataforma moderna de gestión escolar asistida por IA para flujos educativos reales.",
    status: "Próximamente.",
    contact: "Contacto",
    emailLabel: "Contacto:",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const text = content[language];

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden px-6 py-6 sm:px-10 sm:py-8">
      <div className="pointer-events-none absolute inset-0 -z-10 placeholder-grid" />
      <div className="pointer-events-none absolute left-1/2 top-[-20rem] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full placeholder-glow" />

      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="focus-ring text-sm font-medium tracking-[-.02em] text-white/90">Nuvra Academy</a>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-white/10 bg-white/[.04] p-1 text-[10px] font-semibold tracking-[.12em]">
            {(["en", "es"] as Language[]).map((option) => (
              <button key={option} onClick={() => setLanguage(option)} className={`focus-ring rounded-full px-3 py-1.5 uppercase transition-colors ${language === option ? "bg-white text-black" : "text-white/40 hover:text-white"}`} aria-pressed={language === option}>
                {option}
              </button>
            ))}
          </div>
          <a href="#contact" className="focus-ring hidden rounded-full border border-white/15 px-4 py-2 text-xs text-white/70 transition-colors hover:border-white/35 hover:text-white sm:inline-flex">{text.contact}</a>
        </div>
      </nav>

      <section id="top" className="flex flex-1 items-center justify-center py-24">
        <div className="placeholder-shell w-full max-w-2xl rounded-[2rem] px-7 py-12 text-center sm:px-14 sm:py-16">
          <div className="mx-auto mb-8 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/[.06] text-sm font-semibold tracking-[-.08em] text-white/90">N</div>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[.2em] text-electric">Nuvra Academy</p>
          <h1 className="mx-auto max-w-lg text-4xl font-medium leading-[.98] tracking-[-.07em] text-white sm:text-6xl">{text.tagline}</h1>
          <p className="mx-auto mt-7 max-w-md text-base leading-7 text-white/50 sm:text-lg">{text.description}</p>
          <p className="mt-10 text-lg font-medium tracking-[-.03em] text-white/85">{text.status}</p>
          <div id="contact" className="mx-auto mt-12 max-w-sm border-t border-white/10 pt-6">
            <p className="text-[10px] uppercase tracking-[.16em] text-white/35">{text.emailLabel}</p>
            <a className="focus-ring mt-3 inline-block text-sm text-electric transition-colors hover:text-white" href="mailto:founders@nuvraacademy.com.ar">founders@nuvraacademy.com.ar</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-2 border-t border-white/[.07] pt-5 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>Nuvra Academy</p>
        <p>nuvraacademy.com.ar · © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
