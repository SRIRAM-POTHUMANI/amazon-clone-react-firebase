import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="border-bottom m-2 flex-nowrap">
      <div class=" col-md-4">
        <img src={image} class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <p>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
