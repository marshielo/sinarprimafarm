"use client";

import React from "react";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, FadeLeft, FadeRight, motion, staggerContainer, staggerItem } from "./motion";

const values = [
  {
    icon: "workspace_premium",
    title: "Profesionalisme",
    description: "Etika dan profesionalisme di semua tindakan bisnis kami.",
  },
  {
    icon: "verified",
    title: "Kualitas Terjamin",
    description: "Produk segar dan berkualitas tinggi setiap hari.",
  },
  {
    icon: "payments",
    title: "Harga Terjangkau",
    description: "Harga kompetitif tanpa mengorbankan kualitas.",
  },
  {
    icon: "local_shipping",
    title: "Pengiriman Cepat",
    description: "Pengiriman tepat waktu ke seluruh area Banyumas dan sekitarnya.",
  },
  {
    icon: "support_agent",
    title: "Pelayanan Ramah",
    description: "Layanan pelanggan responsif dan siap membantu.",
  },
  {
    icon: "eco",
    title: "Produk Alami",
    description: "Bahan baku alami dari peternakan lokal Banyumas.",
  },
];

export const Standards = () => {
  return (
    <section id="standar" className="py-20 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark font-body">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Komitmen Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display mt-2">
              Standar yang Kami Terapkan
            </h2>
            <p className="mt-3 text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              {SITE_INFO.company.name} berkomitmen untuk menyediakan produk yang
              unggul dan berkualitas tinggi.
            </p>
          </div>
        </FadeUp>

        {/* Content: Image + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <FadeLeft>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFoME-KUsniN964aLNQVCoAZYnBL7uhrHJu1CGF5RmESVf8lgHR8_j0DZ7iEaY1ZB6XCjYU2oeq_R8UCzYoIdXWGXrhuvNkIRzMArgkUNJh6ZWl_Qy9hc2mPst3E8JwRMiTDSYSwNWAt-9Ml3epjbFf43nTQSFYWRFNCIZLi6Rj3_Fqy4DUkPM4cI9a1wsTajR4l8UwX2Zeln7Iu6rtCQNJqK_1mXLpsGV7WYVZp2Q72cjL3UR1SWoYcgUFB1zhmIx6ucGgb7tCdEE')",
                }}
                role="img"
                aria-label={`Peternakan modern ${SITE_INFO.company.name}`}
              ></div>
            </div>
          </FadeLeft>

          {/* Values Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="flex gap-4 p-5 rounded-xl bg-card-light dark:bg-card-dark border border-neutral-light/10 dark:border-neutral-dark/20 hover:border-primary/30 hover:shadow-soft transition-colors duration-200"
              >
                <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-[24px]">
                    {value.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-main dark:text-white mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
