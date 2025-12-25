"use client";

import React from 'react';

export const Footer = () => {
    return (
        <footer className="mt-auto bg-card-light dark:bg-[#18140b] border-t border-neutral-light/20 dark:border-neutral-800 font-body">
            <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2 flex flex-col space-y-6 pr-0 lg:pr-12">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-primary tracking-tight font-display">SINAR PRIMA FARM</h3>
                            <p className="text-sm text-neutral-light dark:text-neutral-400 font-medium tracking-wider mt-1 uppercase">Fresh from the source</p>
                        </div>
                        <p className="text-text-secondary dark:text-neutral-400 leading-relaxed max-w-sm">
                            Menyediakan telur segar berkualitas tinggi dan kebutuhan pokok terpercaya langsung dari peternakan kami untuk keluarga Indonesia.
                        </p>
                        <div className="flex items-center gap-3 text-neutral-light dark:text-neutral-400">
                            <span className="material-symbols-outlined text-[20px]">location_on</span>
                            <span className="text-sm">Jl. Raya Farm No. 123, Bogor</span>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-lg font-bold text-text-main dark:text-white font-display">Navigasi</h4>
                        <ul className="flex flex-col space-y-3">
                            <li>
                                <a className="text-text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors font-medium inline-flex items-center gap-2 group" href="#">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="text-text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors font-medium inline-flex items-center gap-2 group" href="#">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Produk
                                </a>
                            </li>
                            <li>
                                <a className="text-text-secondary dark:text-neutral-400 hover:text-primary dark:hover:text-primary transition-colors font-medium inline-flex items-center gap-2 group" href="#">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-lg font-bold text-text-main dark:text-white font-display">Ikuti Kami</h4>
                        <div className="flex flex-col space-y-4">
                            <a className="flex items-center gap-3 text-text-secondary dark:text-neutral-400 hover:text-primary transition-colors group" href="#">
                                <div className="w-10 h-10 rounded-full bg-background-light dark:bg-neutral-800 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                                    {/* Facebook Icon SVG */}
                                    <svg aria-hidden="true" className="w-5 h-5 group-hover:fill-primary fill-current transition-colors" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="currentColor"></path></svg>
                                </div>
                                <span className="font-medium">Facebook</span>
                            </a>
                            <a className="flex items-center gap-3 text-text-secondary dark:text-neutral-400 hover:text-primary transition-colors group" href="#">
                                <div className="w-10 h-10 rounded-full bg-background-light dark:bg-neutral-800 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                                    {/* Instagram Icon SVG */}
                                    <svg aria-hidden="true" className="w-5 h-5 group-hover:fill-primary fill-current transition-colors" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h-.165zm-1.153 1.153C9.04 3.153 8.7 3.167 7.757 3.21c-1.01.046-1.56.243-1.927.386-.48.188-.823.412-1.18.769-.356.357-.58.7-.769 1.18-.143.367-.34.917-.386 1.927-.043.943.057 1.283-.057 3.655v.232c0 2.372.014 2.712.057 3.655.046 1.01.243 1.56.386 1.927.188.48.412.823.769 1.18.357.356.7.58 1.18.769.367.143.917.34 1.927.386.943.043 1.283.057 3.655.057h.232c2.372 0 2.712-.014 3.655-.057 1.01-.046 1.56-.243 1.927-.386.48-.188.823-.412 1.18-.769.356-.357.58-.7.769-1.18.143-.367.34-.917.386-1.927.043-.943.057-1.283.057-3.655v-.232c0-2.372-.014-2.712-.057-3.655-.046-1.01-.243-1.56-.386-1.927-.188-.48-.412-.823-.769-1.18-.357-.356-.7-.58-1.18-.769-.367-.143-.917-.34-1.927-.386-.943-.043-1.283-.057-3.655-.057H11.162zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 1.153a5.009 5.009 0 110 10.018 5.009 5.009 0 010-10.018zm5.992-3.004a.768.768 0 11-1.536 0 .768.768 0 011.536 0z" fill="currentColor"></path></svg>
                                </div>
                                <span className="font-medium">Instagram</span>
                            </a>
                            <a className="flex items-center gap-3 text-text-secondary dark:text-neutral-400 hover:text-primary transition-colors group" href="#">
                                <div className="w-10 h-10 rounded-full bg-background-light dark:bg-neutral-800 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                                    {/* WhatsApp Icon SVG */}
                                    <svg aria-hidden="true" className="w-5 h-5 group-hover:fill-primary fill-current transition-colors" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" fill="currentColor"></path></svg>
                                </div>
                                <span className="font-medium">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-neutral-light/20 dark:border-neutral-800 mt-16 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-neutral-light dark:text-neutral-500 text-center md:text-left">
                            &copy; 2025 Sinar Prima Farm. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-sm text-neutral-light dark:text-neutral-500 hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="text-sm text-neutral-light dark:text-neutral-500 hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
