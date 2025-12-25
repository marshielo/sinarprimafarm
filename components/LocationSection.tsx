"use client";

import React from 'react';

export const LocationSection = () => {
    return (
        <section className="w-full py-16 px-4 md:px-8 lg:px-16 flex justify-center bg-background-light dark:bg-background-dark font-body">
            <div className="w-full max-w-7xl flex flex-col">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-text-main dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 font-display">LOKASI KAMI</h2>
                    <div className="h-1 w-20 bg-primary rounded-full mt-2"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Map Container */}
                    <div className="lg:col-span-7 w-full h-full min-h-[320px] lg:min-h-[450px] relative rounded-2xl overflow-hidden shadow-lg group">
                        {/* Map Image Placeholder */}
                        <div
                            className="absolute inset-0 w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                            title="Google map view of Bogor highlighting Sinar Prima Farm location"
                            data-location="Bogor, Indonesia"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgCTHgm_B1WKEZn0G2jRA3sy6H2W5DblFIB9wue43fP6Tv06TfrEDRIstkvr6_gzB6Ijt7HO_duQz21HnjEGHs9ZCFSprbXnYUbAMVkxxbtynYHvTq7Lp0LtUPf1N6vliGWj0TpuIDu5EimUsY57z4g9ka6UROm407IGeDVzSgser-iT8v7SS1m3aJERund3MtxLsV8lheV9l7UBfehSPqMpI7hZgG_lukstNf8787I6qvQhUpl6RGjYt7nwGtjsp8rjXQpvJfT87U')" }}
                        ></div>
                        {/* Overlay for interactivity hint */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                            <button className="bg-white dark:bg-neutral-800 text-primary px-6 py-3 rounded-full font-semibold shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                <span className="material-symbols-outlined">map</span>
                                Buka di Google Maps
                            </button>
                        </div>
                    </div>
                    {/* Contact Details List */}
                    <div className="lg:col-span-5 flex flex-col gap-5">
                        {/* Address Item */}
                        <div className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/20 dark:border-neutral-800 hover:border-primary/30 transition-colors">
                            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                                <span className="material-symbols-outlined text-[28px]">location_on</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-text-main dark:text-white text-lg font-bold leading-normal mb-1">Alamat</p>
                                <p className="text-text-secondary dark:text-neutral-300 text-base font-normal leading-relaxed">
                                    Jl. Raya Farm No. 123,<br />
                                    Bogor, Jawa Barat 16000
                                </p>
                            </div>
                        </div>
                        {/* Phone Item */}
                        <div className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/20 dark:border-neutral-800 hover:border-primary/30 transition-colors">
                            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                                <span className="material-symbols-outlined text-[28px]">call</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-text-main dark:text-white text-lg font-bold leading-normal mb-1">Telepon</p>
                                <a className="text-text-secondary dark:text-neutral-300 text-base font-normal leading-normal hover:text-primary transition-colors" href="tel:+6281234567890">
                                    +62 812-3456-7890
                                </a>
                            </div>
                        </div>
                        {/* Hours Item */}
                        <div className="flex items-start gap-5 bg-card-light dark:bg-[#2c2517] p-6 rounded-xl shadow-sm border border-neutral-light/20 dark:border-neutral-800 hover:border-primary/30 transition-colors">
                            <div className="text-primary flex items-center justify-center rounded-xl bg-primary/10 shrink-0 size-12 mt-1">
                                <span className="material-symbols-outlined text-[28px]">schedule</span>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-text-main dark:text-white text-lg font-bold leading-normal mb-1">Jam Buka</p>
                                <p className="text-text-secondary dark:text-neutral-300 text-base font-normal leading-relaxed">
                                    <span className="block">Senin - Jumat: 08.00 - 17.00</span>
                                    <span className="block text-sm text-primary mt-1 font-medium">Sabtu - Minggu: 09.00 - 15.00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
