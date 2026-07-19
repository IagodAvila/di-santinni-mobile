import { useRef } from "react";
import { ChevronRight } from "lucide-react";

import ProductCard from "../ProductCard/ProductCard";
import mizunoImage from "../../assets/products/mizuno-wave.png";
import "./NewSection.css";

const newProducts = [
  {
    id: 1,
    image: mizunoImage,
    brand: "Mizuno",
    name: "Tênis Mizuno Wave Endeavor 3",
    discount: "-20%",
    oldPrice: "R$ 799,00",
    price: "R$ 499,90",
    clubPrice: "R$ 399,00",
    installments: "5x de R$ 100,00",
  },
  {
    id: 2,
    image: mizunoImage,
    brand: "Mizuno",
    name: "Tênis Mizuno Wave Endeavor 3",
    discount: "-20%",
    oldPrice: "R$ 799,00",
    price: "R$ 499,90",
    clubPrice: "R$ 399,00",
    installments: "5x de R$ 100,00",
  },
  {
    id: 3,
    image: mizunoImage,
    brand: "Mizuno",
    name: "Tênis Mizuno Wave Endeavor 3",
    discount: "-20%",
    oldPrice: "R$ 799,00",
    price: "R$ 499,90",
    clubPrice: "R$ 399,00",
    installments: "5x de R$ 100,00",
  },
];

function NewSection({ onAddToCart }) {
  const carouselRef = useRef(null);

  function showNextProduct() {
    carouselRef.current?.scrollBy({
      left: 238,
      behavior: "smooth",
    });
  }

  return (
    <section className="news_section">
      <h2 className="news_section_title">NOVIDADES</h2>

      <div className="news_carousel_wrapper">
        <div className="news_carousel" ref={carouselRef}>
          {newProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              variant="large"
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <button
          className="news_carousel_arrow"
          aria-label="Ver próximos produtos"
          onClick={showNextProduct}
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export default NewSection;
