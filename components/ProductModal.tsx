"use client";

import React, { useEffect, useState } from 'react';

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
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    if (!product) return null;

    const features = product.features || [
        { icon: "agriculture", title: "Segar dari peternakan", description: "Dipanen setiap pagi hari" },
        { icon: "shopping_basket", title: "Minimal order: 1 tray", description: "Pembelian fleksibel untuk rumah tangga" },
        { icon: "egg", title: "30 butir per tray", description: "Ukuran medium-large standar" }
    ];

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden={!isOpen}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-background-dark/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-4xl bg-background-light dark:bg-card-dark rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px] transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 dark:bg-black/50 hover:bg-white dark:hover:bg-black rounded-full text-neutral-dark dark:text-white transition-colors duration-200 shadow-sm backdrop-blur-sm cursor-pointer"
                >
                    <span className="material-symbols-outlined text-[24px]">close</span>
                </button>

                {/* Left: Product Image */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
                    <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url('${product.image}')` }}
                        title={product.alt}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none md:hidden"></div>
                </div>

                {/* Right: Product Details */}
                <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 overflow-y-auto font-body">
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Header Section */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary dark:text-primary-light uppercase tracking-wide">
                                    {product.stockStatus || "Stok Tersedia"}
                                </span>
                            </div>
                            <h2 className="text-3xl font-bold text-text-main dark:text-white leading-tight font-display tracking-tight uppercase">
                                {product.name}
                            </h2>
                            <div className="flex items-center gap-3 flex-wrap">
                                {product.grade && (
                                    <span className="inline-flex items-center rounded-md bg-[#f4efe7] dark:bg-gray-800 px-3 py-1 text-sm font-medium text-text-secondary dark:text-[#d4b47d] ring-1 ring-inset ring-[#9d7e48]/20">
                                        {product.grade}
                                    </span>
                                )}
                                <div className="flex items-center text-primary text-sm">
                                    {[1, 2, 3, 4].map((i) => (
                                        <span key={i} className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    ))}
                                    <span className="material-symbols-outlined text-[18px] fill-current">star_half</span>
                                    <span className="ml-1 text-neutral-light dark:text-gray-400">({product.rating || "4.8"})</span>
                                </div>
                            </div>
                        </div>

                        {/* Price Section */}
                        <div className="flex flex-col border-b border-neutral-light/20 dark:border-gray-700 pb-6">
                            <p className="text-sm text-neutral-light dark:text-gray-400 font-medium mb-1">Harga Spesial</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold text-primary">{product.price}</span>
                                <span className="text-lg text-neutral-light dark:text-gray-300 font-medium">/ {product.unit === 'Harga' ? 'pcs' : product.unit.replace('Per ', '').toLowerCase()}</span>
                            </div>
                            <p className="text-xs text-neutral-light dark:text-gray-400 mt-2">*Harga belum termasuk ongkos kirim</p>
                        </div>

                        {/* Details Chips/Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            <h3 className="text-sm font-semibold text-text-main dark:text-gray-100 uppercase tracking-wider">Detail Produk</h3>
                            <div className="flex flex-col gap-3">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background-light dark:bg-gray-800/50 border border-transparent hover:border-primary/30 transition-colors">
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
                    </div>

                    {/* Footer / CTA */}
                    <div className="mt-8 pt-4">
                        <button className="group w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 active:bg-primary/95 text-text-main font-bold text-base py-3.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform active:scale-[0.99] cursor-pointer">
                            <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                                <span className="material-symbols-outlined block text-[20px]">chat</span>
                            </span>
                            <span>Pesan via WhatsApp</span>
                        </button>
                        <p className="text-center text-xs text-neutral-light dark:text-gray-500 mt-3">
                            Respon cepat pukul 08.00 - 17.00 WIB
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
