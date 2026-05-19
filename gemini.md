# Dokumentasi Proyek Website: Nusa Code (Digital UMKM Partner)

## 1. Ringkasan Proyek & Konteks Bisnis
**Nusa Code** adalah startup digital (layanan IT & konsultasi) yang berfokus membantu UMKM di Semarang dan sekitarnya untuk melakukan transformasi digital.
- **Masalah yang Diselesaikan:** Biaya IT mahal, kurangnya pemahaman digital UMKM, bahasa teknis (jargon) yang rumit, dan kebingungan strategi pemasaran digital.
- **Solusi:** Layanan yang murah, transparan, tanpa jargon, dan fokus pada peningkatan hasil bisnis.
- **Target Pasar:** UMKM lokal (F&B/Kuliner, Retail & Fashion, Jasa) yang masih offline dan minim budget.
- **Visi:** "Menjadi mitra utama bagi stakeholder."
- **Model Bisnis:** Freemium (Tier Starter gratis, Tier Pro berbayar), strategi jemput bola, dan Free Digital Audit untuk 100 UMKM pertama.

## 2. Pedoman Desain (Styling, Tema, & Suasana)
Desain website harus mencerminkan identitas startup yang profesional, modern, terpercaya, namun tetap sangat ramah (approachable) bagi orang awam.

### Suasana (Vibe) & Tema
- **Clean & Modern Minimalist:** Banyak ruang kosong (white space) agar informasi mudah dicerna oleh audiens awam.
- **Professional & Trustworthy:** Penggunaan layout yang rapi dan tipografi yang tegas untuk membangun kepercayaan.
- **Warm & Welcoming:** Menggunakan aksen warna hangat dan foto manusia yang tersenyum untuk menghilangkan kesan IT yang kaku dan menakutkan.

### Palet Warna (Color Palette)
- **Primary Background:** Putih bersih (`#FFFFFF`) untuk konten utama agar tingkat keterbacaan tinggi.
- **Secondary Backgrounds:** - Off-white / Soft Cream (`#FFFDF9` atau `#FEF3C7` tipis) untuk *background shape* pada Hero Section.
  - Soft Light Blue (`#F0F7FF`) untuk pemisah bagian seperti section "Dedikasi/Quote".
  - Dark Navy / Charcoal (`#161B26`) khusus untuk Footer dan Testimonial section agar terlihat elegan dan kontras.
- **Accent & Call to Action (CTA):** Golden Yellow / Orange (`#F59E0B` atau `#EAB308`). Digunakan untuk tombol utama, ikon bintang, garis bawah, dan elemen *highlight*.
- **Typography Colors:**
  - Heading: Hitam pekat atau Dark Navy (`#111827` atau `#0F172A`).
  - Body Text: Abu-abu medium (`#4B5563` atau `#64748B`) agar tidak membuat mata lelah.

### Tipografi (Typography)
- Menggunakan font Sans-Serif modern (rekomendasi: **Plus Jakarta Sans**, **Inter**, atau **Poppins**).
- **Headings (H1, H2, H3):** Bold (700) atau Extra Bold (800) dengan *tracking-tight* (jarak huruf agak rapat) agar terlihat modern.
- **Body:** Regular (400) atau Medium (500) dengan *line-height* yang lega (relaxed) untuk kemudahan membaca.

## 3. Arsitektur Halaman & Spesifikasi Komponen

Website ini menggunakan arsitektur *Single Landing Page* yang panjang (Long-scroll) dengan urutan bagian sebagai berikut:

### A. Navigation Bar (Header)
- **Layout:** Flexbox, *space-between*. Kiri untuk Logo, Kanan untuk Link Navigasi.
- **Elemen:**
  - **Logo:** Teks "NusaCode" dengan titik (dot) berwarna kuning sebagai aksen (misal: `NusaCode<span class="text-yellow-500">.</span>`).
  - **Links:** Home, About Us, Portfolio, Company, News, Contact. (Font ukuran kecil, kapital semua, font-weight medium).

### B. Hero Section
- **Layout:** Dua kolom (50% Teks Kiri, 50% Gambar Kanan).
- **Background:** Memiliki aksen warna krem/kuning sangat muda berbentuk diagonal atau membulat di bagian belakang gambar.
- **Elemen Kiri (Teks):**
  - **Badge/Label:** Teks kecil berbingkai "Partner Transformasi Digital" (warna abu-abu).
  - **Headline (H1):** "Bawa Bisnis Anda Go Digital dengan Mudah." (Tebal, ukuran sangat besar).
  - **Subheadline/Paragraph:** Penjelasan singkat bahwa Nusa Code membantu UMKM go digital secara transparan.
  - **Tombol CTA:** Warna latar kuning, teks hitam/putih, bertuliskan "Konsultasi". Memiliki efek shadow tipis.
