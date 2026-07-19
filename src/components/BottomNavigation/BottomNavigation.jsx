import { useState } from "react";
import { House, ShoppingBag, Ticket, Menu, UserRound } from "lucide-react";
import "./BottomNavigation.css";

const navigationItems = [
  { id: "home", label: "Início", icon: House },
  { id: "bag", label: "Sacola", icon: ShoppingBag },
  { id: "coupon", label: "Cupons", icon: Ticket },
  { id: "menu", label: "Menu", icon: Menu },
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
              onClick={() => setActiveItem(item.id)}
            >
              <Icon
                size={24}
                strokeWidth={1.7}
                fill={item.id === "home" && isActive ? "currentColor" : "none"}
              />
            </button>
          );
        })}
      </div>

      <div className="bottom_navigation_indicator" />
    </nav>
  );
}

export default BottomNavigation;
