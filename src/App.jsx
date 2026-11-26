

import ShopHeader from "./components/layout/ShopHeader";
import ProductSection from "./components/products/ProductSection";
import ReviewCard from "./components/reviews/ReviewCard";
import OrderInfo from "./components/orders/OrderInfo";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="page">
      <ShopHeader />

      <ProductSection />

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

