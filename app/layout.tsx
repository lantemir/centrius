import type { Metadata } from "next";

import "./globals.css";
import Header from '@/components/Header';
import { Mulish } from 'next/font/google';
import Footer from "@/components/Footer";


const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
  display: 'swap', 
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Консультации и юридическая поддержка Centrius",
  description: "Консультации и юридическая поддержка Консультируем по правовым вопросам в области недропользования, инвестиционного, строительного, трудового и корпоративного права",
  icons: {
    icon: '/icons/logo1.svg' 
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body        
        className={`antialiased ${mulish.className}`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
