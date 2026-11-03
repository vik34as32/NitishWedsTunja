import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Great_Vibes, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "700"],
  variable: "--font-devanagari",
});

export const metadata: Metadata = {
  title: "Nitish & Tanuja | Shubh Vivah",
  description:
    "You are cordially invited to the wedding of Nitish and Tanuja on Saturday, 21 November 2026.",
  openGraph: {
    title: "Nitish & Tanuja | Shubh Vivah",
    description: "Join us on 21 November 2026 as Nitish and Tanuja begin their forever.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#4c1220",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${script.variable} ${devanagari.variable} scroll-lock antialiased`}
    >
      <body className="bg-[#f6efe6] text-[#3c241c]">
        <noscript>
          <style>{`html,body{height:auto !important;overflow:auto !important}.boot-overlay,.welcome-overlay{display:none !important}.await-reveal,[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
