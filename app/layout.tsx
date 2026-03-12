import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EES Remodeling · Presentation by Real Advancement",
  description:
    "A presentation for EES Remodeling by Real Advancement — how we can grow your South Florida remodeling business with social media content and strategy.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-y-scroll">
      <body
        className={`${inter.variable} ${oswald.variable} antialiased bg-black text-white selection:bg-[#eab308] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
