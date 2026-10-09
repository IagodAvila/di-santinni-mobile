import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import mizunoImage from "../../assets/products/mizuno-wave.png";
import "./ProductShowcase.css";

const tabs = [
  "Masculino",
  "Feminino",
  "Infantil",
  "Baby",
  "Lançamentos",
  "Favoritos",
];

const productsByTab = {
  Masculino: [
    {
      id: "masculino-1",
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
      id: "masculino-2",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Wave Endeavor 3",
      discount: "-20%",
      oldPrice: "R$ 799,00",
      price: "R$ 499,90",
      clubPrice: "R$ 399,00",
      installments: "5x de R$ 100,00",
    },
  ],
  Feminino: [
    {
      id: "feminino-1",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Wave Mirai 6 Feminino",
      discount: "-18%",
      oldPrice: "R$ 699,90",
      price: "R$ 569,90",
      clubPrice: "R$ 539,90",
      installments: "5x de R$ 113,98",
    },
    {
      id: "feminino-2",
      image: mizunoImage,
      brand: "Fila",
      name: "Tênis Fila Racer Speedzone",
      discount: "-12%",
      oldPrice: "R$ 499,90",
      price: "R$ 439,90",
      clubPrice: "R$ 409,90",
      installments: "4x de R$ 109,98",
    },
  ],
  Infantil: [
    {
      id: "infantil-1",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Space Infantil",
      discount: "-25%",
      oldPrice: "R$ 399,90",
      price: "R$ 299,90",
      clubPrice: "R$ 279,90",
      installments: "3x de R$ 99,97",
    },
    {
      id: "infantil-2",
      image: mizunoImage,
      brand: "Adidas",
      name: "Tênis Adidas Runfalcon Infantil",
      discount: "-10%",
      oldPrice: "R$ 349,90",
      price: "R$ 314,90",
      clubPrice: "R$ 299,90",
      installments: "3x de R$ 104,97",
    },
  ],
  Baby: [
    {
      id: "baby-1",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Cometa Baby",
      discount: "-20%",
      oldPrice: "R$ 249,90",
      price: "R$ 199,90",
      clubPrice: "R$ 179,90",
      installments: "2x de R$ 99,95",
    },
    {
      id: "baby-2",
      image: mizunoImage,
      brand: "Olympikus",
      name: "Tênis Olympikus Mini Baby",
      discount: "-15%",
      oldPrice: "R$ 219,90",
      price: "R$ 186,90",
      clubPrice: "R$ 169,90",
      installments: "2x de R$ 93,45",
    },
  ],
  Lançamentos: [
    {
      id: "lancamento-1",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Wave Creation 26",
      discount: "-5%",
      oldPrice: "R$ 1.099,90",
      price: "R$ 1.044,90",
      clubPrice: "R$ 999,90",
      installments: "10x de R$ 104,49",
    },
    {
      id: "lancamento-2",
      image: mizunoImage,
      brand: "Fila",
      name: "Tênis Fila Float Maxxi 2",
      discount: "-8%",
      oldPrice: "R$ 799,90",
      price: "R$ 735,90",
      clubPrice: "R$ 699,90",
      installments: "7x de R$ 105,13",
    },
  ],
  Favoritos: [
    {
      id: "favorito-1",
      image: mizunoImage,
      brand: "Mizuno",
      name: "Tênis Mizuno Wave Rider 28",
      discount: "-20%",
      oldPrice: "R$ 999,90",
      price: "R$ 799,90",
      clubPrice: "R$ 759,90",
      installments: "8x de R$ 99,99",
    },
    {
      id: "favorito-2",
      image: mizunoImage,
      brand: "Adidas",
      name: "Tênis Adidas Duramo Speed",
      discount: "-15%",
      oldPrice: "R$ 599,90",
      price: "R$ 509,90",
      clubPrice: "R$ 479,90",
      installments: "5x de R$ 101,98",
    },
  ],
};

const allProducts = Object.values(productsByTab).flat();

function normalize(text) {
  return text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function ProductShowcase({ sectionRef, searchTerm = "", onAddToCart }) {
  const [selectedTab, setSelectedTab] = useState("Masculino");
  const query = normalize(searchTerm.trim());
  const products = query
    ? allProducts.filter((product) =>
        normalize(`${product.brand} ${product.name}`).includes(query),
      )
    : productsByTab[selectedTab];

  return (
    <section className="product_showcase" ref={sectionRef}>
      {query ? (
        <p className="product_search_summary" role="status">
          {products.length} resultado(s) para “{searchTerm.trim()}”
        </p>
      ) : (
      <div
        className="product_tabs"
        role="tablist"
        aria-label="Categorias de produtos"
      >
        <div className="product_tabs_track">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={
                selectedTab === tab
                  ? "product_tab product_tab_active"
                  : "product_tab"
              }
              role="tab"
              aria-selected={selectedTab === tab}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      )}

      <div className="product_showcase_content">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
