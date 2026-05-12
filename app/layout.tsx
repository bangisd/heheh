import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nusa Code - Partner Transformasi Digital UMKM",
  description: "Bawa Bisnis Anda Go Digital dengan Mudah bersama Nusa Code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Tambahkan scroll-smooth dan scroll-pt-24 di sini, ubah juga lang menjadi "id"
    <html lang="id" className="scroll-smooth scroll-pt-24">
      <body className={`${plusJakartaSans.variable} font-sans antialiased text-gray-600`}>
        {/* Nantinya kamu bisa pasang <Navbar /> di atas {children} ini */}
        {children}
        {/* Dan <Footer /> di bawah {children} */}
      </body>
    </html>
  );
}