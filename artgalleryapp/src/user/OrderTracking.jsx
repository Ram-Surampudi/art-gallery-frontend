import React from "react";
// import "../css/OrderTracking.css";

const OrderTracking = () => {
  // Example data (can be replaced with API calls)
  const order = {
    id: "OD432858654650103100",
    product: {
      name: "F FERONS Wireless rechargeable portable Premium bass Multimedia",
      image: "https://via.placeholder.com/50", // Replace with real product image
      price: 402,
      color: "Black",
      seller: "LICORD",
    },
    status: [
      { step: "Order Confirmed", date: "Today", description: "Your order has been placed." },
      { step: "Shipped", date: "Nov 16", description: "Expected by Nov 16." },
      { step: "Out For Delivery", date: "", description: "" },
      { step: "Delivery", date: "Nov 18", description: "By 11 PM." },
    ],
  };

  return (
    <div className="order-tracking">
      {/* Order Details */}
      <section className="order-details">
        <h2>Order Details</h2>
        <div className="product">
          <img src={order.product.image} alt="Product" />
          <div>
            <p>{order.product.name}</p>
            <p>
              <strong>₹{order.product.price}</strong>
            </p>
            <p>Color: {order.product.color}</p>
            <p>Seller: {order.product.seller}</p>
          </div>
        </div>
        <p>Order ID: {order.id}</p>
      </section>

      {/* Order Progress */}
      <section className="order-progress">
        <h3>Order Status</h3>
        <ul>
          {order.status.map((step, index) => (
            <li key={index} className={step.date ? "completed" : ""}>
              <div>
                <span>{step.step}</span>
                {step.date && <span>{step.date}</span>}
              </div>
              {step.description && <p>{step.description}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <section className="actions">
        <button className="btn btn-danger">Cancel Order</button>
        <button className="btn btn-warning">Change Address</button>
      </section>
    </div>
  );
};

export default OrderTracking;
