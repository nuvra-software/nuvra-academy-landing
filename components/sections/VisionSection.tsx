import { Reveal } from "@/components/ui/Reveal";
import type { Copy } from "@/lib/content";

export function VisionSection({ text }: { text: Copy }) {
  return <section id="vision" className="section-rule mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40"><Reveal><p className="eyebrow">{text.vision.eyebrow}</p><div className="mt-14 max-w-6xl"><h2 className="text-5xl font-medium leading-[.96] tracking-[-.08em] text-white sm:text-7xl lg:text-[7.2rem]">{text.vision.title}</h2><p className="mt-12 max-w-3xl text-xl leading-9 text-white/55 sm:text-2xl">{text.vision.text}</p><p className="mt-12 max-w-2xl border-l-2 border-cyan pl-5 text-lg leading-8 text-cyan-soft">{text.vision.closing}</p></div></Reveal></section>;
}
