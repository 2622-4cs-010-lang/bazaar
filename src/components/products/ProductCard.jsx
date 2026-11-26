
function ProductCard({ name, price, inStock, left }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Rs. {price}</p>

      {!inStock && <span className="badge">Sold out</span>}

      {inStock ? (
        <button>Add to box</button>
      ) : (
        <button disabled>Unavailable</button>
      )}

      {inStock && left < 5 && (
        <p>Only {left} left!</p>
      )}
    </div>
  );
}

export default ProductCard;
