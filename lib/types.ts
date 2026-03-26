// ─── Shared Types ───

export type ProductFeature = {
  icon: string;
  title: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  unit: string;
  image: string;
  category: string;
  isBestSeller: boolean;
  isActive: boolean;
  sortOrder: number;
  alt: string;
  // Optional fields stored as JSON in features column or kept client-side
  rating?: number;
  features?: ProductFeature[];
  grade?: string;
  minOrder?: string;
  stockStatus?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Category = "Semua" | "Aneka Telur" | "Kebutuhan Dapur";

export const CATEGORIES: Category[] = ["Semua", "Aneka Telur", "Kebutuhan Dapur"];
