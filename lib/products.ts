import { prisma } from "./db";
import type { Product } from "./types";

// ─── Helpers to map Prisma model → Product type ───
function toProduct(row: Awaited<ReturnType<typeof prisma.product.findFirst>>): Product | null {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    unit: row.unit,
    category: row.category,
    image: row.image,
    alt: row.alt,
    isBestSeller: row.isBestSeller,
    isActive: row.isActive,
    sortOrder: row.sortOrder,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

// ─── Queries ───

export async function getProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  return rows.map((r) => toProduct(r)!);
}

export async function getAllProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });
  return rows.map((r) => toProduct(r)!);
}

export async function getProductById(id: string): Promise<Product | null> {
  const row = await prisma.product.findUnique({ where: { id } });
  return toProduct(row);
}

// ─── Mutations ───

export async function addProduct(
  data: Omit<Product, "id" | "createdAt" | "updatedAt">
): Promise<Product> {
  const row = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      unit: data.unit,
      category: data.category,
      image: data.image,
      alt: data.alt,
      isBestSeller: data.isBestSeller ?? false,
      isActive: data.isActive ?? true,
      sortOrder: data.sortOrder ?? 0,
    },
  });
  return toProduct(row)!;
}

export async function updateProduct(
  id: string,
  data: Partial<Omit<Product, "id" | "createdAt" | "updatedAt">>
): Promise<Product | null> {
  try {
    const row = await prisma.product.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.price !== undefined && { price: data.price }),
        ...(data.unit !== undefined && { unit: data.unit }),
        ...(data.category !== undefined && { category: data.category }),
        ...(data.image !== undefined && { image: data.image }),
        ...(data.alt !== undefined && { alt: data.alt }),
        ...(data.isBestSeller !== undefined && { isBestSeller: data.isBestSeller }),
        ...(data.isActive !== undefined && { isActive: data.isActive }),
        ...(data.sortOrder !== undefined && { sortOrder: data.sortOrder }),
      },
    });
    return toProduct(row);
  } catch {
    return null;
  }
}

export async function deleteProduct(id: string): Promise<boolean> {
  try {
    await prisma.product.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}
