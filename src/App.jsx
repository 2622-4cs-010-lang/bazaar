
import ShopHeader from "./components/layout/ShopHeader";
import ProductSection from "./components/products/ProductSection";
import ReviewSection from "./components/reviews/ReviewSection";
import OrderInfo from "./components/orders/OrderInfo";
import CartSummary from "./components/orders/CartSummary";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="page">
      <ShopHeader />

      <ProductSection />

      <ReviewSection />

      <OrderInfo />

      <CartSummary />

      <Footer />
    </div>
  );
}

export default App;
