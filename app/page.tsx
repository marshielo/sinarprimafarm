import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Footer } from "@/components/Footer";
import { AboutUs } from "@/components/AboutUs";
import { LocationSection } from "@/components/LocationSection";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full bg-background-light dark:bg-background-dark">
        <Navbar />
        <Hero />
        <Features />
        <ProductCatalog />
        <AboutUs />
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}