- **Elemen Kanan (Gambar):** Foto seorang wanita berambut keriting tersenyum memegang tablet (melambangkan kemudahan teknologi).

### C. Services Section (Layanan Kami)
- **Layout:** Judul di tengah atas, diikuti *grid layout* 4 kolom untuk *Card* layanan.
- **Elemen Judul:** Teks kuning "Services" dan teks heading hitam "We're Providing To Our Customers".
- **Cards (4 buah):**
  1. Website Development (Ikon kode/layar).
  2. SEO Services (Ikon grafik naik).
  3. Social Media Marketing (Ikon megafon).
  4. Google Ads Management (Ikon logo Ads/Kursor).
- **Styling Card:** Latar putih, border sangat tipis/shadow lembut, padding tebal. Jika di-*hover*, pinggiran atau bayangan menjadi lebih tegas.

### D. Dedication / Quote Section
- **Layout:** Dua kolom (Kiri: Gambar figur profesional/tim, Kanan: Teks & Quote).
- **Background:** Biru sangat muda (Light Blue) membentang penuh (full width).
- **Elemen Kiri:** Gambar pria berjas/kasual profesional menatap ke depan dengan percaya diri.
- **Elemen Kanan:**
  - Label: "Dedikasi!" (warna oranye/kuning).
  - Heading: "Dedikasi Penuh untuk Transformasi Digital Bisnis Anda".
  - **Quote Box:** Paragraf *italic* (miring) berisi komitmen edukasi tanpa jargon. Memiliki aksen garis vertikal di sebelah kiri (border-left).

### E. Portfolio / Produk Digital
- **Layout:** Judul di tengah, di bawahnya terdapat *Masonry Grid* atau *Grid* 2x3 untuk menampilkan gambar portofolio.
- **Elemen Judul:** Label "Portofolio Kami" dan Heading "Membangun produk digital untuk UMKM yang berkembang".
- **Gallery Items:** Menampilkan *mockup* visual modern (contoh: desain logo, website di laptop, aplikasi mobile di HP, kemasan produk).
- **Styling Card Portofolio:** Gambar mengambil proporsi 80%, di bawahnya terdapat judul portofolio (bold) dan kategori (teks abu-abu kecil). Gambar memiliki radius melengkung (rounded corners).

### F. Testimonial Section
- **Layout:** Terletak di bagian paling bawah sebelum footer. Berada di dalam kontainer berlatar belakang gelap (Dark Navy).
- **Elemen Judul:** Heading "Apa Yang Klien Katakan Pada Kami" berwarna putih di tengah.
- **Testimonial Card:**
  - Background card sedikit lebih terang dari background utama section (misal: biru keabuan gelap).
  - Di sebelah kiri ada foto klien (ibu-ibu pemilik warung/UMKM).
  - Di sebelah kanan terdapat: Rating 5 bintang kuning, paragraf testimoni (warna abu-abu terang), dan nama serta jabatan klien.
- **Navigasi Slider:** Titik-titik (dots) kecil di bagian bawah card untuk menandakan adanya slide testimoni lainnya.

## 4. Instruksi Implementasi Teknis (Untuk AI Developer)
- Gunakan framework **Next.js (App Router)**.
- Gunakan **Tailwind CSS** untuk seluruh styling agar sesuai dengan palet warna dan spacing pada pedoman desain.
- Gunakan library **Lucide React** atau **Heroicons** untuk ikon di bagian *Services*.
- Pastikan semua gambar responsif menggunakan komponen `<Image />` dari Next.js.
- Implementasikan layout yang sepenuhnya **Responsive**:
  - Pada layar *mobile* (hp), ubah layout multi-kolom (Hero, Services, Portfolio) menjadi *single column* (tumpuk dari atas ke bawah).
  - Berikan *padding-x* yang cukup pada layar *mobile* agar konten tidak menempel ke tepi layar.

  .
  # Dokumentasi Inti Proyek Website: Nusa Code (Digital UMKM Partner)

## 1. Ringkasan Proyek & Konteks Bisnis
**Nusa Code** adalah startup digital (layanan IT & konsultasi) yang berfokus membantu UMKM (terutama di Semarang dan sekitarnya) untuk melakukan transformasi digital.
- **Pain Points Klien:** Biaya IT mahal, gaptek (minim pengetahuan teknologi), pusing dengan jargon teknis, dan kebingungan strategi pemasaran digital.
- **Solusi Nusa Code:** Pendekatan ramah awam, transparan (tanpa biaya tersembunyi), dan fokus murni pada peningkatan hasil bisnis klien.
- **Model Bisnis:** Freemium, jemput bola (pendampingan langsung), dan promo Free Digital Audit.

