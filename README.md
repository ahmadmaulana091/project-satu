# Project Satu: Web Travel Umroh

Platform modern untuk memudahkan pelayanan dan pemesanan travel umroh bagi para calon jamaah. Dilengkapi dengan pengelolaan admin yang efisien.

## 🚀 Teknologi Utama
- **Next.js:** Menggunakan kapabilitas App Router Next.js untuk mendapatkan *Server-Side Rendering* optimal dan kemudahan pengaturan rute.
- **Tailwind CSS:** Membantu dalam mempercepat pembuatan layout premium yang mobile-responsive secara mendetail.
- **Supabase:** Solusi open-source sebagai *Backend-as-a-Service (BaaS)* untuk Database PostgreSQL dan Sistem Manajemen Otentikasi pengguna secara *real-time*.

## 📂 Struktur Map Pengerjaan
Untuk menjaga kode kita selalu mudah berkembang dan terkelompok:
- `src/app/public/` : Area untuk halaman jamaah melihat segala penawaran (Beranda, Menu Paket, dan sebagainya).
- `src/app/admin/` : Area terisolasi bagi peran khusus dashboard administrator.

## 🛠️ Panduan Menjalankan Aplikasi
1. Isi kredensial `NEXT_PUBLIC_SUPABASE_URL` dan `NEXT_PUBLIC_SUPABASE_ANON_KEY` ke dalam file `.env.local`.
2. Install semua *dependencies* dasar dengan `npm install`.
3. Mulai *development server* dengan `npm run dev`.
4. Buka akses melalui *localhost:3000*.
