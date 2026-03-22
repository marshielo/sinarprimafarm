"use client";

import React, { useState } from "react";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, FadeRight, motion, staggerContainer, staggerItem } from "./motion";
import { AnimatePresence } from "motion/react";

const faqs = [
  {
    question: `Apa itu ${SITE_INFO.company.name}?`,
    answer: `${SITE_INFO.company.name} adalah supplier telur segar dan kebutuhan dapur terpercaya yang berbasis di Kabupaten Banyumas, Jawa Tengah. Kami menyediakan produk berkualitas dengan harga terjangkau langsung dari peternakan lokal, melayani rumah tangga, warung, restoran, dan katering di Purwokerto, Cilacap, Purbalingga, Banjarnegara, dan sekitarnya.`,
  },
  {
    question: "Produk apa saja yang tersedia?",
    answer:
      "Kami menyediakan Telur Ayam Negeri, Telur Ayam Kampung, Telur Puyuh, Beras Premium, Minyak Goreng, dan Gula Pasir. Semua produk dijamin segar dan berkualitas tinggi.",
  },
  {
    question: "Bagaimana cara memesan produk?",
    answer:
      "Anda bisa langsung menghubungi kami via WhatsApp untuk konsultasi dan pemesanan produk. Cukup klik tombol 'Pesan via WhatsApp' pada produk yang Anda inginkan, dan pesan template akan otomatis terisi.",
  },
  {
    question: "Apakah tersedia layanan pengiriman?",
    answer:
      "Ya, kami melayani pengiriman ke seluruh area Banyumas, Purwokerto, Cilacap, Purbalingga, Banjarnegara, dan Kebumen. Pengiriman dilakukan setiap hari dengan menjaga kesegaran produk. Hubungi kami via WhatsApp untuk detail jadwal dan area jangkauan.",
  },
  {
    question: "Berapa minimum order?",
    answer:
      "Minimum order bervariasi tergantung produk. Untuk telur ayam negeri minimal 1 tray (30 butir), telur ayam kampung bisa per butir, dan produk lainnya sesuai kemasan. Hubungi kami untuk detail lebih lanjut.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark font-body">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display mt-2">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>
        </FadeUp>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Accordion */}
          <motion.div
            className="flex flex-col gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="border border-neutral-light/15 dark:border-neutral-dark/20 rounded-xl overflow-hidden bg-card-light dark:bg-card-dark"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-base font-semibold text-text-main dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.span
                    className="material-symbols-outlined text-primary shrink-0"
                    animate={{ rotate: openIndex === idx ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    arrow_outward
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 150, damping: 20 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <FadeUp delay={0.3}>
              <p className="mt-4 text-sm text-text-secondary dark:text-text-secondary-dark">
                Masih memiliki pertanyaan?{" "}
                <a
                  href={getGeneralInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Hubungi Kami
                </a>
              </p>
            </FadeUp>
          </motion.div>

          {/* Image */}
          <FadeRight>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl hidden lg:block">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnIrURvkt0JncJaMvCoVPUA7zu8r6ZfFlzSGzAFdjZlQs2MwZQ41xDQsRmjjwSU_BAtd68Uq5wp_XxtZMrLvEIs_c2rBS1ZXbV5ZBabFHBZrW8dG_xP8q-1OGvJazJcvL2o8MV7pANI2-fj8yzSfxCeilTlQJtKVXojFkygTQ7zD7wgdEmdhcLGTHs7f5CSkOqni_YFIfq3idyNt63Xh1mfYMiSOQTsys_T6uj1ZcwAFdC51tewAcC5hLZYak6p6fKd-IBoljJ4QCJ')",
                }}
                role="img"
                aria-label={`Peternakan ayam ${SITE_INFO.company.name}`}
              ></div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};
