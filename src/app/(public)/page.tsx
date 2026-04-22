import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Placeholder for Hero Image */}
           <div className="w-full h-full bg-gradient-to-r from-primary to-blue-900 shadow-xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Wujudkan Umroh <span className="text-secondary">Impian Anda</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
            Nikmati perjalanan spiritual yang nyaman, aman, dan penuh makna dengan berbagai pilihan paket umroh terbaik kami.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/paket" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-primary font-bold rounded-full hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              Lihat Paket Umroh
            </Link>
            <Link 
              href="/kontak" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all shadow-md active:scale-95"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Packages Highlight */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-primary mb-4">Paket Pilihan Terbaik</h2>
            <p className="text-slate-600">
              Pilihan paket umroh favorit yang dirancang khusus untuk kenyamanan ibadah Anda bersama keluarga.
            </p>
          </div>
          <Link href="/paket" className="text-primary font-semibold hover:underline flex items-center gap-2">
            Lihat semua paket &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-slate-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Populer
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Paket Umroh Reguler {i}</h3>
                <div className="flex items-center text-sm text-slate-500 mb-4 gap-4">
                  <span className="flex items-center gap-1">📅 9 Hari</span>
                  <span className="flex items-center gap-1">🏨 Bintang 4</span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Mulai dari</p>
                    <p className="text-2xl font-black text-primary italic">Rp 28.5 Juta</p>
                  </div>
                  <Link 
                    href={`/paket/${i}`} 
                    className="p-3 bg-slate-100 text-primary rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm active:scale-90"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Mengapa Memilih UmrohSatu?</h2>
            <p className="text-blue-100">
              Kami berkomitmen untuk memberikan pengalaman ibadah yang tak terlupakan dengan standar pelayanan terbaik.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4 bg-secondary/20 inline-block p-4 rounded-full">🕋</div>
              <h3 className="text-lg font-bold mb-2">Resmi & Terpercaya</h3>
              <p className="text-sm text-blue-100 opacity-80">Izin resmi KEMENAG dan terdaftar di SISKOPATUH.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4 bg-secondary/20 inline-block p-4 rounded-full">✈️</div>
              <h3 className="text-lg font-bold mb-2">Maskapai Terbaik</h3>
              <p className="text-sm text-blue-100 opacity-80">Terbang nyaman dengan Saudia atau Garuda Indonesia.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4 bg-secondary/20 inline-block p-4 rounded-full">🏨</div>
              <h3 className="text-lg font-bold mb-2">Hotel Strategis</h3>
              <p className="text-sm text-blue-100 opacity-80">Lokasi hotel dekat dengan Masjidil Haram & Nabawi.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary transition-colors">
              <div className="text-4xl mb-4 bg-secondary/20 inline-block p-4 rounded-full">👨‍🏫</div>
              <h3 className="text-lg font-bold mb-2">Muthawif Berpengalaman</h3>
              <p className="text-sm text-blue-100 opacity-80">Dibimbing langsung oleh ustadz yang kompeten.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
