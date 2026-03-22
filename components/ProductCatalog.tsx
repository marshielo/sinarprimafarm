"use client";

import React, { useState } from "react";
import { ProductModal, ProductDetails } from "./ProductModal";
import { getProductOrderUrl, getGeneralInquiryUrl } from "@/lib/whatsapp";
import { SITE_INFO } from "@/lib/siteInfo";
import { FadeUp, motion, staggerContainer, staggerItem } from "./motion";

const products: ProductDetails[] = [
  {
    id: 1,
    name: "Telur Ayam Negeri (Tray)",
    description:
      "Telur segar pilihan langsung dari peternakan, kaya protein dan nutrisi untuk keluarga.",
    price: "Rp 58.000",
    unit: "Per Tray",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCboneQgOjSybemIR1mElQPx2RE4viQuc5Bbfb9YznJzuK_OBe7SAC_xO9HAiGmI44qxQh74KyrsKXWAYKs_wIqWvmYyYpVkig3CdRvP-dy-T7fnrVSquNoBqaYTy33Fxi7jo6BSf61IkdvQ4fBbfEAptE2uN7MAT1gOgFRMtXJqGNdaWzx_FVCYL6zLakZ8ysSExzjJwnwDR2YMhF9eKGjrxM1cmDdAHmpi63DGPoVTnC2Sh7inzHqjfilpANTYFU23CdoWZEyAZY4",
    category: "Aneka Telur",
    isBestSeller: true,
    alt: "Tray telur ayam negeri segar berwarna coklat",
    grade: "Grade A Premium",
    features: [
      {
        icon: "agriculture",
        title: "Segar dari peternakan",
        description: "Dipanen setiap pagi hari",
      },
      {
        icon: "shopping_basket",
        title: "Minimal order: 1 tray",
        description: "Pembelian fleksibel untuk rumah tangga",
      },
      {
        icon: "egg",
        title: "30 butir per tray",
        description: "Ukuran medium-large standar",
      },
    ],
  },
  {
    id: 2,
    name: "Telur Ayam Kampung",
    description:
      "Telur ayam kampung asli, dipelihara secara alami — lebih sehat dan bergizi.",
    price: "Rp 3.000",
    unit: "Per Butir",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOQCLTWMSjba8p2DBGEd2yecH1Sil-waO4A5YmbhmhNhEwDJVmIfeASb7mZuAcD8fPl-lLeeZQNZNPe0qtAaqnQY46lwva6JOKJKs3KwCys8tzkGAaREzCAo7-cWOV8dlzksCRyuvhLCG3WIsC-V4lQ00N1Sywtau4jqsiLcPnmplic4t48zaVamLhzTasl271UaXKFq5WkBQrWy3vm4KxYwYknvvEHmc3iVlybCQbNg1URAXfB-1u8wq3ivlP4Zl58Bax0eOC_RoC",
    category: "Aneka Telur",
    alt: "Telur ayam kampung asli dalam keranjang",
    features: [
      {
        icon: "nature",
        title: "Ayam Kampung Asli",
        description: "Dipelihara secara alami",
      },
      {
        icon: "health_and_safety",
        title: "Lebih Sehat",
        description: "Rendah lemak dan kolesterol",
      },
      {
        icon: "egg_alt",
        title: "Kuning Telur Pekat",
        description: "Rasa lebih gurih",
      },
    ],
  },
  {
    id: 3,
    name: "Telur Puyuh",
    description:
      "Kecil namun kaya nutrisi, cocok untuk aneka masakan dan camilan.",
    price: "Rp 35.000",
    unit: "Per Kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6TEdo8l1PE8dncbJdOBxm7IxVJVaEnab3tDdtLqgfhP2aR-WKP6VfJ-1ZXQ-MbT551sgiRgDJGZQ14etPkO4_XBdzdzM1DEGWL38lCrlWHJ6xDXChdWMhlsg4s9OoSvDEJdwwJ04pzIKGdJfYBWIiW0gCBb1TwRavhMDqb1lHXFVD2vZFvmCP-TRHZNOw7tgIW4KC3csuDNr5QBCnqdkm_5Cc_Rle-5gM06EEB9g-mMbRg33ITCZ7NCWzxpNd5GIaTXF39GK6mLG-",
    category: "Aneka Telur",
    alt: "Telur puyuh kecil berbintik dalam mangkuk kayu",
    features: [
      {
        icon: "nutrition",
        title: "Tinggi Protein",
        description: "Baik untuk pertumbuhan",
      },
      {
        icon: "scale",
        title: "Jual Per Kilogram",
        description: "Isi banyak dan hemat",
      },
      {
        icon: "restaurant",
        title: "Serbaguna",
        description: "Cocok untuk sate atau sup",
      },
    ],
  },
  {
    id: 4,
    name: "Beras Premium 5kg",
    description:
      "Beras putih pulen berkualitas tinggi, bersih dan higienis untuk keluarga.",
    price: "Rp 70.000",
    unit: "Per 5kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCq0_6yXwmzzGeabWOlxSCZ5tg1M0O7INPsm0un5MGYEf_Rvac2XM8MeGBr7Jd1eelmQe7y74Fwf7h0sQIXjAc_FAc_eNR2z7vhtODwqO-bQjNEg_zb4wIIRRYhJIiCQAZ4KktFSIhm0HWeMk5lpoYj8M4W-bBcqk94S7BcKkBgP_iSugSsJ57f3wMZdGskou1juBBPwC0WqdB8oeLvmoZ_DXWdqohYbxhVvRvHEb5VQXc3VP0IbYdAnPfzPG5SbCBEGGZbXIqLcJF4",
    category: "Kebutuhan Dapur",
    alt: "Beras premium putih berkualitas tinggi",
    features: [
      {
        icon: "grain",
        title: "Pulen & Wangi",
        description: "Kualitas premium pilihan",
      },
      {
        icon: "clean_hands",
        title: "Higienis",
        description: "Diproses dengan teknologi modern",
      },
      {
        icon: "inventory_2",
        title: "Kemasan 5kg",
        description: "Praktis untuk kebutuhan mingguan",
      },
    ],
  },
  {
    id: 5,
    name: "Minyak Goreng 2L",
    description:
      "Minyak goreng jernih, tahan panas dan rendah kolesterol untuk masakan sehat.",
    price: "Rp 38.000",
    unit: "Per 2L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJeTQFSZJxQOCIFAXB9nG2OjIFwFuLVmBc_gkrW83VFnH7I6pglYIFMG5QFRo3BfoGesYBBpNB8HyT4nseH2jTQrmevSQLhBiT6h6s1glTXKVSrn17tzW5un6iRGP61RYGzqDmHZ90D_LO2oECyaFeKVn45eCXFVRuBxSAcQ7D7DQNxnYDcMq6F3UOIqABdqE3rdi8i-CWq4bMYsysBAlHqsLQjnpSlWbhax-Kkh3XvwbMx-QOFGGSoJOV-0r7b6H5KC8ZR2IIzQrK",
    category: "Kebutuhan Dapur",
    alt: "Minyak goreng jernih dalam botol",
    features: [
      {
        icon: "water_drop",
        title: "Jernih",
        description: "Minyak kelapa sawit pilihan",
      },
      {
        icon: "favorite",
        title: "Rendah Kolesterol",
        description: "Aman untuk jantung",
      },
      {
        icon: "soup_kitchen",
        title: "Tahan Panas",
        description: "Tidak mudah hitam",
      },
    ],
  },
  {
    id: 6,
    name: "Gula Pasir 1kg",
    description:
      "Gula kristal putih manis alami, tanpa pemutih berbahaya — aman untuk sehari-hari.",
    price: "Rp 14.500",
    unit: "Per 1kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnnfyLhruw9KtD8aWBP2Blt6Jn2EompsMZmd-_oQR0Zpg3EW-3iHEz49YcrvwOZf0i8tuaH3vFm9EhvtwtJO71_G_xW5U6p9-UOPebyMwxiu6F0eAF4qIw5LmQxiV_j_zJmElnz7TrwyDej7IZ8pgalIjHVvix4fp3t657kX3XY_ZsDT6XAQrZntn5MZkVlu68ayys8rKVMictxTPgRr0iIxuZVdvRQwaMtpUoC1FOC5j5ng7foWeFDek2hvw2EyTgJVeq7p0cc8Ba",
    category: "Kebutuhan Dapur",
    alt: "Gula pasir putih kristal dalam mangkuk",
    features: [
      {
        icon: "sugar_cane",
        title: "Manis Alami",
        description: "Dari tebu pilihan",
      },
      {
        icon: "no_sim",
        title: "Tanpa Pemutih",
        description: "Aman dikonsumsi sehari-hari",
      },
      {
        icon: "kitchen",
        title: "Butiran Halus",
        description: "Mudah larut",
      },
    ],
  },
];

