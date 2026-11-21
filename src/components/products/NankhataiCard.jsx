import Badge from "./Badge";

function NankhataiCard() {
  const price = 250;

  return (
    <div className="product-card">
      <h2>Nankhatai</h2>
      <p>Traditional buttery biscuits.</p>

      <p>Rs {price}</p>

      <Badge />
    </div>
  );
}

export default NankhataiCard;