"use client";

import React, { useState } from 'react';
import { ProductModal, ProductDetails } from './ProductModal';

type Category = 'Semua' | 'Aneka Telur' | 'Kebutuhan Dapur';

const products: ProductDetails[] = [
    {
        id: 1,
        name: "Telur Ayam Negeri (Tray)",
        description: "Telur segar pilihan langsung dari peternakan, kaya protein.",
        price: "Rp 58.000",
        unit: "Harga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCboneQgOjSybemIR1mElQPx2RE4viQuc5Bbfb9YznJzuK_OBe7SAC_xO9HAiGmI44qxQh74KyrsKXWAYKs_wIqWvmYyYpVkig3CdRvP-dy-T7fnrVSquNoBqaYTy33Fxi7jo6BSf61IkdvQ4fBbfEAptE2uN7MAT1gOgFRMtXJqGNdaWzx_FVCYL6zLakZ8ysSExzjJwnwDR2YMhF9eKGjrxM1cmDdAHmpi63DGPoVTnC2Sh7inzHqjfilpANTYFU23CdoWZEyAZY4",
        category: "Aneka Telur",
        isBestSeller: true,
        alt: "Tray of fresh brown chicken eggs",
        grade: "Grade A Premium",
        features: [
            { icon: "agriculture", title: "Segar dari peternakan", description: "Dipanen setiap pagi hari" },
            { icon: "shopping_basket", title: "Minimal order: 1 tray", description: "Pembelian fleksibel untuk rumah tangga" },
            { icon: "egg", title: "30 butir per tray", description: "Ukuran medium-large standar" }
        ]
    },
    {
        id: 2,
        name: "Telur Ayam Kampung",
        description: "Telur ayam kampung asli, lebih sehat dan alami.",
        price: "Rp 3.000",
        unit: "Per Butir",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOQCLTWMSjba8p2DBGEd2yecH1Sil-waO4A5YmbhmhNhEwDJVmIfeASb7mZuAcD8fPl-lLeeZQNZNPe0qtAaqnQY46lwva6JOKJKs3KwCys8tzkGAaREzCAo7-cWOV8dlzksCRyuvhLCG3WIsC-V4lQ00N1Sywtau4jqsiLcPnmplic4t48zaVamLhzTasl271UaXKFq5WkBQrWy3vm4KxYwYknvvEHmc3iVlybCQbNg1URAXfB-1u8wq3ivlP4Zl58Bax0eOC_RoC",
        category: "Aneka Telur",
        alt: "Basket of fresh free-range chicken eggs",
        features: [
            { icon: "nature", title: "Ayam Kampung Asli", description: "Dipelihara secara alami" },
            { icon: "health_and_safety", title: "Lebih Sehat", description: "Rendah lemak dan kolesterol" },
            { icon: "egg_alt", title: "Kuning Telur Pekat", description: "Rasa lebih gurih" }
        ]
    },
    {
        id: 3,
        name: "Telur Puyuh",
        description: "Kecil namun kaya nutrisi, cocok untuk aneka masakan.",
        price: "Rp 35.000",
        unit: "Per Kg",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6TEdo8l1PE8dncbJdOBxm7IxVJVaEnab3tDdtLqgfhP2aR-WKP6VfJ-1ZXQ-MbT551sgiRgDJGZQ14etPkO4_XBdzdzM1DEGWL38lCrlWHJ6xDXChdWMhlsg4s9OoSvDEJdwwJ04pzIKGdJfYBWIiW0gCBb1TwRavhMDqb1lHXFVD2vZFvmCP-TRHZNOw7tgIW4KC3csuDNr5QBCnqdkm_5Cc_Rle-5gM06EEB9g-mMbRg33ITCZ7NCWzxpNd5GIaTXF39GK6mLG-",
        category: "Aneka Telur",
        alt: "Small speckled quail eggs in a wooden bowl",
        features: [
            { icon: "nutrition", title: "Tinggi Protein", description: "Baik untuk pertumbuhan" },
            { icon: "scale", title: "Jual Per Kilogram", description: "Isi banyak dan hemat" },
            { icon: "restaurant", title: "Serbaguna", description: "Cocok untuk sate atau sup" }
        ]
    },
    {
        id: 4,
        name: "Beras Premium 5kg",
        description: "Beras putih pulen berkualitas tinggi, bersih dan higienis.",
        price: "Rp 70.000",
        unit: "Harga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq0_6yXwmzzGeabWOlxSCZ5tg1M0O7INPsm0un5MGYEf_Rvac2XM8MeGBr7Jd1eelmQe7y74Fwf7h0sQIXjAc_FAc_eNR2z7vhtODwqO-bQjNEg_zb4wIIRRYhJIiCQAZ4KktFSIhm0HWeMk5lpoYj8M4W-bBcqk94S7BcKkBgP_iSugSsJ57f3wMZdGskou1juBBPwC0WqdB8oeLvmoZ_DXWdqohYbxhVvRvHEb5VQXc3VP0IbYdAnPfzPG5SbCBEGGZbXIqLcJF4",
        category: "Kebutuhan Dapur",
        alt: "Sack of premium white rice grains",
        features: [
            { icon: "grain", title: "Pulen & Wangi", description: "Kualitas premium pilihan" },
            { icon: "clean_hands", title: "Higienis", description: "Diproses dengan teknologi modern" },
            { icon: "inventory_2", title: "Kemasan 5kg", description: "Praktis untuk kebutuhan mingguan" }
        ]
    },
    {
        id: 5,
        name: "Minyak Goreng 2L",
        description: "Minyak goreng jernih, tahan panas dan rendah kolesterol.",
        price: "Rp 38.000",
        unit: "Harga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJeTQFSZJxQOCIFAXB9nG2OjIFwFuLVmBc_gkrW83VFnH7I6pglYIFMG5QFRo3BfoGesYBBpNB8HyT4nseH2jTQrmevSQLhBiT6h6s1glTXKVSrn17tzW5un6iRGP61RYGzqDmHZ90D_LO2oECyaFeKVn45eCXFVRuBxSAcQ7D7DQNxnYDcMq6F3UOIqABdqE3rdi8i-CWq4bMYsysBAlHqsLQjnpSlWbhax-Kkh3XvwbMx-QOFGGSoJOV-0r7b6H5KC8ZR2IIzQrK",
        category: "Kebutuhan Dapur",
        alt: "Golden cooking oil in a glass bottle",
        features: [
            { icon: "water_drop", title: "Jernih", description: "Minyak kelapa sawit pilihan" },
            { icon: "favorite", title: "Rendah Kolesterol", description: "Aman untuk jantung" },
            { icon: "soup_kitchen", title: "Tahan Panas", description: "Tidak mudah hitam" }
        ]
    },
    {
        id: 6,
        name: "Gula Pasir 1kg",
        description: "Gula kristal putih manis alami, tanpa pemutih berbahaya.",
        price: "Rp 14.500",
        unit: "Harga",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnnfyLhruw9KtD8aWBP2Blt6Jn2EompsMZmd-_oQR0Zpg3EW-3iHEz49YcrvwOZf0i8tuaH3vFm9EhvtwtJO71_G_xW5U6p9-UOPebyMwxiu6F0eAF4qIw5LmQxiV_j_zJmElnz7TrwyDej7IZ8pgalIjHVvix4fp3t657kX3XY_ZsDT6XAQrZntn5MZkVlu68ayys8rKVMictxTPgRr0iIxuZVdvRQwaMtpUoC1FOC5j5ng7foWeFDek2hvw2EyTgJVeq7p0cc8Ba",
        category: "Kebutuhan Dapur",
        alt: "White granulated sugar in a clear bowl",
        features: [
            { icon: "sugar_cane", title: "Manis Alami", description: "Dari tebu pilihan" },
            { icon: "no_sim", title: "Tanpa Pemutih", description: "Aman dikonsumsi sehari-hari" },
            { icon: "kitchen", title: "Butiran Halus", description: "Mudah larut" }
        ]
    }
];

