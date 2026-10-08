import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nuvraacademy.com.ar"),
  title: "Nuvra Academy — Software for schools, built from inside a school",
  description:
    "Nuvra is a student-founded company building adaptable software for schools, starting from a real school environment in Buenos Aires.",
  openGraph: {
    title: "Nuvra Academy — Software for schools, built from inside a school",
    description:
      "Nuvra is building adaptable software for schools, starting from a real school environment in Buenos Aires.",
    siteName: "Nuvra Academy",
    locale: "en_US",
    type: "website",
    images: [{ url: "/brand/nuvra-academy-logo.png", alt: "Nuvra Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuvra Academy — Software for schools",
    description:
      "A student-founded company building adaptable software for real school workflows.",
  },
  icons: { icon: [{ url: "/brand/nuvra-mark.png", type: "image/png", sizes: "104x109" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
