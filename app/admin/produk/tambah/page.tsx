"use client";

import React from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { ProductForm } from "@/components/admin/ProductForm";

export default function TambahProdukPage() {
  return (
    <AdminShell title="Tambah Produk Baru">
      <ProductForm mode="tambah" />
    </AdminShell>
  );
}
