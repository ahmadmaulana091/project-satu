"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Loader2, Package, Calendar, Hotel, Plane } from "lucide-react";

interface PaketUmroh {
  id: string;
  nama_paket: string;
  harga: number;
  deskripsi: string;
  image_url: string;
}

export default function PackageCatalogPage() {
  const [packages, setPackages] = useState<PaketUmroh[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("paket_umroh")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setPackages(data || []);
      } catch (err) {
        console.error("Error fetching packages:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Katalog Paket Umroh</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Temukan perjalanan ibadah terbaik dengan fasilitas premium dan pelayanan terpercaya untuk ketenangan ibadah Anda.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="animate-spin text-primary" size={48} />
          <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Menyiapkan Katalog...</p>
        </div>
      ) : packages.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
          <Package className="mx-auto text-slate-300 mb-4" size={64} />
          <h3 className="text-xl font-bold text-slate-800">Paket Belum Tersedia</h3>
          <p className="text-slate-500 mt-2">Maaf, saat ini belum ada paket yang aktif. Silakan hubungi admin kami.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                {pkg.image_url ? (
                  <img
                    src={pkg.image_url}
                    alt={pkg.nama_paket}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300">
                    <Package size={80} strokeWidth={1} />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <Link 
                    href={`/paket/${pkg.id}`}
                    className="w-full py-4 bg-white text-primary font-black rounded-2xl text-center block shadow-xl active:scale-95 transition-all"
                  >
                    Detail Selengkapnya
                  </Link>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-slate-800 mb-2 group-hover:text-primary transition-colors leading-tight">
                    {pkg.nama_paket}
                  </h2>
                  <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                    {pkg.deskripsi}
                  </p>
                </div>

                <div className="mt-auto space-y-6 pt-6 border-t border-slate-50">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Investasi Ibadah</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-bold text-primary">Rp</span>
                      <span className="text-3xl font-black text-primary tracking-tighter">
                        {new Intl.NumberFormat("id-ID").format(pkg.harga)}
                      </span>
                    </div>
                  </div>

                  <Link 
                    href={`/paket/${pkg.id}`} 
                    className="flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-primary transition-all shadow-lg active:scale-95"
                  >
                    Cek Ketersediaan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
