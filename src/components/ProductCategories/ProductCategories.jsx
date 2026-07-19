import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import chinelosImage from "../../assets/categories/chinelos.png";
import tenisImage from "../../assets/categories/tenis.png";
import sapatenisImage from "../../assets/categories/sapatenis.png";
import treinoImage from "../../assets/categories/treino.png";
import sandaliaImage from "../../assets/categories/sandalia.png";
import mocassimImage from "../../assets/categories/mocassim.png";
import "./ProductCategories.css";

const categories = [
  {
    id: 1,
    name: "Chinelos",
    image: chinelosImage,
  },
  {
    id: 2,
    name: "Tênis",
    image: tenisImage,
  },
  {
    id: 3,
    name: "Sapatênis",
    image: sapatenisImage,
  },
  {
    id: 4,
    name: "Treino",
    image: treinoImage,
  },
  {
    id: 5,
    name: "Sandália",
    image: sandaliaImage,
  },
  {
    id: 6,
    name: "Mocassins",
    image: mocassimImage,
  },
];

function ProductCategories() {
  const carouselRef = useRef(null);

  function scrollCategories(direction) {
    carouselRef.current?.scrollBy({
      left: direction * 172,
      behavior: "smooth",
    });
  }

  return (
    <section className="product_categories">
      <h2 className="product_categories_title">NOSSOS PRODUTOS</h2>

      <div className="product_categories_wrapper">
        <div ref={carouselRef} className="product_categories_carousel">
          {categories.map((category) => (
            <article className="category_card" key={category.id}>
              <img
                src={category.image}
                alt={category.name}
                className="category_card_image"
              />
              <div className="category_card_gradient" />
              <button className="category_card_button">{category.name}</button>
            </article>
          ))}
        </div>

        <button
          className="category_arrow category_arrow_left"
          aria-label="Categorias anteriores"
          onClick={() => scrollCategories(-1)}
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </button>
        <button
          className="category_arrow category_arrow_right"
          aria-label="Próximas categorias"
          onClick={() => scrollCategories(1)}
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export default ProductCategories;
