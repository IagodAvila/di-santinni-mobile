import { useState } from "react";
import { House, ShoppingBag, CreditCard, UserRound } from "lucide-react";
import "./BottomNavigation.css";

const navigationItems = [
  { id: "home", label: "Início", icon: House },
  { id: "bag", label: "Sacola", icon: ShoppingBag },
  { id: "club", label: "Clube DS Mais", icon: null },
  { id: "card", label: "Cartão", icon: CreditCard },
  { id: "profile", label: "Perfil", icon: UserRound },
];

function BottomNavigation() {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <nav className="bottom_navigation" aria-label="Navegação principal">
      <div className="bottom_navigation_items">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`bottom_navigation_button ${
                isActive ? "bottom_navigation_button_active" : ""
              }`}
              aria-label={item.label}
              aria-pressed={isActive}
              onClick={() => setActiveItem(item.id)}
            >
              {item.id === "club" ? (
                <span className="bottom_navigation_ds_plus" aria-hidden="true">
                  <span className="bottom_navigation_ds_box">DS</span>

                  <span className="bottom_navigation_plus">+</span>
                </span>
              ) : (
                <Icon
                  size={item.id === "home" ? 23 : 21}
                  strokeWidth={1.4}
                  fill={
                    item.id === "home" && isActive ? "currentColor" : "none"
                  }
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="bottom_navigation_indicator" />
    </nav>
  );
}

export default BottomNavigation;
