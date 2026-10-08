import { ArrowUpRight } from "lucide-react";

export function ArrowLink({ children, href, primary = false }: { children: React.ReactNode; href: string; primary?: boolean }) {
  return <a href={href} className={`${primary ? "button-primary" : "button-secondary"} focus-ring group inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold`}>{children}<ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>;
}
