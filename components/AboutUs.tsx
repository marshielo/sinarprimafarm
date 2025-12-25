"use client";

import React from 'react';

export const AboutUs = () => {
    return (
        <section className="flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-200 font-body">
            {/* Main Content */}
            <div className="max-w-[1280px] mx-auto px-4 py-12 md:py-20 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-primary"></span>
                            <span className="text-primary font-bold text-sm tracking-widest uppercase">Tentang Kami</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-main dark:text-white leading-[1.15] font-display">
                            Dedikasi untuk Kualitas & Kesegaran Alami.
                        </h2>
                        <p className="text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                            Sinar Prima Farm berdedikasi untuk menyediakan telur segar dan kebutuhan pokok berkualitas tinggi langsung dari peternakan. Kami percaya bahwa kesehatan bermula dari bahan makanan yang segar, alami, dan terpercaya. Sejak awal berdiri, komitmen kami adalah melayani keluarga Indonesia dengan produk terbaik.
                        </p>

                        {/* Feature List */}
                        <div className="flex flex-col gap-6 mt-4">
                            {/* Item 1 */}
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">history</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">Berdiri sejak 2020</h3>
                                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">Pengalaman bertahun-tahun dalam mengelola peternakan modern.</p>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">local_shipping</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">Melayani area Banyumas</h3>
                                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">Pengiriman cepat, aman, dan terjadwal ke seluruh wilayah.</p>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">verified_user</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-text-main dark:text-white">Kualitas terjamin</h3>
                                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">Telur segar pilihan dengan standar kebersihan dan nutrisi tinggi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="bg-text-main dark:bg-white text-white dark:text-text-main font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-lg shadow-black/10 cursor-pointer">
                                <span>Hubungi Kami</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] group">
                            {/* Main Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFoME-KUsniN964aLNQVCoAZYnBL7uhrHJu1CGF5RmESVf8lgHR8_j0DZ7iEaY1ZB6XCjYU2oeq_R8UCzYoIdXWGXrhuvNkIRzMArgkUNJh6ZWl_Qy9hc2mPst3E8JwRMiTDSYSwNWAt-9Ml3epjbFf43nTQSFYWRFNCIZLi6Rj3_Fqy4DUkPM4cI9a1wsTajR4l8UwX2Zeln7Iu6rtCQNJqK_1mXLpsGV7WYVZp2Q72cjL3UR1SWoYcgUFB1zhmIx6ucGgb7tCdEE')" }}
                                title="Close up of brown eggs in a carton on a wooden table"
                            ></div>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>

                            {/* Floating Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-[#221c10]/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-3 rounded-full">
                                        <span className="material-symbols-outlined">eco</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Komitmen Kami</p>
                                        <p className="text-lg font-bold text-text-main dark:text-white">100% Organik & Segar</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="border-y border-neutral-light/20 dark:border-gray-700 bg-white dark:bg-[#1a150c]">
                <div className="max-w-[1280px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-extrabold text-primary">5k+</span>
                            <span className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Pelanggan Puas</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-extrabold text-primary">100%</span>
                            <span className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Garansi Segar</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-extrabold text-primary">24/7</span>
                            <span className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Support Layanan</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-extrabold text-primary">50+</span>
                            <span className="text-sm font-medium text-text-secondary dark:text-text-secondary-dark">Mitra Peternak</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
