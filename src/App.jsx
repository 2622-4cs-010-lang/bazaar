import ShopHeader from "./components/layout/ShopHeader";
import ProductCard from "./components/products/ProductCard";
import ReviewCard from "./components/reviews/ReviewCard";
import OrderInfo from "./components/orders/OrderInfo";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="page">
      <ShopHeader />

      <section className="product-section" id="menu">
        <h2>Fresh from the oven</h2>
        <div className="product-row">
          <ProductCard
            badge="Bestseller"
            name="Chocolate Brownies"
            description="Box of 6, fudgy and wet"
            price="450"
          />
          <ProductCard
            badge="New"
            name="Nankhatai Box"
            description="Box of 12, cardamom flavor"
            price="350"
          />
          <ProductCard
            badge="Bestseller"
            name="Cinnamon Rolls"
            description="Box of 4, with cream cheese"
            price="500"
          />
        </div>
      </section>

      <section className="review-section" id="reviews">
        <h2>What students say</h2>
        <div className="review-row">
          <ReviewCard
            name="Sara A."
            review="Best brownies on campus, I ordered twice in one week!"
            rating={5}
          />
          <ReviewCard
            name="Hira M."
            review="The nankhatai tasted just like my grandmother's."
            rating={5}
          />
        </div>
      </section>

      <OrderInfo />
      <Footer />
    </div>
  );
}

export default App;