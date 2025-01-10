
import Header from "./components/header"
import Footer from "./components/footer"
import HeroSection from "./components/HeroSection";
import ProductCarousel from "./components/ProductCarousel";
import FeatureSection from "./components/FeatureSection";
import CategoryCarousel from "./components/CategoryCarousel";
import EssentialsSection from "./components/EssentialsSection";
export default function Home() {
  return (
    <div>
  <Header/>
  <HeroSection />
      <ProductCarousel />
      <FeatureSection />
      <CategoryCarousel />
      <EssentialsSection />
  <Footer/>
    </div>
  );
}
