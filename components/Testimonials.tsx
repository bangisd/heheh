"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Elenar Pena",
    role: "Director of Fashion.io",
    content: "Nullam mauris ante, feugiat ut lectus ac, viverra vestibulum felis. Morbi vestibulum facilisis convallis. Ut pretium id augue quis facilisis. Nulla eget fermentum ante. Mauris malesuada lectus vulputate diam viverra, at molestie diam facilisis.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    name: "Budi Santoso",
    role: "CEO of TechUMKM",
    content: "Layanan Nusa Code sangat profesional dan membantu transformasi digital bisnis kami dengan sangat cepat. Kami sangat puas dengan hasilnya.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative w-full py-32 bg-[#111827] block" style={{ minHeight: '600px', display: 'block' }}>
      <div className="container mx-auto px-4 md:px-12 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center space-x-1 mb-4">
            <div className="w-0.5 h-6 bg-gray-600"></div>
            <div className="w-0.5 h-8 bg-gray-400"></div>
            <div className="w-0.5 h-6 bg-gray-600"></div>
          </div>
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-500">Testimonial</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Apa Yang Klien Katakan Pada Kami
          </h2>
        </div>

        {/* Main Slider Box */}
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-[#1F2937] rounded-[40px] p-8 md:p-16 border border-gray-700 shadow-2xl relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden ring-8 ring-gray-800/50 shadow-inner">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text */}
              <div className="text-left space-y-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#FFB800] text-xl" />
                  ))}
                </div>
                
                <p className="text-white text-lg md:text-2xl leading-relaxed italic font-medium">
                  "{testimonials[current].content}"
                </p>
                
                <div className="pt-8 border-t border-gray-700">
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    — {testimonials[current].name}
                  </h4>
                  <p className="text-[#FFB800] font-bold mt-1 uppercase text-sm tracking-widest">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-10 z-30">
            <button 
              onClick={prev}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFB800] text-[#111827] flex items-center justify-center shadow-2xl hover:bg-white transition-colors cursor-pointer"
            >
              <FaChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 z-30">
            <button 
              onClick={next}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#FFB800] text-[#111827] flex items-center justify-center shadow-2xl hover:bg-white transition-colors cursor-pointer"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i ? "w-10 bg-[#FFB800]" : "w-2.5 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
