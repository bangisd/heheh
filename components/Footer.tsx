import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaAngleRight
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] relative overflow-hidden text-white pt-32 pb-10 border-t border-slate-800">
      
      {/* ========================================== */}
      {/* DEKORASI BACKGROUND (GLOW HALUS) */}
      {/* ========================================== */}
      <div className="absolute top-0 right-[-5%] w-[400px] h-[400px] bg-[#FFB800]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ========================================== */}
      {/* KONTEN FOOTER */}
      {/* ========================================== */}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Kolom 1: Brand & Deskripsi (Lebih Lebar) */}
          <div className="col-span-1 md:col-span-5 space-y-6">
            <a href="#home" className="text-3xl font-extrabold text-white tracking-tight inline-block mb-2">
              NusaCode<span className="text-[#FFB800]">.</span>
            </a>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Membantu UMKM Indonesia bertransformasi ke dunia digital dengan cara yang mudah, transparan, dan terjangkau. Fokus pada hasil nyata.
            </p>
            
            {/* Social Icons dengan Hover Lingkaran */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#FFB800] hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#FFB800] hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#FFB800] hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-[#FFB800] hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn size={14} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigation */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[18px] mb-6 text-white tracking-wide">Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              {['Home', 'About Us', 'Portfolio', 'Pricing', 'News'].map((item, i) => (
                <li key={i}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="group flex items-center hover:text-[#FFB800] transition-colors">
                    <FaAngleRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1 text-[#FFB800]" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Services */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-[18px] mb-6 text-white tracking-wide">Services</h4>
            <ul className="space-y-4 text-slate-400 text-[15px]">
              {['Website Development', 'SEO Services', 'Digital Marketing', 'Google Ads'].map((service, i) => (
                <li key={i}>
                  <a href="#services" className="group flex items-center hover:text-[#FFB800] transition-colors">
                    <FaAngleRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-1 text-[#FFB800]" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Office (Dipercantik dengan Icon) */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-bold text-[18px] mb-6 text-white tracking-wide">Hubungi Kami</h4>
            <ul className="space-y-5 text-slate-400 text-[15px]">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors">
                  <FaMapMarkerAlt size={12} />
                </div>
                <span className="leading-relaxed">Semarang, Jawa Tengah<br/>Indonesia</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors">
                  <FaEnvelope size={12} />
                </div>
                <span className="group-hover:text-white transition-colors cursor-pointer">hello@nusacode.id</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800/50 flex items-center justify-center group-hover:bg-[#FFB800] group-hover:text-[#0F172A] transition-colors">
                  <FaPhoneAlt size={12} />
                </div>
                <span className="group-hover:text-white transition-colors cursor-pointer">+62 812-3456-7890</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================== */}
        {/* BOTTOM BAR (COPYRIGHT) */}
        {/* ========================================== */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[14px]">
            © {new Date().getFullYear()} <span className="font-bold text-slate-300">Nusa Code</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-slate-500 text-[14px] font-medium">
            <a href="#" className="hover:text-[#FFB800] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FFB800] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;