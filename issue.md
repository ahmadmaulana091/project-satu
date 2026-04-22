# Task: Integrasi Supabase dan Implementasi Data Paket Umroh

## Tujuan
Mengimplementasikan koneksi database menggunakan Supabase, membuat tabel untuk menyimpan data paket umroh serta mengelola gambar poster. Anda juga akan membuat fitur CRUD di panel admin dan menampilkannya di halaman publik.

## Langkah 1: Setup Database (Supabase)
Jalankan script SQL berikut pada menu **SQL Editor** di dashboard Supabase Anda:

```sql
create table paket_umroh (
    id uuid default gen_random_uuid() primary key,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null,
    nama_paket text not null,
    harga numeric not null,
    deskripsi text,
    image_url text
);
```

## Langkah 2: Setup Storage (Supabase)
1. Buka menu **Storage** di dashboard Supabase.
2. Buat bucket baru dengan nama `posters` (pastikan nama ini dicatat jika menggunakan nama lain).
3. Atur *Bucket Policies* ke mode **Public** untuk akses READ, agar gambar dapat dimuat di frontend (web app).
4. Untuk *upload* dari halaman Admin, pastikan Anda juga menyiapkan policy modifikasi (INSERT/UPDATE/DELETE) jika mengamankan dashboard nanti.

## Langkah 3: Konfigurasi Environment (`.env.local`)
Pastikan file `.env.local` di *root* proyek sudah terisi seperti ini. Jika belum ada, buat file `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=URL_SUPABASE_ANDA
NEXT_PUBLIC_SUPABASE_ANON_KEY=ANON_KEY_SUPABASE_ANDA
```
*(Ganti isinya dengan parameter dari **Project Settings > API** di Supabase)*.

## Langkah 4: Kebutuhan Implementasi (Coding)
Tugas Anda sebagai *developer/assistant*:
1. **Instalasi:** Pastikan dependensi `@supabase/supabase-js` sudah ter-install (jalankan `npm install @supabase/supabase-js`).
2. **Client Supabase:** Verifikasi atau buat utilitas client di `src/lib/supabase.ts` agar frontend bisa berkomunikasi dengan Supabase.
3. **Halaman Admin (CRUD):** 
   - Kembangkan antarmuka di `src/app/admin/...` untuk form tambah paket baru, unggah gambar ke Storage, dan menyimpan datanya ke tabel `paket_umroh`.
   - Buat daftar (tabel) admin untuk edit dan hapus.
4. **Halaman Publik:**
   - Ubah logika fetching data di `src/app/(public)/paket/page.tsx` menjadi data asli dari database Supabase (`select * from paket_umroh`).
   - Buat halaman detail di rute dinamis (contohnya `.../paket/[id]/page.tsx`).
   - Gunakan rancangan UI yang menarik dan modern dengan Tailwind CSS.

## Catatan
- Kerjakan pengembangan antarmuka Publik dan Admin secara iteratif dengan desain yang premium.
- Lakukan validasi pada input form (misalnya harga adalah angkat, dan memastikan poster berhasil diupload sebelum menyimpan row di database).
