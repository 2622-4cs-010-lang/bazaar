function BrownieCard() {
  const price = 450;

  return (
    <div className="product-card">
      <h2>Chocolate Brownies</h2>
      <p>Rich, fudgy homemade brownies.</p>

      <p>Rs {price}</p>
    </div>
  );
}

export default BrownieCard;