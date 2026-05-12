"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "UMKM Terbantu", value: "500+", suffix: "Mitra" },
  { label: "Proyek Selesai", value: "1.2k", suffix: "Apps" },
  { label: "Kepuasan Klien", value: "100%", suffix: "Rating" },
  { label: "Pengalaman", value: "5+", suffix: "Tahun" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-heading text-white relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-accent">
                {stat.value}
              </div>
              <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-500 font-medium">
                {stat.suffix}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
