import Image from "next/image";

type LogoProps = { className?: string; priority?: boolean };

export function Logo({ className = "", priority = false }: LogoProps) {
  return <Image src="/brand/nuvra-academy-logo.png" alt="Nuvra Academy" width={371} height={156} priority={priority} className={`h-auto w-auto object-contain ${className}`} />;
}
