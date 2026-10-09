import { Trash2, X } from "lucide-react";
import "./Cart.css";

function parsePrice(price) {
  return Number(price.replace(/[^\d,]/g, "").replace(",", "."));
}

function Cart({ ref, items, onRemove }) {
  const total = items.reduce((sum, item) => sum + parsePrice(item.price), 0);

  return (
    <dialog
      ref={ref}
      className="cart"
      aria-labelledby="cart-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
    >
      <div className="cart_panel">
        <header className="cart_header">
          <h2 id="cart-title" className="cart_title">
            SACOLA
          </h2>
          <button
            className="cart_icon_button"
            type="button"
            aria-label="Fechar sacola"
            onClick={() => ref.current?.close()}
          >
            <X size={20} strokeWidth={1.6} />
          </button>
        </header>

        {items.length === 0 ? (
          <p className="cart_empty">Sua sacola está vazia.</p>
        ) : (
          <>
            <ul className="cart_items">
              {items.map((item) => (
                <li key={item.id} className="cart_item">
                  <img className="cart_item_image" src={item.image} alt="" />
                  <div className="cart_item_info">
                    <p className="cart_item_name">{item.name}</p>
                    <strong className="cart_item_price">{item.price}</strong>
                  </div>
                  <button
                    className="cart_icon_button"
                    type="button"
                    aria-label={`Remover ${item.name} da sacola`}
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2 size={16} strokeWidth={1.6} />
                  </button>
                </li>
              ))}
            </ul>

            <p className="cart_total">
              Total
              <strong>
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
            </p>
          </>
        )}
      </div>
    </dialog>
  );
}

export default Cart;
