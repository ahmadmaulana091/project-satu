import React from "react";
import Link from "next/link";

export default function PackageCatalogPage() {
  // Manual mock data for now as requested
  const packages = [
    {
      id: "1",
      name: "Paket Umroh Reguler Bronze",
      price: "28.5 Juta",
      duration: "9 Hari",
      hotel: "Bintang 3",
      airline: "Oman Air",
      status: "Tersedia",
    },
    {
      id: "2",
      name: "Paket Umroh Silver Premium",
      price: "32.0 Juta",
      duration: "12 Hari",
      hotel: "Bintang 4",
      airline: "Saudia Air",
      status: "Tersedia",
    },
    {
      id: "3",
      name: "Paket Umroh Gold VVIP",
      price: "38.5 Juta",
      duration: "9 Hari",
      hotel: "Bintang 5",
      airline: "Garuda Indonesia",
      status: "Terbatas",
    },
    {
      id: "4",
      name: "Paket Umroh Ramadhan Plus",
      price: "45.0 Juta",
      duration: "15 Hari",
      hotel: "Bintang 5",
      airline: "Saudia Air",
      status: "Soon",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold text-primary mb-4 italic">Katalog Paket Umroh</h1>
        <p className="text-slate-600">
          Temukan paket umroh yang sesuai dengan kebutuhan dan budget Anda. Semua paket sudah termasuk perlengkapan dan manasik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div key={pkg.id} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-48 bg-primary/5 relative">
              <div className="absolute inset-0 flex items-center justify-center text-primary/10">
                <span className="text-8xl font-black">{pkg.id}</span>
              </div>
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary border border-primary/20 shadow-sm">
                {pkg.status}
              </div>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">{pkg.name}</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span>📅</span> {pkg.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span>🏨</span> {pkg.hotel}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100 col-span-2">
                  <span>✈️</span> {pkg.airline}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-slate-400 uppercase font-bold tracking-wider">Harga mulai</span>
                  <span className="text-3xl font-black text-primary drop-shadow-sm">Rp {pkg.price}</span>
                </div>
                <Link 
                  href={`/paket/${pkg.id}`} 
                  className="w-full py-4 bg-primary text-white font-bold rounded-xl text-center hover:bg-blue-800 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  Lihat Detail Paket
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
