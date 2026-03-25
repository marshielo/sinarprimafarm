import { NextRequest, NextResponse } from "next/server";
import { getProducts, addProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = getProducts();
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

    const product = addProduct({
      name: body.name,
      description: body.description || "",
      price: body.price,
      unit: body.unit || "",
      image: body.image || "",
      category: body.category,
      isBestSeller: body.isBestSeller || false,
      alt: body.alt || body.name,
      rating: body.rating,
      features: body.features || [],
      grade: body.grade,
      minOrder: body.minOrder,
      stockStatus: body.stockStatus,
    });

    return NextResponse.json(product, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Gagal menambahkan produk." },
      { status: 500 }
    );
  }
}
