import React from 'react';

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-neutral-light bg-background-light/95 backdrop-blur-sm dark:bg-background-dark/95 dark:border-neutral-dark/20">
            <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-20">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
                        <span className="material-symbols-outlined">egg_alt</span>
                    </div>
                    <h2 className="font-display text-xl font-bold tracking-tight text-neutral-dark dark:text-white">
                        Sinar Prima Farm
                    </h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-10 lg:flex">
                    {['Home', 'Produk', 'Tentang Kami', 'Kontak'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-sm font-medium text-neutral-dark hover:text-primary dark:text-neutral-light dark:hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary-dark active:scale-95 shadow-sm">
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>WhatsApp</span>
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button className="flex size-10 items-center justify-center rounded-lg text-neutral-dark hover:bg-neutral-light dark:text-white dark:hover:bg-neutral-dark/50 lg:hidden">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
};
