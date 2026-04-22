"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Save, Upload, Loader2, X, Package } from "lucide-react";
import Link from "next/link";

export default function NewPaketPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    nama_paket: "",
    harga: "",
    deskripsi: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (file: File) => {
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("posters")
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("posters").getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let image_url = "";
      if (file) {
        image_url = await handleUpload(file);
      }

      const { error } = await supabase.from("paket_umroh").insert([
        {
          nama_paket: formData.nama_paket,
          harga: parseInt(formData.harga),
          deskripsi: formData.deskripsi,
          image_url,
        },
      ]);

      if (error) throw error;

      router.push("/admin/paket");
      router.refresh();
    } catch (err: any) {
      console.error("DEBUG - Full Error Object:", err);
      
      const errorMessage = err.message || err.error_description || "Unknown error";
      const errorDetails = err.details || "";
      
      if (errorMessage === "Object not found") {
        alert("Error: Bucket 'posters' tidak ditemukan. Pastikan sudah membuat bucket 'posters' di Storage.");
      } else if (err.code === "42501") {
        alert("Error: Izin ditolak (RLS). Pastikan sudah menjalankan SQL Policy untuk storage dan tabel paket_umroh.");
      } else {
        alert(`Error: ${errorMessage}\nDetail: ${errorDetails}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/admin/paket"
          className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-medium text-sm"
        >
          <ArrowLeft size={16} />
          Kembali ke Daftar
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b bg-slate-50/50">
          <h1 className="text-2xl font-bold text-slate-800">Tambah Paket Umroh Baru</h1>
          <p className="text-slate-500 text-sm mt-1">Lengkapi informasi paket di bawah ini.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image Upload Section */}
            <div className="space-y-4">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider">
                Poster Paket
              </label>
              <div 
                className={`relative aspect-[3/4] rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden
                ${preview ? 'border-primary bg-primary/5' : 'border-slate-200 bg-slate-50 hover:border-primary/50'}`}
              >
                {preview ? (
                  <>
                    <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => { setPreview(null); setFile(null); }}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                    >
                      <X size={16} />
                    </button>
                  </>
                ) : (
                  <label className="w-full h-full cursor-pointer flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 mb-4">
                      <Upload size={24} />
                    </div>
                    <span className="text-sm font-bold text-slate-600">Klik untuk upload</span>
                    <span className="text-xs text-slate-400 mt-1">Format: JPG, PNG (Max 5MB)</span>
                    <input type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
                  </label>
                )}
              </div>
            </div>

            {/* Form Fields Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Nama Paket
                </label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Paket Umroh Ramadhan Plus 2024"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  value={formData.nama_paket}
                  onChange={(e) => setFormData({ ...formData, nama_paket: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Harga (Rupiah)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">Rp</span>
                  <input
                    required
                    type="number"
                    placeholder="35000000"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-bold"
                    value={formData.harga}
                    onChange={(e) => setFormData({ ...formData, harga: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Deskripsi Paket
                </label>
                <textarea
                  required
                  rows={6}
                  placeholder="Jelaskan detail paket, fasilitas, maskapai, dsb..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 border-t pt-8">
            <Link
              href="/admin/paket"
              className="px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all"
            >
              Batal
            </Link>
            <button
              disabled={loading}
              type="submit"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Menyimpan...
                </>
              ) : (
                <>
                  <Save size={20} />
                  Simpan Paket
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
