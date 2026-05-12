"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" as const, ease: "easeInOut" },
    },
  };

  return (
    // 1. Warna Dasar diubah menjadi Krem Sangat Halus (Off-white)
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#FFFCF8] scroll-mt-28">
      
      {/* ========================================================================= */}
      {/* LAYER BACKGROUND (BENTUK TEGAS AGAR TIDAK POLOS) */}
      {/* ========================================================================= */}

      {/* Shape Besar Kanan (Warna Krem Kekuningan) */}
      <div className="absolute top-0 right-0 w-[70vw] h-[100vh] bg-[#FFF5E1] rounded-bl-[200px] z-0" />

      {/* Lingkaran Aksen Kuning Solid Kanan Atas */}
      <div className="absolute top-[-100px] right-[-50px] w-[300px] h-[300px] bg-[#FFB800] rounded-full opacity-10 z-0 blur-2xl" />

      {/* Lingkaran Aksen Biru Kiri Bawah */}
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-100 rounded-full opacity-40 z-0 blur-3xl" />

      {/* Pola Titik (Dot Pattern) di Kiri Tengah */}
      <div className="absolute top-1/3 left-10 opacity-[0.08] z-0 hidden md:block">
        <svg width="120" height="120" fill="none" viewBox="0 0 100 100">
          <pattern id="hero-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#111827" />
          </pattern>
          <rect width="100" height="100" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* Pola Titik di Kanan Bawah */}
      <div className="absolute bottom-20 right-1/4 opacity-[0.08] z-0 hidden md:block">
        <svg width="150" height="150" fill="none" viewBox="0 0 100 100">
          <rect width="100" height="100" fill="url(#hero-dots)" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* KONTEN UTAMA */}
      {/* ========================================================================= */}

      <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
        {/* SISI KIRI (TEKS) */}
        <div className="space-y-8 max-w-xl">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-yellow-200 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800]"></span>
            <span className="text-[#6B7280] text-[13px] font-bold tracking-wide">
              Partner Transformasi Digital UMKM
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[44px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.1] text-[#111827] tracking-tight"
          >
            Bawa Bisnis Anda <br />
            <span className="relative inline-block text-[#111827]">
              {/* Highlight Background Kuning di belakang teks */}
              <span className="absolute inset-x-0 bottom-2 h-6 md:h-8 bg-[#FFB800] opacity-40 -z-10 transform -rotate-1"></span>
              Go Digital
            </span> <br />
            dengan Mudah.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-[#4B5563] max-w-md leading-[1.7]"
          >
            Kami membantu pelaku usaha kecil dan menengah (UMKM) membangun kehadiran digital yang profesional, terjangkau, dan mudah dipahami.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              href="#contact"
              className="bg-[#111827] hover:bg-[#FFB800] hover:text-[#111827] text-white px-8 py-4 rounded-xl font-bold text-[16px] transition-all duration-300 shadow-xl shadow-gray-900/10 hover:-translate-y-1"
            >
              Konsultasi Gratis
            </Link>
             <Link
              href="#services"
              className="text-[#111827] px-6 py-4 rounded-xl font-bold text-[16px] transition-all flex items-center gap-2 hover:bg-gray-100 group"
            >
              Lihat Layanan 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>

        {/* SISI KANAN (GAMBAR DENGAN BINGKAI ESTETIK) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 md:mt-0 flex justify-center md:justify-end"
        >
          {/* Box Container untuk menahan gambar agar tidak kotak kaku */}
          <div className="relative w-full max-w-[450px] aspect-[4/5] z-10">
            
            {/* Aksen Kotak Kuning di Belakang Gambar (Offset) */}
            <div className="absolute -inset-4 bg-[#FFB800] rounded-[32px] rotate-3 opacity-20 z-0 transition-transform hover:rotate-6 duration-500"></div>
            
            {/* Aksen Garis (Outline) di Belakang Gambar */}
            <div className="absolute -inset-4 border-2 border-[#111827] rounded-[32px] -rotate-3 z-0"></div>

            {/* Frame Utama Gambar */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-gray-200 z-10 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Konsultan Digital Nusa Code"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating Element - Order Masuk (Dipercantik) */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              className="absolute top-12 -left-12 md:-left-20 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 flex items-center gap-4 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <FaCheckCircle className="text-green-500 text-2xl" />
              </div>
              <div>
                <p className="font-extrabold text-gray-900 text-sm">Order Baru!</p>
                <p className="text-gray-500 text-xs font-medium">Dari Website Aktif</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Pertumbuhan */}
            <motion.div 
              variants={floatingVariants}
              animate="animate"
              style={{ animationDelay: '1s' }}
              className="absolute bottom-12 -right-6 md:-right-12 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 border border-gray-100"
            >
              <div className="flex items-end gap-2">
                <div className="text-3xl font-black text-[#FFB800]">+85%</div>
                <div className="text-gray-500 text-xs font-medium pb-1">Traffic</div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}