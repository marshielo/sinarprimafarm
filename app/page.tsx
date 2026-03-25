import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Standards } from "@/components/Standards";
import { AboutUs } from "@/components/AboutUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { LocationSection } from "@/components/LocationSection";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { getProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export default function Home() {
  const products = getProducts();

  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background-light dark:bg-background-dark">
        <Hero />
        <ProductCatalog products={products} />
        <Standards />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <LocationSection />
        <CTABanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
