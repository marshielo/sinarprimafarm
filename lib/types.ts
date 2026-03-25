// ─── Shared Types ───

export type ProductFeature = {
  icon: string;
  title: string;
  description: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  category: string;
  isBestSeller?: boolean;
  alt: string;
  rating?: number;
  features?: ProductFeature[];
  grade?: string;
  minOrder?: string;
  stockStatus?: string;
};

export type Category = "Semua" | "Aneka Telur" | "Kebutuhan Dapur";

export const CATEGORIES: Category[] = ["Semua", "Aneka Telur", "Kebutuhan Dapur"];
