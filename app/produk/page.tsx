import React from "react";
import { getProducts } from "@/lib/products";
import { SITE_INFO } from "@/lib/siteInfo";
import { AllProductsClient } from "./AllProductsClient";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: `Semua Produk — ${SITE_INFO.company.name}`,
  description: `Lihat semua produk ${SITE_INFO.company.name}: Telur Ayam Negeri, Telur Ayam Kampung, Telur Puyuh, Beras, Minyak Goreng & Gula Pasir. Harga terjangkau di Banyumas, Purwokerto & Cilacap.`,
};

export default async function ProdukPage() {
  const products = await getProducts();

  return <AllProductsClient products={products} />;
}