## 2. Pedoman Desain Global (Design System)
Desain harus terlihat modern, *clean*, profesional, tapi tetap terasa "hangat" dan tidak mengintimidasi pelaku UMKM.

- **Palet Warna Utama:**
  - **Primary Background:** Putih (`#FFFFFF`) dan Soft Cream/Off-white (`#FFFDF9`) untuk kesan lega.
  - **Secondary Background:** Soft Light Blue (`#F0F7FF`) untuk pemisah section, dan Dark Navy (`#161B26` / `#1A1F2E`) untuk Footer dan Testimonial agar elegan.
  - **Accent & CTA:** Golden Yellow / Orange (`#F59E0B` atau `#FF9F1C`). Digunakan untuk tombol utama, ikon, dan *highlight* teks.
  - **Text:** Dark Navy/Hitam (`#0F172A`) untuk Heading, Medium Gray (`#4B5563`) untuk paragraf.
- **Tipografi:** Sans-Serif modern (Plus Jakarta Sans, Inter, atau Poppins). Heading menggunakan *font-weight* Bold (700/800), Body menggunakan Regular (400) dengan *line-height* lega.
- **UI Element:** Komponen *card* menggunakan *border* tipis dengan *drop shadow* lembut. Sudut elemen (border-radius) melengkung halus (rounded-xl atau rounded-2xl).

---

## 3. Arsitektur Halaman & Spesifikasi Komponen (Section Breakdown)
Website ini dirancang sebagai *Long-scroll Landing Page* dengan navigasi *smooth scroll* ke setiap section, ditambah beberapa halaman dinamis jika diperlukan ke depannya.

### A. Navigation Bar (Header)
- **Fungsi:** Navigasi lengket (Sticky Navbar) di bagian atas layar dengan latar belakang putih semi-transparan (backdrop-blur).
- **Kiri:** Teks Logo "NusaCode" dengan titik (dot) aksen warna kuning.
- **Kanan:** Link navigasi interaktif: `Home`, `About Us`, `Services`, `Portfolio`, `Pricing`, `News`, `Contact`. Terdapat tombol kecil "Free Audit" di ujung kanan.

### B. Home (Hero Section)
- **Fungsi:** Kesan pertama yang kuat untuk menarik perhatian pengunjung.
- **Layout:** *Split 50/50* (Kiri teks, Kanan gambar).
- **Konten Kiri:**
  - *Badge* kecil: "Partner Transformasi Digital".
  - *Headline (H1)*: "Bawa Bisnis Anda Go Digital dengan Mudah."
  - *Sub-headline*: Penjelasan singkat misi Nusa Code.
  - *Tombol CTA*: "Konsultasi Sekarang" (warna kuning).
- **Konten Kanan:** Gambar/foto *cut-out* seorang wanita berambut keriting tersenyum memegang tablet.
- **Latar Belakang:** Pola warna krem diagonal/melengkung lembut di belakang gambar wanita.

### C. Services Section (Layanan Utama)
- **Fungsi:** Menjelaskan 4 pilar layanan utama startup.
- **Layout:** Judul section di tengah, di bawahnya terdapat *Grid* 4 kolom (atau 2x2 di tablet).
- **Konten Card:**
  1. **Pembuatan Website:** (Ikon kode) Toko online responsif.
  2. **Konsultasi Strategi:** (Ikon grafik naik) Pendampingan teknologi.
  3. **Perawatan Sistem:** (Ikon perisai/keamanan) Maintenance anti ribet.
  4. **Optimasi Pemasaran:** (Ikon megafon) Medsos dan Iklan digital.

### D. About Us / Dedication Section
- **Fungsi:** Membangun kepercayaan dengan menunjukkan komitmen dan "wajah" dari Nusa Code.
- **Layout:** *Split 50/50* (Kiri gambar, Kanan teks) dengan latar belakang Soft Light Blue.
- **Konten Kiri:** Foto pria berjas/gaya semi-formal yang terlihat profesional.
- **Konten Kanan:**
  - *Headline*: "Dedikasi Penuh untuk Transformasi Digital Bisnis Anda".
  - *Quote Box*: Paragraf *italic* bergaris samping kuning ("Kami memberikan edukasi tanpa jargon IT...").

