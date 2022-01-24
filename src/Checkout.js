import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt="ad"
        className="checkout_ad"
      />
      <h3>Hello, {user?.email}</h3>
      <div className="d-flex justify-content-start combined gap-5  mt-5">
        <div className="subtotalc ">
          <Subtotal />
        </div>
        <div class="corders card mb-3 text-start" style={{ maxWidth: "740px" }}>
          <h2 className="card-header">Your Shopping basket</h2>
          <div class="row g-2 p2 m-2">
            {basket.map((item) => (
              <CheckoutProduct
                className="card"
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
