"use client"; // Wajib karena pakai useState untuk filtering

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan framer-motion terinstall
import { FaArrowRight, FaDesktop, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

const projects = [
  {
    title: "Hoodie Design and Branding",
    category: "Graphic",
    filter: "Graphic",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Website UX UI Design for MacBook",
    category: "Web Dev",
    filter: "Web Dev",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mobile Application UI UX Design",
    category: "App Dev",
    filter: "App Dev",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Modern iPhone UI Display",
    category: "App Dev",
    filter: "App Dev",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1981&auto=format&fit=crop",
  },
  {
    title: "Book Cover Print Design",
    category: "Graphic",
    filter: "Graphic",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Cosmetic Bottle with Label",
    category: "Graphic",
    filter: "Graphic",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1974&auto=format&fit=crop",
  },
];

// Definisi Kategori untuk Filter
const filterCategories = [
  { name: "All", icon: FaLayerGroup },
  { name: "Web Dev", icon: FaDesktop },
  { name: "App Dev", icon: FaMobileAlt },
  { name: "Graphic", icon: FaDesktop }, // Sesuaikan icon jika perlu, atau hapus
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Logika Filtering
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.filter === activeFilter);

  return (
    // Background Gradient super halus
    <section id="portfolio" className="py-32 relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      
      {/* Dekorasi Background */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-sky-100 rounded-full blur-[120px] opacity-60 z-0 pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] opacity-50 z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex flex-col items-center justify-center">
            <div className="w-2 h-2 bg-[#FFB800] rounded-full mb-3"></div>
            <span className="text-slate-500 text-[13px] font-bold uppercase tracking-[0.2em] opacity-70">
              Showcasing Our Work
            </span>
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-[#111827] leading-[1.2]">
            Membangun produk digital <br />
            untuk <span className="text-[#FFB800]">UMKM</span> yang berkembang
          </h2>
        </div>

        {/* KOMPONEN MENARIK 1: Tab Filtering */}
        <div className="flex justify-center mb-20">
          <div className="flex flex-wrap gap-2 md:gap-3 p-1.5 bg-white border border-slate-100 rounded-full shadow-sm">
            {filterCategories.map((cat, index) => {
              const isActive = activeFilter === cat.name;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFilter(cat.name)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-bold transition-all duration-300 whitespace-nowrap 
                    ${isActive 
                      ? "bg-[#111827] text-white shadow-lg" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#111827]"
                    }`}
                >
                  <cat.icon className={`w-4 h-4 ${isActive ? "text-[#FFB800]" : "text-slate-400"}`} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Projek dengan Animasi AnimatePresence saat filter berubah */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${activeFilter}-${index}`} // Key unik agar framer tau mana yang harus dianimasi
                layout // Smooth transition saat posisi card berubah
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full bg-white p-5 rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500"
              >
                
                {/* KOMPONEN MENARIK 2: Image Container dengan Overlay Interaktif */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] mb-8 bg-slate-100 group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Panel saat di-hover */}
                  <div className="absolute inset-x-4 bottom-4 p-5 bg-[#111827]/90 backdrop-blur-sm rounded-[16px] text-white flex items-center justify-between transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <div>
                        <p className="text-[12px] text-[#FFB800] font-bold uppercase tracking-wider mb-1">Lihat Detail Projek</p>
                        <h4 className="text-[15px] font-semibold text-white/90">Nusa Code Solution</h4>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#FFB800] text-[#111827] flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-500">
                        <FaArrowRight />
                    </div>
                  </div>
                </div>

                {/* Konten Teks di bawah gambar */}
                <div className="flex-grow flex flex-col items-start px-1">
                  <h3 className="text-[22px] font-extrabold text-[#111827] mb-3 group-hover:text-[#FFB800] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* KOMPONEN MENARIK 3: Kategori ala Tag */}
                  <div className="mt-auto pt-4 border-t border-slate-100 w-full flex flex-wrap gap-2">
                    {/* Mengubah format '(category) (category)' menjadi tag terpisah */}
                    {project.category.replace(/[()]/g, '').split(' ').map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-block px-4 py-1.5 bg-slate-50 border border-slate-100 text-[#6B7280] text-[12px] font-bold rounded-full group-hover:bg-[#FFB800]/10 group-hover:border-[#FFB800]/20 group-hover:text-[#FFB800] transition-colors">
                            {tag}
                        </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* KOMPONEN MENARIK 4: CTA Button Akhir */}
        <div className="mt-24 text-center">
            <a href="#contact" className="inline-flex items-center gap-2.5 px-10 py-5 rounded-full bg-[#111827] hover:bg-[#FFB800] hover:text-[#111827] text-white font-bold text-[16px] transition-all duration-300 shadow-xl shadow-gray-900/10 hover:-translate-y-1">
                Ingin Membuat Projek Seperti Ini? Hubungi Kami
                <FaArrowRight />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;