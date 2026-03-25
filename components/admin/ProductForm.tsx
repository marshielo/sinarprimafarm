"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product, ProductFeature } from "@/lib/types";
import { CATEGORIES } from "@/lib/types";

type Props = {
  initialData?: Product;
  mode: "tambah" | "edit";
};

export function ProductForm({ initialData, mode }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);

  const [name, setName] = useState(initialData?.name || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [unit, setUnit] = useState(initialData?.unit || "");
  const [image, setImage] = useState(initialData?.image || "");
  const [category, setCategory] = useState(initialData?.category || "Aneka Telur");
  const [isBestSeller, setIsBestSeller] = useState(initialData?.isBestSeller || false);
  const [alt, setAlt] = useState(initialData?.alt || "");
  const [grade, setGrade] = useState(initialData?.grade || "");
  const [minOrder, setMinOrder] = useState(initialData?.minOrder || "");
  const [stockStatus, setStockStatus] = useState(initialData?.stockStatus || "");
  const [features, setFeatures] = useState<ProductFeature[]>(initialData?.features || []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        setImage(data.url);
      } else {
        setError(data.error || "Gagal mengunggah gambar.");
      }
    } catch {
      setError("Gagal mengunggah gambar.");
    } finally {
      setUploading(false);
    }
  };

  const addFeature = () => {
    setFeatures([...features, { icon: "", title: "", description: "" }]);
  };

  const updateFeature = (index: number, field: keyof ProductFeature, value: string) => {
    const updated = [...features];
    updated[index] = { ...updated[index], [field]: value };
    setFeatures(updated);
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !price.trim() || !category) {
      setError("Nama, harga, dan kategori wajib diisi.");
      return;
    }

    setSaving(true);

    const body = {
      name, description, price, unit, image, category,
      isBestSeller, alt: alt || name, grade, minOrder, stockStatus,
      features: features.filter((f) => f.title.trim()),
    };

    try {
      const url = mode === "edit" ? `/api/products/${initialData?.id}` : "/api/products";
      const method = mode === "edit" ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        const data = await res.json();
        setError(data.error || "Terjadi kesalahan.");
      }
    } catch {
      setError("Terjadi kesalahan jaringan.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      {/* Main info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <h2 className="font-bold text-gray-900 text-lg">Informasi Produk</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Nama Produk *" required>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="contoh: Telur Ayam Negeri (Tray)"
              className="input"
            />
          </Field>

          <Field label="Kategori *" required>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
              {CATEGORIES.filter((c) => c !== "Semua").map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>

          <Field label="Harga *" required>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="contoh: Rp 58.000"
              className="input"
            />
          </Field>

          <Field label="Satuan">
            <input
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              placeholder="contoh: Per Tray"
              className="input"
            />
          </Field>
        </div>

        <Field label="Deskripsi">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi singkat tentang produk..."
            rows={3}
            className="input resize-none"
          />
        </Field>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="bestSeller"
            checked={isBestSeller}
            onChange={(e) => setIsBestSeller(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="bestSeller" className="text-sm font-medium text-gray-700">
            Tandai sebagai Produk Terlaris
          </label>
        </div>
      </div>

      {/* Image */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <h2 className="font-bold text-gray-900 text-lg">Foto Produk</h2>

        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {image && (
            <div
              className="w-32 h-32 rounded-xl bg-cover bg-center border border-gray-200 shrink-0"
              style={{ backgroundImage: `url('${image}')` }}
            />
          )}
          <div className="flex-1 space-y-3">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-gray-400 text-[32px]">
                {uploading ? "progress_activity" : "cloud_upload"}
              </span>
              <span className="text-sm text-gray-500 mt-1">
                {uploading ? "Mengunggah..." : "Klik untuk unggah gambar"}
              </span>
              <span className="text-xs text-gray-400 mt-0.5">JPG, PNG, WebP — maks 5MB</span>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp,image/avif"
                onChange={handleImageUpload}
                className="hidden"
                disabled={uploading}
              />
            </label>

            <Field label="Atau masukkan URL gambar">
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="input"
              />
            </Field>

            <Field label="Teks alternatif (alt)">
              <input
                type="text"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                placeholder="Deskripsi gambar untuk aksesibilitas"
                className="input"
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Optional details */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <h2 className="font-bold text-gray-900 text-lg">Detail Tambahan (Opsional)</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Field label="Grade">
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="contoh: Grade A Premium"
              className="input"
            />
          </Field>
          <Field label="Minimum Order">
            <input
              type="text"
              value={minOrder}
              onChange={(e) => setMinOrder(e.target.value)}
              placeholder="contoh: 1 tray"
              className="input"
            />
          </Field>
          <Field label="Status Stok">
            <input
              type="text"
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
              placeholder="contoh: Tersedia"
              className="input"
            />
          </Field>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-900 text-lg">Fitur Produk</h2>
          <button
            type="button"
            onClick={addFeature}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Tambah Fitur
          </button>
        </div>

        {features.length === 0 && (
          <p className="text-sm text-gray-400">Belum ada fitur. Klik &quot;Tambah Fitur&quot; untuk menambahkan.</p>
        )}

        {features.map((feature, i) => (
          <div key={i} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={feature.icon}
                onChange={(e) => updateFeature(i, "icon", e.target.value)}
                placeholder="Ikon (Material Symbol)"
                className="input text-sm"
              />
              <input
                type="text"
                value={feature.title}
                onChange={(e) => updateFeature(i, "title", e.target.value)}
                placeholder="Judul fitur"
                className="input text-sm"
              />
              <input
                type="text"
                value={feature.description}
                onChange={(e) => updateFeature(i, "description", e.target.value)}
                placeholder="Deskripsi"
                className="input text-sm"
              />
            </div>
            <button
              type="button"
              onClick={() => removeFeature(i)}
              className="shrink-0 text-red-400 hover:text-red-600 transition-colors mt-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="px-6 py-3 rounded-xl font-semibold text-sm text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          Batal
        </button>
        <button
          type="submit"
          disabled={saving}
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50 cursor-pointer"
        >
          {saving && <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>}
          {mode === "tambah" ? "Simpan Produk" : "Perbarui Produk"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}
