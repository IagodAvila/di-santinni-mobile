import { useEffect, useRef, useState } from "react";
import { Search, ShoppingBag, X } from "lucide-react";
import logoDiSantinni from "../../assets/di_santinni_logo.png";
import "./header.css";

function Header({ cartCount }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  return (
    <header className="header">
      <button
        className="header_button"
        type="button"
        aria-label={isSearchOpen ? "Fechar pesquisa" : "Pesquisar"}
        aria-expanded={isSearchOpen}
        aria-controls="mobile-search"
        onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
      >
        <Search size={20} strokeWidth={1.4} />
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
      >
        <ShoppingBag size={20} strokeWidth={1.4} />

        <span className="header_badge" aria-label={`${cartCount} itens`}>
          {cartCount}
        </span>
      </button>

      {isSearchOpen && (
        <form
          id="mobile-search"
          className="header_search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search size={18} strokeWidth={1.6} aria-hidden="true" />
          <input
            ref={searchInputRef}
            type="search"
            value={searchTerm}
            placeholder="O que você está procurando?"
            aria-label="Buscar produtos"
            onChange={(event) => setSearchTerm(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setIsSearchOpen(false);
            }}
          />
          <button
            className="header_search_close"
            type="button"
            aria-label="Fechar pesquisa"
            onClick={() => setIsSearchOpen(false)}
          >
            <X size={18} strokeWidth={1.6} />
          </button>
        </form>
      )}
    </header>
  );
}

export default Header;
