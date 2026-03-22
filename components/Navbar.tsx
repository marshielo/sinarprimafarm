"use client";

import React, { useState, useEffect } from "react";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { useTheme } from "@/lib/theme";
import { SITE_INFO } from "@/lib/siteInfo";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-8">
      <nav
        className={`mx-auto max-w-[1440px] rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-background-dark/90 backdrop-blur-xl shadow-lg"
            : "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md shadow-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
              <span className="material-symbols-outlined text-[20px]">
                egg_alt
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-neutral-dark dark:text-white leading-tight">
                {SITE_INFO.company.nameShort}
              </span>
              <span className="text-[9px] font-medium text-text-secondary dark:text-text-secondary-dark tracking-wider uppercase">
                Farm
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeSection === item.href.slice(1)
                    ? "bg-primary text-white"
                    : "text-neutral-dark dark:text-neutral-light hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Theme Toggle + CTA */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              className="flex size-9 items-center justify-center rounded-full text-neutral-dark dark:text-white hover:bg-neutral-light/10 transition-colors cursor-pointer"
              aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            {/* CTA Button - Desktop */}
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-white transition-all hover:bg-primary-dark hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Hubungi Kami</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex size-9 items-center justify-center rounded-full text-neutral-dark hover:bg-neutral-light/10 dark:text-white lg:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-[22px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-light/10 dark:border-white/10 px-5 pb-5 pt-2">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-neutral-dark dark:text-neutral-light hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={getGeneralInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex h-10 items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold text-white"
              >
                <span>Hubungi Kami</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
