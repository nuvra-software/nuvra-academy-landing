import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvraacademy.com.ar"),
  title: "Nuvra Academy — AI-assisted school operations",
  description:
    "Nuvra Academy is building NUVRA, an AI-assisted operating layer for educational institutions.",
  openGraph: {
    title: "Nuvra Academy — AI-assisted school operations",
    description:
      "Nuvra Academy is building NUVRA, an AI-assisted operating layer for educational institutions.",
    siteName: "Nuvra Academy",
    locale: "en_US",
    type: "website",
    images: [{ url: "/brand/nuvra-academy-logo.png", alt: "Nuvra Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvra Academy — AI-assisted school operations",
    description:
      "Nuvra Academy is building NUVRA for real educational workflows.",
  },
  icons: { icon: "/brand/nuvra-academy-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
