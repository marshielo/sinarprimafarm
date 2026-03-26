import { NextRequest, NextResponse } from "next/server";
import { getProductById, updateProduct, deleteProduct } from "@/lib/products";

export const dynamic = "force-dynamic";

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) {
    return NextResponse.json({ error: "Produk tidak ditemukan." }, { status: 404 });
  }
  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updated = await updateProduct(id, body);
    if (!updated) {
      return NextResponse.json({ error: "Produk tidak ditemukan." }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Gagal memperbarui produk." }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const deleted = await deleteProduct(id);
  if (!deleted) {
    return NextResponse.json({ error: "Produk tidak ditemukan." }, { status: 404 });
  }
  return NextResponse.json({ message: "Produk berhasil dihapus." });
}
