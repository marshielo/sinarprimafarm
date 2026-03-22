"use client";

import React, { useEffect, useState } from "react";
import { getProductOrderUrl } from "@/lib/whatsapp";

type ProductFeature = {
  icon: string;
  title: string;
  description: string;
};

export type ProductDetails = {
  id: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  category: string;
  isBestSeller?: boolean;
  alt: string;
  rating?: number;
  features?: ProductFeature[];
  grade?: string;
  minOrder?: string;
  stockStatus?: string;
};

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: ProductDetails | null;
}

export const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;
  if (!product) return null;

  const features = product.features || [
    { icon: "agriculture", title: "Segar dari peternakan", description: "Dipanen setiap pagi hari" },
    { icon: "shopping_basket", title: "Minimal order: 1 tray", description: "Pembelian fleksibel" },
    { icon: "egg", title: "30 butir per tray", description: "Ukuran medium-large standar" },
  ];

  const waUrl = getProductOrderUrl(product.name, product.price);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm" onClick={onClose}></div>

      <div
        className={`relative w-full max-w-4xl bg-background-light dark:bg-card-dark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] transition-all duration-300 transform ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full text-neutral-dark dark:text-white transition-colors shadow-sm backdrop-blur-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {/* Product Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
          <div
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${product.image}')` }}
            role="img"
            aria-label={product.alt}
          ></div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 overflow-y-auto font-body">
          <div className="flex-1 flex flex-col gap-5">
            <div className="space-y-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary uppercase tracking-wide">
                {product.stockStatus || "Stok Tersedia"}
              </span>
              <h2 className="text-2xl font-bold text-text-main dark:text-white leading-tight font-display">
                {product.name}
              </h2>
              {product.grade && (
                <span className="inline-flex items-center rounded-md bg-[#f4efe7] dark:bg-gray-800 px-3 py-1 text-sm font-medium text-text-secondary dark:text-[#d4b47d]">
                  {product.grade}
                </span>
              )}
            </div>

            {/* Price */}
            <div className="border-b border-neutral-light/20 dark:border-gray-700 pb-5">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">{product.price}</span>
                <span className="text-base text-neutral-light dark:text-gray-300 font-medium">/ {product.unit.replace("Per ", "").toLowerCase()}</span>
              </div>
              <p className="text-xs text-neutral-light dark:text-gray-400 mt-1">*Harga belum termasuk ongkos kirim</p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-text-main dark:text-gray-100 uppercase tracking-wider">Detail Produk</h3>
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-background-light dark:bg-gray-800/50">
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-gray-700 text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-main dark:text-white">{feature.title}</p>
                    <p className="text-xs text-neutral-light dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full flex items-center justify-center gap-3 bg-wa-green hover:bg-wa-green/90 text-white font-bold text-base py-3.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
              <span>Pesan via WhatsApp</span>
            </a>
            <p className="text-center text-xs text-neutral-light dark:text-gray-500 mt-3">
              Respon cepat pukul 08.00 - 17.00 WIB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
