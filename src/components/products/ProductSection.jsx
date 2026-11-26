
import ProductCard from "./ProductCard";
import { products } from "../../data/products.js";

function ProductSection() {
  return (
    <section className="product-section">
      <h1>Our Menu</h1>

      <div className="product-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
