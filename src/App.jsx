import { useEffect, useRef, useState } from "react";
import Header from "./components/header/header";
import HeroBanner from "./components/heroBanner/heroBanner";
import "./App.css";
import BenefitBar from "./components/BenefitBar/BenefitBar";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import SizeSelector from "./components/SizeSelector/SizeSelector";
import BrandCarousel from "./components/BrandCarousel/BrandCarousel";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";
import OurBrandsSection from "./components/OurBrandsSection/OurBrandsSection";
import NewSection from "./components/NewSection/NewSection";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";

function App() {
  const [cartCount, setCartCount] = useState(1);
  const [confirmation, setConfirmation] = useState("");
  const productsRef = useRef(null);
  const confirmationTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(confirmationTimerRef.current);
  }, []);

  function handleAddToCart(productName) {
    setCartCount((currentCount) => currentCount + 1);
    setConfirmation(`${productName} foi adicionado à sacola.`);

    clearTimeout(confirmationTimerRef.current);
    confirmationTimerRef.current = setTimeout(() => {
      setConfirmation("");
    }, 2800);
  }

  function scrollToProducts() {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="app">
      <div className="status_bar" aria-hidden="true" />

      <Header cartCount={cartCount} />

      <main>
        <h1 className="sr_only">
          Di Santinni — calçados, novidades e ofertas
        </h1>
        <HeroBanner onExplore={scrollToProducts} />
        <BenefitBar />
        <ProductCategories />
        <SizeSelector />
        <BrandCarousel />
        <ProductShowcase
          sectionRef={productsRef}
          onAddToCart={handleAddToCart}
        />
        <OurBrandsSection onAddToCart={handleAddToCart} />
        <NewSection onAddToCart={handleAddToCart} />
        <PromoBanner />
        <BottomNavigation />
      </main>

      {confirmation && (
        <div className="cart_confirmation" role="status" aria-live="polite">
          {confirmation}
        </div>
      )}
    </div>
  );
}

export default App;
