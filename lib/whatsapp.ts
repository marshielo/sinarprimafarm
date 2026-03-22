import { SITE_INFO } from "./siteInfo";

const WA_PHONE = SITE_INFO.contact.whatsapp;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getProductOrderUrl(productName: string, productPrice: string): string {
  const message = `Halo ${SITE_INFO.company.name}! 👋

Saya tertarik dengan produk berikut:
📦 Produk: ${productName}
💰 Harga: ${productPrice}

Saya ingin berkonsultasi tentang ketersediaan dan pemesanan produk ini.

Terima kasih! 🙏`;
  return getWhatsAppUrl(message);
}

export function getGeneralInquiryUrl(): string {
  const message = `Halo ${SITE_INFO.company.name}! 👋

Saya ingin berkonsultasi tentang produk dan layanan yang tersedia.

Terima kasih! 🙏`;
  return getWhatsAppUrl(message);
}
