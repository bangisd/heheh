import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden scroll-mt-28">
      <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          {/* Dot pattern background behind image */}
          <div className="absolute top-10 left-[-40px] w-40 h-40 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:20px_20px] -z-10 opacity-60"></div>
          
          <div className="relative w-full aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
              alt="David Gadgein, Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="inline-block px-5 py-2 rounded-full bg-accent text-white text-[13px] font-bold">
            Siap Kami?
          </div>
          <h2 className="text-4xl md:text-[45px] font-extrabold text-heading leading-[1.2]">
            Dedikasi Penuh untuk <br />
            Transformasi Digital <br />
            Bisnis Anda
          </h2>
          
          <div className="space-y-6 pt-6">
            <p className="italic text-[20px] text-heading leading-[1.6] font-medium">
              “Melalui riset mendalam dan integrasi teknologi terbaru, kami bertekad menghadirkan produk digital yang efisien, tepat waktu, dan memberikan nilai tambah yang nyata bagi setiap klien kami.”
            </p>
            <div>
              <p className="font-extrabold text-heading text-[16px]">— David Gadgein, <span className="text-accent">Founder</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
