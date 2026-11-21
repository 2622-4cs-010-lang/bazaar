import Badge from "./Badge";

function RollCard() {
  const price = 350;

  return (
    <div className="product-card">
      <h2>Cinnamon Rolls</h2>
      <p>Soft rolls with sweet cinnamon.</p>

      <p>Rs {price}</p>

      <Badge />
    </div>
  );
}

export default RollCard;