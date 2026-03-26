import "dotenv/config";
import pg from "pg";

const client = new pg.Client({ connectionString: process.env.DIRECT_URL });

const products = [
  {
    name: "Telur Ayam Negeri (Tray)",
    description: "Telur segar pilihan langsung dari peternakan, kaya protein dan nutrisi untuk keluarga.",
    price: "Rp 58.000",
    unit: "Per Tray",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCboneQgOjSybemIR1mElQPx2RE4viQuc5Bbfb9YznJzuK_OBe7SAC_xO9HAiGmI44qxQh74KyrsKXWAYKs_wIqWvmYyYpVkig3CdRvP-dy-T7fnrVSquNoBqaYTy33Fxi7jo6BSf61IkdvQ4fBbfEAptE2uN7MAT1gOgFRMtXJqGNdaWzx_FVCYL6zLakZ8ysSExzjJwnwDR2YMhF9eKGjrxM1cmDdAHmpi63DGPoVTnC2Sh7inzHqjfilpANTYFU23CdoWZEyAZY4",
    category: "Aneka Telur",
    is_best_seller: true,
    alt: "Tray telur ayam negeri segar berwarna coklat",
    sort_order: 1,
  },
  {
    name: "Telur Ayam Kampung",
    description: "Telur ayam kampung asli, dipelihara secara alami — lebih sehat dan bergizi.",
    price: "Rp 3.000",
    unit: "Per Butir",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOQCLTWMSjba8p2DBGEd2yecH1Sil-waO4A5YmbhmhNhEwDJVmIfeASb7mZuAcD8fPl-lLeeZQNZNPe0qtAaqnQY46lwva6JOKJKs3KwCys8tzkGAaREzCAo7-cWOV8dlzksCRyuvhLCG3WIsC-V4lQ00N1Sywtau4jqsiLcPnmplic4t48zaVamLhzTasl271UaXKFq5WkBQrWy3vm4KxYwYknvvEHmc3iVlybCQbNg1URAXfB-1u8wq3ivlP4Zl58Bax0eOC_RoC",
    category: "Aneka Telur",
    is_best_seller: false,
    alt: "Telur ayam kampung asli dalam keranjang",
    sort_order: 2,
  },
  {
    name: "Telur Puyuh",
    description: "Kecil namun kaya nutrisi, cocok untuk aneka masakan dan camilan.",
    price: "Rp 35.000",
    unit: "Per Kg",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6TEdo8l1PE8dncbJdOBxm7IxVJVaEnab3tDdtLqgfhP2aR-WKP6VfJ-1ZXQ-MbT551sgiRgDJGZQ14etPkO4_XBdzdzM1DEGWL38lCrlWHJ6xDXChdWMhlsg4s9OoSvDEJdwwJ04pzIKGdJfYBWIiW0gCBb1TwRavhMDqb1lHXFVD2vZFvmCP-TRHZNOw7tgIW4KC3csuDNr5QBCnqdkm_5Cc_Rle-5gM06EEB9g-mMbRg33ITCZ7NCWzxpNd5GIaTXF39GK6mLG-",
    category: "Aneka Telur",
    is_best_seller: false,
    alt: "Telur puyuh kecil berbintik dalam mangkuk kayu",
    sort_order: 3,
  },
  {
    name: "Beras Premium 5kg",
    description: "Beras putih pulen berkualitas tinggi, bersih dan higienis untuk keluarga.",
    price: "Rp 70.000",
    unit: "Per 5kg",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCq0_6yXwmzzGeabWOlxSCZ5tg1M0O7INPsm0un5MGYEf_Rvac2XM8MeGBr7Jd1eelmQe7y74Fwf7h0sQIXjAc_FAc_eNR2z7vhtODwqO-bQjNEg_zb4wIIRRYhJIiCQAZ4KktFSIhm0HWeMk5lpoYj8M4W-bBcqk94S7BcKkBgP_iSugSsJ57f3wMZdGskou1juBBPwC0WqdB8oeLvmoZ_DXWdqohYbxhVvRvHEb5VQXc3VP0IbYdAnPfzPG5SbCBEGGZbXIqLcJF4",
    category: "Kebutuhan Dapur",
    is_best_seller: false,
    alt: "Beras premium putih berkualitas tinggi",
    sort_order: 4,
  },
  {
    name: "Minyak Goreng 2L",
    description: "Minyak goreng jernih, tahan panas dan rendah kolesterol untuk masakan sehat.",
    price: "Rp 38.000",
    unit: "Per 2L",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJeTQFSZJxQOCIFAXB9nG2OjIFwFuLVmBc_gkrW83VFnH7I6pglYIFMG5QFRo3BfoGesYBBpNB8HyT4nseH2jTQrmevSQLhBiT6h6s1glTXKVSrn17tzW5un6iRGP61RYGzqDmHZ90D_LO2oECyaFeKVn45eCXFVRuBxSAcQ7D7DQNxnYDcMq6F3UOIqABdqE3rdi8i-CWq4bMYsysBAlHqsLQjnpSlWbhax-Kkh3XvwbMx-QOFGGSoJOV-0r7b6H5KC8ZR2IIzQrK",
    category: "Kebutuhan Dapur",
    is_best_seller: false,
    alt: "Minyak goreng jernih dalam botol",
    sort_order: 5,
  },
  {
    name: "Gula Pasir 1kg",
    description: "Gula kristal putih manis alami, tanpa pemutih berbahaya — aman untuk sehari-hari.",
    price: "Rp 14.500",
    unit: "Per 1kg",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnnfyLhruw9KtD8aWBP2Blt6Jn2EompsMZmd-_oQR0Zpg3EW-3iHEz49YcrvwOZf0i8tuaH3vFm9EhvtwtJO71_G_xW5U6p9-UOPebyMwxiu6F0eAF4qIw5LmQxiV_j_zJmElnz7TrwyDej7IZ8pgalIjHVvix4fp3t657kX3XY_ZsDT6XAQrZntn5MZkVlu68ayys8rKVMictxTPgRr0iIxuZVdvRQwaMtpUoC1FOC5j5ng7foWeFDek2hvw2EyTgJVeq7p0cc8Ba",
    category: "Kebutuhan Dapur",
    is_best_seller: false,
    alt: "Gula pasir putih kristal dalam mangkuk",
    sort_order: 6,
  },
];

function cuid() {
  return "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
}

async function main() {
  await client.connect();
  console.log("Connected to database");

  // Clear existing
  await client.query("DELETE FROM products");
  console.log("Cleared existing products");

  // Insert all
  for (const p of products) {
    await client.query(
      `INSERT INTO products (id, name, description, price, unit, image, category, is_best_seller, alt, sort_order, is_active, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, true, NOW(), NOW())`,
      [cuid(), p.name, p.description, p.price, p.unit, p.image, p.category, p.is_best_seller, p.alt, p.sort_order]
    );
  }

  console.log(`✅ Seeded ${products.length} products`);
  await client.end();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
