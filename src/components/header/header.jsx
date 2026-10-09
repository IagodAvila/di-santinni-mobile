import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import logoDiSantinni from "../../assets/di_santinni_logo.png";
import searchIcon from "../../assets/search_icon.svg";
import shoppingCartIcon from "../../assets/shopping_cart.svg";
import "./header.css";

function Header({
  cartCount,
  searchTerm,
  onSearchChange,
  onSearchSubmit,
  onOpenCart,
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  function closeSearch() {
    setIsSearchOpen(false);
    onSearchChange("");
  }

  return (
    <header className="header">
      <button
        className="header_button"
        type="button"
        aria-label={isSearchOpen ? "Fechar pesquisa" : "Pesquisar"}
        aria-expanded={isSearchOpen}
        aria-controls="mobile-search"
        onClick={() => (isSearchOpen ? closeSearch() : setIsSearchOpen(true))}
      >
        <img className="header_icon" src={searchIcon} alt="" />
      </button>

      <img
        className="header_logo"
        src={logoDiSantinni}
        alt="Di Santinni"
      />

      <button
        className="header_button header_cart"
        type="button"
        aria-label="Abrir sacola de compras"
        onClick={onOpenCart}
      >
        <img className="header_icon" src={shoppingCartIcon} alt="" />

        <span className="header_badge" aria-label={`${cartCount} itens`}>
          {cartCount}
        </span>
      </button>

      {isSearchOpen && (
        <form
          id="mobile-search"
          className="header_search"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            searchInputRef.current?.blur();
            onSearchSubmit();
          }}
        >
          <img className="header_search_icon" src={searchIcon} alt="" />
          <input
            ref={searchInputRef}
            type="search"
            value={searchTerm}
            placeholder="O que você está procurando?"
            aria-label="Buscar produtos"
            onChange={(event) => onSearchChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") closeSearch();
            }}
          />
          <button
            className="header_search_close"
            type="button"
            aria-label="Fechar pesquisa"
            onClick={closeSearch}
          >
            <X size={18} strokeWidth={1.6} />
          </button>
        </form>
      )}
    </header>
  );
}

export default Header;
