import promoImg from "../../assets/final-promo.png";
import "./PromoBanner.css";

function PromoBanner() {
    return (
        <div className="promo_banner">
            <img className="promo_banner_image" src={promoImg} alt="Confira as novidades Di Santinni" />
        </div>
    );
}

export default PromoBanner;