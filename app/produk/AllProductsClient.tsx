"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { Product, Category } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";
import { SITE_INFO } from "@/lib/siteInfo";
import { getProductOrderUrl, getGeneralInquiryUrl } from "@/lib/whatsapp";
import { ProductModal } from "@/components/ProductModal";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FadeUp, motion, staggerContainer, staggerItem } from "@/components/motion";

export function AllProductsClient({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered =
    activeCategory === "Semua"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background-light dark:bg-background-dark pt-28 pb-20 px-4 md:px-8 lg:px-16 font-body">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <FadeUp>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark mb-8">
              <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-text-main dark:text-text-main-dark font-medium">Semua Produk</span>
            </div>
          </FadeUp>

          {/* Header */}
          <FadeUp>
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display">
                Semua Produk Kami
              </h1>
              <p className="mt-3 text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
                {SITE_INFO.company.name} menyediakan berbagai produk berkualitas untuk masyarakat
                Banyumas, Purwokerto, Cilacap dan sekitarnya.
              </p>
            </div>
          </FadeUp>

          {/* Filter */}
          <FadeUp delay={0.1}>
            <div className="flex justify-center w-full overflow-x-auto scrollbar-hide mb-10">
              <div className="inline-flex gap-2 p-1.5 rounded-full bg-neutral-light/10 dark:bg-card-dark flex-nowrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      activeCategory === cat
                        ? "bg-primary text-white shadow-sm"
                        : "text-text-secondary dark:text-text-secondary-dark hover:bg-white/50 dark:hover:bg-white/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {filtered.map((product) => (
              <motion.article
                key={product.id}
                variants={staggerItem}
                className="group flex flex-col bg-card-light dark:bg-card-dark rounded-xl sm:rounded-2xl shadow-sm hover:shadow-glow transition-all duration-300 border border-neutral-light/10 dark:border-neutral-dark/20 overflow-hidden h-full"
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${product.image}')` }}
                    role="img"
                    aria-label={product.alt}
                  />
                  {product.isBestSeller && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-primary text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-sm">
                      Terlaris
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-grow p-3 sm:p-5">
                  <h3 className="text-sm sm:text-lg font-bold text-text-main dark:text-text-main-dark mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary dark:text-text-secondary-dark mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 border-t border-neutral-light/10 dark:border-neutral-dark/20 gap-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] sm:text-xs text-text-secondary dark:text-text-secondary-dark">
                        {product.unit}
                      </span>
                      <span className="text-primary font-bold text-sm sm:text-lg">{product.price}</span>
                    </div>
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="flex items-center gap-1.5 bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors cursor-pointer w-full sm:w-auto justify-center"
                    >
                      <span className="material-symbols-outlined text-[14px] sm:text-[18px]">chat</span>
                      Pesan
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-text-secondary dark:text-text-secondary-dark">
              <span className="material-symbols-outlined text-[48px] mb-3 block">inventory_2</span>
              <p>Tidak ada produk dalam kategori ini.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
