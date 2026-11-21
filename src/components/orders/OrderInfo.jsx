function OrderInfo() {
  const quantity = 5;
  const price = 450;
  const delivery = 100;

  const total = quantity * price + delivery;

  return (
    <section className="order-info">
      <h2>Your Order</h2>

      <p>Chocolate Brownies × {quantity}</p>
      <p>Price: Rs {price}</p>
      <p>Delivery: Rs {delivery}</p>

      <h3>Total: Rs {total}</h3>

      <button>Place Order</button>
    </section>
  );
}

export default OrderInfo;