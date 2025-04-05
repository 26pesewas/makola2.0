import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  variable: "--font-poppins", 
  weight: ["300", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "Makola Online",
  description: "Your very own online Makola market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="{poppins.variable}">
      <head>
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
