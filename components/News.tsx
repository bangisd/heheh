import Image from "next/image";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

// Data dummy agar kontennya tidak monoton
const newsData = [
  {
    id: 1,
    title: "3 Cara Mudah Buat Toko Online Hanya Pakai HP",
    desc: "Panduan praktis bagi pemula untuk mulai berjualan online tanpa harus mahir IT atau beli laptop mahal.",
    category: "Tips Bisnis",
    date: "10 Mei 2026",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Apa Itu SEO? Penjelasan Santai untuk Pedagang Baju",
    desc: "Sering dengar istilah SEO tapi bingung? Mari bahas cara agar toko bajumu muncul di halaman pertama Google.",
    category: "Marketing",
    date: "05 Mei 2026",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Pentingnya Website Sendiri vs Cuma Pakai Marketplace",
    desc: "Jangan sampai bisnismu bergantung pada satu platform. Ketahui alasan kenapa UMKM wajib punya rumah digital sendiri.",
    category: "Teknologi",
    date: "28 April 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

const News = () => {
  return (
    // 1. Background menggunakan gradasi keabuan agar tidak seperti kertas putih
    <section id="news" className="py-32 relative bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden scroll-mt-28">
      
      {/* ========================================== */}
      {/* DEKORASI BACKGROUND */}
      {/* ========================================== */}
      
      {/* Watermark Teks Raksasa di Belakang */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 text-[180px] md:text-[250px] font-black text-slate-100/60 select-none z-0 tracking-tighter pointer-events-none">
        BLOG
      </div>

      {/* Blob Kuning di Kanan Atas */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFB800]/5 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* ========================================== */}
      {/* KONTEN UTAMA */}
      {/* ========================================== */}

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-2 h-2 bg-[#FFB800] rounded-full mb-3"></div>
            <span className="text-[#111827] text-[13px] font-bold uppercase tracking-[0.2em] opacity-70">
              Update & Edukasi
            </span>
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-[#111827] leading-[1.2]">
            Edukasi <span className="text-[#FFB800] relative inline-block">
              Tanpa Jargon
              {/* Garis bawah melengkung */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFB800]/40" viewBox="0 0 338 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.5C62.5 3.5 186.5 -3.5 337 9.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4 text-[16px]">
            Artikel bahasa sehari-hari untuk membantu bisnis UMKM Anda melek digital tanpa pusing memikirkan bahasa teknis IT.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {newsData.map((item) => (
            <a href={`#blog-${item.id}`} key={item.id} className="group">
              <div className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                
                {/* Image Wrapper dengan efek Zoom saat di-hover */}
                <div className="aspect-[4/3] rounded-[16px] mb-6 overflow-hidden relative bg-slate-100">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge Kategori mengambang di atas gambar */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#111827] text-[12px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {item.category}
                  </div>
                </div>
                
                {/* Meta Data (Tanggal) */}
                <div className="flex items-center gap-2 text-slate-400 text-[13px] mb-3 font-medium">
                  <FaCalendarAlt />
                  <span>{item.date}</span>
                </div>

                {/* Konten Teks */}
                <h3 className="text-[20px] font-extrabold text-[#111827] mb-3 leading-snug group-hover:text-[#FFB800] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[14px] text-slate-500 leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>
                
                {/* Tombol Read More */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2 text-[#111827] font-bold text-[14px] group-hover:text-[#FFB800] transition-colors">
                  Baca Selengkapnya
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Banner di bagian bawah News agar makin "berisi" */}
        <div className="mt-16 text-center">
          <a 
            href="#all-news"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:border-[#FFB800] hover:bg-[#FFB800] hover:text-[#111827] transition-all"
          >
            Lihat Semua Artikel
          </a>
        </div>

      </div>
    </section>
  );
};

export default News;