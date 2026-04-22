"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import { supabase } from "@/lib/supabase";
import { LogOut } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Do not wrap the login page with the dashboard layout layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <AdminGuard>
      <div className="flex min-h-screen bg-slate-100">
        {/* Sidebar */}
        <aside className="w-64 bg-slate-900 text-white flex flex-col relative z-20">
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" className="text-xl font-bold text-secondary">
              Admin Panel
            </Link>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/paket" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Kelola Paket
            </Link>
            <Link href="/admin/pesanan" className="block px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              Kelola Pesanan
            </Link>
          </nav>
          
          <div className="p-4 border-t border-white/10 space-y-2">
            <Link href="/" className="block px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white transition-colors">
              &larr; Kembali ke Website
            </Link>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-red-400 hover:text-white hover:bg-red-500/20 transition-all text-left"
            >
              <LogOut size={16} />
              Keluar Sesi
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <header className="h-16 bg-white border-b px-8 flex items-center justify-between shadow-sm sticky top-0 z-10 w-full">
            <h2 className="font-semibold text-slate-700">Administrator System</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-500 italic">v1.0.0</span>
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-sm">
                A
              </div>
            </div>
          </header>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
