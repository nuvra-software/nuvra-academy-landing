"use client";

import { AnimatePresence, motion as motionLib, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarCheck2,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const MotionDiv = motionLib.div as React.ElementType;
const MotionSpan = motionLib.span as React.ElementType;
const MotionH1 = motionLib.h1 as React.ElementType;
const motion = { div: MotionDiv, span: MotionSpan, h1: MotionH1 };

type Language = "en" | "es";

const copy = {
  en: {
    nav: { problem: "Problem", solution: "Solution", pilot: "Pilot", ai: "AI", team: "Team", contact: "Contact", cta: "Contact" },
    hero: {
      badge: "Building NUVRA for educational institutions",
      headline: "AI-assisted school management for modern educational institutions.",
      subtitle: "We are building NUVRA, a platform that helps schools manage students, attendance, reports, permissions, communications and administrative workflows from one modern system.",
      primary: "Contact us", secondary: "Learn more", footnote: "A calmer operating layer for education.",
      dashboard: "Overview", week: "This week", attendance: "Attendance", reports: "Reports generated", permissions: "Pending permissions", students: "Students", roles: "Active roles",
    },
    problem: {
      eyebrow: "01 / The problem", title: "Schools deserve\nbetter tools.",
      text: "Many educational institutions still depend on fragmented systems, spreadsheets, paper-based processes and disconnected communication channels. This makes daily operations slower, harder to audit and more difficult to scale.",
      pains: ["Fragmented information", "Manual administrative work", "Limited visibility for staff and leadership"],
    },
    solution: {
      eyebrow: "02 / Our solution", title: "A modern platform for real school workflows.",
      text: "NUVRA centralizes key school operations in a secure, role-based web platform designed around the needs of students, staff and administrators.", label: "One system. Many workflows.",
    },
    features: ["Student management", "Attendance", "Reports", "Permissions", "Role-based access", "Administrative dashboards", "Communications", "AI-assisted workflows"],
    pilot: {
      eyebrow: "03 / First pilot", title: "Starting from a real school environment.",
      text: "Our first implementation started with a technical high school in Buenos Aires, Argentina. This pilot helps us validate real administrative needs, from student records and reports to permissions, roles and day-to-day school operations.",
      tag: "Pilot / Buenos Aires, AR", steps: ["Real school workflow", "Prototype and validation", "Preparing pilot implementation"], note: "School name intentionally private at this stage.",
    },
    ai: {
      eyebrow: "04 / AI vision", title: "Human-centered AI for education operations.",
      text: "We plan to use AI to help schools generate reports, summarize administrative information, assist staff with internal workflows and make educational data easier to understand — while keeping privacy, security and human control at the center.",
      cards: ["Report generation", "Administrative summaries", "Workflow assistance", "Privacy and human control"],
    },
    team: {
      eyebrow: "05 / The team", title: "Built by a young technical team from Buenos Aires.",
      members: [["Francisco Ulises González Feldman", "Founder / Technical Lead"], ["Santino Conejo Palacios", "Co-founder"], ["Benjamin Tomas Ison Iannello", "Early team"], ["Martin Valentino Lissi", "Early team"], ["Agustin Morales", "Early team"]],
    },
    contact: { eyebrow: "06 / Contact", title: "Let’s build better school operations.", text: "For partnerships, pilots or startup program inquiries, contact us.", button: "Contact us", footnote: "Partnerships · Pilots · Startup programs" },
    footer: "Nuvra Academy — Building NUVRA for educational institutions.",
  },
  es: {
    nav: { problem: "Problema", solution: "Solución", pilot: "Piloto", ai: "IA", team: "Equipo", contact: "Contacto", cta: "Contactar" },
    hero: {
      badge: "Construyendo NUVRA para instituciones educativas",
      headline: "Gestión escolar asistida por IA para instituciones educativas modernas.",
      subtitle: "Estamos construyendo NUVRA, una plataforma que ayuda a las escuelas a gestionar estudiantes, asistencia, reportes, permisos, comunicaciones y procesos administrativos desde un sistema web moderno.",
      primary: "Contactanos", secondary: "Conocer más", footnote: "Una capa operativa más simple para la educación.",
      dashboard: "Resumen", week: "Esta semana", attendance: "Asistencia", reports: "Reportes generados", permissions: "Permisos pendientes", students: "Estudiantes", roles: "Roles activos",
    },
    problem: {
      eyebrow: "01 / El problema", title: "Las escuelas merecen\nmejores herramientas.",
      text: "Muchas instituciones educativas todavía dependen de sistemas fragmentados, planillas, procesos en papel y canales de comunicación desconectados. Esto vuelve la operación diaria más lenta, más difícil de auditar y más compleja de escalar.",
      pains: ["Información fragmentada", "Trabajo administrativo manual", "Poca visibilidad para equipos y directivos"],
    },
    solution: {
      eyebrow: "02 / Nuestra solución", title: "Una plataforma moderna para procesos escolares reales.",
      text: "NUVRA centraliza operaciones escolares clave en una plataforma web segura, basada en roles y pensada para las necesidades de estudiantes, personal administrativo y directivos.", label: "Un sistema. Muchos procesos.",
    },
    features: ["Gestión de estudiantes", "Asistencia", "Reportes", "Permisos", "Acceso por roles", "Paneles administrativos", "Comunicaciones", "Flujos asistidos por IA"],
    pilot: {
      eyebrow: "03 / Primer piloto", title: "Empezamos desde un entorno escolar real.",
      text: "Nuestra primera implementación comenzó con una escuela técnica en Buenos Aires, Argentina. Este piloto nos ayuda a validar necesidades administrativas reales: registros de estudiantes, reportes, permisos, roles y operaciones escolares del día a día.",
      tag: "Piloto / Buenos Aires, AR", steps: ["Procesos escolares reales", "Prototipo y validación", "Preparación de implementación piloto"], note: "El nombre de la escuela se mantiene privado por ahora.",
    },
    ai: {
      eyebrow: "04 / Visión IA", title: "IA centrada en las personas para la gestión educativa.",
      text: "Planeamos usar IA para ayudar a las escuelas a generar reportes, resumir información administrativa, asistir al personal en flujos internos y hacer que los datos educativos sean más fáciles de entender, manteniendo la privacidad, la seguridad y el control humano como prioridad.",
      cards: ["Generación de reportes", "Resúmenes administrativos", "Asistencia en flujos internos", "Privacidad y control humano"],
    },
    team: {
      eyebrow: "05 / El equipo", title: "Construido por un equipo técnico joven de Buenos Aires.",
      members: [["Francisco Ulises González Feldman", "Founder / Technical Lead"], ["Santino Conejo Palacios", "Co-founder"], ["Benjamin Tomas Ison Iannello", "Early team"], ["Martin Valentino Lissi", "Early team"], ["Agustin Morales", "Early team"]],
    },
    contact: { eyebrow: "06 / Contacto", title: "Construyamos mejores operaciones escolares.", text: "Para alianzas, pilotos o consultas de programas para startups, escribinos.", button: "Contactanos", footnote: "Alianzas · Pilotos · Programas para startups" },
    footer: "Nuvra Academy — Construyendo NUVRA para instituciones educativas.",
  },
} as const;

const featureIcons = [Users, CalendarCheck2, FileText, ShieldCheck, LockKeyhole, LayoutDashboard, MessageSquare, BrainCircuit];
const aiIcons = [FileText, LayoutDashboard, Sparkles, ShieldCheck];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <MotionDiv className={className} initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>{children}</MotionDiv>;
}

