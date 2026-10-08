import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvra Academy — Coming soon",
  description:
    "Nuvra Academy is preparing NUVRA, an AI-assisted school management platform for educational institutions.",
  openGraph: {
    title: "Nuvra Academy — Coming soon",
    description:
      "Nuvra Academy is preparing a modern, AI-assisted school management platform for real educational workflows.",
    siteName: "Nuvra Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvra Academy — Coming soon",
    description:
      "Nuvra Academy is preparing NUVRA for real educational workflows.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
