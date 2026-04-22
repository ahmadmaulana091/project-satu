import React from "react";
import Link from "next/link";

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  // Mock data for the specific package
  const pkg = {
    id: params.id,
    name: "Paket Umroh Reguler Bronze",
    price: "28.5 Juta",
    duration: "9 Hari",
    hotel: "Bintang 3 (Al-Fajr or Similar)",
    airline: "Oman Air (CGK-MCT-JED)",
    description: "Nikmati perjalanan spiritual yang khusyuk dengan fasilitas terbaik dan pembimbing berpengalaman.",
    itinerary: [
      { day: 1, activity: "Keberangkatan dari Jakarta menuju Jeddah" },
      { day: 2, activity: "Tiba di Jeddah, Transfer ke Madinah" },
      { day: 3, activity: "Ziarah Madinah & Masjid Nabawi" },
      { day: 4, activity: "Persiapan Umroh & Menuju Mekkah" },
      { day: 5, activity: "Ibadah Umroh Pertama" },
      { day: 6, activity: "Ziarah Mekkah" },
      { day: 7, activity: "Acara Bebas & Ibadah Mandiri" },
      { day: 8, activity: "Tawaf Wada & Transfer ke Bandara" },
      { day: 9, activity: "Tiba kembali di Jakarta" },
    ],
    includes: ["Tiket Pesawat PP", "Visa Umroh", "Hotel & Konsumsi", "Mutawif/Pembimbing", "Handling & Air Zamzam"],
    excludes: ["Paspor", "Suntik Meningitis", "Kebutuhan Pribadi"],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary">Beranda</Link>
          <span className="mx-2">/</span>
          <Link href="/paket" className="hover:text-primary">Katalog Paket</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-slate-900">{pkg.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
              <h1 className="text-4xl font-extrabold text-primary mb-6">{pkg.name}</h1>
              <p className="text-lg text-slate-600 leading-relaxed italic">{pkg.description}</p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b">Rencana Perjalanan (Itinerary)</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((item) => (
                  <div key={item.day} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary font-bold rounded-2xl flex items-center justify-center text-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      {item.day}
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="font-bold text-slate-800 mb-1">Hari {item.day}</h3>
                      <p className="text-slate-600">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-green-200 transition-colors">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-green-500">✅</span> Termasuk (Include)
                </h2>
                <ul className="space-y-3">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-red-200 transition-colors">
                <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <span className="text-red-500">❌</span> Tidak Termasuk (Exclude)
                </h2>
                <ul className="space-y-3">
                  {pkg.excludes.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-primary text-white p-8 rounded-3xl shadow-xl shadow-primary/20">
                <p className="text-blue-100 uppercase text-xs font-bold tracking-widest mb-2">Harga Paket</p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-lg">Rp</span>
                  <span className="text-5xl font-black italic">{pkg.price}</span>
                </div>
                
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center text-sm py-3 border-b border-white/10">
                    <span className="opacity-70">Durasi</span>
                    <span className="font-bold">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-3 border-b border-white/10">
                    <span className="opacity-70">Pesawat</span>
                    <span className="font-bold">{pkg.airline.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm py-3 border-b border-white/10">
                    <span className="opacity-70">Hotel</span>
                    <span className="font-bold">{pkg.hotel.split(' ')[0]}</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-secondary text-primary font-black rounded-2xl hover:bg-yellow-400 hover:scale-[1.02] transition-all shadow-lg active:scale-95 text-lg">
                  PESAN SEKARANG
                </button>
                <p className="text-center text-xs text-blue-100 mt-6 opacity-60">
                  Konsultasi gratis via WhatsApp
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center">
                <p className="text-sm font-bold text-slate-800 mb-2">Butuh Bantuan?</p>
                <Link href="/kontak" className="text-primary font-bold hover:underline">
                  Hubungi Admin UmrohSatu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
