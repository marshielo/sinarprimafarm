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

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background-light dark:bg-background-dark">
        <Hero />
        <ProductCatalog />
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
