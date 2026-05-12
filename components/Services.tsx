import { FaDesktop, FaChartLine, FaBullhorn, FaObjectGroup } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description: "Membantu UMKM memiliki toko online atau profil bisnis digital yang profesional dan responsif tanpa biaya tersembunyi.",
    icon: FaDesktop,
  },
  {
    title: "SEO Services",
    description: "Pendampingan dalam menentukan strategi teknologi dan pencarian organik agar website Anda mudah ditemukan di Google.",
    icon: FaChartLine,
  },
  {
    title: "Social Media Marketing",
    description: "Membantu pengelolaan media sosial agar brand UMKM Anda lebih dikenal luas oleh target pasar secara tepat sasaran.",
    icon: FaBullhorn,
  },
  {
    title: "Google Ads Management",
    description: "Strategi iklan digital yang efisien dan minim budget agar website dan toko online Anda langsung ramai pengunjung.",
    icon: FaObjectGroup,
  },
];

const Services = () => {
  return (
    // 1. Base background diubah menjadi abu-abu sangat terang (slate-50) agar card putih bisa menonjol
    <section id="services" className="py-32 relative bg-slate-50 overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND DECORATIONS (Versi Lebih Terlihat) */}
      {/* ========================================== */}
      
      {/* Angka 01 Besar di latar belakang */}
      <div className="absolute top-5 left-[-2%] text-[280px] font-black text-slate-200/50 pointer-events-none select-none tracking-tighter leading-none z-0">
        Nusa Code
      </div>

      {/* Glow Blob Kiri Atas (Kuning - Opasitas dinaikkan) */}
      <div className="absolute top-[-10%] left-[-5%] w-[2400px] h-[600px] bg-yellow-300/30 rounded-full blur-[100px] pointer-events-none z-0" />
      
      {/* Glow Blob Kanan Bawah (Biru - Opasitas dinaikkan) */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Pola Dots / Polkadot besar untuk mengisi kekosongan */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{ 
          backgroundImage: 'radial-gradient(#111827 2px, transparent 2px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* ========================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================== */}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-2 h-2 bg-[#FFB800] rounded-full mb-3"></div>
            <span className="text-[#111827] text-[13px] font-bold uppercase tracking-[0.2em] opacity-70">
              What We're Offering
            </span>
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-[#111827] leading-[1.2]">
            <span className="text-[#FFB800] relative inline-block">
              Services
              {/* Garis bawah melengkung kuning */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFB800]/40" viewBox="0 0 338 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.5C62.5 3.5 186.5 -3.5 337 9.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span> We're Providing <br />
            To Our Customers
          </h2>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              // 2. Card sekarang punya background putih solid, border tebal, dan SHADOW bawaan agar terpisah dari background section
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-start relative overflow-hidden"
            >
              {/* Aksen warna di atas card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/30 transition-all duration-300">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-[#FFB800] transition-colors duration-300" />
              </div>
              
              <h3 className="text-[19px] font-bold mb-4 text-slate-900 leading-snug">
                {service.title}
              </h3>
              
              <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Ikon panah kecil di pojok kanan bawah sebagai pemanis */}
              <div className="mt-auto flex justify-end w-full">
                 <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFB800]">
                    →
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;