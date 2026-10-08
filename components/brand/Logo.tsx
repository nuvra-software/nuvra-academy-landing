import Image from "next/image";

type LogoProps = { variant?: "full" | "mark"; tone?: "light" | "dark"; className?: string; priority?: boolean };

export function Logo({ variant = "full", tone = "light", className = "", priority = false }: LogoProps) {
  // Keep the approved artwork, but use the transparent treatment so it can sit cleanly on the site background.
  return <Image src="/brand/nuvra-academy-logo-transparent.png" alt="Nuvra Academy" width={371} height={156} priority={priority} className={`${variant === "mark" ? "h-10" : ""} w-auto object-contain ${tone === "dark" ? "brightness-0" : ""} ${className}`} />;
}
