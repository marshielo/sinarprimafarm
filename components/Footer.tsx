"use client";

import React from "react";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { motion, staggerContainer, staggerItem } from "./motion";

const footerNav = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Standar Kami", href: "#standar" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const footerProducts = [
  "Telur Ayam Negeri",
  "Telur Ayam Kampung",
  "Telur Puyuh",
  "Beras Premium",
  "Minyak Goreng",
  "Gula Pasir",
];

export const Footer = () => {
  return (
    <footer className="mt-auto bg-background-dark font-body">
      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="flex flex-col space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-[22px]">
                  egg_alt
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white leading-tight">
                  {SITE_INFO.company.nameShort}
                </span>
                <span className="text-[10px] font-medium text-text-secondary-dark tracking-wider uppercase">
                  Farm
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-light leading-relaxed max-w-xs">
              {SITE_INFO.company.tagline.charAt(0).toUpperCase() + SITE_INFO.company.tagline.slice(1)} — supplier telur segar dan
              kebutuhan dapur terpercaya di Banyumas langsung dari peternakan lokal.
            </p>
            <div className="flex items-center gap-3 text-neutral-light text-sm">
              <span className="material-symbols-outlined text-[18px]">
                location_on
              </span>
              <span>{SITE_INFO.location.short}</span>
            </div>
            <div className="flex items-center gap-3 text-neutral-light text-sm">
              <span className="material-symbols-outlined text-[18px]">
                mail
              </span>
              <a
                href={`mailto:${SITE_INFO.contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {SITE_INFO.contact.email}
              </a>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={staggerItem} className="flex flex-col space-y-5">
            <h4 className="text-base font-bold text-white font-display">
              Navigasi
            </h4>
            <ul className="flex flex-col space-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    className="text-neutral-light hover:text-primary transition-colors text-sm font-medium"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Column */}
          <motion.div variants={staggerItem} className="flex flex-col space-y-5">
            <h4 className="text-base font-bold text-white font-display">
              Produk
            </h4>
            <ul className="flex flex-col space-y-3">
              {footerProducts.map((product) => (
                <li key={product}>
                  <a
                    className="text-neutral-light hover:text-primary transition-colors text-sm font-medium"
                    href="#produk"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={staggerItem} className="flex flex-col space-y-5">
            <h4 className="text-base font-bold text-white font-display">
              Kontak
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-neutral-light">
              <a
                href={`tel:${SITE_INFO.contact.phone}`}
                className="hover:text-primary transition-colors font-medium"
              >
                {SITE_INFO.contact.phoneFormatted}
              </a>
              <p>{SITE_INFO.hours.weekday.days}: {SITE_INFO.hours.weekday.open.replace(":", ".")} - {SITE_INFO.hours.weekday.close.replace(":", ".")}</p>
              <p>{SITE_INFO.hours.weekend.days}: {SITE_INFO.hours.weekend.open.replace(":", ".")} - {SITE_INFO.hours.weekend.close.replace(":", ".")}</p>
            </div>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-primary-dark transition-colors w-fit"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
              </svg>
              WhatsApp
            </a>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a
                href={`mailto:${SITE_INFO.contact.email}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-light hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-[18px]">
                  mail
                </span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-light hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                </svg>
              </a>
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-neutral-light hover:bg-wa-green hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-light text-center md:text-left">
              &copy; {new Date().getFullYear()} {SITE_INFO.company.name}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-light/50">
              {SITE_INFO.company.tagline.charAt(0).toUpperCase() + SITE_INFO.company.tagline.slice(1)}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
