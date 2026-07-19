import converseImage from "../../assets/brands/converse_card.png";
import kennerImage from "../../assets/brands/kenner_card.png";
import olympikusImage from "../../assets/brands/olympikus_card.png";

import "./BrandCarousel.css";

const brands = [
  {
    id: 1,
    name: "Converse",
    image: converseImage,
  },
  {
    id: 2,
    name: "Olympikus",
    image: olympikusImage,
  },
  {
    id: 3,
    name: "Kenner",
    image: kennerImage,
  },
  {
    id: 4,
    name: "Converse",
    image: converseImage,
  },
  {
    id: 5,
    name: "Converse",
    image: converseImage,
  },
];

function BrandCarousel() {
  return (
    <section className="brand_showcase" aria-label="Marcas em destaque">
      <div className="brand_carousel">
        {brands.map((brand) => (
          <article className="brand_card" key={brand.id}>
            <img
              src={brand.image}
              alt={brand.name}
              className="brand_card_image"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default BrandCarousel;
