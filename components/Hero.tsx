"use client";

import React from "react";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { motion } from "./motion";

export const Hero = () => {
  return (
    <section id="beranda" className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hens-factory-chicken-cages.jpg')",
          }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          role="img"
          aria-label="Telur segar organik dalam keranjang di peternakan dengan cahaya matahari hangat"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/85 via-neutral-dark/60 to-transparent dark:from-black/90 dark:via-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 lg:px-20 py-20">
        <div className="max-w-[720px] flex flex-col gap-6">
          {/* Brand Name — Highlighted */}
          <motion.div
            className="relative inline-flex w-fit flex-col items-start"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.3 }}
          >
            {/* Decorative glow behind */}
            <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-xl -z-10" />
            {/* Brand container with accent borders */}
            <div className="relative px-5 py-3 sm:px-7 sm:py-4 border-l-4 border-primary bg-white/5 backdrop-blur-sm rounded-r-xl">
              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-black tracking-wider uppercase text-white">
                <span className="text-primary">{SITE_INFO.company.nameShort}</span>{" "}
                <span className="text-white/90">Farm</span>
              </p>
              <motion.div
                className="mt-2 h-1 bg-gradient-to-r from-primary via-primary-light to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              />
              <p className="mt-1.5 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/50">
                {SITE_INFO.company.tagline}
              </p>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl -mt-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.65 }}
          >
            Supplier Telur Segar & <span className="text-primary">Kebutuhan Dapur</span> Terpercaya di Banyumas
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.85 }}
          >
            {SITE_INFO.company.tagline.charAt(0).toUpperCase() + SITE_INFO.company.tagline.slice(1)} — telur segar berkualitas dan bahan pokok langsung dari peternakan lokal Banyumas ke rumah atau usaha Anda. Melayani Purwokerto, Cilacap, Purbalingga dan sekitarnya.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-4 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 18, delay: 1.0 }}
          >
            <motion.a
              href="#produk"
              className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary-dark"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Lihat Produk Kami</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </motion.a>
            <motion.a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20 hover:border-white/40"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Hubungi Kami</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            {[
              { value: SITE_INFO.stats.customers, label: "Pelanggan Puas" },
              { value: SITE_INFO.stats.freshProduct, label: "Produk Segar" },
              { value: SITE_INFO.stats.partners, label: "Mitra Peternak" },
            ].map((stat, i) => (
              <React.Fragment key={stat.label}>
                {i > 0 && <div className="hidden sm:block h-10 w-px bg-white/20" />}
                <motion.div
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 18, delay: 1.4 + i * 0.15 }}
                >
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm font-medium text-white/60">{stat.label}</span>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 0.5 },
          y: { delay: 1.8, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span className="material-symbols-outlined text-white/50 text-[28px]">keyboard_arrow_down</span>
      </motion.div>
    </section>
  );
};
