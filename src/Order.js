import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div class="corders card mb-3 flex-wrap">
      <div className="card-header">
        <p>
          Order ID - <small>{order.id}</small>
        </p>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      </div>

      <div class="row g-2 p2 m-2 flex-wrap">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>
      <div className="card-footer text-end">
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs. "}
        />
      </div>
    </div>
  );
}

export default Order;
