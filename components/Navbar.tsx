"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Process", id: "process" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
    { name: "Testimonials", id: "testimonials" },
    { name: "News", id: "news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    // Intersection Observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 transition-all duration-300 z-[9999]"
      style={{
        backgroundColor: scrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0)",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0, 0, 0, 0.1)" : "none",
        paddingTop: scrolled ? "12px" : "24px",
        paddingBottom: scrolled ? "12px" : "24px",
        borderBottom: scrolled ? "1px solid #f3f4f6" : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="text-2xl font-extrabold text-[#111827]">
            NusaCode<span className="text-[#FFB800]">.</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group cursor-pointer ${
                activeSection === item.id ? "text-[#FFB800]" : "text-[#111827] opacity-70 hover:opacity-100"
              }`}
            >
              {item.name}
              {/* Active Indicator Line */}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFB800] transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-[#111827] text-white px-8 py-3 rounded-lg font-bold text-[12px] uppercase tracking-widest hover:bg-[#FFB800] hover:text-[#111827] transition-all cursor-pointer"
          >
            Konsultasi
          </a>
        </div>

        {/* Mobile Contact Button */}
        <div className="md:hidden">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, "contact")}
            className="bg-[#FFB800] text-[#111827] px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest cursor-pointer"
          >
            Konsultasi
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
