"use client";

import React, { useEffect, useState, use } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";
import type { Product } from "@/lib/types";

export default function EditProdukPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        return res.json();
      })
      .then((data) => { setProduct(data); setLoading(false); })
      .catch((err) => { setError(err.message); setLoading(false); });
  }, [id]);

  if (loading) {
    return (
      <AdminShell title="Edit Produk">
        <div className="flex items-center justify-center py-20 text-gray-400">
          <span className="material-symbols-outlined text-[40px] animate-spin">progress_activity</span>
        </div>
      </AdminShell>
    );
  }

  if (error || !product) {
    return (
      <AdminShell title="Edit Produk">
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-red-400 text-[48px]">error</span>
          <p className="text-gray-600 mt-2">{error || "Produk tidak ditemukan."}</p>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell title={`Edit: ${product.name}`}>
      <ProductForm mode="edit" initialData={product} />
    </AdminShell>
  );
}
