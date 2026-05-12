"use client";

import { useState } from "react";
import { FaRocket, FaLightbulb, FaCheckCircle, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: FaLightbulb,
    title: "Konsultasi & Riset",
    description: "Kami mendengarkan kebutuhan bisnis Anda dan melakukan riset pasar yang mendalam.",
    color: "bg-blue-500",
  },
  {
    icon: FaRocket,
    title: "Strategi & Desain",
    description: "Menyusun strategi digital yang tepat dan desain yang memikat audiens Anda.",
    color: "bg-purple-500",
  },
  {
    icon: FaCheckCircle,
    title: "Implementasi",
    description: "Membangun sistem atau website Anda dengan standar teknologi terbaru.",
    color: "bg-[#FFB800]",
  },
  {
    icon: FaUsers,
    title: "Evaluasi & Support",
    description: "Memastikan semua berjalan lancar dan memberikan dukungan berkelanjutan.",
    color: "bg-green-500",
  },
];

const Process = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="py-32 relative bg-slate-50 overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND DECORATIONS STATIS */}
      {/* ========================================== */}
      
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3]"
        style={{ 
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FFB800]/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ========================================== */}
      {/* WAVE KUNING INTERAKTIF (LEBIH TINGGI & KE KANAN) */}
      {/* ========================================== */}
      
      <motion.div 
        // Dibuat super lebar (400vw) agar ombaknya tidak habis saat digeser
        className="absolute bottom-0 left-0 w-[400vw] leading-none z-0 opacity-30 pointer-events-none"
        animate={{
          // Posisi default di 0vw (lebih ke kanan). Saat hover, geser 25vw per langkah.
          x: hoveredIndex !== null ? `-${hoveredIndex * 25}vw` : "0vw",
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
      >
        {/* preserveAspectRatio="none" dan height fix (250px) membuat wave terjamin tinggi */}
        <svg 
          viewBox="0 0 1440 320" 
          preserveAspectRatio="none" 
          className="w-full h-[150px] md:h-[250px]" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Menggunakan path gelombang yang lebih tajam/curam */}
          <path fill="#FFB800" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,165.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>

      {/* ========================================== */}
      {/* MAIN CONTENT & AURA INTERAKTIF */}
      {/* ========================================== */}
      
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        <div className="text-center mb-24 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-2 h-2 bg-[#FFB800] rounded-full mb-3"></div>
            <span className="text-slate-500 text-[13px] font-bold uppercase tracking-[0.2em]">
              Cara Kami Bekerja
            </span>
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-[#111827] leading-[1.2]">
            Proses Kerja Yang <span className="text-[#FFB800]">Terukur</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* AURA GLOW YANG MENGIKUTI KURSOR */}
          <motion.div
            className="hidden md:block absolute top-12 -translate-y-1/2 w-[250px] h-[250px] bg-[#FFB800]/40 rounded-full blur-[60px] z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoveredIndex !== null ? 1 : 0,
              left: hoveredIndex !== null ? `calc(${(hoveredIndex * 25) + 12.5}% - 125px)` : "50%",
            }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          />

          {steps.map((step, index) => (
            <div 
              key={index} 
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group text-center flex flex-col items-center cursor-pointer z-10"
            >
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0 border-t-2 border-dashed border-slate-300 -z-10 transition-colors duration-300 group-hover:border-[#FFB800]"></div>
              )}
              
              <div className="relative z-10 flex flex-col items-center">
                
                <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center text-white text-3xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] ring-4 ring-white`}>
                  <step.icon />
                </div>
                
                <div className="mt-8 flex flex-col items-center">
                  <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-full text-[12px] font-bold text-[#FFB800] mb-4 shadow-sm group-hover:bg-[#FFB800] group-hover:text-white transition-colors">
                    Langkah 0{index + 1}
                  </span>
                  <h3 className="text-[20px] font-extrabold text-slate-900 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-700 transition-colors">
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;