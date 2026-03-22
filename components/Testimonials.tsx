"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FadeUp, motion } from "./motion";
import { AnimatePresence } from "motion/react";

const testimonials = [
  {
    heading: "Kemitraan yang Menguntungkan",
    quote:
      "Sudah 5 tahun kami bermitra dengan Sinar Prima Sukses Farm. Kualitas telur yang konsisten dan dukungan layanan yang excellent membuat bisnis warung makan kami terus berkembang.",
    name: "Budi Santoso",
    role: "Pemilik CV Berkah Dapur",
  },
  {
    heading: "Supplier Andalan Restoran Kami",
    quote:
      "Kami sudah mencoba banyak supplier, tapi Sinar Prima Sukses Farm yang paling bisa diandalkan. Produk selalu segar, harga bersaing, dan pengiriman tepat waktu setiap hari.",
    name: "Sari Wulandari",
    role: "Manager Operasional, Restoran Nusantara Group",
  },
  {
    heading: "Kualitas Terjaga, Bisnis Berkembang",
    quote:
      "Sejak beralih ke Sinar Prima Sukses Farm, kualitas telur untuk katering kami meningkat drastis. Pelanggan bisa merasakan bedanya. Kuning telur pekat dan rasa gurih yang khas.",
    name: "Dewi Rahayu",
    role: "Direktur, PT Dewi Katering Sejahtera",
  },
  {
    heading: "Pelayanan Profesional & Responsif",
    quote:
      "Proses pemesanan mudah via WhatsApp, respon cepat, dan tim mereka selalu siap membantu. Cocok untuk kebutuhan toko kelontong kami yang butuh supply rutin setiap minggu.",
    name: "Hendra Wijaya",
    role: "Pemilik Toko Sumber Rezeki",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section
      className="py-20 px-4 md:px-8 lg:px-16 bg-background-dark font-body"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Kata Konsumen
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mt-2">
              Dipercaya oleh Banyak Mitra
            </h2>
          </div>
        </FadeUp>

        {/* Testimonial Card */}
        <FadeUp delay={0.15}>
          <div className="relative">
            {/* Arrows — hidden on mobile to avoid overlap */}
            <motion.button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-16 z-10 w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              aria-label="Testimoni sebelumnya"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </motion.button>
            <motion.button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-16 z-10 w-10 h-10 hidden md:flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
              aria-label="Testimoni berikutnya"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </motion.button>

            {/* Card */}
            <div className="bg-card-dark border border-neutral-dark/30 rounded-2xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
              <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-4 md:mb-6 block">
                format_quote
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {testimonials[current].heading}
                  </h3>
                  <blockquote className="text-base md:text-lg text-white/80 leading-relaxed mb-6 md:mb-8 min-h-[80px]">
                    {testimonials[current].quote}
                  </blockquote>
                  <div>
                    <p className="text-white font-bold text-base">
                      {testimonials[current].name}
                    </p>
                    <p className="text-text-secondary-dark text-sm italic">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="cursor-pointer relative"
                  aria-label={`Testimoni ${idx + 1}`}
                >
                  <motion.div
                    className="h-2.5 rounded-full bg-white/30"
                    animate={{
                      width: idx === current ? 32 : 10,
                      backgroundColor: idx === current ? "var(--color-primary)" : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                </button>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
