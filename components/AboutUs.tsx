"use client";

import React from "react";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, FadeLeft, FadeRight, motion, staggerContainer, staggerItem } from "./motion";

export const AboutUs = () => {
  return (
    <section
      id="tentang"
      className="flex flex-col bg-background-light dark:bg-background-dark font-body"
    >
      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-20 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <FadeUp>
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-primary"></span>
                <span className="text-primary font-bold text-sm tracking-widest uppercase">
                  Tentang Kami
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-main dark:text-white leading-[1.15] font-display">
                Dedikasi untuk Kualitas & Kesegaran Alami.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-base text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                {SITE_INFO.company.name} berdedikasi untuk menyediakan telur segar
                dan kebutuhan pokok berkualitas tinggi langsung dari peternakan lokal
                Kabupaten Banyumas. Kami percaya bahwa kesehatan bermula dari bahan
                makanan yang segar, alami, dan terpercaya. Sejak awal berdiri, komitmen
                kami adalah melayani masyarakat Banyumas, Purwokerto, Cilacap, dan
                sekitarnya dengan produk terbaik.
              </p>
            </FadeUp>

            {/* Visi & Misi */}
            <motion.div
              className="flex flex-col gap-5 mt-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.div variants={staggerItem} className="flex gap-4 items-start">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Visi
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    Menjadi supplier telur dan kebutuhan dapur terdepan yang
                    dipercaya oleh keluarga dan usaha di Banyumas Raya dan seluruh Jawa Tengah.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="flex gap-4 items-start">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Misi
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    Menyediakan produk segar berkualitas tinggi, memberikan
                    pelayanan terbaik, dan menjaga harga tetap terjangkau untuk
                    semua kalangan.
                  </p>
                </div>
              </motion.div>
              <motion.div variants={staggerItem} className="flex gap-4 items-start">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">history</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-main dark:text-white">
                    Berdiri Sejak {SITE_INFO.company.foundedYear}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    Pengalaman bertahun-tahun dalam mengelola peternakan modern
                    dan melayani ribuan pelanggan setia.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <FadeUp delay={0.3}>
              <div className="pt-4">
                <motion.a
                  href={getGeneralInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-text-main dark:bg-white text-white dark:text-text-main font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-black/10"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* Image Side */}
          <FadeRight className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFoME-KUsniN964aLNQVCoAZYnBL7uhrHJu1CGF5RmESVf8lgHR8_j0DZ7iEaY1ZB6XCjYU2oeq_R8UCzYoIdXWGXrhuvNkIRzMArgkUNJh6ZWl_Qy9hc2mPst3E8JwRMiTDSYSwNWAt-9Ml3epjbFf43nTQSFYWRFNCIZLi6Rj3_Fqy4DUkPM4cI9a1wsTajR4l8UwX2Zeln7Iu6rtCQNJqK_1mXLpsGV7WYVZp2Q72cjL3UR1SWoYcgUFB1zhmIx6ucGgb7tCdEE')",
                }}
                role="img"
                aria-label="Telur segar dalam karton di atas meja kayu"
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#221c10]/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-3 rounded-full">
                    <span className="material-symbols-outlined">eco</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Komitmen Kami
                    </p>
                    <p className="text-base font-bold text-text-main dark:text-white">
                      100% Produk Segar & Berkualitas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </FadeRight>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y border-neutral-light/20 dark:border-gray-700 bg-white dark:bg-[#1a150c]">
        <div className="max-w-[1280px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {[
              { value: SITE_INFO.stats.customers, label: "Pelanggan Puas" },
              { value: "100%", label: "Garansi Segar" },
              { value: "24/7", label: "Support Layanan" },
              { value: SITE_INFO.stats.partners, label: "Mitra Peternak" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-primary">{stat.value}</span>
                <span className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
