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
import Cart from "./components/Cart/Cart";
import mizunoImage from "./assets/products/mizuno-wave.png";

let nextCartItemId = 2;

function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Tênis Mizuno Wave Endeavor 3",
      price: "R$ 499,90",
      image: mizunoImage,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const productsRef = useRef(null);
  const cartRef = useRef(null);
  const confirmationTimerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(confirmationTimerRef.current);
  }, []);

  function showMessage(message) {
    setConfirmation(message);

    clearTimeout(confirmationTimerRef.current);
    confirmationTimerRef.current = setTimeout(() => {
      setConfirmation("");
    }, 2800);
  }

  function handleNavigate(item) {
    if (item.id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.id === "bag") {
      cartRef.current?.showModal();
    } else {
      showMessage(`${item.label} estará disponível em breve.`);
    }
  }

  function handleAddToCart(product) {
    setCartItems((items) => [...items, { ...product, id: nextCartItemId++ }]);
    showMessage(`${product.name} foi adicionado à sacola.`);
  }

  function handleRemoveFromCart(itemId) {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  }

  function scrollToProducts() {
    productsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="app">
      <div className="status_bar" aria-hidden="true" />

      <Header
        cartCount={cartItems.length}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onSearchSubmit={scrollToProducts}
        onOpenCart={() => cartRef.current?.showModal()}
      />

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
          searchTerm={searchTerm}
          onAddToCart={handleAddToCart}
        />
        <OurBrandsSection onAddToCart={handleAddToCart} />
        <NewSection onAddToCart={handleAddToCart} />
        <PromoBanner />
        <BottomNavigation onNavigate={handleNavigate} />
      </main>

      <Cart ref={cartRef} items={cartItems} onRemove={handleRemoveFromCart} />

      {confirmation && (
        <div className="cart_confirmation" role="status" aria-live="polite">
          {confirmation}
        </div>
      )}
    </div>
  );
}

export default App;
