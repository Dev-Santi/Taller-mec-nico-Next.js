import type { Metadata } from "next";
import { openSans } from "@/fonts";
import "./globals.css";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Taller DrCar",
  description: "El mejor taller para tu auto con los mejores mecánicos de confianza.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body className={openSans.className + " bg-gray-100"}>
        <header className='bg-white sticky top-0 z-50'>
          <Navigation />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
