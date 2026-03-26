import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

const BUCKET = "product-images";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan." }, { status: 400 });
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Gunakan JPG, PNG, atau WebP." },
        { status: 400 }
      );
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 5MB." },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop() || "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const { error } = await supabaseAdmin.storage
      .from(BUCKET)
      .upload(filename, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Supabase upload error:", error);
      return NextResponse.json(
        { error: "Gagal mengunggah file ke storage." },
        { status: 500 }
      );
    }

    const { data: urlData } = supabaseAdmin.storage
      .from(BUCKET)
      .getPublicUrl(filename);

    return NextResponse.json({ url: urlData.publicUrl });
  } catch {
    return NextResponse.json({ error: "Gagal mengunggah file." }, { status: 500 });
  }
}
