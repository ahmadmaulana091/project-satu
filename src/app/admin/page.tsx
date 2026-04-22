import React from "react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Selamat Datang, Admin</h1>
        <p className="text-slate-500">Monitor performa pelayanan travel umroh Anda hari ini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500 font-medium">Total Paket</p>
          <p className="text-3xl font-bold text-primary mt-1">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500 font-medium">Pesanan Baru</p>
          <p className="text-3xl font-bold text-secondary mt-1">5</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-sm text-slate-500 font-medium">Jamaah Terdaftar</p>
          <p className="text-3xl font-bold text-slate-800 mt-1">128</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="font-bold text-slate-800">Ringkasan Aktivitas Terakhir</h2>
        </div>
        <div className="p-0">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                <th className="px-6 py-4">ID</th>
                <th className="px-6 py-4">Jamaah</th>
                <th className="px-6 py-4">Paket</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-400">#ORD-00{i}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">Bpk. Ahmad Sujak {i}</td>
                  <td className="px-6 py-4 text-slate-600">Umroh Reguler Bronze</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                      Pemeriksaan Dokumen
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t text-center">
          <button className="text-primary text-sm font-bold hover:underline">
            Lihat semua aktivitas &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
