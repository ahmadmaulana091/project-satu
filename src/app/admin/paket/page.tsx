"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Plus, Edit, Trash2, Loader2, Package } from "lucide-react";

interface PaketUmroh {
  id: string;
  nama_paket: string;
  harga: number;
  deskripsi: string;
  image_url: string;
  created_at: string;
}

export default function AdminPaketPage() {
  const [packages, setPackages] = useState<PaketUmroh[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  async function fetchPackages() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("paket_umroh")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPackages(data || []);
    } catch (err: any) {
      console.error("Error fetching packages:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Apakah Anda yakin ingin menghapus paket ini?")) return;

    try {
      const { error } = await supabase.from("paket_umroh").delete().eq("id", id);
      if (error) throw error;
      setPackages(packages.filter((p) => p.id !== id));
    } catch (err: any) {
      alert("Gagal menghapus paket: " + err.message);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Kelola Paket Umroh</h1>
          <p className="text-slate-500 text-sm mt-1">Daftar semua paket yang tersedia untuk jamaah.</p>
        </div>
        <Link
          href="/admin/paket/new"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          <Plus size={18} />
          Tambah Paket Baru
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-primary" size={40} />
            <p className="text-slate-500 font-medium">Memuat data paket...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package size={32} />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">Terjadi Kesalahan</h3>
            <p className="text-slate-500 mb-6">{error}</p>
            <button
              onClick={fetchPackages}
              className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-all"
            >
              Coba Lagi
            </button>
            <p className="mt-4 text-xs text-slate-400">
              Pastikan tabel 'paket_umroh' sudah dibuat di Supabase.
            </p>
          </div>
        ) : packages.length === 0 ? (
          <div className="p-20 text-center">
            <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Belum Ada Paket</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto">
              Anda belum menambahkan paket umroh apapun. Mulai dengan membuat paket pertama Anda.
            </p>
            <Link
              href="/admin/paket/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-all"
            >
              <Plus size={18} />
              Buat Paket Pertama
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b">
                  <th className="px-6 py-5">Poster</th>
                  <th className="px-6 py-5">Nama Paket</th>
                  <th className="px-6 py-5">Harga</th>
                  <th className="px-6 py-5">Tanggal Dibuat</th>
                  <th className="px-6 py-5 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="w-12 h-16 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                        {pkg.image_url ? (
                          <img
                            src={pkg.image_url}
                            alt={pkg.nama_paket}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <Package size={16} />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800">{pkg.nama_paket}</p>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-1">{pkg.deskripsi}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-black text-primary">
                        Rp {new Intl.NumberFormat("id-ID").format(pkg.harga)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">
                      {new Date(pkg.created_at).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/paket/${pkg.id}/edit`}
                          className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                          title="Edit Paket"
                        >
                          <Edit size={18} />
                        </Link>
                        <button
                          onClick={() => handleDelete(pkg.id)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                          title="Hapus Paket"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
