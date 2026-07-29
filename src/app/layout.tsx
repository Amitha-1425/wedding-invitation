import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Noto_Serif_Tamil, Poppins } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoTamil = Noto_Serif_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "முத்துக்குமார் & அமிதா | Muthukumar & Amitha — Royal Wedding Invitation",
  description: "You are lovingly invited to the royal wedding of Muthukumar (Naveen) & Amitha — Monday, 31 August 2026, VKT Mahal, Karur, Tamil Nadu.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${notoTamil.variable} ${poppins.variable}`}>
      <body className="antialiased bg-cream text-brown font-poppins">
        {children}
      </body>
    </html>
  );
}
