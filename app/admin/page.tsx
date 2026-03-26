"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import type { Product } from "@/lib/types";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => { fetchProducts(); }, []);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Yakin ingin menghapus "${name}"?`)) return;
    setDeleting(id);
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    await fetchProducts();
    setDeleting(null);
  };

  return (
    <AdminShell title="Kelola Produk">
      {/* Actions bar */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-500">
          {loading ? "Memuat..." : `${products.length} produk`}
        </p>
        <Link
          href="/admin/produk/tambah"
          className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          Tambah Produk
        </Link>
      </div>

      {/* Product table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400">
            <span className="material-symbols-outlined text-[40px] animate-spin">progress_activity</span>
            <p className="mt-2 text-sm">Memuat produk...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <span className="material-symbols-outlined text-[40px]">inventory_2</span>
            <p className="mt-2 text-sm">Belum ada produk. Tambahkan produk pertama Anda.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left px-6 py-3 font-semibold text-gray-500">Produk</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-500">Kategori</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-500">Harga</th>
                  <th className="text-left px-6 py-3 font-semibold text-gray-500">Satuan</th>
                  <th className="text-right px-6 py-3 font-semibold text-gray-500">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl bg-cover bg-center shrink-0 border border-gray-100"
                          style={{ backgroundImage: `url('${product.image}')` }}
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 truncate">{product.name}</p>
                          <p className="text-xs text-gray-400 truncate max-w-[200px]">{product.description}</p>
                        </div>
                        {product.isBestSeller && (
                          <span className="shrink-0 text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            Terlaris
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">{product.price}</td>
                    <td className="px-6 py-4 text-gray-600">{product.unit}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/produk/edit/${product.id}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id, product.name)}
                          disabled={deleting === product.id}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-colors disabled:opacity-50 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {deleting === product.id ? "progress_activity" : "delete"}
                          </span>
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