function ArrowLink({ children, href, primary = false }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return <a href={href} className={`${primary ? "button-primary" : "button-secondary"} button-link group focus-ring inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold`}>{children}<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
}

function DashboardMockup({ t }: { t: (typeof copy)[Language]["hero"] }) {
  const cards = [[t.attendance, "94%"], [t.reports, "128"], [t.permissions, "12"], [t.students, "1,240"]];
  return <MotionDiv initial={{ opacity: 0, y: 24, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="dashboard-shell glass-card relative z-10 w-full max-w-[520px] overflow-hidden rounded-2xl p-3 shadow-2xl shadow-indigo-950/30 sm:p-4">
    <div className="dashboard-topbar flex items-center justify-between border-b border-white/[.08] px-2 pb-3"><div className="flex items-center gap-2"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /><span className="h-2 w-2 rounded-full bg-white/20" /></div><span className="ml-3 text-[10px] font-medium text-white/50">NUVRA / {t.dashboard}</span></div><span className="rounded-full border border-white/10 px-2 py-1 text-[9px] text-white/35">{t.week}</span></div>
    <div className="grid grid-cols-2 gap-2 p-1 pt-3 sm:grid-cols-4">{cards.map(([label, value], i) => <div key={label} className="rounded-xl border border-white/[.07] bg-white/[.035] p-3"><p className="text-[9px] leading-4 text-white/40">{label}</p><p className="mt-2 text-lg font-medium tracking-[-.05em] text-white/90">{value}</p><div className={`mt-2 h-1 rounded-full ${i === 2 ? "bg-amber-300/60" : "bg-electric/80"}`} style={{ width: `${[94, 76, 38, 83][i]}%` }} /></div>)}</div>
    <div className="mt-2 grid gap-2 p-1 sm:grid-cols-[1.25fr_.75fr]"><div className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"><div className="flex items-center justify-between"><p className="text-[10px] font-medium text-white/65">Weekly attendance</p><span className="text-[9px] text-emerald-300">+4.8%</span></div><div className="mt-5 flex h-20 items-end gap-1.5">{[38, 52, 45, 69, 58, 80, 68, 91, 76, 84, 71, 94].map((height, i) => <MotionSpan key={i} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ delay: 0.65 + i * 0.035, duration: 0.45 }} className="flex-1 rounded-t bg-gradient-to-t from-electric/25 to-electric/90" />)}</div><div className="mt-2 flex justify-between text-[8px] text-white/25"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div></div><div className="rounded-xl border border-white/[.07] bg-white/[.025] p-4"><p className="text-[10px] font-medium text-white/65">{t.roles}</p><div className="mt-5 flex items-center justify-center"><div className="relative flex h-20 w-20 items-center justify-center rounded-full" style={{ background: "conic-gradient(#91a9ff 0 72%, rgba(255,255,255,.07) 72% 100%)" }}><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#11131d] text-sm font-medium">6</div></div></div><p className="mt-2 text-center text-[9px] text-white/35">staff & leadership</p></div></div>
  </MotionDiv>;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];
  const reduceMotion = useReducedMotion();
  const navLinks = [["#problem", t.nav.problem], ["#solution", t.nav.solution], ["#pilot", t.nav.pilot], ["#ai", t.nav.ai], ["#team", t.nav.team], ["#contact", t.nav.contact]];

  return <main id="top">
    <div className="pointer-events-none fixed inset-0 -z-20 page-grid" /><div className="pointer-events-none absolute left-1/2 top-[-22rem] -z-10 h-[52rem] w-[52rem] -translate-x-1/2 hero-glow" />
    <header className="sticky top-0 z-50 border-b border-white/[.06] bg-ink/75 backdrop-blur-xl"><nav className="mx-auto flex h-[74px] w-full max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Main navigation"><a href="#top" className="focus-ring flex items-center gap-3" aria-label="Nuvra Academy home"><span className="brand-mark flex h-8 w-8 items-center justify-center rounded-lg border border-white/25 bg-white/[.06] text-[11px] font-bold tracking-[-.08em]">N</span><span className="text-sm font-semibold tracking-[-.03em]">Nuvra <span className="font-normal text-white/45">Academy</span></span></a><div className="hidden items-center gap-6 text-[11px] text-white/50 lg:flex">{navLinks.map(([href, label]) => <a key={href} className="focus-ring transition-colors hover:text-white" href={href}>{label}</a>)}</div><div className="flex items-center gap-2"><div className="flex items-center rounded-full border border-white/10 bg-white/[.04] p-1 text-[10px] font-bold tracking-[.12em]">{(["en", "es"] as Language[]).map((option) => <button key={option} onClick={() => setLanguage(option)} className={`focus-ring rounded-full px-2.5 py-1.5 uppercase transition-colors ${language === option ? "bg-white text-black" : "text-white/40 hover:text-white"}`} aria-label={`Switch to ${option === "en" ? "English" : "Spanish"}`} aria-pressed={language === option}>{option}</button>)}</div><a className="button-primary hidden rounded-full px-4 py-2 text-[11px] font-semibold sm:inline-flex" href="#contact">{t.nav.cta}</a><button className="focus-ring rounded-full border border-white/10 p-2 text-white/70 lg:hidden" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></nav><AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/[.06] lg:hidden"><div className="mx-auto flex max-w-7xl flex-col px-6 py-3">{navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/[.06] py-3 text-sm text-white/65">{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-black">{t.nav.cta}</a></div></motion.div>}</AnimatePresence></header>
    <AnimatePresence mode="wait"><motion.div key={language} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.22 }}>
      <section className="relative mx-auto grid min-h-[calc(100vh-74px)] w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1fr_1fr] lg:px-10 lg:pb-28 lg:pt-24"><div className="relative z-10 max-w-2xl"><motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/[.08] px-3 py-1.5 text-[10px] font-semibold tracking-[.05em] text-electric"><span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_#8ea7ff]" />{t.hero.badge}</motion.div><motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .7 }} className="display-title"><span className="soft-gradient">Nuvra</span><br />Academy<span className="text-electric">.</span></motion.h1><p className="mt-9 max-w-xl text-2xl font-light leading-[1.13] tracking-[-.045em] text-white/90 sm:text-3xl">{t.hero.headline}</p><p className="mt-6 max-w-xl text-base leading-7 text-white/50">{t.hero.subtitle}</p><div className="mt-9 flex flex-wrap gap-3"><ArrowLink href="#contact" primary>{t.hero.primary}</ArrowLink><ArrowLink href="#problem">{t.hero.secondary}</ArrowLink></div><div className="mt-14 flex items-center gap-3 text-xs text-white/35"><span className="h-px w-8 bg-white/25" />{t.hero.footnote}</div></div><div className="relative flex items-center justify-center lg:justify-end"><div className="hero-orbit absolute h-[24rem] w-[24rem] rounded-full border border-white/[.07] sm:h-[34rem] sm:w-[34rem]" /><div className="hero-orbit hero-orbit-delayed absolute h-[19rem] w-[19rem] rounded-full border border-dashed border-electric/15 sm:h-[29rem] sm:w-[29rem]" /><div className="absolute h-[20rem] w-[20rem] rounded-full bg-electric/[.08] blur-3xl sm:h-[30rem] sm:w-[30rem]" /><DashboardMockup t={t.hero} /></div></section>
      <section id="problem" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><Reveal><p className="eyebrow">{t.problem.eyebrow}</p><div className="mt-20 hidden text-8xl font-light tracking-[-.12em] text-white/[.08] lg:block">01</div></Reveal></div><Reveal className="max-w-3xl"><h2 className="section-title whitespace-pre-line">{t.problem.title}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{t.problem.text}</p><div className="mt-12 grid gap-3 sm:grid-cols-3">{t.problem.pains.map((pain, index) => <div key={pain} className="rounded-xl border border-white/10 bg-white/[.025] p-4"><p className="number-label">0{index + 1}</p><p className="mt-8 text-sm leading-5 text-white/75">{pain}</p></div>)}</div></Reveal></div></section>
      <section id="solution" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr]"><Reveal><p className="eyebrow">{t.solution.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{t.solution.title}</h2><p className="mt-8 max-w-md text-base leading-7 text-white/50">{t.solution.text}</p><p className="mt-14 text-sm font-medium text-electric">{t.solution.label} <ArrowRight className="ml-1 inline h-4 w-4" /></p></Reveal><div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{t.features.map((feature, index) => { const Icon = featureIcons[index]; return <Reveal key={feature} delay={index * .035}><motion.div whileHover={{ y: -4 }} className="feature-card glass-card group rounded-2xl p-5"><div className="mb-12 flex justify-between"><span className="number-label">0{index + 1}</span><Icon className="h-4 w-4 text-electric/70 transition-transform group-hover:scale-110" /></div><p className="text-sm font-medium text-white/85">{feature}</p></motion.div></Reveal>; })}</div></div></section>
      <section id="pilot" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16"><div className="absolute -right-20 -top-28 h-96 w-96 rounded-full bg-electric/10 blur-3xl" /><div className="relative grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">{t.pilot.eyebrow}</p><div className="mt-20 text-8xl font-light tracking-[-.1em] text-white/[.08]">AR<span className="align-top text-4xl text-white/25">01</span></div></Reveal><Reveal><span className="inline-flex rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.15em] text-electric">{t.pilot.tag}</span><h2 className="section-title mt-7 max-w-2xl">{t.pilot.title}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{t.pilot.text}</p><div className="mt-12 border-l border-electric/35 pl-5">{t.pilot.steps.map((step, index) => <div key={step} className="relative pb-8 last:pb-0"><span className="absolute -left-[1.66rem] top-0 flex h-5 w-5 items-center justify-center rounded-full border border-electric/40 bg-[#151729] text-[9px] text-electric">{index + 1}</span><p className="text-sm text-white/75">{step}</p><p className="mt-1 text-xs text-white/30">{index === 0 ? "Listen and learn from the day-to-day." : index === 1 ? "Turn insights into a useful product." : "Build the foundation for repeatable impact."}</p></div>)}</div><p className="mt-10 text-xs text-white/35">{t.pilot.note}</p></Reveal></div></div></section>
      <section id="ai" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr]"><Reveal><p className="eyebrow">{t.ai.eyebrow}</p><h2 className="section-title mt-12 max-w-2xl">{t.ai.title}</h2></Reveal><div><Reveal><p className="text-lg leading-8 text-white/55">{t.ai.text}</p></Reveal><div className="mt-12 grid gap-3 sm:grid-cols-2">{t.ai.cards.map((card, index) => { const Icon = aiIcons[index]; return <Reveal key={card} delay={index * .05}><motion.div whileHover={{ y: -3 }} className="feature-card glass-card rounded-2xl p-5"><Icon className="h-5 w-5 text-electric" /><p className="mt-12 text-sm leading-5 text-white/80">{card}</p></motion.div></Reveal>; })}</div></div></div></section>
      <section id="team" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]"><Reveal><p className="eyebrow">{t.team.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{t.team.title}</h2></Reveal><div className="grid gap-3 sm:grid-cols-2">{t.team.members.map(([name, role], index) => <Reveal key={name} delay={index * .04}><div className={`glass-card rounded-2xl p-5 ${index === 0 ? "sm:col-span-2" : ""}`}><div className="flex items-start justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/25 bg-electric/10 text-xs font-semibold text-electric">{name.split(" ").slice(0, 2).map((word) => word[0]).join("")}</div><span className="number-label">0{index + 1}</span></div><p className="mt-8 text-sm font-medium text-white/85">{name}</p><p className="mt-1 text-xs text-white/40">{role}</p></div></Reveal>)}</div></div></section>
      <section id="contact" className="section-rule mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32"><Reveal><div className="relative overflow-hidden rounded-3xl bg-[#eef1ff] px-7 py-12 text-[#11131c] sm:px-12 lg:px-16 lg:py-16"><div className="absolute -bottom-40 -right-24 h-96 w-96 rounded-full bg-[#a9b8ff] blur-3xl" /><div className="relative"><p className="eyebrow !text-[#586cbf] before:!bg-[#586cbf]">{t.contact.eyebrow}</p><h2 className="mt-12 max-w-3xl text-5xl font-medium leading-[.96] tracking-[-.07em] sm:text-7xl">{t.contact.title}</h2><p className="mt-7 max-w-md text-base leading-7 text-[#3b4051]/75">{t.contact.text}</p><a className="group focus-ring mt-10 inline-flex items-center rounded-full bg-[#11131c] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5" href="mailto:founders@nuvraacademy.com.ar">{t.contact.button}<ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><p className="mt-12 text-xs text-[#3b4051]/60">{t.contact.footnote} · nuvraacademy.com.ar</p></div></div></Reveal></section>
    </motion.div></AnimatePresence>
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-6 pb-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>{t.footer}</p><p>nuvraacademy.com.ar · © {new Date().getFullYear()} Nuvra Academy</p></footer>
  </main>;
}