### E. Portfolio Section
- **Fungsi:** Bukti nyata (*social proof*) hasil kerja Nusa Code untuk UMKM.
- **Layout:** Judul di tengah, lalu *Grid Masonry* atau kotak rapi berisi gambar produk.
- **Konten:** Menampilkan *mockup* visual modern (Web F&B, Toko Baju Online, Aplikasi Kasir, Desain Kemasan). Jika di-*hover*, gambar sedikit membesar (*zoom in*) dan memunculkan label kategori bisnis.

### F. Pricing Section (Paket Layanan)
- **Fungsi:** Menampilkan transparansi harga sesuai nilai (Value) "solusi tepat guna & terjangkau". Menggunakan model *Freemium*.
- **Layout:** 2 Card perbandingan harga yang diletakkan bersebelahan.
- **Card 1: Tier Starter (Gratis / Rp 0)**
  - Fokus: Edukasi dan listing dasar.
  - Fitur: Profil bisnis digital sederhana, terindeks Google, dukungan komunitas.
- **Card 2: Tier Pro (Berbayar / Harga Terjangkau)**
  - Fokus: Pertumbuhan bisnis (*Growth*).
  - Fitur: Website *custom* penuh, integrasi WhatsApp, analitik pengunjung, dan bebas biaya maintenance bulan pertama. Card ini harus di-*highlight* (misal: warna border kuning dan pita "Best Value").

### G. News / Edukasi Section (Blog Singkat)
- **Fungsi:** Mendukung misi "Edukasi Tanpa Jargon". Menarik *traffic* organik.
- **Layout:** *Carousel* atau *Grid* berisi 3 artikel terbaru.
- **Konten Card:** Gambar *thumbnail*, tanggal, judul artikel (Contoh: "3 Cara Mudah Buat Toko Online Pakai HP", "Apa Itu SEO untuk Pedagang Baju?"), dan teks ringkasan. Terdapat tautan "Baca Selengkapnya".

### H. Testimony Section
- **Fungsi:** Validasi tingkat kepuasan klien lokal.
- **Layout:** Menggunakan palet warna Dark Navy agar kontras dengan section di atasnya.
- **Konten:** - Foto klien nyata (contoh: Ibu pemilik warung/F&B).
  - Rating 5 Bintang.
  - Paragraf kutipan testimoni tentang kemudahan dan pelayanan yang ramah.
  - Nama & asal UMKM.
  - Indikator *slider/dots* di bawahnya.

### I. Contact & CTA Section (Jemput Bola)
- **Fungsi:** Mendorong konversi pengunjung menjadi prospek (leads).
- **Layout:** Kotak *Call to Action* besar (*Banner*) di bagian bawah sebelum footer.
- **Konten:**
  - *Headline*: "Siap Mengembangkan UMKM Anda?"
  - *Sub-headline*: "Dapatkan Free Digital Audit untuk 100 UMKM pertama bulan ini."
  - *Action*: Form singkat (Nama, Nama Usaha, No. WhatsApp) atau Tombol besar "Hubungi via WhatsApp".

### J. Footer
- **Fungsi:** Navigasi sekunder dan informasi legal.
- **Layout:** 4 Kolom di atas latar belakang gelap murni (`#0F172A`).
- **Konten:** Logo Nusa Code, Deskripsi singkat, Tautan Cepat (Links), Info Kontak (Alamat Semarang, Email), dan Ikon Media Sosial. *Copyright* di bagian paling bawah.

---

## 4. Instruksi Teknis untuk Generasi Kode Next.js (AI CLI)
1. **Framework:** Gunakan **Next.js (App Router)** dengan `page.tsx` sebagai halaman utama.
2. **Styling:** Gunakan **Tailwind CSS** murni untuk mereplikasi semua instruksi warna, tipografi, dan layout di atas. Tidak perlu file CSS eksternal tambahan selain bawaan Tailwind.
3. **Komponenisasi:** Pecah setiap section (A sampai J) menjadi komponen terpisah di folder `components/` (misalnya: `components/Hero.tsx`, `components/Pricing.tsx`) lalu import semuanya ke `app/page.tsx` agar kode bersih dan *maintainable*.
4. **Responsivitas:** Wajib menggunakan *utility classes* responsif Tailwind (`sm:`, `md:`, `lg:`). Layout grid harus menjadi *single-column* (bertumpuk vertikal) pada tampilan *mobile*, dan kembali menjadi *multi-column* di layar desktop.
5. **Assets:** Gunakan gambar dari `https://images.unsplash.com` dengan parameter URL yang relevan sebagai *placeholder* sementara (contoh gambar UMKM, teknologi, orang tersenyum) agar layout tidak pecah saat dirender pertama kali. 