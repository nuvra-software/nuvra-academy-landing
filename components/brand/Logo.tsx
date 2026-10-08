import Image from "next/image";

type LogoProps = { variant?: "full" | "mark"; className?: string; priority?: boolean };

export function Logo({ variant = "full", className = "", priority = false }: LogoProps) {
  // The PNG is the current approved asset. A dedicated SVG/mark can replace it later without changing call sites.
  return <Image src="/brand/nuvra-academy-logo.png" alt="Nuvra Academy" width={371} height={156} priority={priority} className={`${variant === "mark" ? "h-10" : ""} w-auto object-contain ${className}`} />;
}
