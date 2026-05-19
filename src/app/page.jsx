import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SearchFilter from "@/components/sections/SearchFilter";
import Categories from "@/components/sections/Categories";
import BestPlatform from "@/components/sections/BestPlatform";
import PopularCars from "@/components/sections/PopularCars";
import Steps from "@/components/sections/Steps";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <Hero />
      <SearchFilter />
      <Categories />
      <BestPlatform />
      <PopularCars />
      <Steps />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
