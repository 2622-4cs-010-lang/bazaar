function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">

      <h3>{name}</h3>

      <p>Rs. {price}</p>
    </div>
  );
}

export default ProductCard;