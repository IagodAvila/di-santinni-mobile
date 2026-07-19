import { useState } from "react";
import brandsBanner from "../../assets/our-brands-banner.png";
import "./OurBrandsSection.css";
import ProductCard from "../ProductCard/ProductCard";
import mizunoImage from "../../assets/products/mizuno-wave.png";

const brands = ["Mizuno", "Adidas", "Olympikus", "Fila", "Kenner", "Redley"];

const brandProductsByBrand = Object.fromEntries(
  brands.map((brand, brandIndex) => [
    brand,
    [
      {
        id: `${brand.toLowerCase()}-1`,
        image: mizunoImage,
        brand,
        name: `Tênis ${brand} Performance ${brandIndex + 1}`,
        discount: `-${10 + brandIndex * 2}%`,
        oldPrice: `R$ ${699 + brandIndex * 50},90`,
        price: `R$ ${549 + brandIndex * 40},90`,
        clubPrice: `R$ ${519 + brandIndex * 40},90`,
        installments: `5x de R$ ${110 + brandIndex * 8},00`,
      },
      {
        id: `${brand.toLowerCase()}-2`,
        image: mizunoImage,
        brand,
        name: `Tênis ${brand} Urban ${brandIndex + 2}`,
        discount: `-${15 + brandIndex}%`,
        oldPrice: `R$ ${599 + brandIndex * 45},90`,
        price: `R$ ${469 + brandIndex * 35},90`,
        clubPrice: `R$ ${439 + brandIndex * 35},90`,
        installments: `4x de R$ ${117 + brandIndex * 9},00`,
      },
    ],
  ]),
);

function OurBrandsSection({ onAddToCart }) {
  const [activeBrand, setActiveBrand] = useState("Mizuno");
  const brandProducts = brandProductsByBrand[activeBrand];

  return (
    <section className="our_brands">
      <h2 className="our_brands_title">NOSSAS MARCAS</h2>

      <div className="our_brands_tabs" role="tablist" aria-label="Marcas">
        <div className="our_brands_tabs_track">
          {brands.map((brand) => (
            <button
              key={brand}
              className={
                activeBrand === brand
                  ? "our_brands_tab our_brands_tab_active"
                  : "our_brands_tab"
              }
              type="button"
              role="tab"
              aria-selected={activeBrand === brand}
              onClick={() => setActiveBrand(brand)}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <img
        className="our_brands_banner"
        src={brandsBanner}
        alt={`Coleção ${activeBrand}`}
      />

      <div className="our_brands_products">
        {brandProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            variant="large"
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default OurBrandsSection;