type Category = "Semua" | "Aneka Telur" | "Kebutuhan Dapur";
const categories: Category[] = ["Semua", "Aneka Telur", "Kebutuhan Dapur"];

export const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Semua");
  const [selectedProduct, setSelectedProduct] =
    useState<ProductDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProducts =
    activeCategory === "Semua"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleOpenModal = (product: ProductDetails) => {
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

        {/* Filter Tabs — horizontal scroll on mobile */}
        <div className="flex justify-center w-full overflow-x-auto scrollbar-hide">
          <div className="inline-flex gap-2 p-1.5 rounded-full bg-neutral-light/10 dark:bg-card-dark flex-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-primary text-white shadow-sm"
                    : "text-text-secondary dark:text-text-secondary-dark hover:bg-white/50 dark:hover:bg-white/5 hover:text-text-main dark:hover:text-text-main-dark"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid — smaller cards on mobile with horizontal padding */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-2 px-1 sm:px-0"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {filteredProducts.map((product) => (
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
                ></div>
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

          {/* CTA Card */}
          <motion.div variants={staggerItem} className="flex flex-col items-center justify-center bg-primary rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white min-h-[180px] sm:min-h-[280px] col-span-2 sm:col-span-1">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-3 text-center">
              Informasi Produk Lebih Lanjut
            </h3>
            <p className="text-white/80 text-xs sm:text-sm text-center mb-4 sm:mb-6">
              Konsultasikan kebutuhan Anda langsung dengan tim kami via WhatsApp.
            </p>
            <a
              href={getGeneralInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors active:scale-95"
            >
              <span>Hubungi Kami</span>
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />
    </section>
  );
};
