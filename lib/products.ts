import fs from "fs";
import path from "path";
import type { Product } from "./types";

const DATA_PATH = path.join(process.cwd(), "data", "products.json");

export function getProducts(): Product[] {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");
  return JSON.parse(raw) as Product[];
}

export function getProductById(id: number): Product | undefined {
  return getProducts().find((p) => p.id === id);
}

export function saveProducts(products: Product[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2), "utf-8");
}

export function addProduct(product: Omit<Product, "id">): Product {
  const products = getProducts();
  const maxId = products.length > 0 ? Math.max(...products.map((p) => p.id)) : 0;
  const newProduct: Product = { ...product, id: maxId + 1 };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
}

export function updateProduct(id: number, data: Partial<Omit<Product, "id">>): Product | null {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  products[index] = { ...products[index], ...data };
  saveProducts(products);
  return products[index];
}

export function deleteProduct(id: number): boolean {
  const products = getProducts();
  const filtered = products.filter((p) => p.id !== id);
  if (filtered.length === products.length) return false;
  saveProducts(filtered);
  return true;
}
