"use client";

import React from "react";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, FadeLeft, FadeRight, motion, staggerContainer, staggerItem } from "./motion";

const { latitude, longitude } = SITE_INFO.location.coordinates;
const GMAPS_LINK = `https://maps.google.com/?q=${latitude},${longitude}`;
const GMAPS_EMBED = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

export const LocationSection = () => {
  return (
    <section
      id="kontak"
      className="w-full py-20 px-4 md:px-8 lg:px-16 flex justify-center bg-background-light dark:bg-background-dark font-body"
    >
      <div className="w-full max-w-7xl flex flex-col">
        {/* Section Header */}
        <FadeUp>
          <div className="text-center mb-14">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Temukan Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display mt-2">
              Lokasi & Kontak
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Map Container */}
          <FadeLeft className="lg:col-span-7 w-full h-full min-h-[320px] lg:min-h-[450px] relative rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={GMAPS_EMBED}
              className="w-full h-full min-h-[320px] lg:min-h-[450px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Lokasi ${SITE_INFO.company.name} di Google Maps`}
            ></iframe>
            {/* Open in Google Maps button */}
            <motion.a
              href={GMAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 flex items-center gap-2 bg-white dark:bg-neutral-800 text-primary px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-symbols-outlined text-[20px]">
                open_in_new
              </span>
              Buka di Google Maps
            </motion.a>
          </FadeLeft>

          {/* Contact Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={staggerItem} whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }} className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/10 dark:border-neutral-800 hover:border-primary/30 transition-colors">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                <span className="material-symbols-outlined text-[28px]">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="text-text-main dark:text-white text-lg font-bold mb-1">
                  Alamat
                </h3>
                <p className="text-text-secondary dark:text-neutral-300 text-base leading-relaxed">
                  {SITE_INFO.location.street},
                  <br />
                  {SITE_INFO.location.city}, {SITE_INFO.location.province} {SITE_INFO.location.postalCode}
                </p>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }} className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/10 dark:border-neutral-800 hover:border-primary/30 transition-colors">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                <span className="material-symbols-outlined text-[28px]">
                  call
                </span>
              </div>
              <div>
                <h3 className="text-text-main dark:text-white text-lg font-bold mb-1">
                  Telepon
                </h3>
                <a
                  className="text-text-secondary dark:text-neutral-300 text-base hover:text-primary transition-colors"
                  href={`tel:${SITE_INFO.contact.phone}`}
                >
                  {SITE_INFO.contact.phoneFormatted}
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }} className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/10 dark:border-neutral-800 hover:border-primary/30 transition-colors">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                <span className="material-symbols-outlined text-[28px]">
                  mail
                </span>
              </div>
              <div>
                <h3 className="text-text-main dark:text-white text-lg font-bold mb-1">
                  Email
                </h3>
                <a
                  className="text-text-secondary dark:text-neutral-300 text-base hover:text-primary transition-colors"
                  href={`mailto:${SITE_INFO.contact.email}`}
                >
                  {SITE_INFO.contact.email}
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerItem} whileHover={{ x: 4, transition: { type: "spring", stiffness: 300, damping: 20 } }} className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/10 dark:border-neutral-800 hover:border-primary/30 transition-colors">
              <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                <span className="material-symbols-outlined text-[28px]">
                  schedule
                </span>
              </div>
              <div>
                <h3 className="text-text-main dark:text-white text-lg font-bold mb-1">
                  Jam Buka
                </h3>
                <p className="text-text-secondary dark:text-neutral-300 text-base leading-relaxed">
                  <span className="block">{SITE_INFO.hours.weekday.days}: {SITE_INFO.hours.weekday.open.replace(":", ".")} - {SITE_INFO.hours.weekday.close.replace(":", ".")}</span>
                  <span className="block text-sm text-primary mt-1 font-medium">
                    {SITE_INFO.hours.weekend.days}: {SITE_INFO.hours.weekend.open.replace(":", ".")} - {SITE_INFO.hours.weekend.close.replace(":", ".")}
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
