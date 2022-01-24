import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div class="card h-100 m-auto border-dark">
      <div className="text-center">
        <img src={image} class="card-img-top productimg" alt="..." />
      </div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <h6>
          <small>Rs - </small>
          <strong>{price}</strong>
        </h6>
      </div>
      <div class=" text-center">
        <button
          class="btn btn-secondary w-100 bg-dark"
          onClick={addToBasket}
          style={{ color: "#cd9042" }}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
