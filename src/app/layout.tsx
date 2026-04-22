import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Umroh - Keberangkatan Spiritual Anda",
  description: "Platform pemesanan travel umroh terpercaya dengan pelayanan terbaik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
