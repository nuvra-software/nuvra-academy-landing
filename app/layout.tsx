import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvra Academy — AI-assisted school management",
  description:
    "Nuvra Academy is building NUVRA, an AI-assisted school management platform for educational institutions.",
  openGraph: {
    title: "Nuvra Academy — AI-assisted school management",
    description:
      "NUVRA brings the workflows of modern educational institutions into one secure, human-centered platform.",
    siteName: "Nuvra Academy",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvra Academy — AI-assisted school management",
    description:
      "NUVRA is an AI-assisted school management platform for educational institutions.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
