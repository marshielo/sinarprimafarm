import React from 'react';

export const Hero = () => {
    return (
        <main className="relative flex min-h-[calc(100vh-80px)] w-full flex-col justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnIrURvkt0JncJaMvCoVPUA7zu8r6ZfFlzSGzAFdjZlQs2MwZQ41xDQsRmjjwSU_BAtd68Uq5wp_XxtZMrLvEIs_c2rBS1ZXbV5ZBabFHBZrW8dG_xP8q-1OGvJazJcvL2o8MV7pANI2-fj8yzSfxCeilTlQJtKVXojFkygTQ7zD7wgdEmdhcLGTHs7f5CSkOqni_YFIfq3idyNt63Xh1mfYMiSOQTsys_T6uj1ZcwAFdC51tewAcC5hLZYak6p6fKd-IBoljJ4QCJ')" }}
                    title="Close up of fresh brown organic eggs in a wicker basket with a blurred farm background and warm sunlight"
                >
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/80 via-neutral-dark/50 to-transparent dark:from-black/90 dark:via-black/60"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start px-6 lg:px-20 py-20">
                <div className="max-w-[720px] flex flex-col gap-6 animate-fade-in-up">
                    {/* Badge */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-light backdrop-blur-md border border-primary/30">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        <span className="text-white">Terpercaya Sejak 2020</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-display text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl">
                        Kualitas Terbaik <br />
                        <span className="text-primary">untuk Keluarga Anda</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl max-w-[600px]">
                        Telur Segar & Kebutuhan Pokok Langsung dari Farm ke Rumah atau Usaha Anda. Kami menjamin kesegaran dan nutrisi di setiap butir.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-4 flex flex-wrap gap-4">
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-dark hover:shadow-xl focus:ring-4 focus:ring-primary/20">
                            <span>Lihat Produk</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </button>
                        <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-lg border-2 border-white/20 bg-white/10 px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40 focus:ring-4 focus:ring-white/10">
                            <span>Hubungi Kami</span>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex items-center gap-8 border-t border-white/10 pt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-white">10k+</span>
                            <span className="text-sm font-medium text-white/60">Pelanggan Puas</span>
                        </div>
                        <div className="h-10 w-px bg-white/20"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-white">100%</span>
                            <span className="text-sm font-medium text-white/60">Organik & Segar</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
