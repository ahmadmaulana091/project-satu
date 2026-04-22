"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Loader2, ArrowLeft, CheckCircle2, Calendar, Hotel, Plane, Phone, MessageCircle } from "lucide-react";

interface PaketUmroh {
  id: string;
  nama_paket: string;
  harga: number;
  deskripsi: string;
  image_url: string;
  created_at: string;
}

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [pkg, setPkg] = useState<PaketUmroh | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackage() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("paket_umroh")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        setPkg(data);
      } catch (err) {
        console.error("Error fetching package details:", err);
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchPackage();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-primary" size={48} />
        <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Memuat Detail Paket...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Paket Tidak Ditemukan</h1>
        <Link href="/paket" className="text-primary font-bold hover:underline">
          &larr; Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        {pkg.image_url ? (
          <img
            src={pkg.image_url}
            alt={pkg.nama_paket}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-slate-900 flex items-center justify-center">
            <span className="text-white/20 text-9xl font-black italic">POSTER</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        
        <div className="absolute top-8 left-8">
          <Link 
            href="/paket" 
            className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl font-black text-slate-900 shadow-xl hover:bg-white transition-all active:scale-95"
          >
            <ArrowLeft size={20} />
            Katalog
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-32 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 border border-white">
              <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-black tracking-widest uppercase mb-6">
                Paket Unggulan
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                {pkg.nama_paket}
              </h1>
              
              <div className="prose prose-slate max-w-none">
                <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-wider">Deskripsi Perjalanan</h3>
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                  {pkg.deskripsi}
                </p>
              </div>
            </div>

            {/* Features/Facility Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Calendar />, title: "Durasi Perjalanan", desc: "9 - 12 Hari Perjalanan" },
                { icon: <Hotel />, title: "Akomodasi Premium", desc: "Hotel Dekat Masjidil Haram" },
                { icon: <Plane />, title: "Maskapai Terbaik", desc: "Penerbangan Langsung / Transit" },
                { icon: <CheckCircle2 />, title: "Fasilitas Lengkap", desc: "Termasuk Perlengkapan & Manasik" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 items-start">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-900 text-white p-10 rounded-[3rem] shadow-2xl shadow-primary/20 space-y-8">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Mulai Investasi Dari</span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-bold text-secondary">Rp</span>
                  <span className="text-5xl font-black tracking-tighter">
                    {new Intl.NumberFormat("id-ID").format(pkg.harga)}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-slate-400 text-sm leading-relaxed">
                  Sudah termasuk Visa, Tiket Pesawat PP, Hotel, Makan 3x Sehari, Mutawwif, dan Ziarah.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <button className="w-full py-5 bg-secondary text-slate-900 font-black rounded-2xl hover:bg-yellow-400 transition-all shadow-xl shadow-secondary/10 flex items-center justify-center gap-3 active:scale-[0.98]">
                  Daftar Sekarang
                </button>
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 border border-white/20 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    <Phone size={16} /> Hubungi
                  </button>
                  <button className="py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:bg-[#128C7E] transition-all flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span>⭐ Pilihan Terlaris</span>
                <span>•</span>
                <span>🔒 Secure Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
