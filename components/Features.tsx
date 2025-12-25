import React from 'react';

export const Features = () => {
    return (
        <section className="flex flex-col justify-center py-20 px-4 md:px-8 lg:px-16 bg-background-light dark:bg-background-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto w-full">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary-dark dark:text-primary text-sm font-semibold tracking-wide uppercase mb-2">
                        Value Kami
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-neutral-dark dark:text-white max-w-3xl">
                        Mengapa Memilih <span className="text-primary">Sinar Prima Farm?</span>
                    </h1>
                    <p className="text-lg text-neutral-light dark:text-gray-400 max-w-2xl leading-relaxed">
                        Kami berkomitmen untuk memberikan Anda "farm-to-table experience" terbaik, yang berlandaskan pada kesegaran, kecepatan, dan harga terjangkau.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Feature 1: Fresh */}
                    <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-orange-100 dark:border-neutral-700 shadow-soft hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col items-start h-full">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl group-hover:fill-1">egg</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                            Farm Fresh Quality
                        </h3>
                        <p className="text-neutral-light dark:text-gray-400 leading-relaxed">

                            Langsung dari peternakan kami ke meja Anda, memastikan telur berkualitas tertinggi dipanen dan dikemas segar setiap hari.
                        </p>
                        <div className="mt-auto pt-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                            <span className="text-primary font-semibold text-sm flex items-center gap-1">
                                Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>

                    {/* Feature 2: Fast */}
                    <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-orange-100 dark:border-neutral-700 shadow-soft hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col items-start h-full">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl group-hover:fill-1">local_shipping</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                            Fast Delivery
                        </h3>
                        <p className="text-neutral-light dark:text-gray-400 leading-relaxed">
                            Layanan pengiriman di hari yang sama untuk memastikan kebutuhan harian Anda tiba tepat saat Anda membutuhkannya, segar, dan tepat waktu.
                        </p>
                        <div className="mt-auto pt-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                            <span className="text-primary font-semibold text-sm flex items-center gap-1">
                                Check coverage <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>

                    {/* Feature 3: Economical */}
                    <div className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-8 border border-orange-100 dark:border-neutral-700 shadow-soft hover:shadow-glow hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col items-start h-full">
                        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                            <span className="material-symbols-outlined text-4xl group-hover:fill-1">savings</span>
                        </div>
                        <h3 className="text-xl font-bold text-neutral-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                            Harga Terjangkau
                        </h3>
                        <p className="text-neutral-light dark:text-gray-400 leading-relaxed">
                            Harga terjangkau untuk kebutuhan harian Anda tanpa mengorbankan kualitas.
                        </p>
                        <div className="mt-auto pt-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                            <span className="text-primary font-semibold text-sm flex items-center gap-1">
                                View pricing <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Trust Badge Strip */}
                <div className="mt-20 pt-10 border-t border-orange-200/50 dark:border-neutral-800 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                        <span className="font-bold text-neutral-dark dark:text-gray-300">Certified Fresh</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                        <span className="font-bold text-neutral-dark dark:text-gray-300">Sustainable Farming</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">stars</span>
                        <span className="font-bold text-neutral-dark dark:text-gray-300">Top Rated 2024</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
