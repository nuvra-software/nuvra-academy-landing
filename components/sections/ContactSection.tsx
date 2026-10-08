import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

export function ContactSection({ text }: { text: Copy }) {
  return <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-32 lg:pt-36"><Reveal><div className="contact-panel relative overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#0d1726] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"><div className="absolute -bottom-36 -right-16 h-96 w-96 rounded-full bg-cyan/10 blur-3xl" /><div className="relative max-w-4xl"><p className="eyebrow">{text.contact.eyebrow}</p><h2 className="mt-12 max-w-4xl text-5xl font-medium leading-[.94] tracking-[-.08em] text-white sm:text-7xl">{text.contact.title}</h2><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{text.contact.text}</p><a href={`mailto:${text.contact.email}`} className="button-primary focus-ring group mt-10 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold">{text.contact.button}<ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a><div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-cyan"><Mail className="h-4 w-4" />{text.contact.email}</div></div></div></Reveal></section>;
}
