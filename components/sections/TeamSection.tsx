import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

export function TeamSection({ text }: { text: Copy }) {
  return <section id="team" className="section-rule mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">{text.team.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{text.team.title}</h2><p className="mt-8 max-w-md text-lg leading-8 text-white/55">{text.team.text}</p></Reveal><ul className="min-w-0 border-t border-white/10">{text.team.members.map(([name, role], index) => <Reveal key={name} delay={index * .035}><li className="team-row group flex min-w-0 items-center gap-4 border-b border-white/10 py-5"><span className="h-2 w-2 shrink-0 rounded-full bg-cyan" /><div className="min-w-0"><p className="break-words text-base tracking-[-.02em] text-white/85">{name}</p><p className="mt-1 text-xs text-white/40">{role}</p></div><ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-white/20 transition-colors group-hover:text-cyan" /></li></Reveal>)}</ul></div></section>;
}