const categories: Category[] = ["Semua", "Aneka Telur", "Kebutuhan Dapur"];

export const ProductCatalog = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("Semua");
    const [selectedProduct, setSelectedProduct] = useState<ProductDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredProducts = activeCategory === "Semua"
        ? products
        : products.filter(product => product.category === activeCategory);

    const handleOpenModal = (product: ProductDetails) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="flex flex-col items-center py-20 px-4 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark transition-colors duration-200 font-body">
            <div className="w-full max-w-[1200px] flex flex-col gap-10">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center gap-2">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Pilihan Terbaik</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-text-main dark:text-text-main-dark font-display">PRODUK KAMI</h2>
                    <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
                    <p className="mt-2 text-text-secondary dark:text-text-secondary-dark max-w-lg">
                        Temukan kesegaran telur langsung dari peternakan dan kebutuhan dapur berkualitas tinggi untuk keluarga Anda.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center w-full">
                    <div className="inline-flex flex-wrap justify-center gap-2 md:gap-4 p-1.5 rounded-xl bg-neutral-light/10 dark:bg-card-dark">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 ${activeCategory === category
                                        ? "bg-card-light dark:bg-background-dark shadow-sm text-primary ring-1 ring-black/5 dark:ring-white/10"
                                        : "text-text-secondary dark:text-text-secondary-dark hover:bg-white/50 dark:hover:bg-white/5 hover:text-text-main dark:hover:text-text-main-dark font-medium"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-4 animate-fade-in-up">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-card-light dark:bg-card-dark rounded-[12px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-neutral-light/20 dark:border-neutral-dark/20 overflow-hidden h-full">
                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                    style={{ backgroundImage: `url('${product.image}')` }}
                                    title={product.alt}
                                ></div>
                                {product.isBestSeller && (
                                    <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                                        Terlaris
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-col flex-grow p-5">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-text-main dark:text-text-main-dark line-clamp-2">{product.name}</h3>
                                </div>
                                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-4 line-clamp-2">{product.description}</p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-light/20 dark:border-neutral-dark/20">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-text-secondary dark:text-text-secondary-dark">{product.unit}</span>
                                        <span className="text-primary font-bold text-lg">{product.price}</span>
                                    </div>
                                    <button
                                        onClick={() => handleOpenModal(product)}
                                        className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-[12px] font-medium text-sm transition-colors shadow-sm active:scale-95 cursor-pointer"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">chat</span>
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="flex justify-center mt-4">
                    <a href="#" className="group flex items-center gap-2 text-text-secondary dark:text-text-secondary-dark font-medium hover:text-primary transition-colors">
                        Lihat Semua Produk
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
            />
        </section>
    );
};
