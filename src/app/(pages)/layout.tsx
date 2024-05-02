import type { Metadata } from "next";
import { Inter, Bebas_Neue, Libre_Barcode_128_Text } from "next/font/google";
import "./globals.css";
import { sharedMetadata } from "velite-generated";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const bebas_neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const libre_barcode = Libre_Barcode_128_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-libre-barcode",
});

export const metadata: Metadata = {
  ...sharedMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${bebas_neue.variable} ${libre_barcode.variable} text-white bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
