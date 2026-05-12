"use client";
import { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white" >
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div>
              <span className="text-accent text-[12px] font-bold uppercase tracking-widest">Kontak Kami</span>
              <h2 className="text-4xl md:text-[55px] font-extrabold text-heading mt-4 leading-tight">
                Mari Diskusikan <br />
                Proyek Impian Anda
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-accent transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all">
                  <FaWhatsapp />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">WhatsApp</p>
                  <p className="text-lg font-bold text-heading">+62 812-3456-7890</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-accent transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-bold text-heading">hello@nusacode.id</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-accent transition-colors">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-2xl group-hover:bg-accent group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Alamat</p>
                  <p className="text-lg font-bold text-heading">Semarang, Jawa Tengah</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-heading rounded-[40px] p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Nama Lengkap</label>
                <input
                  required
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Email Bisnis</label>
                <input
                  required
                  type="email"
                  placeholder="budi@usaha.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Pesan Singkat</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan sedikit tentang kebutuhan Anda..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-5 rounded-xl font-bold text-[16px] transition-all flex items-center justify-center space-x-3 ${
                  status === "success" ? "bg-green-500 text-white" : "bg-accent text-heading hover:scale-[1.02]"
                }`}
              >
                {status === "loading" ? (
                  <div className="w-6 h-6 border-2 border-heading border-t-transparent rounded-full animate-spin"></div>
                ) : status === "success" ? (
                  "Pesan Terkirim!"
                ) : (
                  "Kirim Sekarang"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
