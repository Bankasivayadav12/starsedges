import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STARS EDGE | Redefining Space Mobility at the Edge",
  description:
    "Affordable, sovereign satellites in Very Low Earth Orbit owned outright, launched from almost anywhere, and operated by you!",
  keywords: [
    "STARS EDGE",
    "space mobility",
    "VLEO",
    "Very Low Earth Orbit",
    "satellites",
    "space technology",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-black text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
