"use client";

import { AnimatePresence, motion as motionLib, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Building2,
  CalendarCheck2,
  Check,
  ClipboardList,
  Eye,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageSquare,
  ShieldCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/Reveal";

type Language = "en" | "es";

const MotionDiv = motionLib.div as React.ElementType;
const MotionH1 = motionLib.h1 as React.ElementType;

const content = {
  en: {
    nav: { story: "Story", product: "Product", ai: "AI", roadmap: "Roadmap", team: "Team", contact: "Contact", cta: "Contact" },
    hero: {
      badge: "Building modern infrastructure for educational institutions",
      headline: "A new operating layer for schools.",
      subtitle: "We are building NUVRA, an AI-assisted platform that helps educational institutions manage students, attendance, reports, permissions, communications and administrative workflows from one secure system.",
      note: "Started from a real school environment in Buenos Aires.",
      primary: "Contact us",
      secondary: "Our story",
      label: "The operational layer",
      items: ["Students", "Attendance", "Reports", "Permissions", "AI summaries", "Secure roles"],
    },
    why: {
      eyebrow: "01 / Why we started",
      title: "The hardest problems are often hidden in the everyday.",
      text: "We saw how many school processes still depend on disconnected tools, manual spreadsheets, paper records and informal communication. These problems are not abstract for us — they come from real day-to-day school operations.",
      support: "NUVRA started as a way to solve practical problems first: organizing information, reducing manual work and giving school teams better visibility over their operations.",
      quote: "We are not just digitizing paperwork. We are building modern operational infrastructure for schools.",
    },
    school: {
      eyebrow: "02 / Born inside a real school",
      title: "Built from the inside of a real school environment.",
      text: "Our first real-world validation began at E.E.S.T. N°1 Manuel Belgrano, a technical high school in Buenos Aires, Argentina. That environment helped us understand real workflows: student records, attendance, reports, permissions, roles, administrative tasks and the friction that appears when information is scattered.",
      note: "This first pilot is helping us design NUVRA around real institutional needs, not assumptions.",
      timeline: [["Real school workflows", "Listen to what the day actually demands."], ["Prototype and validation", "Turn practical friction into product insight."], ["Pilot preparation", "Shape an early implementation with care."], ["Scalable product vision", "Build foundations that can adapt across institutions."]],
    },
    product: {
      eyebrow: "03 / What NUVRA does",
      title: "What NUVRA helps schools manage.",
      subtitle: "A single operational layer for the workflows that schools handle every day.",
      features: [["Student records", "Keep the context around each student easier to access."], ["Attendance", "Make daily attendance information clearer and more actionable."], ["Reports", "Bring recurring reporting closer to the real workflow."], ["Permissions", "Make requests, review and follow-up easier to coordinate."], ["Roles and access", "Give each person the right view of the work."], ["Internal communication", "Reduce the gaps between teams and information."], ["Administrative dashboards", "Give school leadership a calmer operational picture."], ["Future AI workflows", "Add assistance where it is useful and accountable."]],
    },
    ai: {
      eyebrow: "04 / AI for school operations",
      title: "AI where it actually helps.",
      text: "Our goal is not to replace school staff. We want AI to support repetitive administrative work, help summarize information, draft reports, surface relevant context and make school data easier to understand.",
      cards: ["Report drafting", "Administrative summaries", "Context-aware assistance", "Human approval and control"],
      note: "This is a product vision and roadmap, grounded in practical workflows rather than overpromised automation.",
    },
    roadmap: {
      eyebrow: "05 / Roadmap",
      title: "What we are building next.",
      items: ["Stabilize the school management core", "Improve reporting and administrative workflows", "Add AI-assisted summaries and report generation", "Prepare pilots with real educational institutions", "Build a secure foundation for sensitive school data"],
    },
    team: {
      eyebrow: "06 / The team",
      title: "A young technical team building from Buenos Aires.",
      text: "We are a student-founded technical team combining software development, product thinking and direct experience inside educational environments.",
      members: [["Francisco Ulises González Feldman", "Founder / Technical Lead", "Product / Engineering"], ["Santino Conejo Palacios", "Co-founder", "Co-founder / Product"], ["Benjamin Tomas Ison Iannello", "Early team", "Brand / Design"], ["Martin Valentino Lissi", "Early team", "Engineering"], ["Agustin Morales", "Early team", "Operations"]],
    },
    contact: { eyebrow: "07 / Contact", title: "Building with schools, not around them.", text: "We are preparing NUVRA for real educational workflows and early pilots. For partnerships, pilots, startup programs or product conversations, reach out to the team.", button: "Contact us", footnote: "Partnerships · Pilots · Startup programs" },
    footer: "Nuvra Academy — Building NUVRA for educational institutions.",
  },
  es: {
    nav: { story: "Historia", product: "Producto", ai: "IA", roadmap: "Roadmap", team: "Equipo", contact: "Contacto", cta: "Contactar" },
    hero: {
      badge: "Construyendo infraestructura moderna para instituciones educativas",
      headline: "Una nueva capa operativa para escuelas.",
      subtitle: "Estamos construyendo NUVRA, una plataforma asistida por IA que ayuda a instituciones educativas a gestionar estudiantes, asistencia, reportes, permisos, comunicaciones y procesos administrativos desde un sistema seguro.",
      note: "Nacido desde un entorno escolar real en Buenos Aires.",
      primary: "Contactanos",
      secondary: "Nuestra historia",
      label: "La capa operativa",
      items: ["Estudiantes", "Asistencia", "Reportes", "Permisos", "Resúmenes IA", "Roles seguros"],
    },
    why: {
      eyebrow: "01 / Por qué empezamos",
      title: "Los problemas más difíciles suelen estar escondidos en lo cotidiano.",
      text: "Vimos cómo muchos procesos escolares todavía dependen de herramientas desconectadas, planillas manuales, registros en papel y comunicación informal. Para nosotros estos problemas no son abstractos: salen del día a día real de una escuela.",
      support: "NUVRA empezó como una forma de resolver problemas prácticos primero: ordenar información, reducir trabajo manual y darle más visibilidad a los equipos escolares.",
      quote: "No estamos sólo digitalizando papeles. Estamos construyendo infraestructura operativa moderna para escuelas.",
    },
    school: {
      eyebrow: "02 / Nacido dentro de una escuela real",
      title: "Construido desde el interior de un entorno escolar real.",
      text: "Nuestra primera validación real comenzó en la E.E.S.T. N°1 Manuel Belgrano, una escuela técnica en Buenos Aires, Argentina. Ese entorno nos ayudó a entender flujos reales: registros de estudiantes, asistencia, reportes, permisos, roles, tareas administrativas y la fricción que aparece cuando la información está dispersa.",
      note: "Este primer piloto nos ayuda a diseñar NUVRA alrededor de necesidades institucionales reales, no de suposiciones.",
      timeline: [["Flujos escolares reales", "Escuchar lo que exige el día a día."], ["Prototipo y validación", "Convertir fricciones prácticas en aprendizajes de producto."], ["Preparación de piloto", "Diseñar una primera implementación con cuidado."], ["Visión de producto escalable", "Construir bases que puedan adaptarse a distintas instituciones."]],
    },
    product: {
      eyebrow: "03 / Qué hace NUVRA",
      title: "Qué ayuda a gestionar NUVRA.",
      subtitle: "Una capa operativa única para los flujos que las escuelas manejan todos los días.",
      features: [["Registros de estudiantes", "Mantener más accesible el contexto de cada estudiante."], ["Asistencia", "Hacer más clara y accionable la información diaria."], ["Reportes", "Acercar los reportes recurrentes al flujo real de trabajo."], ["Permisos", "Coordinar mejor solicitudes, revisión y seguimiento."], ["Roles y accesos", "Dar a cada persona la vista correcta del trabajo."], ["Comunicación interna", "Reducir las brechas entre equipos e información."], ["Paneles administrativos", "Dar a los directivos una visión operativa más clara."], ["Futuros flujos con IA", "Agregar asistencia donde sea útil y responsable."]],
    },
    ai: {
      eyebrow: "04 / IA para operaciones escolares",
      title: "IA donde realmente ayuda.",
      text: "Nuestro objetivo no es reemplazar al personal escolar. Queremos que la IA ayude en tareas administrativas repetitivas, resuma información, asista en la redacción de reportes, muestre contexto relevante y haga que los datos escolares sean más fáciles de entender.",
      cards: ["Redacción de reportes", "Resúmenes administrativos", "Asistencia con contexto", "Aprobación y control humano"],
      note: "Es una visión de producto y roadmap, basada en flujos prácticos y sin prometer automatizaciones que todavía no existen.",
    },
    roadmap: {
      eyebrow: "05 / Roadmap",
      title: "Qué estamos construyendo ahora.",
      items: ["Estabilizar el núcleo de gestión escolar", "Mejorar reportes y flujos administrativos", "Agregar resúmenes y reportes asistidos por IA", "Preparar pilotos con instituciones educativas reales", "Construir una base segura para datos escolares sensibles"],
    },
    team: {
      eyebrow: "06 / El equipo",
      title: "Un equipo técnico joven construyendo desde Buenos Aires.",
      text: "Somos un equipo técnico fundado por estudiantes, combinando desarrollo de software, pensamiento de producto y experiencia directa dentro de entornos educativos.",
      members: [["Francisco Ulises González Feldman", "Founder / Technical Lead", "Product / Engineering"], ["Santino Conejo Palacios", "Co-founder", "Co-founder / Product"], ["Benjamin Tomas Ison Iannello", "Early team", "Brand / Design"], ["Martin Valentino Lissi", "Early team", "Engineering"], ["Agustin Morales", "Early team", "Operations"]],
    },
    contact: { eyebrow: "07 / Contacto", title: "Construyendo con las escuelas, no alrededor de ellas.", text: "Estamos preparando NUVRA para flujos educativos reales y primeros pilotos. Para alianzas, pilotos, programas para startups o conversaciones de producto, escribinos.", button: "Contactanos", footnote: "Alianzas · Pilotos · Programas para startups" },
    footer: "Nuvra Academy — Construyendo NUVRA para instituciones educativas.",
  },
} as const;

const featureIcons = [Users, CalendarCheck2, FileText, ShieldCheck, LockKeyhole, MessageSquare, LayoutDashboard, BrainCircuit];
const aiIcons = [FileText, ClipboardList, Eye, ShieldCheck];

function ArrowLink({ children, href, primary = false }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return <a href={href} className={`${primary ? "button-primary" : "button-secondary"} focus-ring group inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold`}>{children}<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
}

function initials(name: string) {
  return name.split(" ").slice(0, 2).map((word) => word[0]).join("");
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const text = content[language];
  const reduceMotion = useReducedMotion();
  const navLinks = [["#story", text.nav.story], ["#product", text.nav.product], ["#ai", text.nav.ai], ["#roadmap", text.nav.roadmap], ["#team", text.nav.team], ["#contact", text.nav.contact]];

  return <main id="top" className="relative min-h-screen bg-ink">
    <div className="pointer-events-none fixed inset-0 -z-20 site-grid" /><div className="pointer-events-none absolute left-1/2 top-[-24rem] -z-10 h-[54rem] w-[54rem] -translate-x-1/2 hero-glow" />
    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-ink/80 backdrop-blur-xl"><nav className="mx-auto flex h-[78px] w-full max-w-7xl items-center justify-between px-6 lg:px-10"><a href="#top" className="focus-ring logo-surface flex items-center rounded-lg px-2 py-1" aria-label="Nuvra Academy home"><Logo priority className="h-9" /></a><div className="hidden items-center gap-6 text-[11px] text-white/50 xl:flex">{navLinks.map(([href, label]) => <a key={href} href={href} className="focus-ring transition-colors hover:text-white">{label}</a>)}</div><div className="flex items-center gap-2"><div className="flex rounded-full border border-white/10 bg-white/[.04] p-1 text-[10px] font-bold tracking-[.12em]">{(["en", "es"] as Language[]).map((option) => <button key={option} onClick={() => setLanguage(option)} className={`focus-ring rounded-full px-2.5 py-1.5 uppercase transition-colors ${language === option ? "bg-white text-black" : "text-white/40 hover:text-white"}`} aria-pressed={language === option}>{option}</button>)}</div><a href="#contact" className="button-primary hidden rounded-full px-4 py-2 text-[11px] font-semibold sm:inline-flex">{text.nav.cta}</a><button onClick={() => setMenuOpen((open) => !open)} className="focus-ring rounded-full border border-white/10 p-2 text-white/70 xl:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></nav><AnimatePresence>{menuOpen && <MotionDiv initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/[.07] xl:hidden"><div className="mx-auto flex max-w-7xl flex-col px-6 py-3">{navLinks.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/[.06] py-3 text-sm text-white/65">{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-black">{text.nav.cta}</a></div></MotionDiv>}</AnimatePresence></header>

    <AnimatePresence mode="wait"><MotionDiv key={language} initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: .22 }}>
      <section className="relative mx-auto grid min-h-[calc(100vh-78px)] w-full max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.03fr_.97fr] lg:px-10 lg:pb-28 lg:pt-24"><div className="max-w-2xl"><Reveal><div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/[.07] px-3 py-1.5 text-[10px] font-semibold tracking-[.04em] text-cyan-soft"><span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#91d2f7]" />{text.hero.badge}</div></Reveal><Reveal delay={.06}><Logo priority className="mb-8 h-20 sm:h-28" /></Reveal><MotionH1 initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12, duration: .7 }} className="display-title max-w-2xl"><span className="cyan-gradient">{text.hero.headline.split(".")[0]}.</span></MotionH1><p className="mt-9 max-w-xl text-base leading-7 text-white/55 sm:text-lg">{text.hero.subtitle}</p><div className="mt-9 flex flex-wrap gap-3"><ArrowLink href="#contact" primary>{text.hero.primary}</ArrowLink><ArrowLink href="#story">{text.hero.secondary}</ArrowLink></div><p className="mt-12 flex items-center gap-3 text-xs text-white/35"><span className="h-px w-8 bg-cyan/60" />{text.hero.note}</p></div><Reveal className="relative flex items-center justify-center lg:justify-end" delay={.12}><div className="absolute h-[22rem] w-[22rem] rounded-full border border-white/[.07] sm:h-[31rem] sm:w-[31rem]" /><div className="absolute h-[17rem] w-[17rem] rounded-full border border-dashed border-cyan/20 sm:h-[25rem] sm:w-[25rem]" /><div className="absolute h-[20rem] w-[20rem] rounded-full bg-cyan/[.06] blur-3xl sm:h-[28rem] sm:w-[28rem]" /><div className="glass-card soft-glow relative w-full max-w-[500px] rounded-3xl p-5 sm:p-7"><div className="flex items-center justify-between border-b border-white/10 pb-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-xs font-semibold text-cyan">N</div><div><p className="text-sm font-medium text-white/85">NUVRA</p><p className="text-[10px] text-white/35">{text.hero.label}</p></div></div><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[9px] text-emerald-200">Early build</span></div><div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">{text.hero.items.map((item, index) => <div key={item} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-4"><span className="number-label">0{index + 1}</span><p className="mt-7 text-xs leading-5 text-white/70">{item}</p></div>)}</div><div className="mt-3 flex items-center justify-between rounded-2xl border border-cyan/15 bg-cyan/[.05] px-4 py-3"><div className="flex items-center gap-2 text-xs text-white/70"><Workflow className="h-4 w-4 text-cyan" />One secure system</div><ArrowRight className="h-4 w-4 text-cyan/70" /></div></div></Reveal></section>

      <section id="story" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]"><Reveal><p className="eyebrow">{text.why.eyebrow}</p><div className="mt-24 hidden text-8xl font-light tracking-[-.12em] text-white/[.07] lg:block">01</div></Reveal><Reveal className="max-w-3xl"><h2 className="section-title">{text.why.title}</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-white/55">{text.why.text}</p><p className="mt-7 max-w-2xl text-base leading-7 text-white/75">{text.why.support}</p><div className="mt-12 max-w-2xl rounded-2xl border-l-2 border-cyan/70 bg-cyan/[.04] px-6 py-5"><span className="quote-mark">“</span><p className="-mt-4 text-xl leading-8 tracking-[-.03em] text-white/85">{text.why.quote}</p></div></Reveal></div></section>

      <section className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]"><Reveal><p className="eyebrow">{text.school.eyebrow}</p><div className="mt-20 flex items-center gap-4 text-cyan"><Building2 className="h-7 w-7" /><span className="text-sm font-medium">Buenos Aires, Argentina</span></div></Reveal><Reveal className="max-w-3xl"><h2 className="section-title">{text.school.title}</h2><p className="mt-8 text-lg leading-8 text-white/55">{text.school.text}</p><p className="mt-8 border-l border-white/20 pl-5 text-sm leading-6 text-white/70">{text.school.note}</p><div className="mt-14 border-l border-cyan/35 pl-6">{text.school.timeline.map(([title, description], index) => <div key={title} className="relative pb-9 last:pb-0"><span className="absolute -left-[2rem] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/40 bg-ink text-[10px] text-cyan">{index + 1}</span><p className="text-sm font-medium text-white/85">{title}</p><p className="mt-1 text-xs leading-5 text-white/35">{description}</p></div>)}</div></Reveal></div></section>

      <section id="product" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">{text.product.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{text.product.title}</h2><p className="mt-8 max-w-md text-lg leading-8 text-white/50">{text.product.subtitle}</p><p className="mt-14 flex items-center gap-2 text-sm text-cyan">Built around the work <ArrowRight className="h-4 w-4" /></p></Reveal><div className="grid gap-3 sm:grid-cols-2">{text.product.features.map(([name, description], index) => { const Icon = featureIcons[index]; return <Reveal key={name} delay={index * .035}><MotionDiv whileHover={{ y: -4 }} className="feature-card glass-card group rounded-2xl p-5"><div className="flex items-start justify-between"><Icon className="h-5 w-5 text-cyan/80 transition-transform group-hover:scale-110" /><span className="number-label">0{index + 1}</span></div><p className="mt-12 text-sm font-medium text-white/85">{name}</p><p className="mt-2 text-xs leading-5 text-white/35">{description}</p></MotionDiv></Reveal>; })}</div></div></section>

      <section id="ai" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr]"><Reveal><p className="eyebrow">{text.ai.eyebrow}</p><h2 className="section-title mt-12 max-w-2xl">{text.ai.title}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{text.ai.text}</p><p className="mt-9 max-w-lg border-l border-cyan/50 pl-5 text-xs leading-6 text-white/40">{text.ai.note}</p></Reveal><div className="grid gap-3 sm:grid-cols-2">{text.ai.cards.map((card, index) => { const Icon = aiIcons[index]; return <Reveal key={card} delay={index * .05}><MotionDiv whileHover={{ y: -3 }} className="feature-card glass-card rounded-2xl p-5"><Icon className="h-5 w-5 text-cyan" /><p className="mt-14 text-sm leading-5 text-white/80">{card}</p><div className="mt-4 h-px w-10 bg-cyan/50" /></MotionDiv></Reveal>; })}</div></div></section>

      <section id="roadmap" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><Reveal><p className="eyebrow">{text.roadmap.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{text.roadmap.title}</h2></Reveal><Reveal><div className="grid gap-3">{text.roadmap.items.map((item, index) => <div key={item} className="glass-card flex items-center gap-4 rounded-2xl px-5 py-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan/30 text-[10px] text-cyan">0{index + 1}</span><p className="text-sm text-white/75">{item}</p><Check className="ml-auto h-4 w-4 text-cyan/50" /></div>)}</div></Reveal></div></section>

      <section id="team" className="section-rule mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr]"><Reveal><p className="eyebrow">{text.team.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{text.team.title}</h2><p className="mt-8 max-w-md text-base leading-7 text-white/50">{text.team.text}</p></Reveal><div className="grid gap-3 sm:grid-cols-2">{text.team.members.map(([name, role, tag], index) => <Reveal key={name} delay={index * .04}><MotionDiv whileHover={{ y: -3 }} className={`glass-card rounded-2xl p-5 ${index === 0 ? "sm:col-span-2" : ""}`}><div className="flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 text-xs font-semibold text-cyan">{initials(name)}</div><span className="number-label">0{index + 1}</span></div><p className="mt-8 text-sm font-medium text-white/85">{name}</p><p className="mt-1 text-xs text-white/45">{role}</p><p className="mt-5 inline-flex rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/35">{tag}</p></MotionDiv></Reveal>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-10 lg:pb-36 lg:pt-32"><Reveal><div className="relative overflow-hidden rounded-3xl border border-cyan/20 bg-cyan/[.06] px-7 py-12 soft-glow sm:px-12 lg:px-16 lg:py-16"><div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" /><div className="relative"><p className="eyebrow">{text.contact.eyebrow}</p><h2 className="mt-12 max-w-3xl text-5xl font-medium leading-[.96] tracking-[-.075em] sm:text-7xl">{text.contact.title}</h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/55">{text.contact.text}</p><a className="button-primary focus-ring group mt-10 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold" href="mailto:founders@nuvraacademy.com.ar">{text.contact.button}<ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><p className="mt-10 text-sm text-cyan">founders@nuvraacademy.com.ar</p><p className="mt-3 text-xs text-white/35">{text.contact.footnote}</p></div></div></Reveal></section>
    </MotionDiv></AnimatePresence>

    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-4 border-t border-white/[.07] px-6 py-8 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-10"><p>{text.footer}</p><p>nuvraacademy.com.ar · © 2026 Nuvra Academy</p></footer>
  </main>;
}
