import { useRef, useState } from "react";
import heroImage from "../../assets/hero_banner.png";
import brandsBanner from "../../assets/our-brands-banner.png";
import promoImage from "../../assets/final-promo.png";
import "./heroBanner.css";

const slides = [
  {
    id: 1,
    image: heroImage,
    alt: "Coleção Di Santinni",
    oldPrice: "R$ 799,00",
    discount: "20% OFF",
    price: "R$ 350,00",
    position: "center",
  },
  {
    id: 2,
    image: brandsBanner,
    alt: "Seleção das principais marcas",
    oldPrice: "R$ 649,90",
    discount: "15% OFF",
    price: "R$ 549,90",
    position: "center",
  },
  {
    id: 3,
    image: promoImage,
    alt: "Novidades e ofertas Di Santinni",
    oldPrice: "R$ 499,90",
    discount: "30% OFF",
    price: "R$ 349,90",
    position: "center",
  },
];

function HeroBanner({ onExplore }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartXRef = useRef(null);
  const slide = slides[activeSlide];

  function changeSlide(direction) {
    setActiveSlide(
      (currentSlide) =>
        (currentSlide + direction + slides.length) % slides.length,
    );
  }

  function handleTouchStart(event) {
    touchStartXRef.current = event.changedTouches[0].clientX;
  }

  function handleTouchEnd(event) {
    if (touchStartXRef.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartXRef.current;

    if (Math.abs(distance) > 40) {
      changeSlide(distance < 0 ? 1 : -1);
    }

    touchStartXRef.current = null;
  }

  return (
    <section
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={() => {
        touchStartXRef.current = null;
      }}
    >
      <img
        key={slide.id}
        className="hero_image"
        src={slide.image}
        alt={slide.alt}
        style={{ objectPosition: slide.position }}
        draggable="false"
      />

      <div className="hero_offer">
        <div className="hero_offer_top">
          <span className="hero_old_price">{slide.oldPrice}</span>
          <span className="hero_discount">{slide.discount}</span>
        </div>

        <strong className="hero_price">{slide.price}</strong>
      </div>

      <button className="hero_button" type="button" onClick={onExplore}>
        CONFIRA
      </button>

      <div
        className="hero_dots"
        role="group"
        aria-label={`Slide ${activeSlide + 1} de ${slides.length}`}
      >
        {slides.map((item, index) => (
          <button
            key={item.id}
            className={
              index === activeSlide ? "hero_dot hero_dot_active" : "hero_dot"
            }
            type="button"
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;
