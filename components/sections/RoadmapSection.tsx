import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

export function RoadmapSection({ text }: { text: Copy }) {
  return <section id="roadmap" className="section-rule mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36"><div className="grid gap-14 lg:grid-cols-[.62fr_1.38fr]"><Reveal><p className="eyebrow">{text.roadmap.eyebrow}</p><h2 className="section-title mt-12 max-w-lg">{text.roadmap.title}</h2></Reveal><Reveal delay={.08}><div className="roadmap-line grid gap-0 sm:grid-cols-4">{text.roadmap.items.map(([label, title], index) => <div key={label} className="relative border-l border-white/15 pb-8 pl-5 last:pb-0 sm:border-l-0 sm:border-t sm:pb-0 sm:pl-0 sm:pt-6 sm:pr-5"><span className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_#21c7d9] sm:left-0 sm:top-[-5px]" /><p className="text-[10px] font-bold tracking-[.16em] text-cyan">{label}</p><p className="mt-4 max-w-[150px] text-sm leading-5 text-white/70">{title}</p>{index < 3 && <ArrowRight className="absolute bottom-8 right-4 hidden h-4 w-4 text-white/20 sm:block sm:bottom-auto sm:right-4 sm:top-5" />}</div>)}</div></Reveal></div></section>;
}
