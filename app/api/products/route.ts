import { NextRequest, NextResponse } from "next/server";
import { getAllProducts, addProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getAllProducts();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.price || !body.category) {
      return NextResponse.json(
        { error: "Nama, harga, dan kategori wajib diisi." },
        { status: 400 }
      );
    }

    const product = await addProduct({
      name: body.name,
      description: body.description || "",
      price: body.price,
      unit: body.unit || "",
      image: body.image || "",
      category: body.category,
      isBestSeller: body.isBestSeller || false,
      isActive: true,
      sortOrder: body.sortOrder || 0,
      alt: body.alt || body.name,
    });

    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Gagal menambahkan produk." },
      { status: 500 }
    );
  }
}
