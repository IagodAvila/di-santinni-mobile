import { useState } from "react";
import { Heart } from "lucide-react";
import "./ProductCard.css";

function ProductCard({
  image,
  brand,
  name,
  discount,
  oldPrice,
  price,
  clubPrice,
  installments,
  variant = "compact",
  onAddToCart,
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const isLarge = variant === "large";

  return (
    <article className={`product_card product_card_${variant}`}>
      <div className="product_card_media">
        <span className="product_card_discount">{discount}</span>
        <button
          className="product_card_favorite"
          type="button"
          aria-label={
            isFavorite
              ? `Remover ${name} dos favoritos`
              : `Favoritar ${name}`
          }
          aria-pressed={isFavorite}
          onClick={() => setIsFavorite((favorite) => !favorite)}
        >
          <Heart
            size={isLarge ? 25 : 19}
            strokeWidth={1.7}
            color={isFavorite ? "#c8102e" : "currentColor"}
            fill={isFavorite ? "#c8102e" : "none"}
          />
        </button>

        <img className="product_card_image" src={image} alt={name} />
      </div>

      <div className="product_card_content">
        <p className="product_card_brand">{brand}</p>
        <h3 className="product_card_name">{name}</h3>

        <div className="product_card_prices">
          <span className="product_card_old_price">{oldPrice}</span>
          <strong className="product_card_price">{price}</strong>
        </div>

        <p className="product_card_club">
          <strong>{clubPrice}</strong>{" "}
          no Clube
        </p>

        <p className="product_card_installments">
          ou <strong>{installments}</strong> sem juros
        </p>

        <button
          className="product_card_buy"
          type="button"
          onClick={() => onAddToCart?.(name)}
        >
          COMPRAR AGORA
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
