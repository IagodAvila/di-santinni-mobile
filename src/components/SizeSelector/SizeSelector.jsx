import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SizeSelector.css";

function SizeSelector() {
  const [firstSize, setFirstSize] = useState(33);
  const [selectedSize, setSelectedSize] = useState(null);

  const size = Array.from({ length: 4 }, (_, index) => firstSize + index);

  function showPreviousSize() {
    setFirstSize((currentSize) => Math.max(20, currentSize - 1));
  }

  function showNextSize() {
    setFirstSize((currentSize) => Math.min(44, currentSize + 1));
  }

  return (
    <section className="size_selector">
      <h2 className="size_selector_title">COMPRE POR TAMANHO</h2>
      <div className="size_selector_controls">
        <button
          className="size_selector_arrow"
          aria-label="Ver tamanhos anteriores"
          onClick={showPreviousSize}
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </button>
        <div className="size_selector_options">
          {size.map((size) => (
            <button
              key={size}
              className={
                selectedSize === size
                  ? "size_option size_option_active"
                  : "size_option"
              }
              aria-pressed={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button
          className="size_selector_arrow"
          aria-label="Ver próximos tamanhos"
          onClick={showNextSize}
        >
          <ChevronRight size={16} strokeWidth={2} />
        </button>
      </div>
    </section>
  );
}

export default SizeSelector;
