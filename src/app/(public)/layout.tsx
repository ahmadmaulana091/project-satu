import React from "react";
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">UmrohSatu</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <Link href="/paket" className="hover:text-primary transition-colors">Paket Umroh</Link>
            <Link href="/kontak" className="hover:text-primary transition-colors">Kontak</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link 
              href="/admin" 
              className="px-4 py-2 text-sm font-medium border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
            >
              Portal Admin
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t bg-slate-50">
        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">UmrohSatu</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Platform modern untuk memudahkan pelayanan dan pemesanan travel umroh bagi para calon jamaah.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Navigasi</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
                <li><Link href="/paket" className="hover:text-primary">Paket Umroh</Link></li>
                <li><Link href="/kontak" className="hover:text-primary">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Email: info@umrohsatu.com</li>
                <li>Telp: +62 812 3456 7890</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} UmrohSatu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
