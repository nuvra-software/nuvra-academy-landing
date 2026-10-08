import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

function initials(name: string) { return name.split(" ").slice(0, 2).map((word) => word[0]).join(""); }

export function TeamSection({ text }: { text: Copy }) {
  return <section id="team" className="section-rule mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]"><Reveal><p className="eyebrow">{text.team.eyebrow}</p><h2 className="section-title mt-12 max-w-xl">{text.team.title}</h2><p className="mt-8 max-w-md text-lg leading-8 text-white/55">{text.team.text}</p></Reveal><div className="border-t border-white/10">{text.team.members.map(([name, role], index) => <Reveal key={name} delay={index * .035}><div className="team-row group grid grid-cols-[3rem_1fr_auto] items-center gap-4 border-b border-white/10 py-5 sm:grid-cols-[4rem_1fr_auto]"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[.06] text-xs font-semibold text-cyan transition-colors group-hover:bg-cyan/15">{initials(name)}</div><div><p className="text-base tracking-[-.02em] text-white/85">{name}</p><p className="mt-1 text-xs text-white/40">{role}</p></div><ArrowUpRight className="h-4 w-4 text-white/20 transition-colors group-hover:text-cyan" /></div></Reveal>)}</div></div></section>;
}
