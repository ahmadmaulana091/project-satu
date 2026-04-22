import React from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-primary/5 py-20 px-4 md:px-0">
        <div className="container mx-auto text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Hubungi Kami
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Punya pertanyaan atau butuh bantuan untuk merencanakan umroh Anda? Jangan ragu untuk menghubungi tim kami yang siap melayani 24/7.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto py-16 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-800">Informasi Kontak</h2>
            <p className="text-slate-600 text-lg">
              Kunjungi kantor kami atau hubungi melalui kontak yang tersedia untuk konsultasi gratis mengenai perjalanan spiritual Anda.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Alamat Kantor</h3>
                  <p className="text-slate-600 mt-1">
                    Gedung UmrohSatu Tower Lt. 5<br />
                    Jl. Gatot Subroto Kav. 12, Jakarta Selatan<br />
                    DKI Jakarta, Indonesia 12950
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Telepon / WhatsApp</h3>
                  <p className="text-slate-600 mt-1">+62 812 3456 7890 (Layanan 24 Jam)</p>
                  <p className="text-slate-600">+62 21 888 9999 (Kantor)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                  <p className="text-slate-600 mt-1">info@umrohsatu.com</p>
                  <p className="text-slate-600">support@umrohsatu.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">Jam Operasional</h3>
                  <p className="text-slate-600 mt-1">Senin - Jumat: 09:00 - 17:00</p>
                  <p className="text-slate-600">Sabtu: 09:00 - 14:00 (Minggu Tutup)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama Anda" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nomor Telepon/WA</label>
                  <input 
                    type="tel" 
                    placeholder="Contoh: 0812..." 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email</label>
                  <input 
                    type="email" 
                    placeholder="nama@email.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Pesan/Pertanyaan</label>
                <textarea 
                  rows={5}
                  placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <Send size={20} />
                Kirim Pesan Sekarang
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
