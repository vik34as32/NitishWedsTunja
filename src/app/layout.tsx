import type { Metadata, Viewport } from "next";
import Script from "next/script";

const description =
  "Together with their families, Nitish & Tanuja cordially invite you to celebrate their wedding celebrations on 21 November 2026 in Siwan, Bihar.";

export const metadata: Metadata = {
  title: "Nitish & Tanuja — Wedding Invitation",
  description,
  openGraph: {
    type: "website",
    siteName: "Nitish & Tanuja Wedding",
    title: "Nitish & Tanuja — Wedding Invitation",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitish & Tanuja — Wedding Invitation",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FDF8EC",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Italianno&family=Montserrat:wght@300;400;500;600;700&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/Assets/bg_images/bg_hero_mobile.webp"
        />
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body className="scroll-locked">
        <Script id="restore-scroll" strategy="beforeInteractive">
          {`if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
if (window.location.hash) history.replaceState(null, "", window.location.pathname + window.location.search);`}
        </Script>
        {children}
      </body>
    </html>
  );
}
