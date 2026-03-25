"use client";

import React from "react";
import Link from "next/link";
import { useAdminAuth } from "@/lib/adminAuth";
import { LoginForm } from "./LoginForm";
import { SITE_INFO } from "@/lib/siteInfo";

export function AdminShell({ children, title }: { children: React.ReactNode; title: string }) {
  const { isAuthenticated, logout } = useAdminAuth();

  if (!isAuthenticated) return <LoginForm />;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined text-[20px]">egg_alt</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">{SITE_INFO.company.nameShort}</span>
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500">Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              Lihat Situs
            </Link>
            <button
              onClick={logout}
              className="text-sm text-red-500 hover:text-red-700 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              Keluar
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <nav className="hidden md:flex flex-col w-56 shrink-0">
            <SidebarLink href="/admin" icon="dashboard" label="Dashboard" />
            <SidebarLink href="/admin" icon="inventory_2" label="Produk" active />
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ href, icon, label, active }: { href: string; icon: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
        active
          ? "bg-primary/10 text-primary"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <span className="material-symbols-outlined text-[20px]">{icon}</span>
      {label}
    </Link>
  );
}
