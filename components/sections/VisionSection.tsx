import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

export function VisionSection({ text }: { text: Copy }) {
  return <section id="vision" className="section-rule mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><Reveal><p className="eyebrow">{text.vision.eyebrow}</p><div className="mt-12 max-w-6xl"><h2 className="text-[clamp(2.8rem,7vw,7.2rem)] font-medium leading-[.96] tracking-[-.08em] text-white">{text.vision.title}</h2><p className="mt-10 max-w-3xl text-[clamp(1.05rem,2vw,1.5rem)] leading-8 text-white/55 sm:leading-9">{text.vision.text}</p><p className="mt-10 max-w-2xl border-l-2 border-cyan pl-5 text-base leading-7 text-cyan-soft sm:text-lg sm:leading-8">{text.vision.closing}</p></div></Reveal></section>;
}
