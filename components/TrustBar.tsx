import { FaBuilding, FaHospital, FaUtensils, FaStore, FaHammer, FaLaptop } from "react-icons/fa";

const logos = [
  { icon: FaBuilding, name: "Corporate" },
  { icon: FaHospital, name: "Healthcare" },
  { icon: FaUtensils, name: "F&B Local" },
  { icon: FaStore, name: "Retail" },
  { icon: FaHammer, name: "Industry" },
  { icon: FaLaptop, name: "Tech Startup" },
];

const TrustBar = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <p className="text-center text-[12px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          Dipercaya Oleh Berbagai Sektor UMKM
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center space-x-3 grayscale hover:grayscale-0 transition-all cursor-default">
              <logo.icon className="text-3xl" />
              <span className="text-[18px] font-extrabold tracking-tighter text-heading">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
