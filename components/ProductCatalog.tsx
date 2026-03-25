"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductModal } from "./ProductModal";
import { getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, motion, staggerContainer, staggerItem } from "./motion";
import type { Product } from "@/lib/types";

const HOMEPAGE_LIMIT = 3;

export const ProductCatalog = ({ products }: { products: Product[] }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayProducts = products.slice(0, HOMEPAGE_LIMIT);
  const hasMore = products.length > HOMEPAGE_LIMIT;

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section
      id="produk"
      className="flex flex-col items-center py-20 px-4 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark font-body"
    >
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        {/* Section Header */}
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-3">
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">
              Pilihan Terbaik
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display">
              Lini Produk Kami
            </h2>
            <p className="mt-1 text-text-secondary dark:text-text-secondary-dark max-w-lg">
              {SITE_INFO.company.name} menyediakan berbagai produk berkualitas dan
              terjangkau untuk masyarakat Banyumas, Purwokerto, Cilacap dan sekitarnya.
            </p>
          </div>
        </FadeUp>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-2 px-1 sm:px-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {displayProducts.map((product) => (
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
                <h3 className="text-sm sm:text-lg font-bold text-text-main dark:text-text-main-dark mb-0.5 sm:mb-1 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-text-secondary-dark mb-2 sm:mb-4 line-clamp-2 hidden sm:block">
                  {product.description}
                </p>
                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 sm:pt-4 border-t border-neutral-light/10 dark:border-neutral-dark/20 gap-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-xs text-text-secondary dark:text-text-secondary-dark">
                      {product.unit}
                    </span>
                    <span className="text-primary font-bold text-sm sm:text-lg">
                      {product.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="flex items-center gap-1.5 sm:gap-2 bg-primary hover:bg-primary-dark text-white px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors active:scale-95 cursor-pointer w-full sm:w-auto justify-center"
                  >
                    <span className="material-symbols-outlined text-[14px] sm:text-[18px]">
                      chat
                    </span>
                    Pesan
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* "Lihat Semua Produk" CTA */}
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
            {hasMore && (
              <Link
                href="/produk"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-primary/20"
              >
                <span>Lihat Semua Produk</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            )}
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary/30 text-primary font-bold px-8 py-3.5 rounded-full hover:bg-primary/5 transition-colors"
            >
              <span>Hubungi Kami</span>
            </a>
          </div>
        </FadeUp>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};
