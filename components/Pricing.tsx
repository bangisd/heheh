"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// Data di-upgrade agar memiliki status aktif/tidak aktif untuk perbandingan visual
const tiers = [
  {
    name: "Tier Starter",
    price: "Gratis",
    period: "selamanya",
    description: "Ideal untuk UMKM yang baru merintis dan ingin mencoba go digital.",
    features: [
      { name: "Profil Bisnis Digital Dasar", active: true },
      { name: "Terindeks di Google (SEO Dasar)", active: true },
      { name: "Dukungan Komunitas", active: true },
      { name: "Custom Domain (.com / .id)", active: false },
      { name: "Integrasi WhatsApp Order", active: false },
      { name: "Bebas Biaya Maintenance", active: false },
    ],
    highlight: false,
  },
  {
    name: "Growth Pro",
    price: "Custom",
    period: "per projek",
    description: "Solusi *all-in-one* untuk pertumbuhan dan skala bisnis yang pesat.",
    features: [
      { name: "Website Custom Penuh", active: true },
      { name: "SEO & Google Analytics Advanced", active: true },
      { name: "Dukungan Prioritas 24/7", active: true },
      { name: "Custom Domain (.com / .id)", active: true },
      { name: "Integrasi WhatsApp Order", active: true },
      { name: "Bebas Biaya Maintenance (Bulan 1)", active: true },
    ],
    highlight: true,
  },
];

const Pricing = () => {
  return (
    // Background sedikit keabuan dengan dot pattern agar tidak polos
    <section id="pricing" className="py-32 relative bg-[#F8FAFC] overflow-hidden">
      
      {/* ========================================== */}
      {/* BACKGROUND DECORATIONS */}
      {/* ========================================== */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{ 
          backgroundImage: 'radial-gradient(#CBD5E1 1.5px, transparent 1.5px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-[#FFB800]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ========================================== */}
      {/* MAIN CONTENT */}
      {/* ========================================== */}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-2 h-2 bg-[#FFB800] rounded-full mb-3"></div>
            <span className="text-slate-500 text-[13px] font-bold uppercase tracking-[0.2em]">
              Pricing Plan
            </span>
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-[#111827] leading-[1.2]">
            Pilih Solusi <span className="text-[#FFB800]">Tepat</span> Anda
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-[16px]">
            Skema harga yang transparan tanpa biaya tersembunyi. Mulai secara gratis, lalu tingkatkan seiring pertumbuhan bisnis Anda.
          </p>
        </div>

        {/* Grid Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`p-10 md:p-12 rounded-[32px] transition-all relative z-10 flex flex-col h-full ${
                tier.highlight
                  ? "bg-[#111827] border border-[#FFB800]/30 shadow-[0_20px_50px_rgba(255,184,0,0.15)] md:scale-105" // Card Pro membesar & gelap
                  : "bg-white border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)]" // Card Starter putih & flat
              }`}
            >
              
              {/* Badge Populer Khusus Tier Pro */}
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FFB800] to-yellow-400 text-[#111827] text-[12px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-yellow-500/30">
                  Paling Populer
                </div>
              )}
              
              {/* Header Card */}
              <div className="mb-8 border-b border-opacity-20 pb-8 border-slate-500">
                <h3 className={`text-[20px] font-bold mb-4 ${tier.highlight ? "text-[#FFB800]" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <div className="flex items-end gap-2 mb-4">
                  <span className={`text-[48px] font-extrabold leading-none ${tier.highlight ? "text-white" : "text-[#111827]"}`}>
                    {tier.price}
                  </span>
                  <span className={`text-[16px] font-medium mb-1 ${tier.highlight ? "text-slate-400" : "text-slate-500"}`}>
                    / {tier.period}
                  </span>
                </div>
                <p className={`text-[15px] leading-relaxed ${tier.highlight ? "text-slate-300" : "text-slate-500"}`}>
                  {tier.description}
                </p>
              </div>

              {/* List Fitur */}
              <ul className="space-y-5 mb-10 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-3 text-[15px]">
                    {feature.active ? (
                      <FaCheckCircle className={tier.highlight ? "text-[#FFB800] text-lg" : "text-green-500 text-lg"} />
                    ) : (
                      <FaTimesCircle className="text-slate-300 text-lg" />
                    )}
                    <span className={`font-medium ${
                      feature.active 
                        ? (tier.highlight ? "text-slate-100" : "text-slate-700") 
                        : (tier.highlight ? "text-slate-500 line-through" : "text-slate-400 line-through")
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-xl font-bold text-[16px] transition-all duration-300 ${
                  tier.highlight 
                    ? "bg-[#FFB800] hover:bg-yellow-400 text-[#111827] shadow-[0_10px_20px_rgba(255,184,0,0.2)]" 
                    : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
                }`}
              >
                {tier.highlight ? "Mulai Transformasi" : "Coba Gratis"}
              </motion.button>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;