import BrownieCard from "./BrownieCard";
import NankhataiCard from "./NankhataiCard";
import RollCard from "./RollCard";

function ProductSection() {
  return (
    <section className="product-section">
      <h1>Our Menu</h1>

      <div className="product-row">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}

export default ProductSection;