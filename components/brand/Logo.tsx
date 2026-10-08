import Image from "next/image";

type LogoProps = { variant?: "full" | "mark"; className?: string; priority?: boolean };

export function Logo({ variant = "full", className = "", priority = false }: LogoProps) {
  // Keep the approved artwork, but use the transparent treatment so it can sit cleanly on the site background.
  return <Image src="/brand/nuvra-academy-logo-transparent.png" alt="Nuvra Academy" width={371} height={156} priority={priority} className={`${variant === "mark" ? "h-10" : ""} w-auto object-contain ${className}`} />;
}
